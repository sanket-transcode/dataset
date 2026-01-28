const hatSchema = require('../schema/HAT/HAT-us');

const availableVariationThemes = [
  { label: 'COLOR', value: 'COLOR' },
  { label: 'COLOR/NUMBER_OF_ITEMS', value: 'COLOR/NUMBER_OF_ITEMS' },
  { label: 'NUMBER_OF_ITEMS', value: 'NUMBER_OF_ITEMS' },
  {
    label: 'NUMBER_OF_ITEMS/COLOR_NAME/SIZE_NAME',
    value: 'NUMBER_OF_ITEMS/COLOR_NAME/SIZE_NAME',
  },
  { label: 'SIZE', value: 'SIZE' },
  { label: 'SIZE/COLOR', value: 'SIZE/COLOR' },
  { label: 'SIZE/NUMBER_OF_ITEMS', value: 'SIZE/NUMBER_OF_ITEMS' },
  {
    label: 'SPECIAL_SIZE_TYPE/SIZE/COLOR',
    value: 'SPECIAL_SIZE_TYPE/SIZE/COLOR',
  },
  {
    label: 'TEAM_NAME/ATHLETE/COLOR/SIZE',
    value: 'TEAM_NAME/ATHLETE/COLOR/SIZE',
  },
  { label: 'TEAM_NAME/COLOR/SIZE', value: 'TEAM_NAME/COLOR/SIZE' },
  { label: 'TEAM_NAME/SIZE', value: 'TEAM_NAME/SIZE' },
];

function hasRequiredKey(obj, key) {
  if (typeof obj !== 'object' || obj === null) return false;

  if (Array.isArray(obj.required) && obj.required.includes(key)) {
    return true;
  }

  for (const property in obj) {
    if (hasRequiredKey(obj[property], key)) {
      return true;
    }
  }

  return false;
}

function verifyInSchemaProperties(properties, data) {
  let isDataValid = false;
  if (properties.variation_theme) {
    const requiredFields = properties.variation_theme.contains.required;
    requiredFields.forEach((field) => {
      const enumValues =
        properties.variation_theme.contains.properties?.[field].enum;
      if (enumValues.includes(data.variation_theme[field])) {
        isDataValid = true;
      }
    });
  }

  return isDataValid;
}

function extractRequiredFields(schema, themeInput, requiredFields) {
  if (schema.allOf && Array.isArray(schema.allOf)) {
    let isValid = true;
    for (const subSchema of schema.allOf) {
      if (!hasRequiredKey(subSchema, 'variation_theme')) {
        continue;
      }

      const tempValidValue = extractRequiredFields(
        subSchema,
        themeInput,
        requiredFields
      );
      if (!tempValidValue) {
        isValid = false;
      }
    }
    return isValid;
  }

  if (schema.anyOf && Array.isArray(schema.anyOf)) {
    let isValid = false;
    for (const subSchema of schema.anyOf) {
      const tempValidValue = extractRequiredFields(
        subSchema,
        themeInput,
        requiredFields
      );
      if (tempValidValue) {
        isValid = true;
      }
    }

    return isValid;
  }

  if (schema.not) {
    return !extractRequiredFields(schema.not, themeInput, requiredFields);
  }

  if (schema.if) {
    const themeMatches = extractRequiredFields(
      schema.if,
      themeInput,
      requiredFields
    );

    if (themeMatches && schema.then && schema.then.required) {
      requiredFields.push(...schema.then.required);
    }

    if (themeMatches && schema.then && schema.then.not) {
      requiredFields.push(...schema.then.required);
    }
  }

  if (schema.else) {
    return extractRequiredFields(schema.else, themeInput, requiredFields);
  }

  if (schema.required) {
    if (schema.required.includes('variation_theme')) {
      return verifyInSchemaProperties(schema.properties, themeInput);
    } else {
      return true;
    }
  }
  if (schema.items) {
    return extractRequiredFields(schema.items, themeInput, requiredFields);
  }
}

function gatherVariantAttributesFromVariationThemes() {
  for (const theme of availableVariationThemes) {
    let requiredFields = [];

    extractRequiredFields(
      { allOf: hatSchema.allOf },
      { variation_theme: { name: theme.value } },
      requiredFields
    );

    console.log({
      theme: theme.value,
      properties: requiredFields,
    });
  }
}

gatherVariantAttributesFromVariationThemes();

module.exports = {
  extractRequiredFields,
};
