const { validator } = require('../validation');
const { keys } = require('./keys');

const rules = [
  {
    if: {
      required: ['age_range_description', 'apparel_size'],
      properties: {
        age_range_description: {
          contains: {
            required: ['value'],
            properties: {
              value: {
                enum: ['Adult', 'Adulto'],
              },
            },
          },
        },
        apparel_size: {
          items: {
            required: ['size_system'],
            properties: {
              size_system: {
                enum: ['as1'],
              },
            },
          },
        },
      },
    },
    then: {
      properties: {
        apparel_size: {
          items: {
            properties: {
              size_class: {
                enum: ['alpha', 'numeric'],
              },
            },
          },
        },
      },
    },
    else: {
      if: {
        required: ['age_range_description', 'apparel_size'],
        properties: {
          age_range_description: {
            contains: {
              required: ['value'],
              properties: {
                value: {
                  enum: [
                    'Big Kid',
                    'Little Kid',
                    'Toddler',
                    'Adolescente',
                    'Niño Chico',
                    'Niño (2-5 años)',
                  ],
                },
              },
            },
          },
          apparel_size: {
            items: {
              required: ['size_system'],
              properties: {
                size_system: {
                  enum: ['as1'],
                },
              },
            },
          },
        },
      },
      then: {
        properties: {
          apparel_size: {
            items: {
              properties: {
                size_class: {
                  enum: ['age', 'alpha', 'numeric'],
                },
              },
            },
          },
        },
      },
      else: {
        if: {
          required: ['age_range_description', 'apparel_size'],
          properties: {
            age_range_description: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: ['Infant', 'Bebé'],
                  },
                },
              },
            },
            apparel_size: {
              items: {
                required: ['size_system'],
                properties: {
                  size_system: {
                    enum: ['as1'],
                  },
                },
              },
            },
          },
        },
        then: {
          properties: {
            apparel_size: {
              items: {
                properties: {
                  size_class: {
                    enum: ['age', 'alpha'],
                  },
                },
              },
            },
          },
        },
        else: {
          properties: {
            apparel_size: {
              items: {
                properties: {
                  size_class: {
                    enum: [
                      'age',
                      'alpha',
                      'alpha_jaspo',
                      'numeric',
                      'numeric_go',
                      'numeric_height',
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
  {
    if: {
      required: ['apparel_size'],
      properties: {
        apparel_size: {
          items: {
            allOf: [
              {
                required: ['size_class'],
                properties: {
                  size_class: {
                    enum: ['age'],
                  },
                },
              },
              {
                required: ['size_system'],
                properties: {
                  size_system: {
                    enum: ['as1'],
                  },
                },
              },
            ],
          },
        },
      },
      allOf: [
        {
          required: ['age_range_description'],
          properties: {
            age_range_description: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: ['Little Kid', 'Niño Chico'],
                  },
                },
              },
            },
          },
        },
        {
          required: ['target_gender'],
          properties: {
            target_gender: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: ['female'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      properties: {
        apparel_size: {
          items: {
            properties: {
              size: {
                enum: [
                  '0_month',
                  '1_year',
                  '10_years',
                  '11_years',
                  '12_months',
                  '12_years',
                  '13_years',
                  '14_years',
                  '15_months',
                  '15_years',
                  '16_years',
                  '17_years',
                  '18_months',
                  '18_years',
                  '2_years',
                  '24_months',
                  '3_months',
                  '3_years',
                  '4_years',
                  '5_years',
                  '6_months',
                  '6_years',
                  '6x_age',
                  '7_years',
                  '8_years',
                  '9_months',
                  '9_years',
                  'preemie',
                ],
              },
              size_to: {
                enum: [
                  '0_month',
                  '1_year',
                  '10_years',
                  '11_years',
                  '12_months',
                  '12_years',
                  '13_years',
                  '14_years',
                  '15_months',
                  '15_years',
                  '16_years',
                  '17_years',
                  '18_months',
                  '18_years',
                  '2_years',
                  '24_months',
                  '3_months',
                  '3_years',
                  '4_years',
                  '5_years',
                  '6_months',
                  '6_years',
                  '6x_age',
                  '7_years',
                  '8_years',
                  '9_months',
                  '9_years',
                  'preemie',
                ],
              },
            },
          },
        },
      },
    },
    else: {
      if: {
        required: ['apparel_size'],
        properties: {
          apparel_size: {
            items: {
              allOf: [
                {
                  required: ['size_class'],
                  properties: {
                    size_class: {
                      enum: ['age'],
                    },
                  },
                },
                {
                  required: ['size_system'],
                  properties: {
                    size_system: {
                      enum: ['as1'],
                    },
                  },
                },
              ],
            },
          },
        },
        allOf: [
          {
            required: ['age_range_description'],
            properties: {
              age_range_description: {
                contains: {
                  required: ['value'],
                  properties: {
                    value: {
                      enum: ['Little Kid', 'Niño Chico'],
                    },
                  },
                },
              },
            },
          },
          {
            required: ['target_gender'],
            properties: {
              target_gender: {
                contains: {
                  required: ['value'],
                  properties: {
                    value: {
                      enum: ['male'],
                    },
                  },
                },
              },
            },
          },
        ],
      },
      then: {
        properties: {
          apparel_size: {
            items: {
              properties: {
                size: {
                  enum: [
                    '0_month',
                    '1_year',
                    '10_years',
                    '11_years',
                    '12_months',
                    '12_years',
                    '13_years',
                    '14_years',
                    '15_months',
                    '15_years',
                    '16_years',
                    '17_years',
                    '18_months',
                    '18_years',
                    '2_years',
                    '24_months',
                    '3_months',
                    '3_years',
                    '4_years',
                    '5_years',
                    '6_months',
                    '6_years',
                    '7_years',
                    '7x_age',
                    '8_years',
                    '9_months',
                    '9_years',
                    'preemie',
                  ],
                },
                size_to: {
                  enum: [
                    '0_month',
                    '1_year',
                    '10_years',
                    '11_years',
                    '12_months',
                    '12_years',
                    '13_years',
                    '14_years',
                    '15_months',
                    '15_years',
                    '16_years',
                    '17_years',
                    '18_months',
                    '18_years',
                    '2_years',
                    '24_months',
                    '3_months',
                    '3_years',
                    '4_years',
                    '5_years',
                    '6_months',
                    '6_years',
                    '7_years',
                    '7x_age',
                    '8_years',
                    '9_months',
                    '9_years',
                    'preemie',
                  ],
                },
              },
            },
          },
        },
      },
      else: {
        if: {
          required: ['apparel_size'],
          properties: {
            apparel_size: {
              items: {
                allOf: [
                  {
                    required: ['size_class'],
                    properties: {
                      size_class: {
                        enum: ['age'],
                      },
                    },
                  },
                  {
                    required: ['size_system'],
                    properties: {
                      size_system: {
                        enum: ['as1'],
                      },
                    },
                  },
                ],
              },
            },
          },
          allOf: [
            {
              required: ['age_range_description'],
              properties: {
                age_range_description: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: [
                          'Adult',
                          'Big Kid',
                          'Little Kid',
                          'Toddler',
                          'Infant',
                          'Adulto',
                          'Adolescente',
                          'Niño Chico',
                          'Niño (2-5 años)',
                          'Bebé',
                        ],
                      },
                    },
                  },
                },
              },
            },
            {
              required: ['target_gender'],
              properties: {
                target_gender: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: ['unisex'],
                      },
                    },
                  },
                },
              },
            },
          ],
        },
        then: {
          properties: {
            apparel_size: {
              items: {
                properties: {
                  size: {
                    enum: [
                      '0_month',
                      '1_year',
                      '10_years',
                      '11_years',
                      '12_months',
                      '12_years',
                      '13_years',
                      '14_years',
                      '15_months',
                      '15_years',
                      '16_years',
                      '17_years',
                      '18_months',
                      '18_years',
                      '2_years',
                      '24_months',
                      '3_months',
                      '3_years',
                      '4_years',
                      '5_years',
                      '6_months',
                      '6_years',
                      '7_years',
                      '8_years',
                      '9_months',
                      '9_years',
                      'preemie',
                    ],
                  },
                  size_to: {
                    enum: [
                      '0_month',
                      '1_year',
                      '10_years',
                      '11_years',
                      '12_months',
                      '12_years',
                      '13_years',
                      '14_years',
                      '15_months',
                      '15_years',
                      '16_years',
                      '17_years',
                      '18_months',
                      '18_years',
                      '2_years',
                      '24_months',
                      '3_months',
                      '3_years',
                      '4_years',
                      '5_years',
                      '6_months',
                      '6_years',
                      '7_years',
                      '8_years',
                      '9_months',
                      '9_years',
                      'preemie',
                    ],
                  },
                },
              },
            },
          },
        },
        else: {
          if: {
            required: ['apparel_size'],
            properties: {
              apparel_size: {
                items: {
                  allOf: [
                    {
                      required: ['size_class'],
                      properties: {
                        size_class: {
                          enum: ['age'],
                        },
                      },
                    },
                    {
                      required: ['size_system'],
                      properties: {
                        size_system: {
                          enum: ['as1'],
                        },
                      },
                    },
                  ],
                },
              },
            },
            allOf: [
              {
                required: ['age_range_description'],
                properties: {
                  age_range_description: {
                    contains: {
                      required: ['value'],
                      properties: {
                        value: {
                          enum: [
                            'Adult',
                            'Big Kid',
                            'Toddler',
                            'Infant',
                            'Adulto',
                            'Adolescente',
                            'Niño (2-5 años)',
                            'Bebé',
                          ],
                        },
                      },
                    },
                  },
                },
              },
              {
                required: ['target_gender'],
                properties: {
                  target_gender: {
                    contains: {
                      required: ['value'],
                      properties: {
                        value: {
                          enum: ['female', 'male'],
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
          then: {
            properties: {
              apparel_size: {
                items: {
                  properties: {
                    size: {
                      enum: [
                        '0_month',
                        '1_year',
                        '10_years',
                        '11_years',
                        '12_months',
                        '12_years',
                        '13_years',
                        '14_years',
                        '15_months',
                        '15_years',
                        '16_years',
                        '17_years',
                        '18_months',
                        '18_years',
                        '2_years',
                        '24_months',
                        '3_months',
                        '3_years',
                        '4_years',
                        '5_years',
                        '6_months',
                        '6_years',
                        '7_years',
                        '8_years',
                        '9_months',
                        '9_years',
                        'preemie',
                      ],
                    },
                    size_to: {
                      enum: [
                        '0_month',
                        '1_year',
                        '10_years',
                        '11_years',
                        '12_months',
                        '12_years',
                        '13_years',
                        '14_years',
                        '15_months',
                        '15_years',
                        '16_years',
                        '17_years',
                        '18_months',
                        '18_years',
                        '2_years',
                        '24_months',
                        '3_months',
                        '3_years',
                        '4_years',
                        '5_years',
                        '6_months',
                        '6_years',
                        '7_years',
                        '8_years',
                        '9_months',
                        '9_years',
                        'preemie',
                      ],
                    },
                  },
                },
              },
            },
          },
          else: {
            if: {
              required: ['age_range_description', 'apparel_size'],
              properties: {
                age_range_description: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: [
                          'Adult',
                          'Big Kid',
                          'Little Kid',
                          'Toddler',
                          'Infant',
                          'Adulto',
                          'Adolescente',
                          'Niño Chico',
                          'Niño (2-5 años)',
                          'Bebé',
                        ],
                      },
                    },
                  },
                },
                apparel_size: {
                  items: {
                    allOf: [
                      {
                        required: ['size_class'],
                        properties: {
                          size_class: {
                            enum: ['numeric'],
                          },
                        },
                      },
                      {
                        required: ['size_system'],
                        properties: {
                          size_system: {
                            enum: ['as1'],
                          },
                        },
                      },
                    ],
                  },
                },
              },
            },
            then: {
              properties: {
                apparel_size: {
                  items: {
                    properties: {
                      size: {
                        enum: [
                          'numeric_0',
                          'numeric_00',
                          'numeric_1',
                          'numeric_10',
                          'numeric_11',
                          'numeric_12',
                          'numeric_13',
                          'numeric_14',
                          'numeric_15',
                          'numeric_16',
                          'numeric_17',
                          'numeric_18',
                          'numeric_19',
                          'numeric_2',
                          'numeric_20',
                          'numeric_21',
                          'numeric_22',
                          'numeric_23',
                          'numeric_24',
                          'numeric_25',
                          'numeric_26',
                          'numeric_27',
                          'numeric_28',
                          'numeric_29',
                          'numeric_3',
                          'numeric_30',
                          'numeric_31',
                          'numeric_32',
                          'numeric_33',
                          'numeric_34',
                          'numeric_35',
                          'numeric_36',
                          'numeric_37',
                          'numeric_38',
                          'numeric_39',
                          'numeric_4',
                          'numeric_40',
                          'numeric_41',
                          'numeric_42',
                          'numeric_43',
                          'numeric_44',
                          'numeric_45',
                          'numeric_46',
                          'numeric_47',
                          'numeric_48',
                          'numeric_49',
                          'numeric_5',
                          'numeric_50',
                          'numeric_51',
                          'numeric_52',
                          'numeric_53',
                          'numeric_54',
                          'numeric_55',
                          'numeric_56',
                          'numeric_57',
                          'numeric_58',
                          'numeric_59',
                          'numeric_6',
                          'numeric_60',
                          'numeric_61',
                          'numeric_62',
                          'numeric_63',
                          'numeric_64',
                          'numeric_65',
                          'numeric_66',
                          'numeric_7',
                          'numeric_8',
                          'numeric_9',
                        ],
                      },
                      size_to: {
                        enum: [
                          'numeric_0',
                          'numeric_00',
                          'numeric_1',
                          'numeric_10',
                          'numeric_11',
                          'numeric_12',
                          'numeric_13',
                          'numeric_14',
                          'numeric_15',
                          'numeric_16',
                          'numeric_17',
                          'numeric_18',
                          'numeric_19',
                          'numeric_2',
                          'numeric_20',
                          'numeric_21',
                          'numeric_22',
                          'numeric_23',
                          'numeric_24',
                          'numeric_25',
                          'numeric_26',
                          'numeric_27',
                          'numeric_28',
                          'numeric_29',
                          'numeric_3',
                          'numeric_30',
                          'numeric_31',
                          'numeric_32',
                          'numeric_33',
                          'numeric_34',
                          'numeric_35',
                          'numeric_36',
                          'numeric_37',
                          'numeric_38',
                          'numeric_39',
                          'numeric_4',
                          'numeric_40',
                          'numeric_41',
                          'numeric_42',
                          'numeric_43',
                          'numeric_44',
                          'numeric_45',
                          'numeric_46',
                          'numeric_47',
                          'numeric_48',
                          'numeric_49',
                          'numeric_5',
                          'numeric_50',
                          'numeric_51',
                          'numeric_52',
                          'numeric_53',
                          'numeric_54',
                          'numeric_55',
                          'numeric_56',
                          'numeric_57',
                          'numeric_58',
                          'numeric_59',
                          'numeric_6',
                          'numeric_60',
                          'numeric_61',
                          'numeric_62',
                          'numeric_63',
                          'numeric_64',
                          'numeric_65',
                          'numeric_66',
                          'numeric_7',
                          'numeric_8',
                          'numeric_9',
                        ],
                      },
                    },
                  },
                },
              },
            },
            else: {
              if: {
                required: ['apparel_size'],
                properties: {
                  apparel_size: {
                    items: {
                      allOf: [
                        {
                          required: ['size_class'],
                          properties: {
                            size_class: {
                              enum: ['alpha'],
                            },
                          },
                        },
                        {
                          required: ['size_system'],
                          properties: {
                            size_system: {
                              enum: ['as1'],
                            },
                          },
                        },
                      ],
                    },
                  },
                },
                allOf: [
                  {
                    required: ['age_range_description'],
                    properties: {
                      age_range_description: {
                        contains: {
                          required: ['value'],
                          properties: {
                            value: {
                              enum: [
                                'Adult',
                                'Big Kid',
                                'Little Kid',
                                'Toddler',
                                'Infant',
                                'Adulto',
                                'Adolescente',
                                'Niño Chico',
                                'Niño (2-5 años)',
                                'Bebé',
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                  {
                    required: ['target_gender'],
                    properties: {
                      target_gender: {
                        contains: {
                          required: ['value'],
                          properties: {
                            value: {
                              enum: ['unisex'],
                            },
                          },
                        },
                      },
                    },
                  },
                ],
              },
              then: {
                properties: {
                  apparel_size: {
                    items: {
                      properties: {
                        size: {
                          enum: [
                            '10x_l',
                            '3x_l',
                            '3x_s',
                            '4x_l',
                            '4x_s',
                            '5x_l',
                            '5x_s',
                            '6x_l',
                            '6x_s',
                            '7x_l',
                            '8x_l',
                            '9x_l',
                            'l',
                            'm',
                            'one_size',
                            's',
                            'x_l',
                            'x_s',
                            'xx_l',
                            'xx_s',
                          ],
                        },
                        size_to: {
                          enum: [
                            '10x_l',
                            '3x_l',
                            '3x_s',
                            '4x_l',
                            '4x_s',
                            '5x_l',
                            '5x_s',
                            '6x_l',
                            '6x_s',
                            '7x_l',
                            '8x_l',
                            '9x_l',
                            'l',
                            'm',
                            'one_size',
                            's',
                            'x_l',
                            'x_s',
                            'xx_l',
                            'xx_s',
                          ],
                        },
                      },
                    },
                  },
                },
              },
              else: {
                if: {
                  required: ['apparel_size'],
                  properties: {
                    apparel_size: {
                      items: {
                        allOf: [
                          {
                            required: ['size_class'],
                            properties: {
                              size_class: {
                                enum: ['alpha'],
                              },
                            },
                          },
                          {
                            required: ['size_system'],
                            properties: {
                              size_system: {
                                enum: ['as1'],
                              },
                            },
                          },
                        ],
                      },
                    },
                  },
                  allOf: [
                    {
                      required: ['age_range_description'],
                      properties: {
                        age_range_description: {
                          contains: {
                            required: ['value'],
                            properties: {
                              value: {
                                enum: [
                                  'Big Kid',
                                  'Little Kid',
                                  'Toddler',
                                  'Infant',
                                  'Adolescente',
                                  'Niño Chico',
                                  'Niño (2-5 años)',
                                  'Bebé',
                                ],
                              },
                            },
                          },
                        },
                      },
                    },
                    {
                      required: ['target_gender'],
                      properties: {
                        target_gender: {
                          contains: {
                            required: ['value'],
                            properties: {
                              value: {
                                enum: ['female', 'male'],
                              },
                            },
                          },
                        },
                      },
                    },
                  ],
                },
                then: {
                  properties: {
                    apparel_size: {
                      items: {
                        properties: {
                          size: {
                            enum: [
                              '10x_l',
                              '3x_l',
                              '3x_s',
                              '4x_l',
                              '4x_s',
                              '5x_l',
                              '5x_s',
                              '6x_l',
                              '6x_s',
                              '7x_l',
                              '8x_l',
                              '9x_l',
                              'l',
                              'm',
                              'one_size',
                              's',
                              'x_l',
                              'x_s',
                              'xx_l',
                              'xx_s',
                            ],
                          },
                          size_to: {
                            enum: [
                              '10x_l',
                              '3x_l',
                              '3x_s',
                              '4x_l',
                              '4x_s',
                              '5x_l',
                              '5x_s',
                              '6x_l',
                              '6x_s',
                              '7x_l',
                              '8x_l',
                              '9x_l',
                              'l',
                              'm',
                              'one_size',
                              's',
                              'x_l',
                              'x_s',
                              'xx_l',
                              'xx_s',
                            ],
                          },
                        },
                      },
                    },
                  },
                },
                else: {
                  if: {
                    required: ['apparel_size'],
                    properties: {
                      apparel_size: {
                        items: {
                          allOf: [
                            {
                              required: ['size_class'],
                              properties: {
                                size_class: {
                                  enum: ['alpha'],
                                },
                              },
                            },
                            {
                              required: ['size_system'],
                              properties: {
                                size_system: {
                                  enum: ['as1'],
                                },
                              },
                            },
                          ],
                        },
                      },
                    },
                    allOf: [
                      {
                        required: ['age_range_description'],
                        properties: {
                          age_range_description: {
                            contains: {
                              required: ['value'],
                              properties: {
                                value: {
                                  enum: ['Adult', 'Adulto'],
                                },
                              },
                            },
                          },
                        },
                      },
                      {
                        required: ['target_gender'],
                        properties: {
                          target_gender: {
                            contains: {
                              required: ['value'],
                              properties: {
                                value: {
                                  enum: ['female', 'male'],
                                },
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                  then: {
                    properties: {
                      apparel_size: {
                        items: {
                          properties: {
                            size: {
                              enum: [
                                '0x',
                                '10x',
                                '10x_l',
                                '1x',
                                '2x',
                                '3x',
                                '3x_l',
                                '3x_s',
                                '4x',
                                '4x_l',
                                '4x_s',
                                '5x',
                                '5x_l',
                                '5x_s',
                                '6x',
                                '6x_l',
                                '6x_s',
                                '7x',
                                '7x_l',
                                '8x',
                                '8x_l',
                                '9x',
                                '9x_l',
                                'l',
                                'm',
                                'one_size',
                                's',
                                'x_l',
                                'x_s',
                                'xx_l',
                                'xx_s',
                              ],
                            },
                            size_to: {
                              enum: [
                                '0x',
                                '10x',
                                '10x_l',
                                '1x',
                                '2x',
                                '3x',
                                '3x_l',
                                '3x_s',
                                '4x',
                                '4x_l',
                                '4x_s',
                                '5x',
                                '5x_l',
                                '5x_s',
                                '6x',
                                '6x_l',
                                '6x_s',
                                '7x',
                                '7x_l',
                                '8x',
                                '8x_l',
                                '9x',
                                '9x_l',
                                'l',
                                'm',
                                'one_size',
                                's',
                                'x_l',
                                'x_s',
                                'xx_l',
                                'xx_s',
                              ],
                            },
                          },
                        },
                      },
                    },
                  },
                  else: {
                    properties: {
                      apparel_size: {
                        items: {
                          properties: {
                            size: {
                              enum: [
                                'numeric_0',
                                'go_0',
                                '0_month',
                                'numeric_00',
                                '0x',
                                'numeric_1',
                                'go_1',
                                '1_month',
                                '1_year',
                                'numeric_1_point_5',
                                'numeric_10',
                                'go_10',
                                '10_months',
                                '10_years',
                                'numeric_10_point_0_centimeter',
                                'numeric_10_point_5',
                                'numeric_10_point_5_centimeter',
                                'numeric_100',
                                'numeric_height_100',
                                'numeric_101',
                                'numeric_102',
                                'numeric_103',
                                'numeric_104',
                                'numeric_105',
                                'numeric_height_105',
                                'numeric_106',
                                'numeric_107',
                                'numeric_height_107',
                                'numeric_108',
                                'numeric_109',
                                '10_l',
                                '10x',
                                '10x_l',
                                'jaspo_10x_o',
                                'jaspo_10x_ot',
                                'numeric_11',
                                'go_11',
                                '11_months',
                                '11_years',
                                'numeric_11_point_0_centimeter',
                                'numeric_11_point_5',
                                'numeric_11_point_5_centimeter',
                                'numeric_110',
                                'numeric_height_110',
                                'numeric_111',
                                'numeric_112',
                                'numeric_113',
                                'numeric_114',
                                'numeric_height_114',
                                'numeric_115',
                                'numeric_height_115',
                                'numeric_116',
                                'numeric_117',
                                'numeric_118',
                                'numeric_119',
                                '11x_l',
                                'numeric_12',
                                'go_12',
                                '12_months',
                                '12_years',
                                'numeric_12_point_0_centimeter',
                                'numeric_12_point_5',
                                'numeric_12_point_5_centimeter',
                                'numeric_120',
                                'numeric_height_120',
                                'numeric_121',
                                'numeric_122',
                                'numeric_height_122',
                                'numeric_123',
                                'numeric_124',
                                'numeric_125',
                                'numeric_height_125',
                                'numeric_126',
                                'numeric_127',
                                'numeric_128',
                                'numeric_129',
                                '12x_l',
                                'numeric_13',
                                'go_13',
                                '13_months',
                                '13_years',
                                'numeric_13_point_0_centimeter',
                                'numeric_13_point_5',
                                'numeric_13_point_5_centimeter',
                                'numeric_130',
                                'numeric_height_130',
                                'numeric_131',
                                'numeric_132',
                                'numeric_133',
                                'numeric_134',
                                'numeric_135',
                                'numeric_height_135',
                                'numeric_136',
                                'numeric_137',
                                'numeric_height_137',
                                'numeric_138',
                                'numeric_139',
                                '13x_l',
                                'numeric_14',
                                'go_14',
                                '14_months',
                                '14_years',
                                'numeric_14_point_0_centimeter',
                                'numeric_14_point_5',
                                'numeric_14_point_5_centimeter',
                                'numeric_140',
                                'numeric_height_140',
                                'numeric_height_145',
                                'numeric_146',
                                'numeric_height_149',
                                '14x_l',
                                'numeric_15',
                                'go_15',
                                '15_months',
                                '15_years',
                                'numeric_15_point_0_centimeter',
                                'numeric_15_point_5',
                                'numeric_15_point_5_centimeter',
                                'numeric_150',
                                'numeric_height_150',
                                'numeric_152',
                                'numeric_height_152',
                                'numeric_height_153',
                                'numeric_height_155',
                                'numeric_158',
                                '15x_l',
                                'numeric_16',
                                'go_16',
                                '16_years',
                                'numeric_16_point_0_centimeter',
                                'numeric_16_point_5',
                                'numeric_16_point_5_centimeter',
                                'numeric_160',
                                'numeric_height_160',
                                'numeric_164',
                                'numeric_height_165',
                                '16x_l',
                                'numeric_17',
                                'go_17',
                                '17_years',
                                'numeric_17_point_0_centimeter',
                                'numeric_17_point_5',
                                'numeric_17_point_5_centimeter',
                                'numeric_170',
                                'numeric_height_170',
                                'numeric_height_175',
                                'numeric_176',
                                '17x_l',
                                'numeric_18',
                                'go_18',
                                '18_months',
                                '18_years',
                                'numeric_18_point_0_centimeter',
                                'numeric_18_point_5',
                                'numeric_18_point_5_centimeter',
                                'numeric_height_180',
                                'numeric_182',
                                'numeric_height_185',
                                'numeric_188',
                                '18x_l',
                                'numeric_19',
                                'go_19',
                                'numeric_19_point_0_centimeter',
                                'numeric_19_point_5',
                                'numeric_19_point_5_centimeter',
                                'numeric_height_190',
                                '1x',
                                'numeric_2',
                                'go_2',
                                '2_months',
                                '2_years',
                                'numeric_2_point_5',
                                'numeric_20',
                                'go_20',
                                'numeric_20_point_0_centimeter',
                                'numeric_20_point_5',
                                'numeric_20_point_5_centimeter',
                                'numeric_21',
                                'go_21',
                                'numeric_21_point_0_centimeter',
                                'numeric_21_point_5',
                                'numeric_21_point_5_centimeter',
                                'numeric_22',
                                'go_22',
                                'numeric_22_point_0_centimeter',
                                'numeric_22_point_5',
                                'numeric_22_point_5_centimeter',
                                'numeric_23',
                                'go_23',
                                'numeric_23_point_0_centimeter',
                                'numeric_23_point_5',
                                'numeric_23_point_5_centimeter',
                                'numeric_24',
                                'go_24',
                                '24_months',
                                'numeric_24_point_0_centimeter',
                                'numeric_24_point_5',
                                'numeric_24_point_5_centimeter',
                                'numeric_25',
                                'go_25',
                                'numeric_25_point_0_centimeter',
                                'numeric_25_point_5',
                                'numeric_25_point_5_centimeter',
                                'numeric_26',
                                'go_26',
                                'numeric_26_point_0_centimeter',
                                'numeric_26_point_5',
                                'numeric_26_point_5_centimeter',
                                'numeric_27',
                                'go_27',
                                'numeric_27_point_0_centimeter',
                                'numeric_27_point_5',
                                'numeric_27_point_5_centimeter',
                                'numeric_28',
                                'go_28',
                                'numeric_28_point_0_centimeter',
                                'numeric_28_point_5',
                                'numeric_28_point_5_centimeter',
                                'numeric_29',
                                'go_29',
                                'numeric_29_point_0_centimeter',
                                'numeric_29_point_5',
                                'numeric_29_point_5_centimeter',
                                '2_l',
                                '2x',
                                'jaspo_2x_o',
                                'jaspo_2x_ot',
                                'jaspo_2x_s',
                                'numeric_3',
                                'go_3',
                                '3_months',
                                '3_years',
                                'numeric_3_point_5',
                                'numeric_30',
                                'go_30',
                                '30_months',
                                'numeric_30_point_0_centimeter',
                                'numeric_30_point_5',
                                'numeric_30_point_5_centimeter',
                                'numeric_31',
                                'go_31',
                                'numeric_31_point_0_centimeter',
                                'numeric_31_point_5',
                                'numeric_31_point_5_centimeter',
                                'numeric_32',
                                'go_32',
                                'numeric_32_point_0_centimeter',
                                'numeric_32_point_5',
                                'numeric_32_point_5_centimeter',
                                'numeric_33',
                                'go_33',
                                'numeric_33_point_0_centimeter',
                                'numeric_33_point_5',
                                'numeric_33_point_5_centimeter',
                                'numeric_34',
                                'go_34',
                                'numeric_34_point_0_centimeter',
                                'numeric_34_point_5',
                                'numeric_34_point_5_centimeter',
                                'numeric_35',
                                'go_35',
                                'numeric_35_point_0_centimeter',
                                'numeric_35_point_5',
                                'numeric_35_point_5_centimeter',
                                'numeric_36',
                                'go_36',
                                '36_months',
                                'numeric_36_point_0_centimeter',
                                'numeric_36_point_5',
                                'numeric_36_point_5_centimeter',
                                'numeric_37',
                                'go_37',
                                'numeric_37_point_0_centimeter',
                                'numeric_37_point_5',
                                'numeric_37_point_5_centimeter',
                                'numeric_38',
                                'go_38',
                                'numeric_38_point_0_centimeter',
                                'numeric_38_point_5',
                                'numeric_38_point_5_centimeter',
                                'numeric_39',
                                'go_39',
                                'numeric_39_point_0_centimeter',
                                'numeric_39_point_5',
                                'numeric_39_point_5_centimeter',
                                '3_l',
                                '3x',
                                '3x_l',
                                '3x_s',
                                'jaspo_3x_o',
                                'jaspo_3x_ot',
                                'jaspo_3x_s',
                                'numeric_4',
                                'go_4',
                                '4_months',
                                '4_years',
                                'numeric_4_point_5',
                                'numeric_40',
                                'go_40',
                                'numeric_40_point_0_centimeter',
                                'numeric_40_point_5',
                                'numeric_40_point_5_centimeter',
                                'numeric_41',
                                'go_41',
                                'numeric_41_point_0_centimeter',
                                'numeric_41_point_5',
                                'numeric_41_point_5_centimeter',
                                'numeric_42',
                                'go_42',
                                'numeric_42_point_0_centimeter',
                                'numeric_42_point_5',
                                'numeric_42_point_5_centimeter',
                                'numeric_43',
                                'go_43',
                                'numeric_43_point_0_centimeter',
                                'numeric_43_point_5',
                                'numeric_43_point_5_centimeter',
                                'numeric_44',
                                'go_44',
                                'numeric_44_point_0_centimeter',
                                'numeric_44_point_5',
                                'numeric_44_point_5_centimeter',
                                'numeric_45',
                                'go_45',
                                'numeric_45_point_0_centimeter',
                                'numeric_46',
                                'go_46',
                                'numeric_47',
                                'go_47',
                                'numeric_48',
                                'go_48',
                                'numeric_49',
                                'go_49',
                                '4_l',
                                '4x',
                                '4x_l',
                                '4x_s',
                                'jaspo_4x_o',
                                'jaspo_4x_ot',
                                'jaspo_4x_s',
                                'numeric_5',
                                'go_5',
                                '5_months',
                                '5_years',
                                'numeric_5_point_5',
                                'numeric_50',
                                'numeric_height_50',
                                'go_50',
                                'numeric_51',
                                'numeric_52',
                                'numeric_53',
                                'numeric_54',
                                'numeric_55',
                                'numeric_height_55',
                                'numeric_56',
                                'numeric_57',
                                'numeric_58',
                                'numeric_59',
                                '5_l',
                                '5x',
                                '5x_l',
                                '5x_s',
                                'jaspo_5x_o',
                                'jaspo_5x_ot',
                                'jaspo_5x_s',
                                'numeric_6',
                                'go_6',
                                '6_months',
                                '6_years',
                                'numeric_6_point_5',
                                'numeric_60',
                                'numeric_height_60',
                                'numeric_61',
                                'numeric_62',
                                'numeric_63',
                                'numeric_64',
                                'numeric_65',
                                'numeric_height_65',
                                'numeric_66',
                                'numeric_height_66',
                                'numeric_67',
                                'numeric_height_67',
                                'numeric_68',
                                'numeric_height_68',
                                'numeric_69',
                                'numeric_height_69',
                                '6_l',
                                '6x',
                                '6x_age',
                                '6x_l',
                                '6x_s',
                                'jaspo_6x_o',
                                'jaspo_6x_ot',
                                'jaspo_6x_s',
                                'numeric_7',
                                'go_7',
                                '7_months',
                                '7_years',
                                'numeric_7_point_5',
                                'numeric_70',
                                'numeric_height_70',
                                'numeric_71',
                                'numeric_height_71',
                                'numeric_72',
                                'numeric_height_72',
                                'numeric_73',
                                'numeric_height_73',
                                'numeric_74',
                                'numeric_height_74',
                                'numeric_75',
                                'numeric_height_75',
                                'numeric_76',
                                'numeric_77',
                                'numeric_78',
                                'numeric_79',
                                '7_l',
                                '7x',
                                '7x_age',
                                '7x_l',
                                'jaspo_7x_o',
                                'jaspo_7x_ot',
                                'numeric_8',
                                'go_8',
                                '8_months',
                                '8_years',
                                'numeric_8_point_0_centimeter',
                                'numeric_8_point_5',
                                'numeric_8_point_5_centimeter',
                                'numeric_80',
                                'numeric_height_80',
                                'numeric_81',
                                'numeric_82',
                                'numeric_83',
                                'numeric_84',
                                'numeric_85',
                                'numeric_height_85',
                                'numeric_86',
                                'numeric_87',
                                'numeric_88',
                                'numeric_89',
                                '8_l',
                                '8x',
                                '8x_l',
                                'jaspo_8x_o',
                                'jaspo_8x_ot',
                                'numeric_9',
                                'go_9',
                                '9_months',
                                '9_years',
                                'numeric_9_point_0_centimeter',
                                'numeric_9_point_5',
                                'numeric_9_point_5_centimeter',
                                'numeric_90',
                                'numeric_height_90',
                                'numeric_91',
                                'numeric_92',
                                'numeric_93',
                                'numeric_94',
                                'numeric_95',
                                'numeric_height_95',
                                'numeric_96',
                                'numeric_97',
                                'numeric_98',
                                'numeric_99',
                                '9_l',
                                '9x',
                                '9x_l',
                                'jaspo_9x_o',
                                'jaspo_9x_ot',
                                'a',
                                'b',
                                'c',
                                'd',
                                'e',
                                'f',
                                'free_size',
                                'g',
                                'h',
                                'i',
                                'j',
                                'jaspo_l',
                                'l',
                                'l_l',
                                'jaspo_m',
                                'm',
                                'micro',
                                'newborn',
                                'jaspo_o',
                                'one_size',
                                'jaspo_ot',
                                'preemie',
                                'queen',
                                'jaspo_s',
                                's',
                                'jaspo_s_s',
                                'ss',
                                's_s_s',
                                'teeny',
                                'x_l',
                                'x_s',
                                'jaspo_x_a',
                                'jaspo_x_b',
                                'jaspo_x_c',
                                'xg',
                                'jaspo_x_o',
                                'jaspo_x_ot',
                                'jaspo_x_s',
                                '2x_l',
                                'xx_l',
                                '2x_s',
                                'xx_s',
                                'xxg',
                              ],
                            },
                            size_to: {
                              enum: [
                                'numeric_0',
                                'go_0',
                                '0_month',
                                'numeric_00',
                                '0x',
                                'numeric_1',
                                'go_1',
                                '1_month',
                                '1_year',
                                'numeric_1_point_5',
                                'numeric_10',
                                'go_10',
                                '10_months',
                                '10_years',
                                'numeric_10_point_0_centimeter',
                                'numeric_10_point_5',
                                'numeric_10_point_5_centimeter',
                                'numeric_100',
                                'numeric_height_100',
                                'numeric_101',
                                'numeric_102',
                                'numeric_103',
                                'numeric_104',
                                'numeric_105',
                                'numeric_height_105',
                                'numeric_106',
                                'numeric_107',
                                'numeric_height_107',
                                'numeric_108',
                                'numeric_109',
                                '10_l',
                                '10x',
                                '10x_l',
                                'jaspo_10x_o',
                                'jaspo_10x_ot',
                                'numeric_11',
                                'go_11',
                                '11_months',
                                '11_years',
                                'numeric_11_point_0_centimeter',
                                'numeric_11_point_5',
                                'numeric_11_point_5_centimeter',
                                'numeric_110',
                                'numeric_height_110',
                                'numeric_111',
                                'numeric_112',
                                'numeric_113',
                                'numeric_114',
                                'numeric_height_114',
                                'numeric_115',
                                'numeric_height_115',
                                'numeric_116',
                                'numeric_117',
                                'numeric_118',
                                'numeric_119',
                                '11x_l',
                                'numeric_12',
                                'go_12',
                                '12_months',
                                '12_years',
                                'numeric_12_point_0_centimeter',
                                'numeric_12_point_5',
                                'numeric_12_point_5_centimeter',
                                'numeric_120',
                                'numeric_height_120',
                                'numeric_121',
                                'numeric_122',
                                'numeric_height_122',
                                'numeric_123',
                                'numeric_124',
                                'numeric_125',
                                'numeric_height_125',
                                'numeric_126',
                                'numeric_127',
                                'numeric_128',
                                'numeric_129',
                                '12x_l',
                                'numeric_13',
                                'go_13',
                                '13_months',
                                '13_years',
                                'numeric_13_point_0_centimeter',
                                'numeric_13_point_5',
                                'numeric_13_point_5_centimeter',
                                'numeric_130',
                                'numeric_height_130',
                                'numeric_131',
                                'numeric_132',
                                'numeric_133',
                                'numeric_134',
                                'numeric_135',
                                'numeric_height_135',
                                'numeric_136',
                                'numeric_137',
                                'numeric_height_137',
                                'numeric_138',
                                'numeric_139',
                                '13x_l',
                                'numeric_14',
                                'go_14',
                                '14_months',
                                '14_years',
                                'numeric_14_point_0_centimeter',
                                'numeric_14_point_5',
                                'numeric_14_point_5_centimeter',
                                'numeric_140',
                                'numeric_height_140',
                                'numeric_height_145',
                                'numeric_146',
                                'numeric_height_149',
                                '14x_l',
                                'numeric_15',
                                'go_15',
                                '15_months',
                                '15_years',
                                'numeric_15_point_0_centimeter',
                                'numeric_15_point_5',
                                'numeric_15_point_5_centimeter',
                                'numeric_150',
                                'numeric_height_150',
                                'numeric_152',
                                'numeric_height_152',
                                'numeric_height_153',
                                'numeric_height_155',
                                'numeric_158',
                                '15x_l',
                                'numeric_16',
                                'go_16',
                                '16_years',
                                'numeric_16_point_0_centimeter',
                                'numeric_16_point_5',
                                'numeric_16_point_5_centimeter',
                                'numeric_160',
                                'numeric_height_160',
                                'numeric_164',
                                'numeric_height_165',
                                '16x_l',
                                'numeric_17',
                                'go_17',
                                '17_years',
                                'numeric_17_point_0_centimeter',
                                'numeric_17_point_5',
                                'numeric_17_point_5_centimeter',
                                'numeric_170',
                                'numeric_height_170',
                                'numeric_height_175',
                                'numeric_176',
                                '17x_l',
                                'numeric_18',
                                'go_18',
                                '18_months',
                                '18_years',
                                'numeric_18_point_0_centimeter',
                                'numeric_18_point_5',
                                'numeric_18_point_5_centimeter',
                                'numeric_height_180',
                                'numeric_182',
                                'numeric_height_185',
                                'numeric_188',
                                '18x_l',
                                'numeric_19',
                                'go_19',
                                'numeric_19_point_0_centimeter',
                                'numeric_19_point_5',
                                'numeric_19_point_5_centimeter',
                                'numeric_height_190',
                                '1x',
                                'numeric_2',
                                'go_2',
                                '2_months',
                                '2_years',
                                'numeric_2_point_5',
                                'numeric_20',
                                'go_20',
                                'numeric_20_point_0_centimeter',
                                'numeric_20_point_5',
                                'numeric_20_point_5_centimeter',
                                'numeric_21',
                                'go_21',
                                'numeric_21_point_0_centimeter',
                                'numeric_21_point_5',
                                'numeric_21_point_5_centimeter',
                                'numeric_22',
                                'go_22',
                                'numeric_22_point_0_centimeter',
                                'numeric_22_point_5',
                                'numeric_22_point_5_centimeter',
                                'numeric_23',
                                'go_23',
                                'numeric_23_point_0_centimeter',
                                'numeric_23_point_5',
                                'numeric_23_point_5_centimeter',
                                'numeric_24',
                                'go_24',
                                '24_months',
                                'numeric_24_point_0_centimeter',
                                'numeric_24_point_5',
                                'numeric_24_point_5_centimeter',
                                'numeric_25',
                                'go_25',
                                'numeric_25_point_0_centimeter',
                                'numeric_25_point_5',
                                'numeric_25_point_5_centimeter',
                                'numeric_26',
                                'go_26',
                                'numeric_26_point_0_centimeter',
                                'numeric_26_point_5',
                                'numeric_26_point_5_centimeter',
                                'numeric_27',
                                'go_27',
                                'numeric_27_point_0_centimeter',
                                'numeric_27_point_5',
                                'numeric_27_point_5_centimeter',
                                'numeric_28',
                                'go_28',
                                'numeric_28_point_0_centimeter',
                                'numeric_28_point_5',
                                'numeric_28_point_5_centimeter',
                                'numeric_29',
                                'go_29',
                                'numeric_29_point_0_centimeter',
                                'numeric_29_point_5',
                                'numeric_29_point_5_centimeter',
                                '2_l',
                                '2x',
                                'jaspo_2x_o',
                                'jaspo_2x_ot',
                                'jaspo_2x_s',
                                'numeric_3',
                                'go_3',
                                '3_months',
                                '3_years',
                                'numeric_3_point_5',
                                'numeric_30',
                                'go_30',
                                '30_months',
                                'numeric_30_point_0_centimeter',
                                'numeric_30_point_5',
                                'numeric_30_point_5_centimeter',
                                'numeric_31',
                                'go_31',
                                'numeric_31_point_0_centimeter',
                                'numeric_31_point_5',
                                'numeric_31_point_5_centimeter',
                                'numeric_32',
                                'go_32',
                                'numeric_32_point_0_centimeter',
                                'numeric_32_point_5',
                                'numeric_32_point_5_centimeter',
                                'numeric_33',
                                'go_33',
                                'numeric_33_point_0_centimeter',
                                'numeric_33_point_5',
                                'numeric_33_point_5_centimeter',
                                'numeric_34',
                                'go_34',
                                'numeric_34_point_0_centimeter',
                                'numeric_34_point_5',
                                'numeric_34_point_5_centimeter',
                                'numeric_35',
                                'go_35',
                                'numeric_35_point_0_centimeter',
                                'numeric_35_point_5',
                                'numeric_35_point_5_centimeter',
                                'numeric_36',
                                'go_36',
                                '36_months',
                                'numeric_36_point_0_centimeter',
                                'numeric_36_point_5',
                                'numeric_36_point_5_centimeter',
                                'numeric_37',
                                'go_37',
                                'numeric_37_point_0_centimeter',
                                'numeric_37_point_5',
                                'numeric_37_point_5_centimeter',
                                'numeric_38',
                                'go_38',
                                'numeric_38_point_0_centimeter',
                                'numeric_38_point_5',
                                'numeric_38_point_5_centimeter',
                                'numeric_39',
                                'go_39',
                                'numeric_39_point_0_centimeter',
                                'numeric_39_point_5',
                                'numeric_39_point_5_centimeter',
                                '3_l',
                                '3x',
                                '3x_l',
                                '3x_s',
                                'jaspo_3x_o',
                                'jaspo_3x_ot',
                                'jaspo_3x_s',
                                'numeric_4',
                                'go_4',
                                '4_months',
                                '4_years',
                                'numeric_4_point_5',
                                'numeric_40',
                                'go_40',
                                'numeric_40_point_0_centimeter',
                                'numeric_40_point_5',
                                'numeric_40_point_5_centimeter',
                                'numeric_41',
                                'go_41',
                                'numeric_41_point_0_centimeter',
                                'numeric_41_point_5',
                                'numeric_41_point_5_centimeter',
                                'numeric_42',
                                'go_42',
                                'numeric_42_point_0_centimeter',
                                'numeric_42_point_5',
                                'numeric_42_point_5_centimeter',
                                'numeric_43',
                                'go_43',
                                'numeric_43_point_0_centimeter',
                                'numeric_43_point_5',
                                'numeric_43_point_5_centimeter',
                                'numeric_44',
                                'go_44',
                                'numeric_44_point_0_centimeter',
                                'numeric_44_point_5',
                                'numeric_44_point_5_centimeter',
                                'numeric_45',
                                'go_45',
                                'numeric_45_point_0_centimeter',
                                'numeric_46',
                                'go_46',
                                'numeric_47',
                                'go_47',
                                'numeric_48',
                                'go_48',
                                'numeric_49',
                                'go_49',
                                '4_l',
                                '4x',
                                '4x_l',
                                '4x_s',
                                'jaspo_4x_o',
                                'jaspo_4x_ot',
                                'jaspo_4x_s',
                                'numeric_5',
                                'go_5',
                                '5_months',
                                '5_years',
                                'numeric_5_point_5',
                                'numeric_50',
                                'numeric_height_50',
                                'go_50',
                                'numeric_51',
                                'numeric_52',
                                'numeric_53',
                                'numeric_54',
                                'numeric_55',
                                'numeric_height_55',
                                'numeric_56',
                                'numeric_57',
                                'numeric_58',
                                'numeric_59',
                                '5_l',
                                '5x',
                                '5x_l',
                                '5x_s',
                                'jaspo_5x_o',
                                'jaspo_5x_ot',
                                'jaspo_5x_s',
                                'numeric_6',
                                'go_6',
                                '6_months',
                                '6_years',
                                'numeric_6_point_5',
                                'numeric_60',
                                'numeric_height_60',
                                'numeric_61',
                                'numeric_62',
                                'numeric_63',
                                'numeric_64',
                                'numeric_65',
                                'numeric_height_65',
                                'numeric_66',
                                'numeric_height_66',
                                'numeric_67',
                                'numeric_height_67',
                                'numeric_68',
                                'numeric_height_68',
                                'numeric_69',
                                'numeric_height_69',
                                '6_l',
                                '6x',
                                '6x_age',
                                '6x_l',
                                '6x_s',
                                'jaspo_6x_o',
                                'jaspo_6x_ot',
                                'jaspo_6x_s',
                                'numeric_7',
                                'go_7',
                                '7_months',
                                '7_years',
                                'numeric_7_point_5',
                                'numeric_70',
                                'numeric_height_70',
                                'numeric_71',
                                'numeric_height_71',
                                'numeric_72',
                                'numeric_height_72',
                                'numeric_73',
                                'numeric_height_73',
                                'numeric_74',
                                'numeric_height_74',
                                'numeric_75',
                                'numeric_height_75',
                                'numeric_76',
                                'numeric_77',
                                'numeric_78',
                                'numeric_79',
                                '7_l',
                                '7x',
                                '7x_age',
                                '7x_l',
                                'jaspo_7x_o',
                                'jaspo_7x_ot',
                                'numeric_8',
                                'go_8',
                                '8_months',
                                '8_years',
                                'numeric_8_point_0_centimeter',
                                'numeric_8_point_5',
                                'numeric_8_point_5_centimeter',
                                'numeric_80',
                                'numeric_height_80',
                                'numeric_81',
                                'numeric_82',
                                'numeric_83',
                                'numeric_84',
                                'numeric_85',
                                'numeric_height_85',
                                'numeric_86',
                                'numeric_87',
                                'numeric_88',
                                'numeric_89',
                                '8_l',
                                '8x',
                                '8x_l',
                                'jaspo_8x_o',
                                'jaspo_8x_ot',
                                'numeric_9',
                                'go_9',
                                '9_months',
                                '9_years',
                                'numeric_9_point_0_centimeter',
                                'numeric_9_point_5',
                                'numeric_9_point_5_centimeter',
                                'numeric_90',
                                'numeric_height_90',
                                'numeric_91',
                                'numeric_92',
                                'numeric_93',
                                'numeric_94',
                                'numeric_95',
                                'numeric_height_95',
                                'numeric_96',
                                'numeric_97',
                                'numeric_98',
                                'numeric_99',
                                '9_l',
                                '9x',
                                '9x_l',
                                'jaspo_9x_o',
                                'jaspo_9x_ot',
                                'a',
                                'b',
                                'c',
                                'd',
                                'e',
                                'f',
                                'free_size',
                                'g',
                                'h',
                                'i',
                                'j',
                                'jaspo_l',
                                'l',
                                'l_l',
                                'jaspo_m',
                                'm',
                                'micro',
                                'newborn',
                                'jaspo_o',
                                'one_size',
                                'jaspo_ot',
                                'preemie',
                                'queen',
                                'jaspo_s',
                                's',
                                'jaspo_s_s',
                                'ss',
                                's_s_s',
                                'teeny',
                                'x_l',
                                'x_s',
                                'jaspo_x_a',
                                'jaspo_x_b',
                                'jaspo_x_c',
                                'xg',
                                'jaspo_x_o',
                                'jaspo_x_ot',
                                'jaspo_x_s',
                                '2x_l',
                                'xx_l',
                                '2x_s',
                                'xx_s',
                                'xxg',
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
          },
        },
      },
    },
  },
  {
    properties: {
      apparel_size: {
        items: {
          if: {
            not: {
              allOf: [
                {
                  not: {
                    required: ['size'],
                    properties: {
                      size: {
                        enum: ['one_size'],
                      },
                    },
                  },
                },
                {
                  required: ['size_class'],
                  properties: {
                    size_class: {
                      enum: ['age', 'alpha', 'numeric'],
                    },
                  },
                },
                {
                  required: ['size_system'],
                  properties: {
                    size_system: {
                      enum: ['as1'],
                    },
                  },
                },
              ],
            },
          },
          then: {
            not: {
              required: ['size_to'],
            },
          },
        },
      },
    },
  },
  {
    if: {
      required: ['apparel_size'],
      properties: {
        apparel_size: {
          items: {
            allOf: [
              {
                required: ['size_class'],
                properties: {
                  size_class: {
                    enum: ['alpha', 'numeric'],
                  },
                },
              },
              {
                required: ['size_system'],
                properties: {
                  size_system: {
                    enum: ['as1'],
                  },
                },
              },
            ],
          },
        },
      },
      allOf: [
        {
          required: ['age_range_description'],
          properties: {
            age_range_description: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: [
                      'Adult',
                      'Big Kid',
                      'Little Kid',
                      'Adulto',
                      'Adolescente',
                      'Niño Chico',
                    ],
                  },
                },
              },
            },
          },
        },
        {
          required: ['target_gender'],
          properties: {
            target_gender: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: ['female'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      properties: {
        apparel_size: {
          items: {
            properties: {
              body_type: {
                enum: ['plus', 'regular'],
              },
            },
          },
        },
      },
    },
    else: {
      if: {
        required: ['apparel_size'],
        properties: {
          apparel_size: {
            items: {
              allOf: [
                {
                  required: ['size_class'],
                  properties: {
                    size_class: {
                      enum: ['alpha', 'numeric'],
                    },
                  },
                },
                {
                  required: ['size_system'],
                  properties: {
                    size_system: {
                      enum: ['as1'],
                    },
                  },
                },
              ],
            },
          },
        },
        allOf: [
          {
            required: ['age_range_description'],
            properties: {
              age_range_description: {
                contains: {
                  required: ['value'],
                  properties: {
                    value: {
                      enum: ['Adult', 'Adulto'],
                    },
                  },
                },
              },
            },
          },
          {
            required: ['target_gender'],
            properties: {
              target_gender: {
                contains: {
                  required: ['value'],
                  properties: {
                    value: {
                      enum: ['male'],
                    },
                  },
                },
              },
            },
          },
        ],
      },
      then: {
        properties: {
          apparel_size: {
            items: {
              properties: {
                body_type: {
                  enum: ['big', 'regular'],
                },
              },
            },
          },
        },
      },
      else: {
        if: {
          required: ['apparel_size'],
          properties: {
            apparel_size: {
              items: {
                allOf: [
                  {
                    required: ['size_class'],
                    properties: {
                      size_class: {
                        enum: ['numeric'],
                      },
                    },
                  },
                  {
                    required: ['size_system'],
                    properties: {
                      size_system: {
                        enum: ['as1'],
                      },
                    },
                  },
                ],
              },
            },
          },
          allOf: [
            {
              required: ['age_range_description'],
              properties: {
                age_range_description: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: [
                          'Big Kid',
                          'Little Kid',
                          'Adolescente',
                          'Niño Chico',
                        ],
                      },
                    },
                  },
                },
              },
            },
            {
              required: ['target_gender'],
              properties: {
                target_gender: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: ['male'],
                      },
                    },
                  },
                },
              },
            },
          ],
        },
        then: {
          properties: {
            apparel_size: {
              items: {
                properties: {
                  body_type: {
                    enum: ['husky', 'regular'],
                  },
                },
              },
            },
          },
        },
        else: {
          if: {
            required: ['apparel_size'],
            properties: {
              apparel_size: {
                items: {
                  allOf: [
                    {
                      required: ['size_class'],
                      properties: {
                        size_class: {
                          enum: ['alpha', 'numeric'],
                        },
                      },
                    },
                    {
                      required: ['size_system'],
                      properties: {
                        size_system: {
                          enum: ['as1'],
                        },
                      },
                    },
                  ],
                },
              },
            },
            allOf: [
              {
                required: ['age_range_description'],
                properties: {
                  age_range_description: {
                    contains: {
                      required: ['value'],
                      properties: {
                        value: {
                          enum: [
                            'Adult',
                            'Big Kid',
                            'Little Kid',
                            'Adulto',
                            'Adolescente',
                            'Niño Chico',
                          ],
                        },
                      },
                    },
                  },
                },
              },
              {
                required: ['target_gender'],
                properties: {
                  target_gender: {
                    contains: {
                      required: ['value'],
                      properties: {
                        value: {
                          enum: ['unisex'],
                        },
                      },
                    },
                  },
                },
              },
            ],
          },
          then: {
            properties: {
              apparel_size: {
                items: {
                  properties: {
                    body_type: {
                      enum: ['regular'],
                    },
                  },
                },
              },
            },
          },
          else: {
            if: {
              required: ['apparel_size'],
              properties: {
                apparel_size: {
                  items: {
                    allOf: [
                      {
                        required: ['size_class'],
                        properties: {
                          size_class: {
                            enum: ['alpha'],
                          },
                        },
                      },
                      {
                        required: ['size_system'],
                        properties: {
                          size_system: {
                            enum: ['as1'],
                          },
                        },
                      },
                    ],
                  },
                },
              },
              allOf: [
                {
                  required: ['age_range_description'],
                  properties: {
                    age_range_description: {
                      contains: {
                        required: ['value'],
                        properties: {
                          value: {
                            enum: [
                              'Big Kid',
                              'Little Kid',
                              'Adolescente',
                              'Niño Chico',
                            ],
                          },
                        },
                      },
                    },
                  },
                },
                {
                  required: ['target_gender'],
                  properties: {
                    target_gender: {
                      contains: {
                        required: ['value'],
                        properties: {
                          value: {
                            enum: ['male'],
                          },
                        },
                      },
                    },
                  },
                },
              ],
            },
            then: {
              properties: {
                apparel_size: {
                  items: {
                    properties: {
                      body_type: {
                        enum: ['regular'],
                      },
                    },
                  },
                },
              },
            },
            else: {
              properties: {
                apparel_size: {
                  items: {
                    properties: {
                      body_type: {
                        enum: [
                          'a',
                          'ab',
                          'b',
                          'bb',
                          'be',
                          'big',
                          'c',
                          'cb',
                          'e',
                          'ee',
                          'f',
                          'h',
                          'husky',
                          'j',
                          'jj',
                          'jy',
                          'k',
                          'kb',
                          'l',
                          'll',
                          'm',
                          'petite',
                          'plus',
                          'regular',
                          's',
                          'slim',
                          'y',
                          'ya',
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
    },
  },
  {
    if: {
      not: {
        required: ['age_range_description', 'apparel_size'],
        properties: {
          age_range_description: {
            contains: {
              required: ['value'],
              properties: {
                value: {
                  enum: [
                    'Adult',
                    'Big Kid',
                    'Little Kid',
                    'Adulto',
                    'Adolescente',
                    'Niño Chico',
                  ],
                },
              },
            },
          },
          apparel_size: {
            items: {
              allOf: [
                {
                  required: ['size_class'],
                  properties: {
                    size_class: {
                      enum: ['alpha', 'numeric'],
                    },
                  },
                },
                {
                  required: ['size_system'],
                  properties: {
                    size_system: {
                      enum: ['as1'],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
    then: {
      properties: {
        apparel_size: {
          items: {
            not: {
              required: ['body_type'],
            },
          },
        },
      },
    },
  },
  {
    if: {
      required: ['age_range_description', 'apparel_size'],
      properties: {
        age_range_description: {
          contains: {
            required: ['value'],
            properties: {
              value: {
                enum: [
                  'Adult',
                  'Big Kid',
                  'Little Kid',
                  'Adulto',
                  'Adolescente',
                  'Niño Chico',
                ],
              },
            },
          },
        },
        apparel_size: {
          items: {
            allOf: [
              {
                required: ['size_class'],
                properties: {
                  size_class: {
                    enum: ['alpha', 'numeric'],
                  },
                },
              },
              {
                required: ['size_system'],
                properties: {
                  size_system: {
                    enum: ['as1'],
                  },
                },
              },
            ],
          },
        },
      },
    },
    then: {
      properties: {
        apparel_size: {
          items: {
            required: ['body_type'],
          },
        },
      },
    },
  },
  {
    if: {
      required: ['apparel_size'],
      properties: {
        apparel_size: {
          items: {
            allOf: [
              {
                required: ['size_class'],
                properties: {
                  size_class: {
                    enum: ['alpha', 'numeric'],
                  },
                },
              },
              {
                required: ['size_system'],
                properties: {
                  size_system: {
                    enum: ['as1'],
                  },
                },
              },
            ],
          },
        },
      },
      allOf: [
        {
          required: ['age_range_description'],
          properties: {
            age_range_description: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: ['Adult', 'Adulto'],
                  },
                },
              },
            },
          },
        },
        {
          required: ['target_gender'],
          properties: {
            target_gender: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: ['female'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      properties: {
        apparel_size: {
          items: {
            properties: {
              height_type: {
                enum: [
                  'extra_long',
                  'extra_tall',
                  'long',
                  'petite',
                  'regular',
                  'short',
                  'tall',
                ],
              },
            },
          },
        },
      },
    },
    else: {
      if: {
        required: ['apparel_size'],
        properties: {
          apparel_size: {
            items: {
              allOf: [
                {
                  required: ['size_class'],
                  properties: {
                    size_class: {
                      enum: ['alpha', 'numeric'],
                    },
                  },
                },
                {
                  required: ['size_system'],
                  properties: {
                    size_system: {
                      enum: ['as1'],
                    },
                  },
                },
              ],
            },
          },
        },
        allOf: [
          {
            required: ['age_range_description'],
            properties: {
              age_range_description: {
                contains: {
                  required: ['value'],
                  properties: {
                    value: {
                      enum: ['Adult', 'Adulto'],
                    },
                  },
                },
              },
            },
          },
          {
            required: ['target_gender'],
            properties: {
              target_gender: {
                contains: {
                  required: ['value'],
                  properties: {
                    value: {
                      enum: ['male'],
                    },
                  },
                },
              },
            },
          },
        ],
      },
      then: {
        properties: {
          apparel_size: {
            items: {
              properties: {
                height_type: {
                  enum: ['extra_tall', 'regular', 'short', 'tall'],
                },
              },
            },
          },
        },
      },
      else: {
        if: {
          required: ['apparel_size'],
          properties: {
            apparel_size: {
              items: {
                allOf: [
                  {
                    required: ['size_class'],
                    properties: {
                      size_class: {
                        enum: ['alpha', 'numeric'],
                      },
                    },
                  },
                  {
                    required: ['size_system'],
                    properties: {
                      size_system: {
                        enum: ['as1'],
                      },
                    },
                  },
                ],
              },
            },
          },
          allOf: [
            {
              required: ['age_range_description'],
              properties: {
                age_range_description: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: ['Adult', 'Adulto'],
                      },
                    },
                  },
                },
              },
            },
            {
              required: ['target_gender'],
              properties: {
                target_gender: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: ['unisex'],
                      },
                    },
                  },
                },
              },
            },
          ],
        },
        then: {
          properties: {
            apparel_size: {
              items: {
                properties: {
                  height_type: {
                    enum: [
                      'extra_long',
                      'extra_tall',
                      'long',
                      'regular',
                      'short',
                      'tall',
                    ],
                  },
                },
              },
            },
          },
        },
        else: {
          properties: {
            apparel_size: {
              items: {
                properties: {
                  height_type: {
                    enum: [
                      '2',
                      '3',
                      '4',
                      '5',
                      '6',
                      '7',
                      '8',
                      '9',
                      'extra_long',
                      'extra_tall',
                      'long',
                      'p',
                      'petite',
                      'pp',
                      'q',
                      'r',
                      'regular',
                      'short',
                      't',
                      'tall',
                      'tt',
                      'w',
                      'y',
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
  {
    if: {
      not: {
        required: ['age_range_description', 'apparel_size'],
        properties: {
          age_range_description: {
            contains: {
              required: ['value'],
              properties: {
                value: {
                  enum: ['Adult', 'Adulto'],
                },
              },
            },
          },
          apparel_size: {
            items: {
              allOf: [
                {
                  required: ['size_class'],
                  properties: {
                    size_class: {
                      enum: ['alpha', 'numeric'],
                    },
                  },
                },
                {
                  required: ['size_system'],
                  properties: {
                    size_system: {
                      enum: ['as1'],
                    },
                  },
                },
              ],
            },
          },
        },
      },
    },
    then: {
      properties: {
        apparel_size: {
          items: {
            not: {
              required: ['height_type'],
            },
          },
        },
      },
    },
  },
  {
    if: {
      required: ['age_range_description', 'apparel_size'],
      properties: {
        age_range_description: {
          contains: {
            required: ['value'],
            properties: {
              value: {
                enum: ['Adult', 'Adulto'],
              },
            },
          },
        },
        apparel_size: {
          items: {
            allOf: [
              {
                required: ['size_class'],
                properties: {
                  size_class: {
                    enum: ['alpha', 'numeric'],
                  },
                },
              },
              {
                required: ['size_system'],
                properties: {
                  size_system: {
                    enum: ['as1'],
                  },
                },
              },
            ],
          },
        },
      },
    },
    then: {
      properties: {
        apparel_size: {
          items: {
            required: ['height_type'],
          },
        },
      },
    },
  },
  {
    allOf: [
      {
        if: {
          allOf: [
            {
              required: ['child_parent_sku_relationship'],
              properties: {
                child_parent_sku_relationship: {
                  items: {
                    required: ['parent_sku'],
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
            {
              required: ['variation_theme'],
              properties: {
                variation_theme: {
                  contains: {
                    required: ['name'],
                    properties: {
                      name: {
                        enum: [
                          'TEAM_NAME/ATHLETE/COLOR/SIZE',
                          'TEAM_NAME/COLOR/SIZE',
                          'TEAM_NAME/ATHLETE/SIZE',
                          'MODEL_NUMBER/SIZE',
                          'SIZE/COLOR/NUMBER_OF_ITEMS',
                          'SIZE/MATERIAL',
                          'STYLE/MODEL_NUMBER/MATERIAL/SIZE/NUMBER_OF_ITEMS/PART_NUMBER',
                          'SPECIAL_SIZE_TYPE/SIZE_NAME/COLOR_NAME',
                          'SIZE_NAME/MATERIAL_TYPE',
                          'SIZE_NAME/SCENT_NAME',
                          'SIZE_NAME/STYLE_NAME/COLOR_NAME',
                          'NUMBER_OF_ITEMS/COLOR_NAME/SIZE_NAME',
                          'COLOR_NAME/SIZE_NAME/PATTERN_NAME',
                          'CUP_SIZE/SIZE_NAME',
                          'TEAM_NAME/SIZE/COLOR',
                          'SIZE',
                          'FIT_TYPE/SIZE_NAME/COLOR_NAME',
                          'SIZE_NAME/COLOR_NAME/CONFIGURATION',
                          'SIZE_NAME/STYLE_NAME',
                          'FLAVOR/SIZE',
                          'ITEM_SHAPE/COLOR_NAME/SIZE_NAME',
                          'SIZE/COLOR',
                          'PATTERN_NAME/SIZE_NAME',
                          'TEAM_NAME/ATHLETE/SIZE_NAME/COLOR_NAME',
                          'COLOR_NAME/SIZE_NAME/STYLE_NAME',
                          'STYLE/SIZE',
                          'SIZE_NAME/COLOR_NAME/PATTERN_NAME',
                          'SIZE_NAME/STYLE_NAME/CUSTOMER_PACKAGE_TYPE',
                          'COLOR/SIZE',
                          'SIZE/NUMBER_OF_ITEMS',
                          'STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER',
                          'ITEM_SHAPE/SIZE_NAME',
                          'FIT_TYPE/COLOR_NAME/SIZE_NAME',
                          'VERSION_FOR_COUNTRY/COLOR_NAME/SIZE_NAME',
                          'STYLE_NAME/SIZE_NAME/COLOR_NAME',
                          'SIZE_NAME/COLOR_NAME/FIT_TYPE',
                          'SIZE/COLOR/TEAM_NAME/ATHLETE',
                          'TEAM_NAME/SIZE',
                          'FLAVOR_NAME/SIZE_NAME',
                          'SIZE_NAME',
                          'SIZE_NAME/COLOR_NAME',
                          'CUP_SIZE/COLOR_NAME/SIZE_NAME',
                          'STYLE_NAME/COLOR_NAME/SIZE_NAME',
                          'ITEM_PACKAGE_QUANTITY/SIZE_NAME',
                          'TEAM_NAME/SIZE_NAME/COLOR_NAME',
                          'STYLE_NAME/PATTERN_NAME/SIZE_NAME',
                          'BAND_COLOR/SIZE_NAME',
                          'MATERIAL_TYPE/SIZE_NAME',
                          'STYLE_NAME/SIZE_NAME',
                          'SIZE/STYLE/COLOR',
                          'SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS',
                          'SIZE/COLOR/TEAM_NAME',
                          'SIZE_NAME/UNIT_COUNT',
                          'COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME',
                          'SPECIAL_SIZE_TYPE/SIZE/COLOR',
                          'MATERIAL_TYPE/COLOR_NAME/SIZE_NAME',
                          'STYLE_NAME/SIZE_NAME/COLOR_NAME/CONFIGURATION',
                          'SIZE_NAME/NUMBER_OF_ITEMS',
                          'COLOR_NAME/SIZE_NAME',
                          'TEAM_NAME/SIZE_NAME',
                          'SIZE/STYLE',
                          'MODEL/SIZE_NAME',
                          'SIZE_NAME/COLOR_NAME/CUSTOMER_PACKAGE_TYPE',
                        ],
                      },
                    },
                  },
                },
              },
            },
          ],
        },
        then: {
          required: ['apparel_size'],
        },
      },
      {
        if: {
          anyOf: [
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
        then: {
          required: ['apparel_size'],
        },
      },
      {
        if: {
          anyOf: [
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
        then: {
          required: ['apparel_size'],
        },
      },
    ],
  },
];

const result = validator(rules, keys, {
  age_range_description: [
    {
      value: 'Adult',
      language_tag: 'en_US',
      marketplace_id: 'ATVPDKIKX0DER',
    },
  ],
  target_gender: [
    {
      value: 'unisex',
      marketplace_id: 'ATVPDKIKX0DER',
    },
  ],
  apparel_size: [
    {
      size: 'm',
      size_system: 'as1',
      // body_type: 'regular',
      // height_type: 'regular',
      // size_class: 'alpha',
      marketplace_id: 'ATVPDKIKX0DER',
    },
  ],
});

console.log({ result });
