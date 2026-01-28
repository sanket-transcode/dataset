const { getRequiredProperties } = require('./validation');

const payload1 = {
  required: ['battery', 'lithium_battery', 'num_batteries'],
  properties: {
    battery: {
      items: {
        required: ['weight'],
      },
    },
    lithium_battery: {
      items: {
        required: ['packaging'],
      },
    },
  },
};

const payload2 = {
  properties: {
    apparel_size: {
      items: {
        required: ['height_type'],
      },
    },
  },
};

const payload3 = {
  properties: {
    apparel_size: {
      items: {
        not: {
          required: ['height_type'],
        },
      },
    },
  },
};

console.log({ result1: getRequiredProperties(payload1) });
console.log({ result2: getRequiredProperties(payload2) });
console.log({ result3: getRequiredProperties(payload3) });
