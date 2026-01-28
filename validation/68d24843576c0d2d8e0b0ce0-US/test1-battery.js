const { validator } = require('../validation');
const { keys } = require('./keys');

const rules = [
  {
    if: {
      anyOf: [
        {
          required: ['fulfillment_availability'],
          properties: {
            fulfillment_availability: {
              contains: {
                required: ['fulfillment_channel_code'],
                properties: {
                  fulfillment_channel_code: {
                    enum: ['AMAZON_NA'],
                  },
                },
              },
            },
          },
        },
        {
          not: {
            required: ['fulfillment_availability'],
            properties: {
              fulfillment_availability: {
                items: {
                  required: ['fulfillment_channel_code'],
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['batteries_required'],
    },
  },
  {
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
  },
  {
    if: {
      required: ['batteries_included'],
      properties: {
        batteries_included: {
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
      required: ['battery'],
      properties: {
        battery: {
          items: {
            required: ['cell_composition'],
          },
        },
      },
    },
  },
  {
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
  },
  {
    if: {
      anyOf: [
        {
          allOf: [
            {
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
            {
              not: {
                required: ['parentage_level'],
                properties: {
                  parentage_level: {
                    items: {
                      required: ['value'],
                    },
                  },
                },
              },
            },
          ],
        },
        {
          allOf: [
            {
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
            {
              not: {
                required: ['parentage_level'],
                properties: {
                  parentage_level: {
                    contains: {
                      required: ['value'],
                      properties: {
                        value: {
                          enum: ['parent'],
                        },
                      },
                    },
                  },
                },
              },
            },
          ],
        },
      ],
    },
    then: {
      required: ['battery'],
      properties: {
        battery: {
          items: {
            required: ['cell_composition_other_than_listed'],
          },
        },
      },
    },
  },
  {
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
                        'lithium_manganese_dioxide',
                        'lithium_metal',
                        'lithium_nickel_cobalt_aluminum',
                        'lithium_nickel_manganese_cobalt',
                        'lithium_phosphate',
                        'lithium_polymer',
                        'lithium_thionyl_chloride',
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
    },
  },
  {
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
                        'lithium_manganese_dioxide',
                        'lithium_metal',
                        'lithium_thionyl_chloride',
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
      required: ['lithium_battery', 'number_of_lithium_metal_cells'],
      properties: {
        lithium_battery: {
          items: {
            required: ['weight'],
          },
        },
      },
    },
  },
  {
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
  },
];

const result = validator(rules, keys, {
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
          value: 'lithium',
        },
      ],
    },
  ],
});

console.log({ result });
