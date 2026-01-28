const { check } = require('./validation');

const rule1 = {
  if: {
    not: {
      required: ['battery'],
      properties: {
        battery: {
          contains: {
            required: ['cell_composition'],
            properties: {
              cell_composition: {
                contains: {
                  required: ['value'],
                  properties: {
                    value: {
                      enum: ['other_than_listed'],
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  then: {
    properties: {
      battery: {
        items: {
          properties: {
            cell_composition_other_than_listed: {
              not: {
                required: ['value'],
              },
            },
          },
        },
      },
    },
  },
};

const rule2 = {
  if: {
    required: ['batteries_required'],
    properties: {
      batteries_required: {
        contains: {
          required: ['value'],
          properties: {
            value: {
              enum: [true],
            },
          },
        },
      },
    },
  },
  then: {
    required: ['batteries_included'],
  },
};

const rule3 = {
  if: {
    required: ['battery'],
    properties: {
      battery: {
        contains: {
          required: ['cell_composition'],
          properties: {
            cell_composition: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: [
                      'lithium',
                      'lithium_air',
                      'lithium_cobalt',
                      'lithium_ion',
                      'lithium_nickel_cobalt_aluminum',
                      'lithium_nickel_manganese_cobalt',
                      'lithium_phosphate',
                      'lithium_polymer',
                      'lithium_titanate',
                      'polymer',
                    ],
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  then: {
    required: ['lithium_battery', 'number_of_lithium_ion_cells'],
    properties: {
      lithium_battery: {
        items: {
          required: ['energy_content'],
        },
      },
    },
  },
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
      value: true,
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
          value: 'lithium_nickel_manganese_cobalt',
        },
      ],
    },
  ],
};

// console.log({ result1: check(rule1.if, payload1) });
// console.log({ result2: check(rule2.if, payload1) });
console.log({ result3: check(rule3.if, payload1) });
