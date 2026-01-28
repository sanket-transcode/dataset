const hiddenFields = {
  'batteries_included -> value': true,
  'battery -> cell_composition -> value': true,
};

const payload1 = {
  fulfillment_availability: [
    {
      fulfillment_channel_code: 'AMAZON_NA',
      quantity: 99999,
      lead_time_to_ship_max_days: 5,
    },
  ],
  batteries_required: [
    {
      value: false,
      marketplace_id: 'ATVPDKIKX0DER',
    },
  ],
  batteries_included: [
    {
      value: true,
      marketplace_id: 'ATVPDKIKX0DER',
    },
  ],
  battery: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      cell_composition: [
        {
          value: 'lithium',
        },
      ],
    },
  ],
};

function removeNestedFields(payload, fieldPaths) {
  const cloned = JSON.parse(JSON.stringify(payload));
  for (const path of fieldPaths) {
    const keys = path.split(' -> ').map(k => k.trim()).filter(Boolean);
    if (keys.length === 0) continue;
    removeAtPath(cloned, keys);
  }
  return cloned;
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
    currentValue.forEach(item => {
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
    return value.some(item => isMeaningful(item));
  }
  if (typeof value === 'object') {
    const keys = Object.keys(value);
    if (keys.length === 0) return false;
    if (keys.length === 1 && keys[0] === 'marketplace_id') return false;
    return true;
  }
  return true; // primitives are meaningful
}

function pruneRecursively(obj) {
  if (obj == null || typeof obj !== 'object') return obj;

  if (Array.isArray(obj)) {
    const cleaned = obj.map(pruneRecursively).filter(isMeaningful);
    return cleaned;
  }

  const result = {};
  for (const [key, val] of Object.entries(obj)) {
    const cleaned = pruneRecursively(val);
    if (isMeaningful(cleaned)) {
      result[key] = cleaned;
    }
  }
  return result;
}

// --- Final clean function ---
function cleanPayload(payload, hiddenFieldPaths) {
  let cleaned = removeNestedFields(payload, hiddenFieldPaths);
  cleaned = pruneRecursively(cleaned);
  return cleaned;
}

// --- Run ---
const result = cleanPayload(payload1, Object.keys(hiddenFields));
console.log(JSON.stringify(result, null, 2));