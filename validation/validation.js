function check(node, data) {
  const required = node.required;
  const properties = node.properties;

  if (required) {
    for (const field of required) {
      if (!(field in data)) return false;
    }
  }

  if (properties) {
    for (const field in properties) {
      const subNode = properties[field];

      const contains = subNode.contains;
      const items = subNode.items;
      const enums = subNode.enum;

      const value = data[field];

      if (contains) {
        if (Array.isArray(value)) {
          const nestedCheck = value.every((valueObj) =>
            check(contains, valueObj)
          );
          if (!nestedCheck) return false;
        } else if (typeof value === 'object' && value !== null) {
          return check(contains, value);
        } else {
          return false;
        }
      }

      if (items) {
        const nestedCheck = value.every((valueObj) => check(items, valueObj));
        if (!nestedCheck) return false;
      }

      if (enums) {
        if (Array.isArray(value)) {
          const hasEnumValue = value.some((valueObj) =>
            enums.includes(valueObj[field])
          );

          if (!hasEnumValue) return false;
        } else if (typeof value === 'object' && value !== null) {
          return enums.includes(value[field]);
        } else {
          return enums.includes(value);
        }
      }
    }
  }

  if (node.anyOf) return node.anyOf.some((cond) => check(cond, data));

  if (node.allOf) return node.allOf.every((cond) => check(cond, data));

  if (node.not) return !check(node.not, data);

  return true;
}

const formatPath = (path) => path.reverse().join(' -> ');

const getRequiredProperties = (node, currentPath = [], insideNot = false) => {
  const required = [];
  const notRequired = [];

  // Recurse into properties
  if (node.properties && typeof node.properties === 'object') {
    for (const [propName, propSchema] of Object.entries(node.properties)) {
      if (typeof propSchema === 'object' && propSchema !== null) {
        const subResult = getRequiredProperties(
          propSchema,
          [propName, ...currentPath],
          insideNot
        );
        required.push(...subResult.required);
        notRequired.push(...subResult.notRequired);
      }
    }
  }

  // Recurse into items
  if (node.items && typeof node.items === 'object' && node.items !== null) {
    const subResult = getRequiredProperties(node.items, currentPath, insideNot);
    required.push(...subResult.required);
    notRequired.push(...subResult.notRequired);
  }

  // Recurse into 'not'
  if (node.not && typeof node.not === 'object' && node.not !== null) {
    const subResult = getRequiredProperties(node.not, currentPath, true);
    required.push(...subResult.required);
    notRequired.push(...subResult.notRequired);
  }

  // Now, handle required fields at this level — but only if they are LEAVES
  if (Array.isArray(node.required)) {
    for (const fieldName of node.required) {
      // Check if this field has a schema that makes it a container
      const fieldSchema = node.properties?.[fieldName];

      const isContainer =
        fieldSchema &&
        (fieldSchema.properties ||
          (fieldSchema.items && typeof fieldSchema.items === 'object'));

      // Only add if it's NOT a container (i.e., leaf field)
      if (!isContainer) {
        const pathStr = formatPath([fieldName, ...currentPath]);
        if (insideNot) {
          notRequired.push(pathStr);
        } else {
          required.push(pathStr);
        }
      }
      // If it is a container, its required children will be added via recursion above
    }
  }

  return { required, notRequired };
};

function removeNestedFields(payload, fieldPaths) {
  for (const path of fieldPaths) {
    const keys = path
      .split(' -> ')
      .map((k) => k.trim())
      .filter(Boolean);
    if (keys.length === 0) continue;
    removeAtPath(payload, keys);
  }
  return payload;
}

function removeAtPath(obj, keys) {
  if (keys.length === 0) return;
  const [currentKey, ...restKeys] = keys;
  if (!(currentKey in obj)) return;
  const currentValue = obj[currentKey];
  if (restKeys.length === 0) {
    delete obj[currentKey];
    return;
  }
  if (Array.isArray(currentValue)) {
    currentValue.forEach((item) => {
      if (item && typeof item === 'object') {
        removeAtPath(item, restKeys);
      }
    });
  } else if (currentValue && typeof currentValue === 'object') {
    removeAtPath(currentValue, restKeys);
  }
}

// --- NEW Recursive Pruning ---
function isMeaningful(value) {
  if (value == null) return false;
  if (Array.isArray(value)) {
    return value.some((item) => isMeaningful(item));
  }
  if (typeof value === 'object') {
    return !Object.keys(value).every((key) =>
      ['marketplace_id', 'language_tag'].includes(key)
    );
  }
  return true; // primitives are meaningful
}

function pruneRecursivelyMutate(obj) {
  if (obj == null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    // Clean items in-place and remove non-meaningful ones
    for (let i = obj.length - 1; i >= 0; i--) {
      pruneRecursivelyMutate(obj[i]);
      if (!isMeaningful(obj[i])) {
        obj.splice(i, 1); // remove non-meaningful item
      }
    }
    return obj;
  }

  // Object: delete non-meaningful keys
  for (const key of Object.keys(obj)) {
    pruneRecursivelyMutate(obj[key]);
    if (!isMeaningful(obj[key])) {
      delete obj[key];
    }
  }
  return obj;
}

function cleanPayload(payload, hiddenFieldPaths) {
  removeNestedFields(payload, hiddenFieldPaths); // now mutates directly
  pruneRecursivelyMutate(payload); // mutates in-place
}

function extractEnums(node, currentPath = []) {
  const enums = {};

  if (node.enum && Array.isArray(node.enum)) {
    const pathStr =
      currentPath.length > 0 ? currentPath.reverse().join(' -> ') : null;
    if (pathStr) {
      enums[pathStr] = node.enum;
    }
  }

  if (node.properties && typeof node.properties === 'object') {
    for (const [propName, propSchema] of Object.entries(node.properties)) {
      if (propSchema && typeof propSchema === 'object') {
        const childEnums = extractEnums(propSchema, [propName, ...currentPath]);
        Object.assign(enums, childEnums);
      }
    }
  }

  if (node.items && typeof node.items === 'object') {
    const childEnums = extractEnums(node.items, currentPath);
    Object.assign(enums, childEnums);
  }

  return enums;
}

function validator(rules, keys, payload) {
  const requiredFields = {};
  const hiddenFields = {};
  const allowedEnums = {};

  const clonedPayload = JSON.parse(JSON.stringify(payload));

  function processRule(rule, branchName, isMatchedBranch = true) {
    if (!rule || typeof rule !== 'object') return;

    const chunks = rule.allOf ? rule.allOf : [rule];

    for (const chunk of chunks) {
      if (chunk.if) {
        const conditionMet = check(chunk.if, clonedPayload);

        if (chunk.then) {
          processRule(chunk.then, 'then', conditionMet);
        }
        if (!conditionMet && chunk.else) {
          processRule(chunk.else, 'else', false);
        }
        continue;
      }

      const { required, notRequired } = getRequiredProperties(chunk);
      // const requiredKeys = extractAttributeKeys(required, keys);
      // const notRequiredKeys = extractAttributeKeys(notRequired, keys);

      const currentRuleRequired = {};
      const currentRuleHidden = {};

      for (const field of required) {
        if (isMatchedBranch) {
          currentRuleRequired[field] = true;
        } else {
          currentRuleHidden[field] = true;
        }
      }

      for (const field of notRequired) {
        currentRuleHidden[field] = true;
      }

      cleanPayload(
        clonedPayload,
        Object.entries(currentRuleHidden)
          .filter(([_, v]) => v)
          .map(([k, _]) => k)
      );

      Object.assign(requiredFields, currentRuleRequired);
      Object.assign(hiddenFields, currentRuleHidden);

      if ((branchName === 'then' && isMatchedBranch) || branchName === 'else') {
        const enumMap = extractEnums(chunk);
        Object.assign(allowedEnums, enumMap);
      }

      Object.entries(requiredFields).forEach(([field, isRequired]) => {
        if (isRequired) {
          hiddenFields[field] = false;
        }
      });
    }
  }

  for (const rule of rules) {
    processRule(rule, 'root', true);
  }

  return {
    required: Object.entries(requiredFields)
      .filter(([, v]) => v)
      .map(([k]) => k),
    hidden: Object.entries(hiddenFields)
      .filter(([, v]) => v)
      .map(([k]) => k),
    allowedEnums,
  };
}

module.exports = { validator, getRequiredProperties, check };
