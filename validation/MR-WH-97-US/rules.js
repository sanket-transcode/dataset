const rules = [
  {
    if: {
      anyOf: [
        {
          allOf: [
            {
              not: {
                required: ['merchant_suggested_asin'],
                properties: {
                  merchant_suggested_asin: {
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
                    items: {
                      required: ['value'],
                    },
                  },
                },
              },
            },
            {
              required: ['supplier_declared_has_product_identifier_exemption'],
              properties: {
                supplier_declared_has_product_identifier_exemption: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: [false],
                      },
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
              not: {
                required: ['merchant_suggested_asin'],
                properties: {
                  merchant_suggested_asin: {
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
            {
              required: ['supplier_declared_has_product_identifier_exemption'],
              properties: {
                supplier_declared_has_product_identifier_exemption: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: [false],
                      },
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
              not: {
                required: ['merchant_suggested_asin'],
                properties: {
                  merchant_suggested_asin: {
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
                    items: {
                      required: ['value'],
                    },
                  },
                },
              },
            },
            {
              not: {
                required: [
                  'supplier_declared_has_product_identifier_exemption',
                ],
                properties: {
                  supplier_declared_has_product_identifier_exemption: {
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
              not: {
                required: ['merchant_suggested_asin'],
                properties: {
                  merchant_suggested_asin: {
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
            {
              not: {
                required: [
                  'supplier_declared_has_product_identifier_exemption',
                ],
                properties: {
                  supplier_declared_has_product_identifier_exemption: {
                    items: {
                      required: ['value'],
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
      required: ['externally_assigned_product_identifier'],
    },
  },
  {
    if: {
      anyOf: [
        {
          allOf: [
            {
              not: {
                required: ['externally_assigned_product_identifier'],
                properties: {
                  externally_assigned_product_identifier: {
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
                    items: {
                      required: ['value'],
                    },
                  },
                },
              },
            },
            {
              required: ['supplier_declared_has_product_identifier_exemption'],
              properties: {
                supplier_declared_has_product_identifier_exemption: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: [false],
                      },
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
              not: {
                required: ['externally_assigned_product_identifier'],
                properties: {
                  externally_assigned_product_identifier: {
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
            {
              required: ['supplier_declared_has_product_identifier_exemption'],
              properties: {
                supplier_declared_has_product_identifier_exemption: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: [false],
                      },
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
              not: {
                required: ['externally_assigned_product_identifier'],
                properties: {
                  externally_assigned_product_identifier: {
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
                    items: {
                      required: ['value'],
                    },
                  },
                },
              },
            },
            {
              not: {
                required: [
                  'supplier_declared_has_product_identifier_exemption',
                ],
                properties: {
                  supplier_declared_has_product_identifier_exemption: {
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
              not: {
                required: ['externally_assigned_product_identifier'],
                properties: {
                  externally_assigned_product_identifier: {
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
            {
              not: {
                required: [
                  'supplier_declared_has_product_identifier_exemption',
                ],
                properties: {
                  supplier_declared_has_product_identifier_exemption: {
                    items: {
                      required: ['value'],
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
      required: ['merchant_suggested_asin'],
    },
  },
  {
    if: {
      anyOf: [
        {
          allOf: [
            {
              required: ['package_level'],
              properties: {
                package_level: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: ['case', 'pallet'],
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
              required: ['package_level'],
              properties: {
                package_level: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: ['case', 'pallet'],
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
      required: ['package_contains_sku'],
    },
  },
  {
    allOf: [
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
          required: ['model_number'],
        },
      },
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
                          'MODEL_NUMBER/SIZE',
                          'STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER',
                          'MODEL',
                          'MODEL/STYLE_NAME/PART_NUMBER',
                          'MODEL/SIZE_NAME',
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
          required: ['model_number'],
        },
      },
    ],
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
      required: [
        'frame',
        'included_components',
        'is_assembly_required',
        'manufacturer',
        'model_name',
        'mounting_type',
        'room_type',
        'special_feature',
      ],
      properties: {
        frame: {
          items: {
            required: ['material'],
          },
        },
      },
    },
  },
  {
    properties: {
      fulfillment_availability: {
        items: {
          if: {
            allOf: [
              {
                required: ['fulfillment_channel_code'],
                properties: {
                  fulfillment_channel_code: {
                    enum: ['DEFAULT', 'fbce2652-d49b-4a0e-b3ca-239db8c59fb3'],
                  },
                },
              },
              {
                not: {
                  required: ['is_inventory_available'],
                },
              },
            ],
          },
          then: {
            required: ['quantity'],
          },
        },
      },
    },
  },
  {
    properties: {
      fulfillment_availability: {
        items: {
          if: {
            not: {
              allOf: [
                {
                  required: ['fulfillment_channel_code'],
                  properties: {
                    fulfillment_channel_code: {
                      enum: ['DEFAULT', 'fbce2652-d49b-4a0e-b3ca-239db8c59fb3'],
                    },
                  },
                },
                {
                  not: {
                    required: ['is_inventory_available'],
                  },
                },
              ],
            },
          },
          then: {
            not: {
              required: ['quantity'],
            },
          },
        },
      },
    },
  },
  {
    properties: {
      fulfillment_availability: {
        items: {
          if: {
            not: {
              required: ['fulfillment_channel_code'],
              properties: {
                fulfillment_channel_code: {
                  enum: ['DEFAULT', 'fbce2652-d49b-4a0e-b3ca-239db8c59fb3'],
                },
              },
            },
          },
          then: {
            not: {
              required: ['lead_time_to_ship_max_days'],
            },
          },
        },
      },
    },
  },
  {
    properties: {
      fulfillment_availability: {
        items: {
          if: {
            not: {
              required: ['fulfillment_channel_code'],
              properties: {
                fulfillment_channel_code: {
                  enum: ['DEFAULT', 'fbce2652-d49b-4a0e-b3ca-239db8c59fb3'],
                },
              },
            },
          },
          then: {
            not: {
              required: ['restock_date'],
            },
          },
        },
      },
    },
  },
  {
    properties: {
      fulfillment_availability: {
        items: {
          if: {
            allOf: [
              {
                required: ['fulfillment_channel_code'],
                properties: {
                  fulfillment_channel_code: {
                    enum: ['DEFAULT', 'fbce2652-d49b-4a0e-b3ca-239db8c59fb3'],
                  },
                },
              },
              {
                not: {
                  required: ['quantity'],
                },
              },
            ],
          },
          then: {
            required: ['is_inventory_available'],
          },
        },
      },
    },
  },
  {
    properties: {
      fulfillment_availability: {
        items: {
          if: {
            not: {
              allOf: [
                {
                  required: ['fulfillment_channel_code'],
                  properties: {
                    fulfillment_channel_code: {
                      enum: ['DEFAULT', 'fbce2652-d49b-4a0e-b3ca-239db8c59fb3'],
                    },
                  },
                },
                {
                  not: {
                    required: ['quantity'],
                  },
                },
              ],
            },
          },
          then: {
            not: {
              required: ['is_inventory_available'],
            },
          },
        },
      },
    },
  },
  {
    if: {
      allOf: [
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
          not: {
            required: ['skip_offer'],
            properties: {
              skip_offer: {
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
        },
      ],
    },
    then: {
      required: ['fulfillment_availability'],
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          properties: {
            map_price: {
              properties: {
                schedule: {
                  if: {
                    required: ['currency'],
                    properties: {
                      currency: {
                        enum: ['JPY'],
                      },
                    },
                  },
                  then: {
                    properties: {
                      value_with_tax: {
                        multipleOf: 1,
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
      purchasable_offer: {
        items: {
          if: {
            anyOf: [
              {
                required: ['audience'],
                properties: {
                  audience: {
                    enum: ['ALL'],
                  },
                },
              },
              {
                not: {
                  required: ['audience'],
                },
              },
            ],
          },
          then: {
            properties: {
              map_price: {
                maxItems: 1,
              },
            },
          },
          else: {
            not: {
              required: ['map_price'],
            },
          },
        },
      },
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          properties: {
            our_price: {
              properties: {
                schedule: {
                  if: {
                    required: ['currency'],
                    properties: {
                      currency: {
                        enum: ['JPY'],
                      },
                    },
                  },
                  then: {
                    properties: {
                      value_with_tax: {
                        multipleOf: 1,
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
      purchasable_offer: {
        items: {
          if: {
            anyOf: [
              {
                required: ['discounted_price'],
                properties: {
                  discounted_price: {
                    items: {
                      required: ['schedule'],
                      properties: {
                        schedule: {
                          items: {
                            required: ['value_with_tax'],
                          },
                        },
                      },
                    },
                  },
                },
              },
              {
                required: ['audience'],
                properties: {
                  audience: {
                    enum: ['B2B'],
                  },
                },
              },
            ],
          },
          then: {
            required: ['our_price'],
            properties: {
              our_price: {
                minItems: 1,
              },
            },
          },
        },
      },
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          if: {
            anyOf: [
              {
                required: ['audience'],
                properties: {
                  audience: {
                    enum: ['ALL'],
                  },
                },
              },
              {
                not: {
                  required: ['audience'],
                },
              },
            ],
          },
          then: {
            properties: {
              automated_pricing_merchandising_rule_plan: {
                maxItems: 1,
              },
            },
          },
          else: {
            not: {
              required: ['automated_pricing_merchandising_rule_plan'],
            },
          },
        },
      },
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          properties: {
            minimum_seller_allowed_price: {
              properties: {
                schedule: {
                  if: {
                    required: ['currency'],
                    properties: {
                      currency: {
                        enum: ['JPY'],
                      },
                    },
                  },
                  then: {
                    properties: {
                      value_with_tax: {
                        multipleOf: 1,
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
      purchasable_offer: {
        items: {
          if: {
            anyOf: [
              {
                required: ['audience'],
                properties: {
                  audience: {
                    enum: ['ALL'],
                  },
                },
              },
              {
                required: ['audience'],
                properties: {
                  audience: {
                    enum: ['B2B'],
                  },
                },
              },
              {
                not: {
                  required: ['audience'],
                },
              },
            ],
          },
          then: {
            properties: {
              minimum_seller_allowed_price: {
                maxItems: 1,
              },
            },
          },
        },
      },
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          properties: {
            maximum_seller_allowed_price: {
              properties: {
                schedule: {
                  if: {
                    required: ['currency'],
                    properties: {
                      currency: {
                        enum: ['JPY'],
                      },
                    },
                  },
                  then: {
                    properties: {
                      value_with_tax: {
                        multipleOf: 1,
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
      purchasable_offer: {
        items: {
          if: {
            anyOf: [
              {
                required: ['audience'],
                properties: {
                  audience: {
                    enum: ['ALL'],
                  },
                },
              },
              {
                required: ['audience'],
                properties: {
                  audience: {
                    enum: ['B2B'],
                  },
                },
              },
              {
                not: {
                  required: ['audience'],
                },
              },
            ],
          },
          then: {
            properties: {
              maximum_seller_allowed_price: {
                maxItems: 1,
              },
            },
          },
        },
      },
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          properties: {
            discounted_price: {
              properties: {
                schedule: {
                  if: {
                    required: ['currency'],
                    properties: {
                      currency: {
                        enum: ['JPY'],
                      },
                    },
                  },
                  then: {
                    properties: {
                      value_with_tax: {
                        multipleOf: 1,
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
      purchasable_offer: {
        items: {
          if: {
            anyOf: [
              {
                required: ['audience'],
                properties: {
                  audience: {
                    enum: ['ALL'],
                  },
                },
              },
              {
                not: {
                  required: ['audience'],
                },
              },
            ],
          },
          then: {
            properties: {
              discounted_price: {
                maxItems: 1,
              },
            },
          },
          else: {
            not: {
              required: ['discounted_price'],
            },
          },
        },
      },
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          properties: {
            quantity_discount_plan: {
              properties: {
                schedule: {
                  properties: {
                    levels: {
                      if: {
                        required: ['currency'],
                        properties: {
                          currency: {
                            enum: ['JPY'],
                          },
                        },
                      },
                      then: {
                        properties: {
                          value: {
                            multipleOf: 1,
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
    if: {
      required: ['purchasable_offer'],
      properties: {
        purchasable_offer: {
          contains: {
            required: ['quantity_discount_plan'],
            properties: {
              quantity_discount_plan: {
                contains: {
                  required: ['schedule'],
                  properties: {
                    schedule: {
                      contains: {
                        required: ['discount_type'],
                        properties: {
                          discount_type: {
                            enum: ['percent'],
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
    then: {
      properties: {
        purchasable_offer: {
          items: {
            properties: {
              quantity_discount_plan: {
                properties: {
                  schedule: {
                    properties: {
                      levels: {
                        properties: {
                          value: {
                            maximum: 99,
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
      purchasable_offer: {
        items: {
          if: {
            required: ['audience'],
            properties: {
              audience: {
                enum: ['B2B'],
              },
            },
          },
          then: {
            properties: {
              quantity_discount_plan: {
                maxItems: 1,
              },
            },
          },
          else: {
            not: {
              required: ['quantity_discount_plan'],
            },
          },
        },
      },
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          properties: {
            variable_weight_based_price: {
              if: {
                required: ['variable_weight_based_price#?'],
                properties: {
                  'variable_weight_based_price#?': {
                    contains: {
                      required: ['pricing_strategy'],
                      properties: {
                        pricing_strategy: {
                          enum: ['produce_by_uom'],
                        },
                      },
                    },
                  },
                },
              },
              then: {
                required: ['average_size_measurement'],
              },
            },
          },
        },
      },
    },
  },
  {
    properties: {
      purchasable_offer: {
        items: {
          properties: {
            variable_weight_based_price: {
              properties: {
                inventory_measurement: {
                  if: {
                    required: ['variable_weight_based_price#?'],
                    properties: {
                      'variable_weight_based_price#?': {
                        contains: {
                          required: ['inventory_measurement'],
                          properties: {
                            inventory_measurement: {
                              contains: {
                                required: ['type'],
                                properties: {
                                  type: {
                                    enum: ['weight'],
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
                      unit: {
                        enum: ['grams', 'kilograms', 'ounces', 'pounds'],
                      },
                    },
                  },
                  else: {
                    if: {
                      required: ['variable_weight_based_price#?'],
                      properties: {
                        'variable_weight_based_price#?': {
                          contains: {
                            required: ['inventory_measurement'],
                            properties: {
                              inventory_measurement: {
                                contains: {
                                  required: ['type'],
                                  properties: {
                                    type: {
                                      enum: ['count'],
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
                        unit: {
                          enum: ['units'],
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
      purchasable_offer: {
        items: {
          properties: {
            variable_weight_based_price: {
              properties: {
                merchant_sale_measurement: {
                  if: {
                    required: ['variable_weight_based_price#?'],
                    properties: {
                      'variable_weight_based_price#?': {
                        contains: {
                          required: ['merchant_sale_measurement'],
                          properties: {
                            merchant_sale_measurement: {
                              contains: {
                                required: ['type'],
                                properties: {
                                  type: {
                                    enum: ['weight'],
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
                      unit: {
                        enum: ['grams', 'kilograms', 'ounces', 'pounds'],
                      },
                    },
                  },
                  else: {
                    if: {
                      required: ['variable_weight_based_price#?'],
                      properties: {
                        'variable_weight_based_price#?': {
                          contains: {
                            required: ['merchant_sale_measurement'],
                            properties: {
                              merchant_sale_measurement: {
                                contains: {
                                  required: ['type'],
                                  properties: {
                                    type: {
                                      enum: ['count'],
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
                        unit: {
                          enum: ['units'],
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
    if: {
      anyOf: [
        {
          allOf: [
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
                required: ['skip_offer'],
                properties: {
                  skip_offer: {
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
            },
          ],
        },
        {
          allOf: [
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
              not: {
                required: ['skip_offer'],
                properties: {
                  skip_offer: {
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
            },
          ],
        },
      ],
    },
    then: {
      required: ['condition_type'],
    },
  },
  {
    if: {
      anyOf: [
        {
          allOf: [
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
                required: ['skip_offer'],
                properties: {
                  skip_offer: {
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
            },
          ],
        },
        {
          allOf: [
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
              not: {
                required: ['skip_offer'],
                properties: {
                  skip_offer: {
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
            },
          ],
        },
      ],
    },
    then: {
      required: ['list_price'],
    },
  },
  {
    if: {
      anyOf: [
        {
          allOf: [
            {
              required: ['fulfillment_availability'],
              properties: {
                fulfillment_availability: {
                  contains: {
                    required: ['fulfillment_channel_code'],
                    properties: {
                      fulfillment_channel_code: {
                        enum: [
                          'DEFAULT',
                          'fbce2652-d49b-4a0e-b3ca-239db8c59fb3',
                        ],
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
            {
              not: {
                required: ['skip_offer'],
                properties: {
                  skip_offer: {
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
            },
          ],
        },
        {
          allOf: [
            {
              required: ['fulfillment_availability'],
              properties: {
                fulfillment_availability: {
                  contains: {
                    required: ['fulfillment_channel_code'],
                    properties: {
                      fulfillment_channel_code: {
                        enum: [
                          'DEFAULT',
                          'fbce2652-d49b-4a0e-b3ca-239db8c59fb3',
                        ],
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
            {
              not: {
                required: ['skip_offer'],
                properties: {
                  skip_offer: {
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
            },
          ],
        },
      ],
    },
    then: {
      required: ['merchant_shipping_group'],
    },
  },
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
                      'PATTERN_NAME/STYLE_NAME',
                      'STYLE_NAME/SIZE_NAME',
                      'SIZE_NAME/STYLE_NAME/PATTERN_NAME',
                      'NUMBER_OF_ITEMS/STYLE_NAME',
                      'STYLE_NAME/CUSTOMER_PACKAGE_TYPE',
                      'STYLE_NAME/SIZE_NAME/COLOR_NAME',
                      'STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER',
                      'STYLE_NAME/MATERIAL_TYPE',
                      'STYLE_NAME/COLOR_NAME/SIZE_NAME',
                      'STYLE_NAME/PATTERN_NAME/COLOR_NAME',
                      'SIZE_NAME/STYLE_NAME',
                      'COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME',
                      'ITEM_PACKAGE_QUANTITY/STYLE_NAME',
                      'STYLE_NAME/PATTERN_NAME',
                      'COLOR_NAME/STYLE_NAME',
                      'COLOR_NAME/STYLE_NAME/PATTERN_NAME',
                      'MATERIAL_TYPE/STYLE_NAME',
                      'MODEL/STYLE_NAME/PART_NUMBER',
                      'STYLE_NAME/UNIT_COUNT',
                      'STYLE_NAME/COLOR_NAME',
                      'STYLE_NAME',
                      'COLOR_NAME/SIZE_NAME/STYLE_NAME',
                      'COLOR_NAME/STYLE_NAME/ITEM_SHAPE',
                      'SIZE_NAME/STYLE_NAME/COLOR_NAME',
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
      required: ['style'],
    },
  },
  {
    allOf: [
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
          required: ['material'],
        },
      },
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
                          'COLOR/MATERIAL',
                          'MATERIAL/COLOR',
                          'MATERIAL/SIZE',
                          'SIZE/MATERIAL',
                          'MATERIAL_TYPE/COLOR_NAME',
                          'COLOR_NAME/MATERIAL_TYPE',
                          'ITEM_PACKAGE_QUANTITY/MATERIAL_TYPE',
                          'STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER',
                          'MATERIAL_TYPE/SIZE_NAME',
                          'STYLE_NAME/MATERIAL_TYPE',
                          'MATERIAL_TYPE/ITEM_DISPLAY_HEIGHT',
                          'MATERIAL_TYPE/STYLE_NAME',
                          'MATERIAL_TYPE',
                          'SIZE_NAME/MATERIAL_TYPE',
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
          required: ['material'],
        },
      },
    ],
  },
  {
    allOf: [
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
          required: ['number_of_items'],
        },
      },
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
                          'SIZE/COLOR/NUMBER_OF_ITEMS',
                          'SIZE_NAME/NUMBER_OF_ITEMS',
                          'NUMBER_OF_ITEMS/STYLE_NAME',
                          'COLOR_NAME/NUMBER_OF_ITEMS',
                          'STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER',
                          'NUMBER_OF_ITEMS',
                          'SIZE/NUMBER_OF_ITEMS',
                          'SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS',
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
          required: ['number_of_items'],
        },
      },
    ],
  },
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
                      'ITEM_PACKAGE_QUANTITY/COLOR_NAME',
                      'ITEM_PACKAGE_QUANTITY/ITEM_SHAPE',
                      'ITEM_PACKAGE_QUANTITY',
                      'ITEM_PACKAGE_QUANTITY/SIZE',
                      'COLOR_NAME/ITEM_PACKAGE_QUANTITY',
                      'ITEM_PACKAGE_QUANTITY/MATERIAL_TYPE',
                      'ITEM_PACKAGE_QUANTITY/SIZE_NAME',
                      'ITEM_PACKAGE_QUANTITY/ITEM_DISPLAY_HEIGHT',
                      'COLOR/ITEM_PACKAGE_QUANTITY',
                      'ITEM_PACKAGE_QUANTITY/STYLE_NAME',
                      'ITEM_PACKAGE_QUANTITY/COLOR',
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
      required: ['item_package_quantity'],
    },
  },
  {
    allOf: [
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
          required: ['color'],
        },
      },
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
                          'COLOR/MATERIAL',
                          'MATERIAL/COLOR',
                          'SIZE/COLOR/NUMBER_OF_ITEMS',
                          'TEAM_NAME/SIZE_NAME/COLOR_NAME',
                          'COLOR_NAME/ITEM_DISPLAY_WIDTH',
                          'ITEM_PACKAGE_QUANTITY/COLOR_NAME',
                          'MATERIAL_TYPE/COLOR_NAME',
                          'COLOR_NAME/NUMBER_OF_ITEMS',
                          'SIZE/COLOR',
                          'COLOR_NAME/ITEM_DISPLAY_HEIGHT',
                          'COLOR_NAME/MATERIAL_TYPE',
                          'COLOR_NAME/ITEM_PACKAGE_QUANTITY',
                          'STYLE_NAME/SIZE_NAME/COLOR_NAME',
                          'COLOR',
                          'STYLE_NAME/COLOR_NAME/SIZE_NAME',
                          'SIZE_NAME/COLOR_NAME',
                          'SIZE_NAME/COLOR_NAME/PATTERN_NAME',
                          'ITEM_SHAPE/COLOR_NAME/SIZE_NAME',
                          'STYLE_NAME/PATTERN_NAME/COLOR_NAME',
                          'COLOR/ITEM_PACKAGE_QUANTITY',
                          'COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME',
                          'COLOR_NAME/STYLE_NAME',
                          'COLOR_NAME/PATTERN_NAME',
                          'PATTERN_NAME/COLOR_NAME',
                          'ITEM_SHAPE/COLOR_NAME',
                          'COLOR_NAME/METAL_TYPE',
                          'COLOR_NAME/SIZE_NAME/PATTERN_NAME',
                          'COLOR_NAME/STYLE_NAME/PATTERN_NAME',
                          'STYLE_NAME/COLOR_NAME',
                          'COLOR_NAME/MAGNIFICATION_STRENGTH',
                          'COLOR/SIZE',
                          'COLOR_NAME',
                          'ITEM_PACKAGE_QUANTITY/COLOR',
                          'COLOR_NAME/SIZE_NAME/STYLE_NAME',
                          'COLOR_NAME/ITEM_DISPLAY_WEIGHT',
                          'COLOR_NAME/STYLE_NAME/ITEM_SHAPE',
                          'COLOR_NAME/SIZE_NAME',
                          'COLOR_NAME/ITEM_DISPLAY_LENGTH',
                          'COLOR_NAME/ITEM_SHAPE',
                          'SIZE_NAME/STYLE_NAME/COLOR_NAME',
                          'SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS',
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
          required: ['color'],
        },
      },
    ],
  },
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
                    enum: ['RING_SIZE'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['ring'],
      properties: {
        ring: {
          items: {
            required: ['size'],
          },
        },
      },
    },
  },
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
                      'MATERIAL/SIZE',
                      'MODEL_NUMBER/SIZE',
                      'SIZE/COLOR/NUMBER_OF_ITEMS',
                      'SIZE/MATERIAL',
                      'TEAM_NAME/SIZE_NAME',
                      'TEAM_NAME/SIZE_NAME/COLOR_NAME',
                      'SIZE_NAME/NUMBER_OF_ITEMS',
                      'STYLE_NAME/SIZE_NAME',
                      'SIZE_NAME/STYLE_NAME/PATTERN_NAME',
                      'SIZE/COLOR',
                      'ITEM_PACKAGE_QUANTITY/SIZE',
                      'SIZE_NAME',
                      'STYLE_NAME/SIZE_NAME/COLOR_NAME',
                      'STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER',
                      'MATERIAL_TYPE/SIZE_NAME',
                      'STYLE_NAME/COLOR_NAME/SIZE_NAME',
                      'SIZE_NAME/COLOR_NAME',
                      'SIZE_NAME/COLOR_NAME/PATTERN_NAME',
                      'SIZE_NAME/PATTERN_NAME',
                      'ITEM_PACKAGE_QUANTITY/SIZE_NAME',
                      'ITEM_SHAPE/COLOR_NAME/SIZE_NAME',
                      'SIZE_NAME/STYLE_NAME',
                      'COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME',
                      'SIZE_NAME/ITEM_DISPLAY_LENGTH',
                      'SIZE/UNIT_COUNT',
                      'COLOR_NAME/SIZE_NAME/PATTERN_NAME',
                      'ITEM_SHAPE/SIZE',
                      'SIZE',
                      'SIZE_NAME/ITEM_DISPLAY_HEIGHT',
                      'PATTERN_NAME/SIZE_NAME',
                      'SIZE_NAME/SCENT_NAME',
                      'MODEL/SIZE_NAME',
                      'COLOR/SIZE',
                      'SIZE_NAME/ITEM_DISPLAY_WIDTH',
                      'ITEM_SHAPE/SIZE_NAME',
                      'SIZE/NUMBER_OF_ITEMS',
                      'COLOR_NAME/SIZE_NAME/STYLE_NAME',
                      'COLOR_NAME/SIZE_NAME',
                      'SIZE_NAME/MATERIAL_TYPE',
                      'FLAVOR_NAME/SIZE_NAME',
                      'SIZE_NAME/STYLE_NAME/COLOR_NAME',
                      'SIZE_NAME/UNIT_COUNT',
                      'ITEM_DISPLAY_LENGTH/SIZE_NAME',
                      'SIZE_NAME/ITEM_SHAPE',
                      'SIZE_NAME/COLOR_NAME/NUMBER_OF_ITEMS',
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
      required: ['size'],
    },
  },
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
                    enum: ['COLOR_NAME/METAL_TYPE'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['metal_type'],
    },
  },
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
                      'STYLE_NAME/MODEL/MATERIAL_TYPE/SIZE_NAME/NUMBER_OF_ITEMS/PART_NUMBER',
                      'MODEL/STYLE_NAME/PART_NUMBER',
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
      required: ['part_number'],
    },
  },
  {
    allOf: [
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
          required: ['item_shape'],
        },
      },
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
                          'ITEM_PACKAGE_QUANTITY/ITEM_SHAPE',
                          'ITEM_SHAPE/COLOR_NAME/SIZE_NAME',
                          'ITEM_SHAPE/COLOR_NAME',
                          'ITEM_SHAPE/SIZE',
                          'ITEM_SHAPE',
                          'PATTERN_NAME/ITEM_SHAPE',
                          'ITEM_SHAPE/SIZE_NAME',
                          'COLOR_NAME/STYLE_NAME/ITEM_SHAPE',
                          'COLOR_NAME/ITEM_SHAPE',
                          'SIZE_NAME/ITEM_SHAPE',
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
          required: ['item_shape'],
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
          required: ['item_shape'],
        },
      },
    ],
  },
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
                    enum: ['COLOR_NAME/MAGNIFICATION_STRENGTH'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['magnification_strength'],
    },
  },
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
                    enum: ['EDITION'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['edition'],
    },
  },
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
                      'COLOR_NAME/ITEM_DISPLAY_WIDTH',
                      'ITEM_DISPLAY_LENGTH/ITEM_DISPLAY_WIDTH',
                      'ITEM_DISPLAY_LENGTH/ITEM_DISPLAY_WIDTH',
                      'ITEM_DISPLAY_WIDTH/ITEM_DISPLAY_HEIGHT',
                      'ITEM_DISPLAY_WIDTH/ITEM_DISPLAY_HEIGHT',
                      'COLOR_NAME/ITEM_DISPLAY_HEIGHT',
                      'MATERIAL_TYPE/ITEM_DISPLAY_HEIGHT',
                      'ITEM_PACKAGE_QUANTITY/ITEM_DISPLAY_HEIGHT',
                      'SIZE_NAME/ITEM_DISPLAY_LENGTH',
                      'SIZE_NAME/ITEM_DISPLAY_HEIGHT',
                      'ITEM_DISPLAY_LENGTH',
                      'SIZE_NAME/ITEM_DISPLAY_WIDTH',
                      'ITEM_DISPLAY_HEIGHT',
                      'COLOR_NAME/ITEM_DISPLAY_LENGTH',
                      'ITEM_DISPLAY_LENGTH/SIZE_NAME',
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
      required: ['item_display_dimensions'],
    },
  },
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
                    enum: ['FLAVOR_NAME', 'FLAVOR_NAME/SIZE_NAME'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['flavor'],
    },
  },
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
                    enum: ['WATTAGE'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['wattage'],
    },
  },
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
                      'STYLE_NAME/CUSTOMER_PACKAGE_TYPE',
                      'CUSTOMER_PACKAGE_TYPE',
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
      required: ['customer_package_type'],
    },
  },
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
                      'PATTERN_NAME/STYLE_NAME',
                      'SIZE_NAME/STYLE_NAME/PATTERN_NAME',
                      'SIZE_NAME/COLOR_NAME/PATTERN_NAME',
                      'SIZE_NAME/PATTERN_NAME',
                      'STYLE_NAME/PATTERN_NAME/COLOR_NAME',
                      'COLOR_NAME/SIZE_NAME/STYLE_NAME/PATTERN_NAME',
                      'STYLE_NAME/PATTERN_NAME',
                      'COLOR_NAME/PATTERN_NAME',
                      'PATTERN_NAME/COLOR_NAME',
                      'PATTERN_NAME',
                      'COLOR_NAME/SIZE_NAME/PATTERN_NAME',
                      'PATTERN',
                      'COLOR_NAME/STYLE_NAME/PATTERN_NAME',
                      'PATTERN_NAME/SIZE_NAME',
                      'PATTERN_NAME/ITEM_SHAPE',
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
      required: ['pattern'],
    },
  },
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
                      'SIZE/UNIT_COUNT',
                      'STYLE_NAME/UNIT_COUNT',
                      'SIZE_NAME/UNIT_COUNT',
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
      required: ['unit_count'],
    },
  },
  {
    if: {
      required: ['league_name'],
      properties: {
        league_name: {
          contains: {
            required: ['value'],
            properties: {
              value: {
                enum: ['NASCAR', 'nascar', 'ناسكار'],
              },
            },
          },
        },
      },
    },
    then: {
      properties: {
        team_name: {
          items: {
            properties: {
              value: {
                enum: [
                  'A. J. Allmendinger',
                  'Alex Bowman',
                  'Aric Almirola',
                  'Austin Dillon',
                  'Bobby Labonte',
                  'Brad Keselowski',
                  'Carl Edwards',
                  'Casey Mears',
                  'Chase Elliott',
                  'Chris Buescher',
                  'Clint Bowyer',
                  'Dale Earnhardt',
                  'Dale Earnhardt Jr.',
                  'Daniel Suárez',
                  'Darrell Wallace Jr.',
                  'David Ragan',
                  'Denny Hamlin',
                  'Elliott Sadler',
                  'Erik Jones',
                  'Gray Gaulding',
                  'Greg Biffle',
                  'Jamie McMurray',
                  'Jeff Burton',
                  'Jeff Gordon',
                  'Jimmie Johnson',
                  'Joey Logano',
                  'Juan Pablo Montoya',
                  'Kasey Kahne',
                  'Kevin Harvick',
                  'Kurt Busch',
                  'Kyle Busch',
                  'Kyle Larson',
                  'Mark Martin',
                  'Martin Truex Jr.',
                  'Matt DiBenedetto',
                  'Matt Kenseth',
                  'Michael McDowell',
                  'Paul Menard',
                  'Richard Petty',
                  'Ricky Stenhouse Jr.',
                  'Ryan Blaney',
                  'Ryan Newman',
                  'Tony Stewart',
                  'Trevor Bayne',
                  'Ty Dillon',
                  'William Byron',
                ],
              },
            },
          },
        },
      },
    },
    else: {
      if: {
        required: ['league_name'],
        properties: {
          league_name: {
            contains: {
              required: ['value'],
              properties: {
                value: {
                  enum: [
                    'eスポーツ',
                    'E-Sports (sport elettronici)',
                    'E-sport',
                    'E-Sports',
                    'ألعاب إلكترونية',
                    'E-Sport',
                    'e_sports',
                    'Deportes electrónicos',
                  ],
                },
              },
            },
          },
        },
      },
      then: {
        properties: {
          team_name: {
            items: {
              properties: {
                value: {
                  enum: ['E-Sports'],
                },
              },
            },
          },
        },
      },
      else: {
        if: {
          required: ['league_name'],
          properties: {
            league_name: {
              contains: {
                required: ['value'],
                properties: {
                  value: {
                    enum: [
                      'Pro Wrestling League',
                      'Liga de lucha libre profesional',
                      'インド/プロレスリーグ',
                      'Liga Profissional de Luta Livre',
                      'pro_wrestling_league',
                      'Pro Wrestling Ligan',
                      'دوري المصارعة للمحترفين',
                    ],
                  },
                },
              },
            },
          },
        },
        then: {
          properties: {
            team_name: {
              items: {
                properties: {
                  value: {
                    enum: [
                      'Delhi Sultans',
                      'Haryana Hammers',
                      'MP Yodha',
                      'Mumbai Maharathi',
                      'NCR Punjab Royals',
                      'UP Dangal',
                    ],
                  },
                },
              },
            },
          },
        },
        else: {
          if: {
            required: ['league_name'],
            properties: {
              league_name: {
                contains: {
                  required: ['value'],
                  properties: {
                    value: {
                      enum: [
                        'Formel 1',
                        'Formuła 1',
                        'formula_1',
                        'Fórmula 1',
                        'Formula 1',
                        'فورمولا 1',
                        'Formule 1',
                        'フォーミュラ1',
                      ],
                    },
                  },
                },
              },
            },
          },
          then: {
            properties: {
              team_name: {
                items: {
                  properties: {
                    value: {
                      enum: [
                        'Alfa Romeo Racing',
                        'Alpine',
                        'Aston Martin',
                        'BWT Racing Point',
                        'Haas F1 Team',
                        'Mclaren',
                        'Mercedes-AMG Petronas',
                        'Red Bull Racing',
                        'Renault DP World',
                        'Scuderia AlphaTauri',
                        'Scuderia Ferrari',
                        'Williams Racing',
                      ],
                    },
                  },
                },
              },
            },
          },
          else: {
            if: {
              required: ['league_name'],
              properties: {
                league_name: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: [
                          'I-ligan',
                          'I-League',
                          'インド/Iリーグ',
                          'Liga I',
                          'i_league',
                          'الدوري الهندي للمحترفين',
                        ],
                      },
                    },
                  },
                },
              },
            },
            then: {
              properties: {
                team_name: {
                  items: {
                    properties: {
                      value: {
                        enum: [
                          'Aizawl FC',
                          'Chennai City FC',
                          'Churchill Brothers FC Goa',
                          'Gokulam Kerala FC',
                          'Indian Arrows',
                          'Mohun Bagan',
                          'NEROCA FC',
                          'Punjab FC',
                          'Quess East Bengal',
                          'Real Kashmir FC',
                          'Tiddim Road Athletic Union',
                        ],
                      },
                    },
                  },
                },
              },
            },
            else: {
              if: {
                required: ['league_name'],
                properties: {
                  league_name: {
                    contains: {
                      required: ['value'],
                      properties: {
                        value: {
                          enum: [
                            'Japanischer Baseball',
                            'Campionato di baseball giapponese',
                            'Baseball japonais',
                            'Béisbol japonés',
                            '日本/セ・パリーグ・高校野球',
                            'Japanese Baseball',
                            'Japans honkbal',
                            'japanese_baseball',
                            'Japansk baseboll',
                            'البيسبول الياباني',
                            'Japoński baseball',
                            'Beisebol japonês',
                          ],
                        },
                      },
                    },
                  },
                },
              },
              then: {
                properties: {
                  team_name: {
                    items: {
                      properties: {
                        value: {
                          enum: [
                            'Chiba Lotte Marines',
                            'Chunichi Dragons',
                            'Fukuoka SoftBank Hawks',
                            'Hanshin Tigers',
                            'High School Baseball Team',
                            'Hiroshima Toyo Carp',
                            'Hokkaido Nippon-Ham Fighters',
                            'Orix Buffaloes',
                            'Saitama Seibu Lions',
                            'Tohoku Rakuten Golden Eagles',
                            'Tokyo Yakult Swallows',
                            'Yokohama DeNA BayStars',
                            'Yomiuri Giants',
                          ],
                        },
                      },
                    },
                  },
                },
              },
              else: {
                if: {
                  required: ['league_name'],
                  properties: {
                    league_name: {
                      contains: {
                        required: ['value'],
                        properties: {
                          value: {
                            enum: [
                              'イギリス/サッカー',
                              'English Football',
                              'Engels voetbal',
                              'Football britannique',
                              'كرة القدم الإنجليزية',
                              'Angielska piłka nożna',
                              'english_football',
                              'English Soccer',
                              'British Football',
                              'Calcio inglese',
                              'Futebol inglês',
                              'Engelsk fotboll',
                              'Englischer Fußball',
                              'Fútbol inglés',
                            ],
                          },
                        },
                      },
                    },
                  },
                },
                then: {
                  properties: {
                    team_name: {
                      items: {
                        properties: {
                          value: {
                            enum: [
                              'AFC Bournemouth',
                              'Arsenal',
                              'Aston Villa',
                              'Birmingham City',
                              'Blackburn Rovers',
                              'Bolton Wanderers',
                              'Brentford',
                              'Brighton & Hove Albion',
                              'Bristol City',
                              'Burnley',
                              'Cardiff City',
                              'Charlton Athletic',
                              'Chelsea',
                              'Coventry City',
                              'Crystal Palace',
                              'Derby County',
                              'Everton',
                              'Fulham',
                              'Huddersfield Town',
                              'Hull City',
                              'Ipswich Town',
                              'Leeds United',
                              'Leicester City',
                              'Liverpool',
                              'Luton Town',
                              'Manchester City',
                              'Manchester United',
                              'Middlesbrough',
                              'Millwall',
                              'Newcastle United',
                              'Norwich City',
                              'Nottingham Forest',
                              'Plymouth Argyle',
                              'Preston North End',
                              'QPR',
                              'Reading',
                              'Rotherham United',
                              'Sheffield United',
                              'Sheffield Wednesday',
                              'Southampton',
                              'Stoke City',
                              'Sunderland',
                              'Swansea City',
                              'Tottenham Hotspur',
                              'Watford',
                              'West Bromwich Albion',
                              'West Ham United',
                              'Wigan',
                              'Wolverhampton Wanderers',
                            ],
                          },
                        },
                      },
                    },
                  },
                },
                else: {
                  if: {
                    required: ['league_name'],
                    properties: {
                      league_name: {
                        contains: {
                          required: ['value'],
                          properties: {
                            value: {
                              enum: ['الاتحاد الدولي للمصارعة', 'WUSA', 'wusa'],
                            },
                          },
                        },
                      },
                    },
                  },
                  then: {
                    properties: {
                      team_name: {
                        items: {
                          properties: {
                            value: {
                              enum: ['WUSA'],
                            },
                          },
                        },
                      },
                    },
                  },
                  else: {
                    if: {
                      required: ['league_name'],
                      properties: {
                        league_name: {
                          contains: {
                            required: ['value'],
                            properties: {
                              value: {
                                enum: [
                                  'Première Ligue canadienne',
                                  'Kanadensisk premiärliga',
                                  'Canadian Premier League',
                                  'Liga Premier Canadense',
                                  'canadian_premier_league',
                                  'Premiere League canadiense',
                                  'Liga Premier canadiense',
                                  'Premier League Kanada',
                                  'Canadian Premiere League',
                                  'الدوري الكندي الممتاز',
                                  'カナダ/プレミアリーグ',
                                  'Kanadyjska Premiere League',
                                ],
                              },
                            },
                          },
                        },
                      },
                    },
                    then: {
                      properties: {
                        team_name: {
                          items: {
                            properties: {
                              value: {
                                enum: [
                                  'Atlético Ottawa',
                                  'Cavalry FC',
                                  'FC Edmonton',
                                  'Forge FC',
                                  'HFX Wanderers FC',
                                  'Pacific FC',
                                  'Valour FC',
                                  'Vancouver FC',
                                  'York United FC',
                                ],
                              },
                            },
                          },
                        },
                      },
                    },
                    else: {
                      if: {
                        required: ['league_name'],
                        properties: {
                          league_name: {
                            contains: {
                              required: ['value'],
                              properties: {
                                value: {
                                  enum: [
                                    'Fútbol español',
                                    'Spanish Football',
                                    'كرة القدم الاسبانية',
                                    'Calcio spagnolo',
                                    'Futebol espanhol',
                                    'Football espagnol',
                                    'spanish_football',
                                    'Hiszpańska piłka nożna',
                                    'Spanish Soccer',
                                    'Spanischer Fußball',
                                    'Spaans voetbal',
                                    'Spansk fotboll',
                                    'スペイン/サッカー',
                                  ],
                                },
                              },
                            },
                          },
                        },
                      },
                      then: {
                        properties: {
                          team_name: {
                            items: {
                              properties: {
                                value: {
                                  enum: [
                                    'AD Alcorcón',
                                    'Alaves',
                                    'Albacete BP',
                                    'Athletic Bilbao',
                                    'Atletico Madrid',
                                    'Barcelona',
                                    'Betis Sevilla',
                                    'CD Lugo',
                                    'CD Mirandés',
                                    'CD Numancia',
                                    'CD Tenerife',
                                    'Celta Vigo',
                                    'CF Fuenlabrada',
                                    'Cádiz CF',
                                    'Deportivo La Coruna',
                                    'Elche CF',
                                    'Espanyol',
                                    'Extremadura UD',
                                    'FC Sevilla',
                                    'Getafe CF',
                                    'Getafe FC',
                                    'Girona FC',
                                    'Granada CF',
                                    'Leganés',
                                    'Levante UD',
                                    'Malaga',
                                    'Mallorca',
                                    'Osasuna',
                                    'Racing Santander',
                                    'Rayo Vallecano',
                                    'Real Madrid',
                                    'Real Oviedo',
                                    'Real Sociedad',
                                    'Real Zaragoza',
                                    'Recreativo Huelva',
                                    'SD Eibar',
                                    'SD Huesca',
                                    'SD Ponferradina',
                                    'Sporting Gijón',
                                    'UD Almería',
                                    'UD Las Palmas',
                                    'Valencia',
                                    'Valladolid',
                                    'Villareal',
                                  ],
                                },
                              },
                            },
                          },
                        },
                      },
                      else: {
                        if: {
                          required: ['league_name'],
                          properties: {
                            league_name: {
                              contains: {
                                required: ['value'],
                                properties: {
                                  value: {
                                    enum: [
                                      'Canadian Football League',
                                      'Liga Canadense de Futebol',
                                      'Kanadyjska Liga Piłkarska',
                                      'canadian_football_league',
                                      'Ligue canadienne de football',
                                      'Kanadensisk fotbollsliga',
                                      'الدوري الكندي لكرة القدم',
                                      'Kanadische Fußballliga',
                                      'カナディアン・フットボール・リーグ',
                                      'Liga de fútbol canadiense',
                                    ],
                                  },
                                },
                              },
                            },
                          },
                        },
                        then: {
                          properties: {
                            team_name: {
                              items: {
                                properties: {
                                  value: {
                                    enum: [
                                      'BC Lions',
                                      'Calgary Stampeders',
                                      'Edmonton Football Team',
                                      'Hamilton Tiger-Cats',
                                      'Montreal Alouettes',
                                      'Ottawa Redblacks',
                                      'Saskatchewan Roughriders',
                                      'Toronto Argonauts',
                                      'Winnipeg Blue Bombers',
                                    ],
                                  },
                                },
                              },
                            },
                          },
                        },
                        else: {
                          if: {
                            required: ['league_name'],
                            properties: {
                              league_name: {
                                contains: {
                                  required: ['value'],
                                  properties: {
                                    value: {
                                      enum: [
                                        'دوري كرة السلة الأميركي للمحترفين',
                                        'nba',
                                        'NBA',
                                      ],
                                    },
                                  },
                                },
                              },
                            },
                          },
                          then: {
                            properties: {
                              team_name: {
                                items: {
                                  properties: {
                                    value: {
                                      enum: [
                                        'Atlanta Hawks',
                                        'Boston Celtics',
                                        'Brooklyn Nets',
                                        'Buffalo Braves',
                                        'Charlotte Hornets',
                                        'Chicago Bulls',
                                        'Chicago Stags',
                                        'Chicago Zephyrs',
                                        'Cleveland Cavaliers',
                                        'Dallas Mavericks',
                                        'Denver Nuggets',
                                        'Detroit Pistons',
                                        'Fort Wayne Pistons',
                                        'Golden State Warriors',
                                        'Houston Rockets',
                                        'Indiana Pacers',
                                        'Kansas City Kings',
                                        'Los Angeles Clippers',
                                        'Los Angeles Lakers',
                                        'Memphis Grizzlies',
                                        'Miami Heat',
                                        'Milwaukee Bucks',
                                        'Milwaukee Hawks',
                                        'Minnesota Timberwolves',
                                        'New Jersey Nets',
                                        'New Orleans Pelicans',
                                        'New York Knicks',
                                        'Oklahoma City Thunder',
                                        'Orlando Magic',
                                        'Philadelphia 76ers',
                                        'Phoenix Suns',
                                        'Portland Trail Blazers',
                                        'Rochester Royals',
                                        'Sacramento Kings',
                                        'San Antonio Spurs',
                                        'San Diego Clippers',
                                        'San Diego Rockets',
                                        'San Francisco Warriors',
                                        'Seattle SuperSonics',
                                        'St. Louis Bombers',
                                        'St. Louis Hawks',
                                        'Syracuse Nationals',
                                        'Toronto Raptors',
                                        'Utah Jazz',
                                        'Washington Wizards',
                                      ],
                                    },
                                  },
                                },
                              },
                            },
                          },
                          else: {
                            if: {
                              required: ['league_name'],
                              properties: {
                                league_name: {
                                  contains: {
                                    required: ['value'],
                                    properties: {
                                      value: {
                                        enum: [
                                          'Minor League Honkbal',
                                          'minor_league_baseball',
                                          'Béisbol de ligas menores',
                                          'Minor League Baseball',
                                          'Liga Menor de Beisebol',
                                          'Ligue mineure de baseball',
                                          'アメリカ/マイナーリーグ',
                                          'دوري البيسبول المصغر',
                                        ],
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            then: {
                              properties: {
                                team_name: {
                                  items: {
                                    properties: {
                                      value: {
                                        enum: [
                                          'Aberdeen IronBirds',
                                          'Akron Aeros',
                                          'Albuquerque Isotopes',
                                          'Altoona Curve',
                                          'Arkansas Travelers',
                                          'Asheville Tourists',
                                          'Auburn Doubledays',
                                          'Augusta GreenJackets',
                                          'Bakersfield Blaze',
                                          'Batavia Muckdogs',
                                          'Beloit Snappers',
                                          'Billings Mustangs',
                                          'Binghamton Mets',
                                          'Birmingham Barons',
                                          'Bluefield Orioles',
                                          'Boise Hawks',
                                          'Bowie Baysox',
                                          'Bowling Green Hot Rods',
                                          'Bradenton Marauders',
                                          'Brevard County Manatees',
                                          'Bristol White Sox',
                                          'Brooklyn Cyclones',
                                          'Buffalo Bisons',
                                          'Burlington Bees',
                                          'Burlington Royals',
                                          'Carolina Mudcats',
                                          'Casper Ghosts',
                                          'Cedar Rapids Kernels',
                                          'Charleston RiverDogs',
                                          'Charlotte Knights',
                                          'Charlotte Stone Crabs',
                                          'Chattanooga Lookouts',
                                          'Clearwater Threshers',
                                          'Clinton LumberKings',
                                          'Colorado Springs Sky Sox',
                                          'Columbus Clippers',
                                          'Connecticut Tigers',
                                          'Corpus Christi Hooks',
                                          'Danville Braves',
                                          'Dayton Dragons',
                                          'Daytona Cubs',
                                          'Delmarva Shorebirds',
                                          'Dunedin Blue Jays',
                                          'Durham Bulls',
                                          'Elizabethton Twins',
                                          'Erie SeaWolves',
                                          'Eugene Emeralds',
                                          'Everett AquaSox',
                                          'Fort Myers Miracle',
                                          'Fort Wayne TinCaps',
                                          'Frederick Keys',
                                          'Fresno Grizzlies',
                                          'Frisco RoughRiders',
                                          'Great Falls Voyagers',
                                          'Great Lakes Loons',
                                          'Greeneville Astros',
                                          'Greensboro Grasshoppers',
                                          'Greenville Drive',
                                          'Gwinnett Braves',
                                          'Hagerstown Suns',
                                          'Harrisburg Senators',
                                          'Helena Brewers',
                                          'Hickory Crawdads',
                                          'High Desert Mavericks',
                                          'Hudson Valley Renegades',
                                          'Huntsville Stars',
                                          'Idaho Falls Chukars',
                                          'Indianapolis Indians',
                                          'Inland Empire 66ers',
                                          'Iowa Cubs',
                                          'Jacksonville Suns',
                                          'Jamestown Jammers',
                                          'Johnson City Cardinals',
                                          'Jupiter Hammerheads',
                                          'Kane County Cougars',
                                          'Kannapolis Intimidators',
                                          'Kingsport Mets',
                                          'Kinston Indians',
                                          'Lake County Captains',
                                          'Lake Elsinore Storm',
                                          'Lakeland Flying Tigers',
                                          'Lakewood BlueClaws',
                                          'Lancaster JetHawks',
                                          'Lansing Lugnuts',
                                          'Las Vegas 51s',
                                          'Lehigh Valley IronPigs',
                                          'Lexington Legends',
                                          'Louisville Bats',
                                          'Lowell Spinners',
                                          'Lynchburg Hillcats',
                                          'Mahoning Valley Scrappers',
                                          'Memphis Redbirds',
                                          'Midland RockHounds',
                                          'Mississippi Braves',
                                          'Missoula Osprey',
                                          'Mobile BayBears',
                                          'Modesto Nuts',
                                          'Montgomery Biscuits',
                                          'Myrtle Beach Pelicans',
                                          'Nashville Sounds',
                                          'New Britain Rock Cats',
                                          'New Hampshire Fisher Cats',
                                          'New Orleans Zephyrs',
                                          'Norfolk Tides',
                                          'Northwest Arkansas Naturals',
                                          'Ogden Raptors',
                                          'Oklahoma City RedHawks',
                                          'Omaha Royals',
                                          'Orem Owlz',
                                          'Palm Beach Cardinals',
                                          'Pawtucket Red Sox',
                                          'Peoria Chiefs',
                                          'Portland Beavers',
                                          'Portland Sea Dogs',
                                          'Potomac Nationals',
                                          'Princeton Rays',
                                          'Pulaski Mariners',
                                          'Quad Cities River Bandits',
                                          'Rancho Cucamonga Quakes',
                                          'Reading Phillies',
                                          'Reno Aces',
                                          'Richmond Flying Squirrels',
                                          'Rochester Red Wings',
                                          'Rome Braves',
                                          'Round Rock Express',
                                          'Sacramento River Cats',
                                          'Salem Red Sox',
                                          'Salem-Keizer Volcanoes',
                                          'Salt Lake Bees',
                                          'San Antonio Missions',
                                          'San Jose Giants',
                                          'Savannah Sand Gnats',
                                          'Scranton/Wilkes-Barre Yankees',
                                          'South Bend Silver Hawks',
                                          'Spokane Indians',
                                          'Springfield Cardinals',
                                          'St. Lucie Mets',
                                          'State College Spikes',
                                          'Staten Island Yankees',
                                          'Stockton Ports',
                                          'Syracuse Chiefs',
                                          'Tacoma Rainiers',
                                          'Tampa Yankees',
                                          'Tennessee Smokies',
                                          'Toledo Mud Hens',
                                          'Trenton Thunder',
                                          'Tri-City Dust Devils',
                                          'Tri-City ValleyCats',
                                          'Tulsa Drillers',
                                          'Vancouver Canadians',
                                          'Vermont Lake Monsters',
                                          'Visalia Rawhide',
                                          'Washington Nationals',
                                          'West Michigan Whitecaps',
                                          'West Tenn Diamond Jaxx',
                                          'West Virginia Power',
                                          'Williamsport Crosscutters',
                                          'Wilmington Blue Rocks',
                                          'Winston-Salem Dash',
                                          'Wisconsin Timber Rattlers',
                                          'Yakima Bears',
                                        ],
                                      },
                                    },
                                  },
                                },
                              },
                            },
                            else: {
                              if: {
                                required: ['league_name'],
                                properties: {
                                  league_name: {
                                    contains: {
                                      required: ['value'],
                                      properties: {
                                        value: {
                                          enum: [
                                            'دوري الهوكي الوطني',
                                            'nhl',
                                            'NHL',
                                            'Ligue nationale de hockey',
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              then: {
                                properties: {
                                  team_name: {
                                    items: {
                                      properties: {
                                        value: {
                                          enum: [
                                            'Anaheim Ducks',
                                            'Arizona Coyotes',
                                            'Atlanta Flames',
                                            'Atlanta Thrashers',
                                            'Boston Bruins',
                                            'Buffalo Sabres',
                                            'Calgary Flames',
                                            'California Seals',
                                            'Carolina Hurricanes',
                                            'Chicago Blackhawks',
                                            'Cleveland Barons',
                                            'Colorado Avalanche',
                                            'Columbus Blue Jackets',
                                            'Dallas Stars',
                                            'Detroit Cougars',
                                            'Detroit Falcons',
                                            'Detroit Red Wings',
                                            'Edmonton Oilers',
                                            'Florida Panthers',
                                            'Hamilton Tigers',
                                            'Hartford Whalers',
                                            'Kansas City Scouts',
                                            'Los Angeles Kings',
                                            'Minnesota North Stars',
                                            'Minnesota Wild',
                                            'Montreal Canadiens',
                                            'Montreal Maroons',
                                            'Montreal Wanderers',
                                            'Nashville Predators',
                                            'New Jersey Devils',
                                            'New York Americans',
                                            'New York Islanders',
                                            'New York Rangers',
                                            'Ottawa Senators',
                                            'Philadelphia Flyers',
                                            'Philadelphia Quakers',
                                            'Pittsburgh Penguins',
                                            'San Jose Sharks',
                                            'Seattle Kraken',
                                            'St. Louis Blues',
                                            'St. Louis Eagles',
                                            'Tampa Bay Lightning',
                                            'Toronto Arenas',
                                            'Toronto Maple Leafs',
                                            'Toronto St. Pats',
                                            'Utah Mammoth',
                                            'Vancouver Canucks',
                                            'Vegas Golden Knights',
                                            'Washington Capitals',
                                            'Winnipeg Jets',
                                          ],
                                        },
                                      },
                                    },
                                  },
                                },
                              },
                              else: {
                                if: {
                                  required: ['league_name'],
                                  properties: {
                                    league_name: {
                                      contains: {
                                        required: ['value'],
                                        properties: {
                                          value: {
                                            enum: [
                                              'European Basketball',
                                              'Europees basketbal',
                                              'كرة السلة الأوروبية',
                                              'european_basketball',
                                              'Baloncesto europeo',
                                              'Europeisk basket',
                                              'Lega europea di pallacanestro',
                                              'バスケットボール ユーロリーグ',
                                              'Basquete europeu',
                                              'Europejska koszykówka',
                                              'Basketball européen',
                                              'Europäischer Basketball',
                                            ],
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                then: {
                                  properties: {
                                    team_name: {
                                      items: {
                                        properties: {
                                          value: {
                                            enum: [
                                              'ALBA Berlin Basketball',
                                              'Anadolu Efes Istanbul Basketball',
                                              'AX Armani Exchange Milan Basketball',
                                              'Barcelona Basketball',
                                              'Bayern Munich Basketball',
                                              'Crvena Zvezda mts Belgrade Basketball',
                                              'CSKA Moscow Basketball',
                                              'Fenerbahce Beko Istanbul',
                                              'Khimki Moscow Region Basketball',
                                              'KIROLBET Baskonia Vitoria-Gasteiz Basketball',
                                              'LDLC ASVEL Villeurbanne',
                                              'Maccabi FOX Tel Aviv Basketball',
                                              'Olympiacos Basketball',
                                              'Panathinaikos Basketball',
                                              'Real Madrid Basketball',
                                              'Valencia Basketball',
                                              'Zalgiris Kaunas Basketball',
                                              'Zenit St Petersburg Basketball',
                                            ],
                                          },
                                        },
                                      },
                                    },
                                  },
                                },
                                else: {
                                  if: {
                                    required: ['league_name'],
                                    properties: {
                                      league_name: {
                                        contains: {
                                          required: ['value'],
                                          properties: {
                                            value: {
                                              enum: [
                                                'Liga Premier de Badminton',
                                                'インド/バドミントンリーグ',
                                                'Premier Badminton League',
                                                'premier_badminton_league',
                                                'Liga Premier de Bádminton',
                                                'Premier Badminton Ligan',
                                                'الدوري الممتاز لكرة الريشة',
                                              ],
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  then: {
                                    properties: {
                                      team_name: {
                                        items: {
                                          properties: {
                                            value: {
                                              enum: [
                                                'Awadhe Warriors',
                                                'Bengaluru Raptors',
                                                'Chennai Superstarz',
                                                'Hyderabad Hunters',
                                                'Mumbai Rockets',
                                                'North Eastern Warriors',
                                                'Pune 7 Aces',
                                              ],
                                            },
                                          },
                                        },
                                      },
                                    },
                                  },
                                  else: {
                                    if: {
                                      required: ['league_name'],
                                      properties: {
                                        league_name: {
                                          contains: {
                                            required: ['value'],
                                            properties: {
                                              value: {
                                                enum: [
                                                  'Otros equipos de fútbol',
                                                  'Other Soccer Leagues',
                                                  'other_football_leagues',
                                                  'サッカーリーグ/その他',
                                                  'Otras ligas de fútbol',
                                                  'Inne ligi piłkarskie',
                                                  'Andere voetbalcompetities',
                                                  'Autres équipes de football',
                                                  'Mehr Fußballmannschaften',
                                                  'More Football Leagues',
                                                  'Outras ligas de futebol',
                                                  'بطولات كرة القدم الأخرى',
                                                  'Altre squadre di calcio',
                                                  'Andra fotbollsligor',
                                                ],
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    then: {
                                      properties: {
                                        team_name: {
                                          items: {
                                            properties: {
                                              value: {
                                                enum: [
                                                  'Arsenal de Sarandí',
                                                  'AS Roma',
                                                  'Boca Juniors',
                                                  'CA River Plate',
                                                  'Club Atlético River Plate',
                                                  'FC Arsenal Tula',
                                                  'FC Basel',
                                                  'FC Startak Moscow',
                                                  'Galatasaray SK',
                                                  'Sao Paulo FC',
                                                  'Sport Club Corinthians Paulista',
                                                ],
                                              },
                                            },
                                          },
                                        },
                                      },
                                    },
                                    else: {
                                      if: {
                                        required: ['league_name'],
                                        properties: {
                                          league_name: {
                                            contains: {
                                              required: ['value'],
                                              properties: {
                                                value: {
                                                  enum: [
                                                    'ポルトガル/サッカー',
                                                    'Portuguese Football',
                                                    'Futebol português',
                                                    'Fútbol portugués',
                                                    'Football portugais',
                                                    'Portugees voetbal',
                                                    'Portugiesischer Fußball',
                                                    'portuguese_football',
                                                    'Portugisisk fotboll',
                                                    'Portuguese Soccer',
                                                    'Portugalska piłka nożna',
                                                    'كرة القدم البرتغالية',
                                                    'Campionato di calcio portoghese',
                                                  ],
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      then: {
                                        properties: {
                                          team_name: {
                                            items: {
                                              properties: {
                                                value: {
                                                  enum: [
                                                    'Belenenses',
                                                    'Benfica',
                                                    'Boavista',
                                                    'Casa Pia AC',
                                                    'CD Santa Clara',
                                                    'CF Estrela',
                                                    'Chaves',
                                                    'Desportivo das Aves',
                                                    'Estoril',
                                                    'Famalicão',
                                                    'Farense',
                                                    'FC Arouca',
                                                    'Gil Vicente',
                                                    'Marítimo',
                                                    'Moreirense',
                                                    'Paços de Ferreira',
                                                    'Portimonense SC',
                                                    'Porto',
                                                    'Rio Ave',
                                                    'Sporting',
                                                    'Sporting de Braga',
                                                    'Tondela',
                                                    'Vitória Guimarães',
                                                    'Vitória Setúbal',
                                                  ],
                                                },
                                              },
                                            },
                                          },
                                        },
                                      },
                                      else: {
                                        if: {
                                          required: ['league_name'],
                                          properties: {
                                            league_name: {
                                              contains: {
                                                required: ['value'],
                                                properties: {
                                                  value: {
                                                    enum: [
                                                      'الدوري الأمريكي لكرة القدم',
                                                      'mls',
                                                      'MLS',
                                                    ],
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        then: {
                                          properties: {
                                            team_name: {
                                              items: {
                                                properties: {
                                                  value: {
                                                    enum: [
                                                      'Atlanta United FC',
                                                      'Austin FC',
                                                      'C.D. Chivas USA',
                                                      'Chicago Fire',
                                                      'Colorado Rapids',
                                                      'Columbus Crew',
                                                      'D.C. United',
                                                      'FC Cincinnati',
                                                      'FC Dallas',
                                                      'Houston Dynamo',
                                                      'Inter Miami CF',
                                                      'Los Angeles FC',
                                                      'Los Angeles Galaxy',
                                                      'Minnesota United FC',
                                                      'Montreal Impact',
                                                      'Nashville SC',
                                                      'New England Revolution',
                                                      'New York City FC',
                                                      'New York Red Bulls',
                                                      'Orlando City SC',
                                                      'Philadelphia Union',
                                                      'Portland Timbers',
                                                      'Real Salt Lake',
                                                      'San Jose Earthquakes',
                                                      'Seattle Sounders FC',
                                                      'Sporting Kansas City',
                                                      'St. Louis City',
                                                      'Toronto FC',
                                                      'Vancouver Whitecaps',
                                                    ],
                                                  },
                                                },
                                              },
                                            },
                                          },
                                        },
                                        else: {
                                          if: {
                                            required: ['league_name'],
                                            properties: {
                                              league_name: {
                                                contains: {
                                                  required: ['value'],
                                                  properties: {
                                                    value: {
                                                      enum: [
                                                        'ncaa',
                                                        'دوري الجامعات الأمريكية لكرة السلة',
                                                        'NCAA',
                                                      ],
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          then: {
                                            properties: {
                                              team_name: {
                                                items: {
                                                  properties: {
                                                    value: {
                                                      enum: [
                                                        'Abilene Christian Wildcats',
                                                        'Air Force Falcons',
                                                        'Akron Zips',
                                                        'Alabama A&M Bulldogs',
                                                        'Alabama Birmingham Blazers',
                                                        'Alabama Crimson Tide',
                                                        'Alabama State Hornets',
                                                        'Albany Great Danes',
                                                        'Alcorn State Braves',
                                                        'American University Eagles',
                                                        'Appalachian State Mountaineers',
                                                        'Arizona State Sun Devils',
                                                        'Arizona Wildcats',
                                                        'Arkansas Little Rock Trojans',
                                                        'Arkansas Razorbacks',
                                                        'Arkansas State Indians',
                                                        'Arkansas State Red Wolves',
                                                        'Arkansas-Pine Bluff Golden Lions',
                                                        'Army Black Knights',
                                                        'Auburn Tigers',
                                                        'Austin Peay Governors',
                                                        'Ball State Cardinals',
                                                        'Bates Bobcats',
                                                        'Baylor Bears',
                                                        'Belmont Bruins',
                                                        'Bethune Cookman Wildcats',
                                                        'Binghamton Bearcats',
                                                        'Boise State Broncos',
                                                        'Boston College Eagles',
                                                        'Boston University Terriers',
                                                        'Bowling Green Falcons',
                                                        'Bradley Braves',
                                                        'Brown Bears',
                                                        'Bryant Bulldogs',
                                                        'Bucknell Bison',
                                                        'Buffalo Bulls',
                                                        'Butler Bulldogs',
                                                        'BYU Cougars',
                                                        'Cal Irvine Anteaters',
                                                        'Cal Poly Mustangs',
                                                        'Cal Riverside Highlanders',
                                                        'Cal Santa Barbara Gauchos',
                                                        'Cal State Bakersfield Roadrunners',
                                                        'Cal State Fullerton Titans',
                                                        'Cal State Northridge Matadors',
                                                        'Cal State Sacramento Hornets',
                                                        'California Baptist Lancers',
                                                        'California Golden Bears',
                                                        'Campbell Fighting Camels',
                                                        'Canisius Golden Griffins',
                                                        'Centenary Gentlemen',
                                                        'Central Arkansas Bears',
                                                        'Central Connecticut Blue Devils',
                                                        'Central Connecticut State Blue Devils',
                                                        'Central Florida Golden Knights',
                                                        'Central Michigan Chippewas',
                                                        'Charleston Cougars',
                                                        'Charleston Southern Buccaneers',
                                                        'Charlotte 49ers',
                                                        'Chicago State Cougars',
                                                        'Cincinnati Bearcats',
                                                        'Citadel Bulldogs',
                                                        'Clemson Tigers',
                                                        'Cleveland State Vikings',
                                                        'Coastal Carolina Chanticleers',
                                                        'Colgate Raiders',
                                                        'Colorado Buffaloes',
                                                        'Colorado College Tigers',
                                                        'Colorado State Rams',
                                                        'Columbia Lions',
                                                        'Connecticut Huskies',
                                                        'Coppin State Eagles',
                                                        'Cornell Big Red',
                                                        'Creighton Bluejays',
                                                        'Dallas Baptist Patriots',
                                                        'Dartmouth Big Green',
                                                        'Davidson Wildcats',
                                                        'Dayton Flyers',
                                                        "Delaware Fightin' Blue Hens",
                                                        'Delaware State Hornets',
                                                        'Denver Pioneers',
                                                        'DePaul Blue Demons',
                                                        'Detroit Titans',
                                                        'Drake Bulldogs',
                                                        'Drexel Dragons',
                                                        'Duke Blue Devils',
                                                        'Duquesne Dukes',
                                                        'East Carolina Pirates',
                                                        'East Tennessee State Buccaneers',
                                                        'Eastern Illinois Panthers',
                                                        'Eastern Kentucky Colonels',
                                                        'Eastern Michigan Eagles',
                                                        'Eastern Washington Eagles',
                                                        'Elon Phoenix',
                                                        'Evansville Purple Aces',
                                                        'Fairfield Stags',
                                                        'Fairleigh Dickinson Devils',
                                                        'Fairleigh Dickinson Knights',
                                                        'FIU Panthers',
                                                        'Florida A&M Rattlers',
                                                        'Florida Atlantic Owls',
                                                        'Florida Gators',
                                                        'Florida Gulf Coast Eagles',
                                                        'Florida International Golden Panthers',
                                                        'Florida State Seminoles',
                                                        'Fordham Rams',
                                                        'Fort Wayne Mastodons',
                                                        'Fresno State Bulldogs',
                                                        'Furman Paladins',
                                                        "Gardner-Webb Runnin' Bulldogs",
                                                        'George Mason Patriots',
                                                        'George Washington Colonials',
                                                        'Georgetown Hoyas',
                                                        'Georgia Bulldogs',
                                                        'Georgia Southern Eagles',
                                                        'Georgia State Panthers',
                                                        'Georgia Tech Yellow Jackets',
                                                        'Gonzaga Bulldogs',
                                                        'Grambling Tigers',
                                                        'Grand Canyon Antelopes',
                                                        'Hampton Pirates',
                                                        'Hartford Hawks',
                                                        'Harvard Crimson',
                                                        'Hawaii Rainbow Warriors',
                                                        'High Point Panthers',
                                                        'Hofstra Flying Dutchmen',
                                                        'Hofstra Pride',
                                                        'Holy Cross Crusaders',
                                                        'Houston Baptist Huskies',
                                                        'Houston Cougars',
                                                        'Howard Bison',
                                                        'Idaho State Bengals',
                                                        'Idaho Vandals',
                                                        'Illinois Chicago Flames',
                                                        'Illinois Illini',
                                                        'Illinois State Redbirds',
                                                        'Incarnate Word Cardinals',
                                                        'Indiana Hoosiers',
                                                        'Indiana State Sycamores',
                                                        'Iona Gaels',
                                                        'Iowa Hawkeyes',
                                                        'Iowa State Cyclones',
                                                        'IPFW Mastodons',
                                                        'IUPUI Jaguars',
                                                        'Jackson State Tigers',
                                                        'Jacksonville Dolphins',
                                                        'Jacksonville State Gamecocks',
                                                        'James Madison Dukes',
                                                        'Kansas Jayhawks',
                                                        'Kansas State Wildcats',
                                                        'Kennesaw State Owls',
                                                        'Kent State Golden Flashes',
                                                        'Kentucky Wildcats',
                                                        'La Salle Explorers',
                                                        'Lafayette Leopards',
                                                        'Lamar Cardinals',
                                                        'Lehigh Mountain Hawks',
                                                        'Liberty Flames',
                                                        'Lipscomb Bisons',
                                                        'Long Beach State 49ers',
                                                        'Long Beach State Sharks',
                                                        'Long Island Blackbirds',
                                                        'Longwood Lancers',
                                                        "Louisiana Lafayette Ragin' Cajuns",
                                                        'Louisiana Monroe Indians',
                                                        'Louisiana Tech Bulldogs',
                                                        'Louisiana-Monroe Warhawks',
                                                        'Louisville Cardinals',
                                                        'Loyola Chicago Ramblers',
                                                        'Loyola Maryland Greyhounds',
                                                        'Loyola Marymount Lions',
                                                        'LSU Tigers',
                                                        'Maine Black Bears',
                                                        'Manhattan Jaspers',
                                                        'Marist Red Foxes',
                                                        'Marquette Golden Eagles',
                                                        'Marshall Thundering Herd',
                                                        'Maryland Baltimore County Retrievers',
                                                        'Maryland Eastern Shore Fighting Hawks',
                                                        'Maryland Terrapins',
                                                        'Massachusetts Minutemen',
                                                        'McNeese State Cowboys',
                                                        'Memphis Tigers',
                                                        'Mercer Bears',
                                                        'Miami (Ohio) Redhawks',
                                                        'Miami Hurricanes',
                                                        'Michigan State Spartans',
                                                        'Michigan Wolverines',
                                                        'Middle Tennessee State Blue Raiders',
                                                        'Minnesota Golden Gophers',
                                                        'Mississippi Old Miss Rebels',
                                                        'Mississippi State Bulldogs',
                                                        'Mississippi Valley State Delta Devils',
                                                        'Missouri Kansas City Kangaroos',
                                                        'Missouri Tigers',
                                                        'Monmouth Hawks',
                                                        'Montana Grizzlies',
                                                        'Montana State Bobcats',
                                                        'Morehead State Eagles',
                                                        'Morgan State Bears',
                                                        "Mount St. Mary's Mountaineers",
                                                        'Murray State Racers',
                                                        'Navy Midshipmen',
                                                        'Nebraska Cornhuskers',
                                                        'Nevada Wolf Pack',
                                                        'New Hampshire Wildcats',
                                                        'New Mexico Lobos',
                                                        'New Mexico State Aggies',
                                                        'New Orleans Privateers',
                                                        'Niagara Purple Eagles',
                                                        'Nicholls State Colonels',
                                                        'NJIT Highlanders',
                                                        'Norfolk State Spartans',
                                                        'North Alabama Lions',
                                                        'North Carolina A&T Aggies',
                                                        'North Carolina Asheville Bulldogs',
                                                        'North Carolina Central Eagles',
                                                        'North Carolina Charlotte 49ers',
                                                        'North Carolina Greensboro Spartans',
                                                        'North Carolina State Wolfpack',
                                                        'North Carolina Tar Heels',
                                                        'North Carolina Wilmington Seahawks',
                                                        'North Dakota',
                                                        'North Dakota Fighting Hawks',
                                                        'North Dakota Fighting Sioux',
                                                        'North Dakota State Bison',
                                                        'North Florida Ospreys',
                                                        'North Texas Mean Green',
                                                        'Northeastern Huskies',
                                                        'Northeastern Illinois Golden Eagles',
                                                        'Northern Arizona Lumberjacks',
                                                        'Northern Colorado Bears',
                                                        'Northern Illinois Huskies',
                                                        'Northern Iowa Panthers',
                                                        'Northern Kentucky Norse',
                                                        'Northwestern State Demons',
                                                        'Northwestern Wildcats',
                                                        'Notre Dame Fighting Irish',
                                                        'NYIT Bears',
                                                        'NYU Bobcats',
                                                        'NYU Violets',
                                                        'Oakland Golden Grizzlies',
                                                        'Ohio Bobcats',
                                                        'Ohio State Buckeyes',
                                                        'Oklahoma Sooners',
                                                        'Oklahoma State Cowboys',
                                                        'Old Dominion Monarchs',
                                                        'Ole Miss Rebels',
                                                        'Omaha Mavericks',
                                                        'Oral Roberts Golden Eagles',
                                                        'Oregon Ducks',
                                                        'Oregon State Beavers',
                                                        'Pacific Boxers',
                                                        'Pacific Tigers',
                                                        'Penn Quakers',
                                                        'Penn State Nittany Lions',
                                                        'Pennsylvania Quakers',
                                                        'Pepperdine Waves',
                                                        'Pittsburgh Panthers',
                                                        'Portland Pilots',
                                                        'Portland State Vikings',
                                                        'Prairie View Panthers',
                                                        'Presbyterian Blue Hose',
                                                        'Princeton Tigers',
                                                        'Providence Friars',
                                                        'Purdue Boilermakers',
                                                        'Quinnipiac Bobcats',
                                                        'Radford Highlanders',
                                                        'Rhode Island Rams',
                                                        'Rice Owls',
                                                        'Richmond Spiders',
                                                        'Rider Broncs',
                                                        'Robert Morris Colonials',
                                                        'Rutgers Scarlet Knights',
                                                        'Sacred Heart Pioneers',
                                                        "Saint Mary's Gaels",
                                                        'Sam Houston State Bearkats',
                                                        'Samford Bulldogs',
                                                        'San Diego State Aztecs',
                                                        'San Diego Toreros',
                                                        'San Francisco Dons',
                                                        'San Jose State Spartans',
                                                        'Santa Clara Broncos',
                                                        'Savannah State Tigers',
                                                        'Seattle Redhawks',
                                                        'Seton Hall Pirates',
                                                        'Siena Saints',
                                                        'SIU Edwardsville Cougars',
                                                        'SMU Mustangs',
                                                        'South Alabama Jaguars',
                                                        'South Carolina Fighting Gamecocks',
                                                        'South Carolina State Bulldogs',
                                                        'South Dakota Coyotes',
                                                        'South Dakota State Jackrabbits',
                                                        'South Florida Bulls',
                                                        'Southeast Missouri State Indians',
                                                        'Southeast Missouri State Redhawks',
                                                        'Southeastern Louisiana Lions',
                                                        'Southern Illinois Salukis',
                                                        'Southern Jaguars',
                                                        'Southern Mississippi Golden Eagles',
                                                        'Southern Utah Thunderbirds',
                                                        'Southwest Missouri State Bears',
                                                        'St. Bonaventure Bonnies',
                                                        'St. Francis (New York) Terriers',
                                                        'St. Francis (Pennsylvania) Red Flash',
                                                        'St. Francis Brooklyn Terriers',
                                                        "St. John's Red Storm",
                                                        "St. Joseph's Hawks",
                                                        'St. Louis University Billikens',
                                                        "St. Mary's Rattlers",
                                                        "St. Peter's Peacocks",
                                                        'Stanford Cardinal',
                                                        'Stephen F. Austin Lumberjacks',
                                                        'Stetson Hatters',
                                                        'Stony Brook Seawolves',
                                                        'Syracuse Orange',
                                                        'TCU Horned Frogs',
                                                        'Temple Owls',
                                                        'Tennessee Chattanooga Mocs',
                                                        'Tennessee Martin Skyhawks',
                                                        'Tennessee State Tigers',
                                                        'Tennessee Tech Golden Eagles',
                                                        'Tennessee Volunteers',
                                                        'Texas A&M Aggies',
                                                        'Texas A&M-Corpus Christi Islanders',
                                                        'Texas Arlington Mavericks',
                                                        'Texas El Paso Miners',
                                                        'Texas Longhorns',
                                                        'Texas Pan American Broncs',
                                                        'Texas San Antonio Roadrunners',
                                                        'Texas Southern Tigers',
                                                        'Texas State Bobcats',
                                                        'Texas Tech Red Raiders',
                                                        'Texas-Rio Grande Valley Vaqueros',
                                                        'Toledo Rockets',
                                                        'Towson Tigers',
                                                        'Troy State Trojans',
                                                        'Tulane Green Wave',
                                                        'Tulsa Golden Hurricane',
                                                        'UC Davis Aggies',
                                                        'UCLA Bruins',
                                                        'UMass Lowell River Hawks',
                                                        'UNLV Rebels',
                                                        'USC Trojans',
                                                        'USC Upstate Spartans',
                                                        'Utah State Aggies',
                                                        'Utah Utes',
                                                        'Utah Valley Wolverines',
                                                        'Valparaiso Crusaders',
                                                        'Vanderbilt Commodores',
                                                        'Vermont Catamounts',
                                                        'Villanova Wildcats',
                                                        'Virginia Cavaliers',
                                                        'Virginia Commonwealth Rams',
                                                        'Virginia Tech Hokies',
                                                        'VMI Keydets',
                                                        'Wagner Seahawks',
                                                        'Wake Forest Demon Deacons',
                                                        'Washington Huskies',
                                                        'Washington State Cougars',
                                                        'Weber State Wildcats',
                                                        'West Virginia Mountaineers',
                                                        'Western Carolina Catamounts',
                                                        'Western Illinois Leathernecks',
                                                        'Western Kentucky Hilltoppers',
                                                        'Western Michigan Broncos',
                                                        'Wichita State Shockers',
                                                        'William & Mary Tribe',
                                                        'Winthrop Eagles',
                                                        'Wisconsin Badgers',
                                                        'Wisconsin Green Bay Phoenix',
                                                        'Wisconsin Milwaukee Panthers',
                                                        'Wofford Terriers',
                                                        'Wright State Raiders',
                                                        'Wyoming Cowboys',
                                                        'Xavier Musketeers',
                                                        'Yale Bulldogs',
                                                        'Youngstown State Penguins',
                                                      ],
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                          },
                                          else: {
                                            if: {
                                              required: ['league_name'],
                                              properties: {
                                                league_name: {
                                                  contains: {
                                                    required: ['value'],
                                                    properties: {
                                                      value: {
                                                        enum: [
                                                          'Campionato mondiale di calcio',
                                                          'World Cup Football',
                                                          'Wereldkampioenschap voetbal',
                                                          'Copa do Mundo de Futebol',
                                                          'World Cup Soccer',
                                                          'Mistrzostwa Świata w Piłce Nożnej',
                                                          'VM-fotboll',
                                                          'Fútbol Copa del Mundo',
                                                          'Fußballweltmeisterschaft',
                                                          'كأس العالم لكرة القدم',
                                                          'FIFAワールドカップ',
                                                          'Coupe du monde de football',
                                                          'Copa mundial de fútbol',
                                                          'world_cup_football',
                                                        ],
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            then: {
                                              properties: {
                                                team_name: {
                                                  items: {
                                                    properties: {
                                                      value: {
                                                        enum: [
                                                          'Angola',
                                                          'Argentina',
                                                          'Australia',
                                                          'Austria',
                                                          'Belgium',
                                                          'Bolivia',
                                                          'Brazil',
                                                          'Bulgaria',
                                                          'Cameroon',
                                                          'Canada',
                                                          'Chile',
                                                          'China',
                                                          'Colombia',
                                                          'Costa Rica',
                                                          "Cote d'Ivoire",
                                                          'Croatia',
                                                          'Czech Republic',
                                                          'Denmark',
                                                          'Ecuador',
                                                          'England',
                                                          'France',
                                                          'Germany',
                                                          'Ghana',
                                                          'Greece',
                                                          'Iran',
                                                          'Ireland',
                                                          'Italy',
                                                          'Jamaica',
                                                          'Japan',
                                                          'Mexico',
                                                          'Morocco',
                                                          'Netherlands',
                                                          'Nigeria',
                                                          'Norway',
                                                          'Paraguay',
                                                          'Poland',
                                                          'Portugal',
                                                          'Qatar',
                                                          'Romania',
                                                          'Russia',
                                                          'Saudi Arabia',
                                                          'Scotland',
                                                          'Senegal',
                                                          'Serbia and Montenegro',
                                                          'Slovenia',
                                                          'South Africa',
                                                          'South Korea',
                                                          'Spain',
                                                          'Sweden',
                                                          'Switzerland',
                                                          'Togo',
                                                          'Trinidad and Tobago',
                                                          'Tunisia',
                                                          'Turkey',
                                                          'Ukraine',
                                                          'United States',
                                                          'Uruguay',
                                                          'Venezuela',
                                                          'Wales',
                                                          'Yugoslavia',
                                                        ],
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                            },
                                            else: {
                                              if: {
                                                required: ['league_name'],
                                                properties: {
                                                  league_name: {
                                                    contains: {
                                                      required: ['value'],
                                                      properties: {
                                                        value: {
                                                          enum: [
                                                            'Indiska Soccer-ligan',
                                                            'Indian Soccer League',
                                                            'Indian Super League',
                                                            'Indyjska Soccer League',
                                                            'Indische Fußballliga',
                                                            'インド/サッカーリーグ',
                                                            'Liga de fútbol de la India',
                                                            'Liga de fútbol india',
                                                            'indian_soccer_league',
                                                            'دوري كرة القدم الهندي',
                                                            'Liga Indiana de Futebol',
                                                            'Ligue indienne de football',
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              then: {
                                                properties: {
                                                  team_name: {
                                                    items: {
                                                      properties: {
                                                        value: {
                                                          enum: [
                                                            'ATK Mohun Bagan FC',
                                                            'Bengaluru FC',
                                                            'Chennaiyin FC',
                                                            'FC Goa',
                                                            'Hyderabad FC',
                                                            'Jamshedpur FC',
                                                            'Kerala Blasters FC',
                                                            'Mumbai City FC',
                                                            'Northeast United FC',
                                                            'Odisha FC',
                                                          ],
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                              },
                                              else: {
                                                if: {
                                                  required: ['league_name'],
                                                  properties: {
                                                    league_name: {
                                                      contains: {
                                                        required: ['value'],
                                                        properties: {
                                                          value: {
                                                            enum: [
                                                              'Equipes nationales de football',
                                                              '代表チーム',
                                                              'National Teams',
                                                              'Selecciones nacionales',
                                                              'Landslag',
                                                              'Nationale teams',
                                                              'Squadre Nazionali',
                                                              'national_teams',
                                                              'Nationale Fußballmannschaften',
                                                              'Selecciones de fútbol',
                                                              'Seleções Nacionais',
                                                              'Drużyny narodowe',
                                                              'المنتخبات الوطنية',
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                then: {
                                                  properties: {
                                                    team_name: {
                                                      items: {
                                                        properties: {
                                                          value: {
                                                            enum: [
                                                              'Afghanistan',
                                                              'Albania',
                                                              'Algeria',
                                                              'American Samoa',
                                                              'Andorra',
                                                              'Angola',
                                                              'Antigua and Barbuda',
                                                              'Argentina',
                                                              'Armenia',
                                                              'Aruba',
                                                              'Australia',
                                                              'Austria',
                                                              'Azerbaijan',
                                                              'Bahamas',
                                                              'Bahrain',
                                                              'Bangladesh',
                                                              'Barbados',
                                                              'Belarus',
                                                              'Belgium',
                                                              'Belize',
                                                              'Benin',
                                                              'Bermuda',
                                                              'Bhutan',
                                                              'Bolivia',
                                                              'Bosnia and Herzegovina',
                                                              'Botswana',
                                                              'Brazil',
                                                              'British Virgin Islands',
                                                              'Brunei',
                                                              'Bulgaria',
                                                              'Burkina Faso',
                                                              'Burundi',
                                                              'Cambodia',
                                                              'Cameroon',
                                                              'Canada',
                                                              'Cape Verde',
                                                              'Cayman Islands',
                                                              'Central African Republic',
                                                              'Chad',
                                                              'Chile',
                                                              'China',
                                                              'Chinese Taipei',
                                                              'Colombia',
                                                              'Comoros',
                                                              'Congo',
                                                              'Cook Islands',
                                                              'Costa Rica',
                                                              'Croatia',
                                                              'Cuba',
                                                              'Cyprus',
                                                              'Czech Republic',
                                                              'Democratic Republic of the Congo',
                                                              'Denmark',
                                                              'Djibouti',
                                                              'Dominica',
                                                              'Dominican Republic',
                                                              'East Timor',
                                                              'Ecuador',
                                                              'Egypt',
                                                              'El Salvador',
                                                              'Equatorial Guinea',
                                                              'Eritrea',
                                                              'Estonia',
                                                              'Ethiopia',
                                                              'Federated States of Micronesia',
                                                              'Fiji',
                                                              'Finland',
                                                              'France',
                                                              'Gabon',
                                                              'Georgia',
                                                              'Germany',
                                                              'Ghana',
                                                              'Great Britain',
                                                              'Greece',
                                                              'Grenada',
                                                              'Guam',
                                                              'Guatemala',
                                                              'Guinea',
                                                              'Guinea-Bissau',
                                                              'Guyana',
                                                              'Haiti',
                                                              'Honduras',
                                                              'Hong Kong',
                                                              'Hungary',
                                                              'Iceland',
                                                              'Independent Olympic Athletes',
                                                              'India',
                                                              'Indonesia',
                                                              'Iran',
                                                              'Iraq',
                                                              'Ireland',
                                                              'Israel',
                                                              'Italy',
                                                              'Ivory Coast',
                                                              'Jamaica',
                                                              'Japan',
                                                              'Jordan',
                                                              'Kazakhstan',
                                                              'Kenya',
                                                              'Kiribati',
                                                              'Kosovo',
                                                              'Kyrgyzstan',
                                                              'Laos',
                                                              'Latvia',
                                                              'Lebanon',
                                                              'Lesotho',
                                                              'Liberia',
                                                              'Libya',
                                                              'Liechtenstein',
                                                              'Lithuania',
                                                              'Luxembourg',
                                                              'Macedonia',
                                                              'Madagascar',
                                                              'Malawi',
                                                              'Malaysia',
                                                              'Maldives',
                                                              'Mali',
                                                              'Malta',
                                                              'Marshall Islands',
                                                              'Mauritania',
                                                              'Mauritius',
                                                              'Mexico',
                                                              'Moldova',
                                                              'Monaco',
                                                              'Mongolia',
                                                              'Montenegro',
                                                              'Morocco',
                                                              'Mozambique',
                                                              'Myanmar',
                                                              'Namibia',
                                                              'Nauru',
                                                              'Nepal',
                                                              'Netherlands',
                                                              'New Zealand',
                                                              'Nicaragua',
                                                              'Niger',
                                                              'Nigeria',
                                                              'North Korea',
                                                              'Norway',
                                                              'Oman',
                                                              'Pakistan',
                                                              'Palau',
                                                              'Palestine',
                                                              'Panama',
                                                              'Papua New Guinea',
                                                              'Paraguay',
                                                              'Peru',
                                                              'Philippines',
                                                              'Poland',
                                                              'Portugal',
                                                              'Puerto Rico',
                                                              'Qatar',
                                                              'Refugee Olympic Team',
                                                              'Romania',
                                                              'Russia',
                                                              'Rwanda',
                                                              'Saint Kitts and Nevis',
                                                              'Saint Lucia',
                                                              'Saint Vincent and the Grenadines',
                                                              'Samoa',
                                                              'San Marino',
                                                              'Saudi Arabia',
                                                              'Senegal',
                                                              'Serbia',
                                                              'Seychelles',
                                                              'Sierra Leone',
                                                              'Singapore',
                                                              'Slovakia',
                                                              'Slovenia',
                                                              'Solomon Islands',
                                                              'Somalia',
                                                              'South Africa',
                                                              'South Korea',
                                                              'South Sudan',
                                                              'Spain',
                                                              'Sri Lanka',
                                                              'Sudan',
                                                              'Suriname',
                                                              'Swaziland',
                                                              'Sweden',
                                                              'Switzerland',
                                                              'Syria',
                                                              'São Tomé and Príncipe',
                                                              'Tajikistan',
                                                              'Tanzania',
                                                              'Thailand',
                                                              'The Gambia',
                                                              'Togo',
                                                              'Tonga',
                                                              'Trinidad and Tobago',
                                                              'Tunisia',
                                                              'Turkey',
                                                              'Turkmenistan',
                                                              'Tuvalu',
                                                              'Uganda',
                                                              'Ukraine',
                                                              'United Arab Emirates',
                                                              'United States',
                                                              'Uruguay',
                                                              'Uzbekistan',
                                                              'Vanuatu',
                                                              'Venezuela',
                                                              'Vietnam',
                                                              'Virgin Islands',
                                                              'Yemen',
                                                              'Zambia',
                                                              'Zimbabwe',
                                                            ],
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                },
                                                else: {
                                                  if: {
                                                    required: ['league_name'],
                                                    properties: {
                                                      league_name: {
                                                        contains: {
                                                          required: ['value'],
                                                          properties: {
                                                            value: {
                                                              enum: [
                                                                'メキシコ/サッカー連盟',
                                                                'Mexican Football Federation',
                                                                'Federação Mexicana de Futebol',
                                                                'Mexicaanse Vereniging Van De Voetbalbond',
                                                                'Federazione calcistica del Messico',
                                                                'Federación Mexicana De Fútbol Asociación',
                                                                'Federación Mexicana de Fútbol Asociación',
                                                                'اتحاد كرة القدم المكسيكي',
                                                                'Fédération du Mexique de football',
                                                                'federacion_mexicana_de_futbol_ascn',
                                                              ],
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                  then: {
                                                    properties: {
                                                      team_name: {
                                                        items: {
                                                          properties: {
                                                            value: {
                                                              enum: [
                                                                'Atlético de San Luis',
                                                                'CF Atlas',
                                                                'CF Monterrey',
                                                                'Club América',
                                                                'Club Deportivo Guadalajara - Chivas',
                                                                'Club Deportivo Social y Cultural - Cruz Azul',
                                                                'Club Santos Laguna',
                                                                'Club Universidad Nacional A.C. - Pumas',
                                                                'FC Juárez',
                                                                'Mazatlán',
                                                                'Necaxa',
                                                                'Querétaro',
                                                                'UANL Tigres',
                                                              ],
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                  },
                                                  else: {
                                                    if: {
                                                      required: ['league_name'],
                                                      properties: {
                                                        league_name: {
                                                          contains: {
                                                            required: ['value'],
                                                            properties: {
                                                              value: {
                                                                enum: [
                                                                  'Football néerlandais',
                                                                  'Dutch Soccer',
                                                                  'Holenderska piłka nożna',
                                                                  'كرة القدم الهولندية',
                                                                  'Futebol holandês',
                                                                  'Fútbol holandés',
                                                                  'dutch_football',
                                                                  'Nederlands voetbal',
                                                                  'オランダ/サッカー',
                                                                  'Dutch Football',
                                                                  'Holländsk fotboll',
                                                                  'Niederländischer Fußball',
                                                                  'Campionato di calcio olandese',
                                                                ],
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                    then: {
                                                      properties: {
                                                        team_name: {
                                                          items: {
                                                            properties: {
                                                              value: {
                                                                enum: [
                                                                  'ADO Den Haag',
                                                                  'Ajax Amsterdam',
                                                                  'Almere City',
                                                                  'AZ Alkmaar',
                                                                  'De Graafschap',
                                                                  'Excelsior',
                                                                  'FC Groningen',
                                                                  'FC Utrecht',
                                                                  'FC Volendam',
                                                                  'FC Zwolle',
                                                                  'Feyenoord Rotterdam',
                                                                  'Fortuna Sittard',
                                                                  'Go Ahead Eagles',
                                                                  'Heerenveen',
                                                                  'Heracles Almelo',
                                                                  'NAC Breda',
                                                                  'NEC Nijmegen',
                                                                  'PSV Eindhoven',
                                                                  'RBC Roosendaal',
                                                                  'RKC Waalwijk',
                                                                  'Roda JC Kerkrade',
                                                                  'SC Cambuur',
                                                                  'Sparta Rotterdam',
                                                                  'Twente Enschede',
                                                                  'Vitesse Arnhem',
                                                                  'Willem II Tilburg',
                                                                ],
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                    },
                                                    else: {
                                                      if: {
                                                        required: [
                                                          'league_name',
                                                        ],
                                                        properties: {
                                                          league_name: {
                                                            contains: {
                                                              required: [
                                                                'value',
                                                              ],
                                                              properties: {
                                                                value: {
                                                                  enum: [
                                                                    'X-spel',
                                                                    'العاب اكس',
                                                                    'X-Games',
                                                                    'X Games',
                                                                    'Xゲーム',
                                                                    'x_games',
                                                                  ],
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                      then: {
                                                        properties: {
                                                          team_name: {
                                                            items: {
                                                              properties: {
                                                                value: {
                                                                  enum: [
                                                                    'X-Games',
                                                                  ],
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                      },
                                                      else: {
                                                        if: {
                                                          required: [
                                                            'league_name',
                                                          ],
                                                          properties: {
                                                            league_name: {
                                                              contains: {
                                                                required: [
                                                                  'value',
                                                                ],
                                                                properties: {
                                                                  value: {
                                                                    enum: [
                                                                      'german_football',
                                                                      'كرة القدم الألمانية',
                                                                      'Tysk fotboll',
                                                                      'Deutscher Fußball',
                                                                      'Fútbol alemán',
                                                                      'Niemiecka piłka nożna',
                                                                      'Calcio tedesco',
                                                                      'German Soccer',
                                                                      'Football allemand',
                                                                      'Futebol alemão',
                                                                      'Duits voetbal',
                                                                      'German Football',
                                                                      'ドイツ/サッカー',
                                                                    ],
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                        then: {
                                                          properties: {
                                                            team_name: {
                                                              items: {
                                                                properties: {
                                                                  value: {
                                                                    enum: [
                                                                      '1. FC Koln',
                                                                      '1. FC Magdeburg',
                                                                      'Arminia Bielefeld',
                                                                      'Bayer Leverkusen',
                                                                      'Bayern Munich',
                                                                      'Borussia Dortmund',
                                                                      'Borussia Monchengladbach',
                                                                      'Darmstadt 98',
                                                                      'Dynamo Dresden',
                                                                      'Eintracht Braunschweig',
                                                                      'Eintracht Frankfurt',
                                                                      'Energie Cottbus',
                                                                      'FC Augsburg',
                                                                      'FC Heidenheim',
                                                                      'FC St. Pauli',
                                                                      'Fortuna Düsseldorf',
                                                                      'FSV Mainz 05',
                                                                      'Greuther Fürth',
                                                                      'Hamburg SV',
                                                                      'Hannover 96',
                                                                      'Hansa Rostock',
                                                                      'Hertha Berlin',
                                                                      'Hertha BSC',
                                                                      'Kaiserslautern',
                                                                      'Karlsruher SC',
                                                                      'Nurnberg',
                                                                      'RB Leipzig',
                                                                      'Schalke',
                                                                      'Sport-Club Freiburg',
                                                                      'TSG 1899 Hoffenheim',
                                                                      'TSV 1860 Munich',
                                                                      'Union Berlin',
                                                                      'VfB Stuttgart',
                                                                      'VfL Bochum',
                                                                      'VfL Osnabrück',
                                                                      'VfL Wolfsburg',
                                                                      'Werder Bremen',
                                                                    ],
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                        },
                                                        else: {
                                                          if: {
                                                            required: [
                                                              'league_name',
                                                            ],
                                                            properties: {
                                                              league_name: {
                                                                contains: {
                                                                  required: [
                                                                    'value',
                                                                  ],
                                                                  properties: {
                                                                    value: {
                                                                      enum: [
                                                                        'الدوري الوطني لكرة القدم للسيدات',
                                                                        'NWSL',
                                                                        'nwsl',
                                                                      ],
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                          then: {
                                                            properties: {
                                                              team_name: {
                                                                items: {
                                                                  properties: {
                                                                    value: {
                                                                      enum: [
                                                                        'Angel City FC',
                                                                        'Boston Legacy FC',
                                                                        'Chicago Red Stars',
                                                                        'Houston Dash',
                                                                        'Kansas City Current',
                                                                        'NJ/NY Gotham FC',
                                                                        'North Carolina Courage',
                                                                        'Orlando Pride',
                                                                        'Portland Thorns FC',
                                                                        'Racing Louisville FC',
                                                                        'San Diego Wave FC',
                                                                        'Seattle Reign FC',
                                                                        'Sky Blue FC',
                                                                        'Utah Royals FC',
                                                                        'Washington Spirit',
                                                                      ],
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                          },
                                                          else: {
                                                            if: {
                                                              required: [
                                                                'league_name',
                                                              ],
                                                              properties: {
                                                                league_name: {
                                                                  contains: {
                                                                    required: [
                                                                      'value',
                                                                    ],
                                                                    properties:
                                                                      {
                                                                        value: {
                                                                          enum: [
                                                                            'Pro Kabaddi League',
                                                                            'pro_kabaddi_league',
                                                                            'Pro Kabaddi Ligan',
                                                                            'دوري كبادي للمحترفين',
                                                                            'Liga Pro Kabaddi',
                                                                            'インド/プロカバディリーグ',
                                                                          ],
                                                                        },
                                                                      },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                            then: {
                                                              properties: {
                                                                team_name: {
                                                                  items: {
                                                                    properties:
                                                                      {
                                                                        value: {
                                                                          enum: [
                                                                            'Bengal Warriors',
                                                                            'Bengaluru Bulls',
                                                                            'Dabang Delhi KC',
                                                                            'Gujarat Fortunegiants',
                                                                            'Haryana Steelers',
                                                                            'Jaipur Pink Panthers',
                                                                            'Patna Pirates',
                                                                            'Puneri Paltan',
                                                                            'Tamil Thalaivas',
                                                                            'Telugu Titans',
                                                                            'U Mumba',
                                                                            'UP Yoddha',
                                                                          ],
                                                                        },
                                                                      },
                                                                  },
                                                                },
                                                              },
                                                            },
                                                            else: {
                                                              if: {
                                                                required: [
                                                                  'league_name',
                                                                ],
                                                                properties: {
                                                                  league_name: {
                                                                    contains: {
                                                                      required:
                                                                        [
                                                                          'value',
                                                                        ],
                                                                      properties:
                                                                        {
                                                                          value:
                                                                            {
                                                                              enum: [
                                                                                'رابطة لاعبي الغولف المحترفين',
                                                                                'pga',
                                                                                'PGA',
                                                                                'PGAツアー',
                                                                              ],
                                                                            },
                                                                        },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              then: {
                                                                properties: {
                                                                  team_name: {
                                                                    items: {
                                                                      properties:
                                                                        {
                                                                          value:
                                                                            {
                                                                              enum: [
                                                                                'PGA',
                                                                              ],
                                                                            },
                                                                        },
                                                                    },
                                                                  },
                                                                },
                                                              },
                                                              else: {
                                                                if: {
                                                                  required: [
                                                                    'league_name',
                                                                  ],
                                                                  properties: {
                                                                    league_name:
                                                                      {
                                                                        contains:
                                                                          {
                                                                            required:
                                                                              [
                                                                                'value',
                                                                              ],
                                                                            properties:
                                                                              {
                                                                                value:
                                                                                  {
                                                                                    enum: [
                                                                                      'Schottischer Fußball',
                                                                                      'كرة القدم الاسكتلندية',
                                                                                      'Skotsk fotboll',
                                                                                      'Futebol escocês',
                                                                                      'Football écossais',
                                                                                      'Fútbol escocés',
                                                                                      'Scottish Soccer',
                                                                                      'Scottish Football',
                                                                                      'Schots voetbal',
                                                                                      'スコットランド/サッカー',
                                                                                      'Szkocka piłka nożna',
                                                                                      'scottish_football',
                                                                                      'Campionato di calcio scozzese',
                                                                                    ],
                                                                                  },
                                                                              },
                                                                          },
                                                                      },
                                                                  },
                                                                },
                                                                then: {
                                                                  properties: {
                                                                    team_name: {
                                                                      items: {
                                                                        properties:
                                                                          {
                                                                            value:
                                                                              {
                                                                                enum: [
                                                                                  'Aberdeen',
                                                                                  'Airdrieonians',
                                                                                  'Arbroath',
                                                                                  'Celtic',
                                                                                  'Dundee',
                                                                                  'Dundee United',
                                                                                  'Dunfermline',
                                                                                  'Hearts',
                                                                                  'Hibernian',
                                                                                  'Inverness Caledonian Thistle',
                                                                                  'Kilmarnock',
                                                                                  'Livingston',
                                                                                  'Motherwell',
                                                                                  'Patrick Thistle',
                                                                                  'Rangers',
                                                                                  'Ross County',
                                                                                  'St Johnstone',
                                                                                  'St Mirren',
                                                                                ],
                                                                              },
                                                                          },
                                                                      },
                                                                    },
                                                                  },
                                                                },
                                                                else: {
                                                                  if: {
                                                                    required: [
                                                                      'league_name',
                                                                    ],
                                                                    properties:
                                                                      {
                                                                        league_name:
                                                                          {
                                                                            contains:
                                                                              {
                                                                                required:
                                                                                  [
                                                                                    'value',
                                                                                  ],
                                                                                properties:
                                                                                  {
                                                                                    value:
                                                                                      {
                                                                                        enum: [
                                                                                          'Französischer Fußball',
                                                                                          'Frans voetbal',
                                                                                          'French Football',
                                                                                          'Fransk fotboll',
                                                                                          'French Soccer',
                                                                                          'Francuska piłka nożna',
                                                                                          'Calcio francese',
                                                                                          'Futebol francês',
                                                                                          'french_football',
                                                                                          'كرة القدم الفرنسية',
                                                                                          'Fútbol francés',
                                                                                          'フランス/サッカー',
                                                                                          'Football français',
                                                                                        ],
                                                                                      },
                                                                                  },
                                                                              },
                                                                          },
                                                                      },
                                                                  },
                                                                  then: {
                                                                    properties:
                                                                      {
                                                                        team_name:
                                                                          {
                                                                            items:
                                                                              {
                                                                                properties:
                                                                                  {
                                                                                    value:
                                                                                      {
                                                                                        enum: [
                                                                                          'AC Ajaccio',
                                                                                          'Amiens SC',
                                                                                          'Angers SCO',
                                                                                          'AS Saint-Etienne',
                                                                                          'Auxerre',
                                                                                          'Bastia',
                                                                                          'Bordeaux',
                                                                                          'Brest',
                                                                                          'Clermont Foot 63',
                                                                                          'Dijon FCO',
                                                                                          'FC Lorient',
                                                                                          'Guingamp',
                                                                                          'Le Havre',
                                                                                          'Lens',
                                                                                          'Lille',
                                                                                          'Lyon',
                                                                                          'Marseille',
                                                                                          'Metz',
                                                                                          'Monaco',
                                                                                          'Montpellier',
                                                                                          'Nantes',
                                                                                          'Nice',
                                                                                          'Nîmes Olympique',
                                                                                          'PSG',
                                                                                          'Rennes',
                                                                                          'Sedan',
                                                                                          'SM Caen',
                                                                                          'Sochaux',
                                                                                          'Stade de Reims',
                                                                                          'Strasbourg',
                                                                                          'Thonon Evian FC',
                                                                                          'Toulouse FC',
                                                                                          'Troyes',
                                                                                          'Valenciennes FC',
                                                                                        ],
                                                                                      },
                                                                                  },
                                                                              },
                                                                          },
                                                                      },
                                                                  },
                                                                  else: {
                                                                    if: {
                                                                      required:
                                                                        [
                                                                          'league_name',
                                                                        ],
                                                                      properties:
                                                                        {
                                                                          league_name:
                                                                            {
                                                                              contains:
                                                                                {
                                                                                  required:
                                                                                    [
                                                                                      'value',
                                                                                    ],
                                                                                  properties:
                                                                                    {
                                                                                      value:
                                                                                        {
                                                                                          enum: [
                                                                                            'LPGAツアー',
                                                                                            'lpga',
                                                                                            'رابطة لاعبات الغولف المحترفات',
                                                                                            'LPGA',
                                                                                          ],
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                    then: {
                                                                      properties:
                                                                        {
                                                                          team_name:
                                                                            {
                                                                              items:
                                                                                {
                                                                                  properties:
                                                                                    {
                                                                                      value:
                                                                                        {
                                                                                          enum: [
                                                                                            'LPGA',
                                                                                          ],
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                    },
                                                                    else: {
                                                                      if: {
                                                                        required:
                                                                          [
                                                                            'league_name',
                                                                          ],
                                                                        properties:
                                                                          {
                                                                            league_name:
                                                                              {
                                                                                contains:
                                                                                  {
                                                                                    required:
                                                                                      [
                                                                                        'value',
                                                                                      ],
                                                                                    properties:
                                                                                      {
                                                                                        value:
                                                                                          {
                                                                                            enum: [
                                                                                              'لعبة الكريكيت الدولية',
                                                                                              'Międzynarodowy krykiet',
                                                                                              'Internationales Cricket',
                                                                                              'クリケット代表チーム',
                                                                                              'international_cricket',
                                                                                              'Campionato internazionale di cricket',
                                                                                              'Internationell Cricket',
                                                                                              'Cricket international',
                                                                                              'Cricket internacional',
                                                                                              'Críquete Internacional',
                                                                                              'International Cricket',
                                                                                            ],
                                                                                          },
                                                                                      },
                                                                                  },
                                                                              },
                                                                          },
                                                                      },
                                                                      then: {
                                                                        properties:
                                                                          {
                                                                            team_name:
                                                                              {
                                                                                items:
                                                                                  {
                                                                                    properties:
                                                                                      {
                                                                                        value:
                                                                                          {
                                                                                            enum: [
                                                                                              'Afghanistan',
                                                                                              'Australia',
                                                                                              'Bangladesh',
                                                                                              'England',
                                                                                              'India',
                                                                                              'Ireland',
                                                                                              'New Zealand',
                                                                                              'Pakistan',
                                                                                              'South Africa',
                                                                                              'Sri Lanka',
                                                                                              'West Indies',
                                                                                              'Zimbabwe',
                                                                                            ],
                                                                                          },
                                                                                      },
                                                                                  },
                                                                              },
                                                                          },
                                                                      },
                                                                      else: {
                                                                        if: {
                                                                          required:
                                                                            [
                                                                              'league_name',
                                                                            ],
                                                                          properties:
                                                                            {
                                                                              league_name:
                                                                                {
                                                                                  contains:
                                                                                    {
                                                                                      required:
                                                                                        [
                                                                                          'value',
                                                                                        ],
                                                                                      properties:
                                                                                        {
                                                                                          value:
                                                                                            {
                                                                                              enum: [
                                                                                                'Nationella Lacrosse-ligan',
                                                                                                'دوري لاكروس الوطني',
                                                                                                'ナショナル・ラクロス・リーグ',
                                                                                                'National Lacrosse League',
                                                                                                'Liga Nacional de Lacrosse',
                                                                                                'Liga nacional de lacrosse',
                                                                                                'national_lacrosse_league',
                                                                                                'Narodowa Liga Lacrosse',
                                                                                              ],
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                        then: {
                                                                          properties:
                                                                            {
                                                                              team_name:
                                                                                {
                                                                                  items:
                                                                                    {
                                                                                      properties:
                                                                                        {
                                                                                          value:
                                                                                            {
                                                                                              enum: [
                                                                                                'Buffalo Bandits',
                                                                                                'Calgary Roughnecks',
                                                                                                'Colorado Mammoth',
                                                                                                'Georgia Swarm',
                                                                                                'Halifax Thunderbirds',
                                                                                                'New England Black Wolves',
                                                                                                'New York Riptide',
                                                                                                'Philadelphia Wings',
                                                                                                'Rochester Knighthawks',
                                                                                                'San Diego Seals',
                                                                                                'Saskatchewan Rush',
                                                                                                'Toronto Rock',
                                                                                                'Vancouver Warriors',
                                                                                              ],
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                        },
                                                                        else: {
                                                                          if: {
                                                                            required:
                                                                              [
                                                                                'league_name',
                                                                              ],
                                                                            properties:
                                                                              {
                                                                                league_name:
                                                                                  {
                                                                                    contains:
                                                                                      {
                                                                                        required:
                                                                                          [
                                                                                            'value',
                                                                                          ],
                                                                                        properties:
                                                                                          {
                                                                                            value:
                                                                                              {
                                                                                                enum: [
                                                                                                  'hockey_india_league',
                                                                                                  'Liga De Hóquei Indiano',
                                                                                                  'Hockey India League',
                                                                                                  'Hokejowa liga indyjska',
                                                                                                  'Liga India de Hockey',
                                                                                                  'ホッケーインドリーグ',
                                                                                                  'Liga india de hockey',
                                                                                                  'Indiens hockeyliga',
                                                                                                  'دوري الهوكي الهندي',
                                                                                                  'Campionato di hockey indiano',
                                                                                                ],
                                                                                              },
                                                                                          },
                                                                                      },
                                                                                  },
                                                                              },
                                                                          },
                                                                          then: {
                                                                            properties:
                                                                              {
                                                                                team_name:
                                                                                  {
                                                                                    items:
                                                                                      {
                                                                                        properties:
                                                                                          {
                                                                                            value:
                                                                                              {
                                                                                                enum: [
                                                                                                  'Dabang Mumbai HC',
                                                                                                  'Delhi Waveriders',
                                                                                                  'Jaypee Punjab Warriors',
                                                                                                  'Kalinga Lancers',
                                                                                                  'Ranchi Rays',
                                                                                                  'Uttar Pradesh Wizards',
                                                                                                ],
                                                                                              },
                                                                                          },
                                                                                      },
                                                                                  },
                                                                              },
                                                                          },
                                                                          else: {
                                                                            if: {
                                                                              required:
                                                                                [
                                                                                  'league_name',
                                                                                ],
                                                                              properties:
                                                                                {
                                                                                  league_name:
                                                                                    {
                                                                                      contains:
                                                                                        {
                                                                                          required:
                                                                                            [
                                                                                              'value',
                                                                                            ],
                                                                                          properties:
                                                                                            {
                                                                                              value:
                                                                                                {
                                                                                                  enum: [
                                                                                                    'كرة القدم الايطالية',
                                                                                                    'italian_football',
                                                                                                    'Italienischer Fußball',
                                                                                                    'Italian Soccer',
                                                                                                    'Włoska piłka nożna',
                                                                                                    'Italiensk fotboll',
                                                                                                    'Football italien',
                                                                                                    'Calcio italiano',
                                                                                                    'Italiaans voetbal',
                                                                                                    'Fútbol italiano',
                                                                                                    'Futebol italiano',
                                                                                                    'Italian Football',
                                                                                                    'イタリア/サッカー',
                                                                                                  ],
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                            then: {
                                                                              properties:
                                                                                {
                                                                                  team_name:
                                                                                    {
                                                                                      items:
                                                                                        {
                                                                                          properties:
                                                                                            {
                                                                                              value:
                                                                                                {
                                                                                                  enum: [
                                                                                                    'A.S. Livorno Calcio',
                                                                                                    'AC Milan',
                                                                                                    'Ascoli',
                                                                                                    'Atalanta',
                                                                                                    'Bari',
                                                                                                    'Bologna',
                                                                                                    'Brescia',
                                                                                                    'Cagliari Calcio',
                                                                                                    'Calcio Catania',
                                                                                                    'Catanzaro',
                                                                                                    'Chievo Verona',
                                                                                                    'Cittadella',
                                                                                                    'Como',
                                                                                                    'Cosenza',
                                                                                                    'Empoli',
                                                                                                    'Fiorentina',
                                                                                                    'Frosinone FC',
                                                                                                    'Genoa',
                                                                                                    'Inter Milan',
                                                                                                    'Juventus',
                                                                                                    'Lazio',
                                                                                                    'Lecce',
                                                                                                    'Lecco',
                                                                                                    'Modena',
                                                                                                    'Monza',
                                                                                                    'Palermo',
                                                                                                    'Parma',
                                                                                                    'Parma Calcio',
                                                                                                    'Perugia',
                                                                                                    'Piacenza',
                                                                                                    'Pisa',
                                                                                                    'Reggina',
                                                                                                    'Roma',
                                                                                                    'Sampdoria',
                                                                                                    'Sassuolo',
                                                                                                    'Spal',
                                                                                                    'SSC Napoli',
                                                                                                    'Ternana',
                                                                                                    'Torino',
                                                                                                    'Udinese',
                                                                                                    'US Salernitana',
                                                                                                    'Venezia FC',
                                                                                                    'Verona FC',
                                                                                                  ],
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                            },
                                                                            else: {
                                                                              if: {
                                                                                required:
                                                                                  [
                                                                                    'league_name',
                                                                                  ],
                                                                                properties:
                                                                                  {
                                                                                    league_name:
                                                                                      {
                                                                                        contains:
                                                                                          {
                                                                                            required:
                                                                                              [
                                                                                                'value',
                                                                                              ],
                                                                                            properties:
                                                                                              {
                                                                                                value:
                                                                                                  {
                                                                                                    enum: [
                                                                                                      'Campionato di pallavolo professionale',
                                                                                                      'دوري المحترفين للكرة الطائرة',
                                                                                                      'インド/バレーボールリーグ',
                                                                                                      'Pro Volleyball Ligan',
                                                                                                      'Pro Volleyball League',
                                                                                                      'pro_volleyball_league',
                                                                                                      'Liga Profissional de Vôlei',
                                                                                                      'Liga de voleibol profesional',
                                                                                                    ],
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                      },
                                                                                  },
                                                                              },
                                                                              then: {
                                                                                properties:
                                                                                  {
                                                                                    team_name:
                                                                                      {
                                                                                        items:
                                                                                          {
                                                                                            properties:
                                                                                              {
                                                                                                value:
                                                                                                  {
                                                                                                    enum: [
                                                                                                      'Ahmedabad Defenders',
                                                                                                      'Black Hawks Hyderabad',
                                                                                                      'Calicut Heroes',
                                                                                                      'Chennai Spartans',
                                                                                                      'Kochi Blue Spikers',
                                                                                                      'U Mumba Volley',
                                                                                                    ],
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                      },
                                                                                  },
                                                                              },
                                                                              else: {
                                                                                if: {
                                                                                  required:
                                                                                    [
                                                                                      'league_name',
                                                                                    ],
                                                                                  properties:
                                                                                    {
                                                                                      league_name:
                                                                                        {
                                                                                          contains:
                                                                                            {
                                                                                              required:
                                                                                                [
                                                                                                  'value',
                                                                                                ],
                                                                                              properties:
                                                                                                {
                                                                                                  value:
                                                                                                    {
                                                                                                      enum: [
                                                                                                        'Japońska piłka nożna',
                                                                                                        'Campionato di calcio giapponese',
                                                                                                        'Japansk fotboll',
                                                                                                        'Japanese Soccer',
                                                                                                        'Japanischer Fußball',
                                                                                                        'Japans voetbal',
                                                                                                        'Japanese Football',
                                                                                                        'Futebol japonês',
                                                                                                        'كرة القدم اليابانية',
                                                                                                        '日本/Jリーグ',
                                                                                                        'Fútbol japonés',
                                                                                                        'japanese_football',
                                                                                                        'Football japonais',
                                                                                                      ],
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                then: {
                                                                                  properties:
                                                                                    {
                                                                                      team_name:
                                                                                        {
                                                                                          items:
                                                                                            {
                                                                                              properties:
                                                                                                {
                                                                                                  value:
                                                                                                    {
                                                                                                      enum: [
                                                                                                        'AC Nagano Parceiro',
                                                                                                        'Albirex Niigata',
                                                                                                        'Avispa Fukuoka',
                                                                                                        'Blaublitz Akita',
                                                                                                        'Cerezo Osaka',
                                                                                                        'Consadole Sapporo',
                                                                                                        'Ehime FC',
                                                                                                        'F.C. Gifu',
                                                                                                        'Fagiano Okayama FC',
                                                                                                        'FC Machida Zelvia',
                                                                                                        'FC Ryūkyū',
                                                                                                        'FC Tokyo',
                                                                                                        'Fujieda MYFC',
                                                                                                        'Fukushima United FC',
                                                                                                        'Gainare Tottori',
                                                                                                        'Gamba Osaka',
                                                                                                        'Giravanz Kitakyushu',
                                                                                                        'Grulla Morioka',
                                                                                                        'Iwaki FC',
                                                                                                        'JEF United Ichihara Chiba',
                                                                                                        'Júbilo Iwata',
                                                                                                        'Kamatamare Sanuki',
                                                                                                        'Kashima Antlers',
                                                                                                        'Kashiwa Reysol',
                                                                                                        'Kataller Toyama',
                                                                                                        'Kawasaki Frontale',
                                                                                                        'Kyoto Sanga FC',
                                                                                                        'Matsumoto Yamaga FC',
                                                                                                        'Mito HollyHock',
                                                                                                        'Montedio Yamagata',
                                                                                                        'Nagoya Grampus Eight',
                                                                                                        'Oita Trinita',
                                                                                                        'Omiya Ardija',
                                                                                                        'RENOFA Yamaguchi',
                                                                                                        'Roasso Kumamoto',
                                                                                                        'Sagan Tosu',
                                                                                                        'Sanfrecce Hiroshima',
                                                                                                        'SC Sagamihara',
                                                                                                        'Shimizu S-Pulse',
                                                                                                        'Shonan Bellmare',
                                                                                                        'Thespakusatsu Gunma',
                                                                                                        'Tochigi SC',
                                                                                                        'Tokushima Vortis',
                                                                                                        'Tokyo Verdy1969',
                                                                                                        'Urawa Red Diamonds',
                                                                                                        'V-Varen Nagasaki',
                                                                                                        'Vegalta Sendai',
                                                                                                        'Ventforet Kofu',
                                                                                                        'Vissel Kobe',
                                                                                                        'Yokohama F. Marinos',
                                                                                                        'Yokohama FC',
                                                                                                        'YSCC Yokohama',
                                                                                                        'Zweigen Kanazawa',
                                                                                                      ],
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                },
                                                                                else: {
                                                                                  if: {
                                                                                    required:
                                                                                      [
                                                                                        'league_name',
                                                                                      ],
                                                                                    properties:
                                                                                      {
                                                                                        league_name:
                                                                                          {
                                                                                            contains:
                                                                                              {
                                                                                                required:
                                                                                                  [
                                                                                                    'value',
                                                                                                  ],
                                                                                                properties:
                                                                                                  {
                                                                                                    value:
                                                                                                      {
                                                                                                        enum: [
                                                                                                          'البيسبول الكلاسيكية العالمية',
                                                                                                          'world_baseball_classic',
                                                                                                          'Clásico mundial de béisbol',
                                                                                                          'Classique mondiale de baseball',
                                                                                                          'Wereld Honkbal Klassieker',
                                                                                                          'World Baseball Classic',
                                                                                                          'Clássico Mundial de Beisebol',
                                                                                                          'ワールドベースボールクラシック',
                                                                                                        ],
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                      },
                                                                                  },
                                                                                  then: {
                                                                                    properties:
                                                                                      {
                                                                                        team_name:
                                                                                          {
                                                                                            items:
                                                                                              {
                                                                                                properties:
                                                                                                  {
                                                                                                    value:
                                                                                                      {
                                                                                                        enum: [
                                                                                                          'Team Cuba',
                                                                                                          'Team Dominican Republic',
                                                                                                          'Team Japan',
                                                                                                          'Team Netherlands',
                                                                                                          'Team Panama',
                                                                                                          'Team Puerto Rico',
                                                                                                          'Team South Korea',
                                                                                                          'Team United States',
                                                                                                          'Team Venezuela',
                                                                                                        ],
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                      },
                                                                                  },
                                                                                  else: {
                                                                                    if: {
                                                                                      required:
                                                                                        [
                                                                                          'league_name',
                                                                                        ],
                                                                                      properties:
                                                                                        {
                                                                                          league_name:
                                                                                            {
                                                                                              contains:
                                                                                                {
                                                                                                  required:
                                                                                                    [
                                                                                                      'value',
                                                                                                    ],
                                                                                                  properties:
                                                                                                    {
                                                                                                      value:
                                                                                                        {
                                                                                                          enum: [
                                                                                                            'Indiska Premier-ligan',
                                                                                                            'Szkocka Premier League',
                                                                                                            'Liga Premier de la India',
                                                                                                            'Indian Premier League',
                                                                                                            'インディアン・プレミアリーグ',
                                                                                                            'الدوري الهندي الممتاز',
                                                                                                            'Liga Premier Indiana',
                                                                                                            'indian_premier_league',
                                                                                                            'Premier League india',
                                                                                                          ],
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    then: {
                                                                                      properties:
                                                                                        {
                                                                                          team_name:
                                                                                            {
                                                                                              items:
                                                                                                {
                                                                                                  properties:
                                                                                                    {
                                                                                                      value:
                                                                                                        {
                                                                                                          enum: [
                                                                                                            'Chennai Super Kings',
                                                                                                            'Delhi Capitals',
                                                                                                            'Gujarat Lions',
                                                                                                            'Kings XI Punjab',
                                                                                                            'Kolkata Knight Riders',
                                                                                                            'Mumbai Indians',
                                                                                                            'Rajasthan Royals',
                                                                                                            'Rising Pune Supergiants',
                                                                                                            'Royal Challengers Bangalore',
                                                                                                            'Sunrisers Hyderabad',
                                                                                                          ],
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                    },
                                                                                    else: {
                                                                                      if: {
                                                                                        required:
                                                                                          [
                                                                                            'league_name',
                                                                                          ],
                                                                                        properties:
                                                                                          {
                                                                                            league_name:
                                                                                              {
                                                                                                contains:
                                                                                                  {
                                                                                                    required:
                                                                                                      [
                                                                                                        'value',
                                                                                                      ],
                                                                                                    properties:
                                                                                                      {
                                                                                                        value:
                                                                                                          {
                                                                                                            enum: [
                                                                                                              'wwe',
                                                                                                              'WWE',
                                                                                                              'المصارعة العالمية الترفيهية',
                                                                                                            ],
                                                                                                          },
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                      },
                                                                                      then: {
                                                                                        properties:
                                                                                          {
                                                                                            team_name:
                                                                                              {
                                                                                                items:
                                                                                                  {
                                                                                                    properties:
                                                                                                      {
                                                                                                        value:
                                                                                                          {
                                                                                                            enum: [
                                                                                                              'WWE',
                                                                                                            ],
                                                                                                          },
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                      },
                                                                                      else: {
                                                                                        if: {
                                                                                          required:
                                                                                            [
                                                                                              'league_name',
                                                                                            ],
                                                                                          properties:
                                                                                            {
                                                                                              league_name:
                                                                                                {
                                                                                                  contains:
                                                                                                    {
                                                                                                      required:
                                                                                                        [
                                                                                                          'value',
                                                                                                        ],
                                                                                                      properties:
                                                                                                        {
                                                                                                          value:
                                                                                                            {
                                                                                                              enum: [
                                                                                                                'اتحاد كرة القدم الأميركي',
                                                                                                                'nfl',
                                                                                                                'NFL',
                                                                                                              ],
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                        then: {
                                                                                          properties:
                                                                                            {
                                                                                              team_name:
                                                                                                {
                                                                                                  items:
                                                                                                    {
                                                                                                      properties:
                                                                                                        {
                                                                                                          value:
                                                                                                            {
                                                                                                              enum: [
                                                                                                                'Arizona Cardinals',
                                                                                                                'Atlanta Falcons',
                                                                                                                'Baltimore Ravens',
                                                                                                                'Boston Patriots',
                                                                                                                'Boston Redskins',
                                                                                                                'Buffalo Bills',
                                                                                                                'Carolina Panthers',
                                                                                                                'Chicago Bears',
                                                                                                                'Chicago Cardinals',
                                                                                                                'Cincinnati Bengals',
                                                                                                                'Cleveland Browns',
                                                                                                                'Dallas Cowboys',
                                                                                                                'Dallas Texans',
                                                                                                                'Denver Broncos',
                                                                                                                'Detroit Lions',
                                                                                                                'Green Bay Packers',
                                                                                                                'Houston Oilers',
                                                                                                                'Houston Texans',
                                                                                                                'Indianapolis Colts',
                                                                                                                'Jacksonville Jaguars',
                                                                                                                'Kansas City Chiefs',
                                                                                                                'Las Vegas Raiders',
                                                                                                                'Los Angeles Chargers',
                                                                                                                'Los Angeles Rams',
                                                                                                                'Miami Dolphins',
                                                                                                                'Minnesota Vikings',
                                                                                                                'New England Patriots',
                                                                                                                'New Orleans Saints',
                                                                                                                'New York Giants',
                                                                                                                'New York Jets',
                                                                                                                'New York Titans',
                                                                                                                'Oakland Raiders',
                                                                                                                'Philadelphia Eagles',
                                                                                                                'Pittsburgh Steelers',
                                                                                                                'San Diego Chargers',
                                                                                                                'San Francisco 49ers',
                                                                                                                'Seattle Seahawks',
                                                                                                                'St. Louis Rams',
                                                                                                                'Tampa Bay Buccaneers',
                                                                                                                'Tennessee Titans',
                                                                                                                'Washington Commanders',
                                                                                                                'Washington Football Team',
                                                                                                              ],
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                        },
                                                                                        else: {
                                                                                          if: {
                                                                                            required:
                                                                                              [
                                                                                                'league_name',
                                                                                              ],
                                                                                            properties:
                                                                                              {
                                                                                                league_name:
                                                                                                  {
                                                                                                    contains:
                                                                                                      {
                                                                                                        required:
                                                                                                          [
                                                                                                            'value',
                                                                                                          ],
                                                                                                        properties:
                                                                                                          {
                                                                                                            value:
                                                                                                              {
                                                                                                                enum: [
                                                                                                                  'ufc',
                                                                                                                  'UFC',
                                                                                                                  'بطولة القتال النهائي',
                                                                                                                ],
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                          then: {
                                                                                            properties:
                                                                                              {
                                                                                                team_name:
                                                                                                  {
                                                                                                    items:
                                                                                                      {
                                                                                                        properties:
                                                                                                          {
                                                                                                            value:
                                                                                                              {
                                                                                                                enum: [
                                                                                                                  'Al Iaquinta',
                                                                                                                  'Alejandro Perez',
                                                                                                                  'Alex Oliveira',
                                                                                                                  'Alex Perez',
                                                                                                                  'Alexa Grasso',
                                                                                                                  'Alexander Gustafsson',
                                                                                                                  'Alexander Hernandez',
                                                                                                                  'Alexander Volkanoski',
                                                                                                                  'Alexander Volkov',
                                                                                                                  'Alexandre Pantoja',
                                                                                                                  'Alexis Davis',
                                                                                                                  'Alistair Overeem',
                                                                                                                  'Aljamain Sterling',
                                                                                                                  'Amanda Nunes',
                                                                                                                  'Andrea Lee',
                                                                                                                  'Andrei Arlovski',
                                                                                                                  'Angela Hill',
                                                                                                                  'Anthony Pettis',
                                                                                                                  'Anthony Smith',
                                                                                                                  'Antonio Carlos Junior',
                                                                                                                  'Ashlee Evans-Smith',
                                                                                                                  'Aspen Ladd',
                                                                                                                  'Ben Nguyen',
                                                                                                                  'Bethe Correia',
                                                                                                                  'Brad Tavares',
                                                                                                                  'Brandon Moreno',
                                                                                                                  'Brian Ortega',
                                                                                                                  'Carla Esparza',
                                                                                                                  'Cat Zingano',
                                                                                                                  'Chad Mendes',
                                                                                                                  'Chan Sung Jung',
                                                                                                                  'Chris Weidman',
                                                                                                                  'Claudia Gadelha',
                                                                                                                  'Cody Garbrandt',
                                                                                                                  'Cody Stamann',
                                                                                                                  'Colby Covington',
                                                                                                                  'Conor McGregor',
                                                                                                                  'Corey Anderson',
                                                                                                                  'Cortney Casey',
                                                                                                                  'Cris Cyborg',
                                                                                                                  'Cub Swanson',
                                                                                                                  'Curtis Blaydes',
                                                                                                                  'Dan Hooker',
                                                                                                                  'Daniel Cormier',
                                                                                                                  'Darren Elkins',
                                                                                                                  'Darren Till',
                                                                                                                  'David Branch',
                                                                                                                  'Deiveson Figueiredo',
                                                                                                                  'Demian Maia',
                                                                                                                  'Derek Brunson',
                                                                                                                  'Derrick Lewis',
                                                                                                                  'Dominick Cruz',
                                                                                                                  'Dominick Reyes',
                                                                                                                  'Donald Cerrone',
                                                                                                                  'Douglas Silva de Andrade',
                                                                                                                  'Dustin Ortiz',
                                                                                                                  'Dustin Poirier',
                                                                                                                  'Edson Barboza',
                                                                                                                  'Elias Theodorou',
                                                                                                                  'Elizeu Zaleski dos Santos',
                                                                                                                  'Felice Herrig',
                                                                                                                  'Francis Ngannou',
                                                                                                                  'Francisco Trinaldo',
                                                                                                                  'Frankie Edgar',
                                                                                                                  'Georges St-Pierre',
                                                                                                                  'Germaine de Randamie',
                                                                                                                  'Glover Teixeira',
                                                                                                                  'Gunnar Nelson',
                                                                                                                  'Henry Cejudo',
                                                                                                                  'Holly Holm',
                                                                                                                  'Ilir Latifi',
                                                                                                                  'Irene Aldana',
                                                                                                                  'Israel Adesanya',
                                                                                                                  'Jacare Souza',
                                                                                                                  'James Vick',
                                                                                                                  'Jan Blachowicz',
                                                                                                                  'Jared Cannonier',
                                                                                                                  'Jennifer Maia',
                                                                                                                  'Jeremy Stephens',
                                                                                                                  'Jessica Andrade',
                                                                                                                  'Jessica Eye',
                                                                                                                  'Jessica-Rose Clark',
                                                                                                                  'Jimi Manuwa',
                                                                                                                  'Jimmie Rivera',
                                                                                                                  'Joanna Jedrzejczyk',
                                                                                                                  'Joanne Calderwood',
                                                                                                                  'John Dodson',
                                                                                                                  'John Lineker',
                                                                                                                  'John Moraga',
                                                                                                                  'Jon Jones',
                                                                                                                  'Jorge Masvidal',
                                                                                                                  'Jose Aldo',
                                                                                                                  'Joseph Benavidez',
                                                                                                                  'Josh Emmett',
                                                                                                                  'Julianna Pena',
                                                                                                                  'Junior dos Santos',
                                                                                                                  'Jussier Formiga',
                                                                                                                  'Justin Gaethje',
                                                                                                                  'Justin Willis',
                                                                                                                  'Kamaru Usman',
                                                                                                                  'Karolina Kowalkiewicz',
                                                                                                                  'Katlyn Chookagian',
                                                                                                                  'Kelvin Gastelum',
                                                                                                                  'Ketlen Vieira',
                                                                                                                  'Kevin Lee',
                                                                                                                  'Khabib Nurmagomedov',
                                                                                                                  'Lauren Murphy Increase1',
                                                                                                                  'Leon Edwards',
                                                                                                                  'Lina Lansberg',
                                                                                                                  'Liz Carmouche',
                                                                                                                  'Lucie Pudilova',
                                                                                                                  'Luke Rockhold',
                                                                                                                  'Mackenzie Dern',
                                                                                                                  'Mara Romero Borella',
                                                                                                                  'Marcin Tybura',
                                                                                                                  'Marion Reneau',
                                                                                                                  'Mark Hunt',
                                                                                                                  'Marlon Moraes',
                                                                                                                  'Matheus Nicolau',
                                                                                                                  'Mauricio Rua',
                                                                                                                  'Max Holloway',
                                                                                                                  'Michael Chiesa',
                                                                                                                  'Michelle Waterson',
                                                                                                                  'Middleweight',
                                                                                                                  'Mirsad Bektic',
                                                                                                                  'Misha Cirkunov',
                                                                                                                  'Nate Diaz',
                                                                                                                  'Neil Magny',
                                                                                                                  'Nicco Montaño',
                                                                                                                  'Nikita Krylov',
                                                                                                                  'Nina Ansaroff',
                                                                                                                  'Oleksiy Oliynyk',
                                                                                                                  'Ovince Saint Preux',
                                                                                                                  'Paul Felder',
                                                                                                                  'Paulo Costa',
                                                                                                                  'Pedro Munhoz',
                                                                                                                  'Rafael dos Anjos',
                                                                                                                  'Randa Markos',
                                                                                                                  'Rani Yahya',
                                                                                                                  'Raphael Assunção',
                                                                                                                  'Raquel Pennington',
                                                                                                                  'Ray Borg',
                                                                                                                  'Renato Moicano',
                                                                                                                  'Ricardo Lamas',
                                                                                                                  'Rob Font',
                                                                                                                  'Robbie Lawler',
                                                                                                                  'Robert Whittaker',
                                                                                                                  'Rose Namajunas',
                                                                                                                  'Roxanne Modafferi',
                                                                                                                  'Santiago Ponzinibbio',
                                                                                                                  'Sara McMann',
                                                                                                                  'Sergio Pettis',
                                                                                                                  'Shamil Abdurakhimov',
                                                                                                                  'Sijara Eubanks',
                                                                                                                  'Stefan Struve',
                                                                                                                  'Stephen Thompson',
                                                                                                                  'Stipe Miocic',
                                                                                                                  'Tai Tuivasa',
                                                                                                                  'Tatiana Suarez',
                                                                                                                  'Tecia Torres',
                                                                                                                  'Thiago Santos',
                                                                                                                  'Thomas Almeida',
                                                                                                                  'Tim Elliott',
                                                                                                                  'TJ Dillashaw',
                                                                                                                  'Tony Ferguson',
                                                                                                                  'Tonya Evinger',
                                                                                                                  'Tyron Woodley',
                                                                                                                  'Tyson Pedro',
                                                                                                                  'Ulka Sasaki',
                                                                                                                  'Uriah Hall',
                                                                                                                  'Valentina Shevchenko',
                                                                                                                  'Volkan Oezdemir',
                                                                                                                  'Wilson Reis',
                                                                                                                  'Yair Rodriguez',
                                                                                                                  'Yana Kunitskaya',
                                                                                                                  'Yoel Romero',
                                                                                                                  'Zabit Magomedsharipov',
                                                                                                                ],
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                          },
                                                                                          else: {
                                                                                            if: {
                                                                                              required:
                                                                                                [
                                                                                                  'league_name',
                                                                                                ],
                                                                                              properties:
                                                                                                {
                                                                                                  league_name:
                                                                                                    {
                                                                                                      contains:
                                                                                                        {
                                                                                                          required:
                                                                                                            [
                                                                                                              'value',
                                                                                                            ],
                                                                                                          properties:
                                                                                                            {
                                                                                                              value:
                                                                                                                {
                                                                                                                  enum: [
                                                                                                                    'Baloncesto japonés',
                                                                                                                    'Basketball japonais',
                                                                                                                    'Japanese Basketball',
                                                                                                                    '日本/Bリーグ',
                                                                                                                    'japanese_basketball',
                                                                                                                    'Japansk basket',
                                                                                                                    'Japans basketbal',
                                                                                                                    'Basquete japonês',
                                                                                                                    'كرة السلة اليابانية',
                                                                                                                    'Japońska koszykówka',
                                                                                                                    'Campionato di basket giapponese',
                                                                                                                    'Japanischer Basketball',
                                                                                                                  ],
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                            then: {
                                                                                              properties:
                                                                                                {
                                                                                                  team_name:
                                                                                                    {
                                                                                                      items:
                                                                                                        {
                                                                                                          properties:
                                                                                                            {
                                                                                                              value:
                                                                                                                {
                                                                                                                  enum: [
                                                                                                                    'AISIN AW AREIONS ANJO',
                                                                                                                    'AKITA NORTHERN HAPPINETS',
                                                                                                                    'ALVARK TOKYO',
                                                                                                                    "AOMORI WAT'S",
                                                                                                                    'BAMBITIOUS NARA',
                                                                                                                    'CHIBA JETS',
                                                                                                                    'EARTHFRIENDS TOKYO Z',
                                                                                                                    'EHIME ORANGE VIKINGS',
                                                                                                                    'F EAGLES NAGOYA',
                                                                                                                    'FUKUSHIMA FIREBONDS',
                                                                                                                    'GUNMA CRANE THUNDERS',
                                                                                                                    'HIROSHIMA DRAGONFLIES',
                                                                                                                    'IBARAKI ROBOTS',
                                                                                                                    'IWATE BIG BULLS',
                                                                                                                    'KAGAWA FIVE ARROWS',
                                                                                                                    'KAGOSHIMA REBNISE',
                                                                                                                    'KANAZAWA SAMURAIZ',
                                                                                                                    'KAWASAKI BRAVE THUNDERS',
                                                                                                                    'KUMAMOTO VOLTERS',
                                                                                                                    'KYOTO HANNARYZ',
                                                                                                                    'LEVANGA HOKKAIDO',
                                                                                                                    'NAGOYA DIAMOND DOLPHINS',
                                                                                                                    'NIIGATA ALBIREX BB',
                                                                                                                    'NISHINOMIYA STORKS',
                                                                                                                    'OSAKA EVESSA',
                                                                                                                    'OTSUKA CORPORATION ALPHAS',
                                                                                                                    'RIZING ZEPHYR FUKUOKA',
                                                                                                                    'RYUKYU GOLDEN KINGS',
                                                                                                                    'SAITAMA BRONCOS',
                                                                                                                    'SAN-EN NEOPHOENIX',
                                                                                                                    'SEAHORSES MIKAWA',
                                                                                                                    'SENDAI EIGHTY NINERS',
                                                                                                                    'SHIGA LAKESTARS',
                                                                                                                    'SHIMANE SUSANOO MAGIC',
                                                                                                                    'SHINSHU BRAVE WARRIORS',
                                                                                                                    'SUNROCKERS SHIBUYA',
                                                                                                                    'TOCHIGI BREX',
                                                                                                                    'TOKIO MARINE NICHIDO BIG BLUE',
                                                                                                                    'TOKYO CINQ REVES',
                                                                                                                    'TOKYO EXCELLENCE',
                                                                                                                    'TOKYO HACHIOJI TRAINS',
                                                                                                                    'TOYAMA GROUSES',
                                                                                                                    'TOYODA GOSEI SCORPIONS',
                                                                                                                    'YAMAGATA WYVERNS',
                                                                                                                    'YOKOHAMA B-CORSAIRS',
                                                                                                                  ],
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                            },
                                                                                            else: {
                                                                                              if: {
                                                                                                required:
                                                                                                  [
                                                                                                    'league_name',
                                                                                                  ],
                                                                                                properties:
                                                                                                  {
                                                                                                    league_name:
                                                                                                      {
                                                                                                        contains:
                                                                                                          {
                                                                                                            required:
                                                                                                              [
                                                                                                                'value',
                                                                                                              ],
                                                                                                            properties:
                                                                                                              {
                                                                                                                value:
                                                                                                                  {
                                                                                                                    enum: [
                                                                                                                      'wnba',
                                                                                                                      'الاتحاد الوطني لكرة السلة النسائية',
                                                                                                                      'WNBA',
                                                                                                                    ],
                                                                                                                  },
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                              then: {
                                                                                                properties:
                                                                                                  {
                                                                                                    team_name:
                                                                                                      {
                                                                                                        items:
                                                                                                          {
                                                                                                            properties:
                                                                                                              {
                                                                                                                value:
                                                                                                                  {
                                                                                                                    enum: [
                                                                                                                      'Atlanta Dream',
                                                                                                                      'Charlotte Sting',
                                                                                                                      'Chicago Sky',
                                                                                                                      'Cleveland Rockers',
                                                                                                                      'Connecticut Sun',
                                                                                                                      'Dallas Wings',
                                                                                                                      'Detroit Shock',
                                                                                                                      'Golden State Valkyries',
                                                                                                                      'Houston Comets',
                                                                                                                      'Indiana Fever',
                                                                                                                      'Las Vegas Aces',
                                                                                                                      'Los Angeles Sparks',
                                                                                                                      'Miami Sol',
                                                                                                                      'Minnesota Lynx',
                                                                                                                      'New York Liberty',
                                                                                                                      'Phoenix Mercury',
                                                                                                                      'Portland Fire',
                                                                                                                      'Sacramento Monarchs',
                                                                                                                      'San Antonio Silver Stars',
                                                                                                                      'Seattle Storm',
                                                                                                                      'Toronto Tempo',
                                                                                                                      'Tulsa Shock',
                                                                                                                      'Washington Mystics',
                                                                                                                    ],
                                                                                                                  },
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                  },
                                                                                              },
                                                                                              else: {
                                                                                                if: {
                                                                                                  required:
                                                                                                    [
                                                                                                      'league_name',
                                                                                                    ],
                                                                                                  properties:
                                                                                                    {
                                                                                                      league_name:
                                                                                                        {
                                                                                                          contains:
                                                                                                            {
                                                                                                              required:
                                                                                                                [
                                                                                                                  'value',
                                                                                                                ],
                                                                                                              properties:
                                                                                                                {
                                                                                                                  value:
                                                                                                                    {
                                                                                                                      enum: [
                                                                                                                        'mlb',
                                                                                                                        'MLB',
                                                                                                                        'Ligue majeure de baseball',
                                                                                                                        'دوري البيسبول الرئيسي',
                                                                                                                      ],
                                                                                                                    },
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                                then: {
                                                                                                  properties:
                                                                                                    {
                                                                                                      team_name:
                                                                                                        {
                                                                                                          items:
                                                                                                            {
                                                                                                              properties:
                                                                                                                {
                                                                                                                  value:
                                                                                                                    {
                                                                                                                      enum: [
                                                                                                                        'Arizona Diamondbacks',
                                                                                                                        'Atlanta Braves',
                                                                                                                        'Baltimore Orioles',
                                                                                                                        'Boston Beaneaters',
                                                                                                                        'Boston Beans',
                                                                                                                        'Boston Red Sox',
                                                                                                                        'California Angels',
                                                                                                                        'Chicago Cubs',
                                                                                                                        'Chicago White Sox',
                                                                                                                        'Chicago White Stockings',
                                                                                                                        'Chicago Whitesox',
                                                                                                                        'Cincinnati Redlegs',
                                                                                                                        'Cincinnati Reds',
                                                                                                                        'Cleveland Blues',
                                                                                                                        'Cleveland Indians',
                                                                                                                        'Cleveland Naps',
                                                                                                                        'Colorado Rockies',
                                                                                                                        'Detroit Tigers',
                                                                                                                        'Houston Astros',
                                                                                                                        'Kansas City Athletics',
                                                                                                                        'Kansas City Royals',
                                                                                                                        'Los Angeles Angels',
                                                                                                                        'Los Angeles Dodgers',
                                                                                                                        'Miami Marlins',
                                                                                                                        'Milwaukee Braves',
                                                                                                                        'Milwaukee Brewers',
                                                                                                                        'Minnesota Twins',
                                                                                                                        'Montreal Expos',
                                                                                                                        'New York Highlanders',
                                                                                                                        'New York Mets',
                                                                                                                        'New York Yankees',
                                                                                                                        'Oakland Athletics',
                                                                                                                        'Philadelphia Athletics',
                                                                                                                        'Philadelphia Phillies',
                                                                                                                        'Pittsburgh Pirates',
                                                                                                                        'San Diego Padres',
                                                                                                                        'San Francisco Giants',
                                                                                                                        'Seattle Mariners',
                                                                                                                        'St. Louis Cardinals',
                                                                                                                        'Tampa Bay Rays',
                                                                                                                        'Tampa Rays',
                                                                                                                        'Texas Rangers',
                                                                                                                        'Toronto Blue Jays',
                                                                                                                        'Washington Nationals',
                                                                                                                      ],
                                                                                                                    },
                                                                                                                },
                                                                                                            },
                                                                                                        },
                                                                                                    },
                                                                                                },
                                                                                                else: {
                                                                                                  if: {
                                                                                                    required:
                                                                                                      [
                                                                                                        'league_name',
                                                                                                      ],
                                                                                                    properties:
                                                                                                      {
                                                                                                        league_name:
                                                                                                          {
                                                                                                            contains:
                                                                                                              {
                                                                                                                required:
                                                                                                                  [
                                                                                                                    'value',
                                                                                                                  ],
                                                                                                                properties:
                                                                                                                  {
                                                                                                                    value:
                                                                                                                      {
                                                                                                                        enum: [
                                                                                                                          'تنس',
                                                                                                                          'Tennis',
                                                                                                                          'Tenis',
                                                                                                                          'Tênis',
                                                                                                                          'テニス',
                                                                                                                          'tennis',
                                                                                                                        ],
                                                                                                                      },
                                                                                                                  },
                                                                                                              },
                                                                                                          },
                                                                                                      },
                                                                                                  },
                                                                                                  then: {
                                                                                                    properties:
                                                                                                      {
                                                                                                        team_name:
                                                                                                          {
                                                                                                            items:
                                                                                                              {
                                                                                                                properties:
                                                                                                                  {
                                                                                                                    value:
                                                                                                                      {
                                                                                                                        enum: [
                                                                                                                          'Tennis',
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
                      'TEAM_NAME',
                      'TEAM_NAME/SIZE_NAME',
                      'TEAM_NAME/SIZE_NAME/COLOR_NAME',
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
      required: ['team_name'],
    },
  },
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
                    enum: ['SIZE_NAME/SCENT_NAME', 'SCENT_NAME'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['scent'],
    },
  },
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
                    enum: ['LENGTH_RANGE', 'WIDTH_RANGE/LENGTH_RANGE'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['length_range'],
    },
  },
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
                    enum: ['WIDTH_RANGE', 'WIDTH_RANGE/LENGTH_RANGE'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['width_range'],
    },
  },
  {
    if: {
      required: ['item_length_width'],
      properties: {
        item_length_width: {
          contains: {
            required: ['length'],
            properties: {
              length: {
                contains: {
                  required: ['unit'],
                  properties: {
                    unit: {
                      enum: ['inches'],
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
        item_length_width: {
          items: {
            properties: {
              length: {
                properties: {
                  value: {
                    maximum: 750,
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
      required: ['item_length_width'],
      properties: {
        item_length_width: {
          contains: {
            required: ['width'],
            properties: {
              width: {
                contains: {
                  required: ['unit'],
                  properties: {
                    unit: {
                      enum: ['inches'],
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
        item_length_width: {
          items: {
            properties: {
              width: {
                properties: {
                  value: {
                    maximum: 750,
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
    allOf: [
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
          required: ['item_length_width'],
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
          required: ['item_length_width'],
        },
      },
    ],
  },
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
                    enum: ['SET_NAME'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['set_name'],
    },
  },
  {
    if: {
      not: {
        required: ['parentage_level'],
        properties: {
          parentage_level: {
            contains: {
              required: ['value'],
              properties: {
                value: {
                  enum: ['child'],
                },
              },
            },
          },
        },
      },
    },
    then: {
      properties: {
        child_parent_sku_relationship: {
          items: {
            not: {
              required: ['parent_sku'],
            },
          },
        },
      },
    },
  },
  {
    if: {
      required: ['parentage_level'],
      properties: {
        parentage_level: {
          contains: {
            required: ['value'],
            properties: {
              value: {
                enum: ['child'],
              },
            },
          },
        },
      },
    },
    then: {
      properties: {
        child_parent_sku_relationship: {
          items: {
            required: ['parent_sku'],
          },
        },
      },
    },
  },
  {
    if: {
      required: ['parentage_level'],
      properties: {
        parentage_level: {
          items: {
            required: ['value'],
          },
        },
      },
    },
    then: {
      required: ['child_parent_sku_relationship', 'variation_theme'],
    },
  },
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
    allOf: [
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
                            'lithium_metal',
                            'lithium_ion',
                            'lithium_polymer',
                            'NiMh',
                            'sodium_ion',
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
          required: ['battery'],
          properties: {
            battery: {
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
                            'lithium_ion',
                            'lithium_metal',
                            'lithium_polymer',
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
          required: ['battery'],
          properties: {
            battery: {
              items: {
                required: ['weight'],
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
          required: ['num_batteries'],
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
                            'lithium_ion',
                            'lithium_metal',
                            'lithium_polymer',
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
          required: ['num_batteries'],
        },
      },
    ],
  },
  {
    allOf: [
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
                          enum: ['lithium_metal'],
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
          required: ['number_of_lithium_metal_cells'],
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
                          enum: ['lithium_metal'],
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
          required: ['number_of_lithium_metal_cells'],
        },
      },
    ],
  },
  {
    allOf: [
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
                          enum: ['lithium_ion', 'lithium_polymer'],
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
          required: ['number_of_lithium_ion_cells'],
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
                          enum: ['lithium_ion', 'lithium_polymer'],
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
          required: ['number_of_lithium_ion_cells'],
        },
      },
    ],
  },
  {
    allOf: [
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
                            'lithium_ion',
                            'lithium_metal',
                            'lithium_polymer',
                            'sodium_ion',
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
          required: ['lithium_battery'],
          properties: {
            lithium_battery: {
              items: {
                required: ['energy_content'],
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
                          enum: ['lithium_ion', 'lithium_polymer'],
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
          required: ['lithium_battery'],
          properties: {
            lithium_battery: {
              items: {
                required: ['energy_content'],
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
                            'lithium_ion',
                            'lithium_polymer',
                            'lithium_metal',
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
          required: ['lithium_battery'],
          properties: {
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
                            'lithium_ion',
                            'lithium_metal',
                            'lithium_polymer',
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
          required: ['lithium_battery'],
          properties: {
            lithium_battery: {
              items: {
                required: ['packaging'],
              },
            },
          },
        },
      },
    ],
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
                      enum: ['lithium_metal'],
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
      required: ['lithium_battery'],
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
      required: ['supplier_declared_dg_hz_regulation'],
      properties: {
        supplier_declared_dg_hz_regulation: {
          contains: {
            required: ['value'],
            properties: {
              value: {
                enum: ['not_applicable'],
              },
            },
          },
        },
      },
    },
    then: {
      properties: {
        supplier_declared_dg_hz_regulation: {
          items: {
            properties: {
              value: {
                not: {
                  enum: ['other', 'storage', 'transportation', 'waste'],
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
      required: ['supplier_declared_dg_hz_regulation'],
      properties: {
        supplier_declared_dg_hz_regulation: {
          contains: {
            required: ['value'],
            properties: {
              value: {
                enum: ['ghs'],
              },
            },
          },
        },
      },
    },
    then: {
      required: ['ghs', 'safety_data_sheet_url'],
      properties: {
        ghs: {
          items: {
            required: ['classification'],
          },
        },
      },
    },
  },
  {
    if: {
      required: ['supplier_declared_dg_hz_regulation'],
      properties: {
        supplier_declared_dg_hz_regulation: {
          contains: {
            required: ['value'],
            properties: {
              value: {
                enum: ['transportation'],
              },
            },
          },
        },
      },
    },
    then: {
      required: ['hazmat'],
      properties: {
        hazmat: {
          contains: {
            required: ['aspect'],
            properties: {
              aspect: {
                enum: ['united_nations_regulatory_id'],
              },
            },
          },
        },
      },
    },
  },
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
                    enum: ['ITEM_WEIGHT'],
                  },
                },
              },
            },
          },
        },
      ],
    },
    then: {
      required: ['item_weight'],
    },
  },
  {
    properties: {
      california_proposition_65: {
        items: {
          if: {
            required: ['compliance_type'],
            properties: {
              compliance_type: {
                enum: ['food', 'furniture', 'chemical'],
              },
            },
          },
          then: {
            required: ['chemical_names'],
            properties: {
              chemical_names: {
                minItems: 1,
              },
            },
          },
        },
      },
    },
  },
  {
    properties: {
      california_proposition_65: {
        items: {
          if: {
            required: ['compliance_type'],
            properties: {
              compliance_type: {
                enum: ['food', 'furniture', 'chemical'],
              },
            },
          },
          then: {
            properties: {
              chemical_names: {
                maxItems: 1,
              },
            },
          },
          else: {
            not: {
              required: ['chemical_names'],
            },
          },
        },
      },
    },
  },
  {
    if: {
      required: ['fcc_radio_frequency_emission_compliance'],
      properties: {
        fcc_radio_frequency_emission_compliance: {
          contains: {
            required: ['registration_status'],
            properties: {
              registration_status: {
                enum: ['has_fcc_id'],
              },
            },
          },
        },
      },
    },
    then: {
      properties: {
        fcc_radio_frequency_emission_compliance: {
          items: {
            required: ['identification_number'],
          },
        },
      },
    },
  },
  {
    if: {
      required: ['fcc_radio_frequency_emission_compliance'],
      properties: {
        fcc_radio_frequency_emission_compliance: {
          contains: {
            required: ['registration_status'],
            properties: {
              registration_status: {
                enum: ['fcc_supplier_declaration_of_conformity'],
              },
            },
          },
        },
      },
    },
    then: {
      properties: {
        fcc_radio_frequency_emission_compliance: {
          items: {
            required: [
              'point_of_contact_address',
              'point_of_contact_email',
              'point_of_contact_name',
              'point_of_contact_phone_number',
            ],
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
      required: ['has_multiple_battery_powered_components'],
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
                              enum: [
                                'lithium_ion',
                                'lithium_metal',
                                'lithium_polymer',
                                'sodium_ion',
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
                              enum: [
                                'lithium_ion',
                                'lithium_metal',
                                'lithium_polymer',
                                'sodium_ion',
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
      required: ['contains_battery_or_cell'],
    },
  },
  {
    if: {
      anyOf: [
        {
          allOf: [
            {
              required: ['is_battery_non_spillable'],
              properties: {
                is_battery_non_spillable: {
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
              required: ['is_battery_non_spillable'],
              properties: {
                is_battery_non_spillable: {
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
      required: ['battery_contains_free_unabsorbed_liquid'],
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
                              enum: ['wet_alkali', 'lead_acid'],
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
                              enum: ['wet_alkali', 'lead_acid'],
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
      required: ['is_battery_non_spillable'],
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
                              enum: [
                                'NiCAD',
                                'alkaline',
                                'lead_acid',
                                'wet_alkali',
                                'other_than_listed',
                                'NiMh',
                                'sodium_ion',
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
                              enum: [
                                'NiCAD',
                                'alkaline',
                                'lead_acid',
                                'wet_alkali',
                                'other_than_listed',
                                'NiMh',
                                'sodium_ion',
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
      required: ['non_lithium_battery_packaging'],
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
                              enum: ['lithium_ion'],
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
              required: ['lithium_battery'],
              properties: {
                lithium_battery: {
                  contains: {
                    required: ['packaging'],
                    properties: {
                      packaging: {
                        contains: {
                          required: ['value'],
                          properties: {
                            value: {
                              enum: ['batteries_packed_with_equipment'],
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
                              enum: ['lithium_ion'],
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
              required: ['lithium_battery'],
              properties: {
                lithium_battery: {
                  contains: {
                    required: ['packaging'],
                    properties: {
                      packaging: {
                        contains: {
                          required: ['value'],
                          properties: {
                            value: {
                              enum: ['batteries_packed_with_equipment'],
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
      required: ['has_less_than_30_percent_state_of_charge'],
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
                        'lithium_ion',
                        'lithium_metal',
                        'lithium_polymer',
                        'wet_alkali',
                        'lead_acid',
                        'sodium_ion',
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
      properties: {
        battery_installation_device_type: {
          items: {
            properties: {
              value: {
                enum: [
                  'installed_in_vehicle',
                  'installed_in_vessel',
                  'not_installed',
                ],
              },
            },
          },
        },
      },
    },
    else: {
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
                          'other_than_listed',
                          'alkaline',
                          'NiCAD',
                          'NiMh',
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
        properties: {
          battery_installation_device_type: {
            items: {
              properties: {
                value: {
                  enum: [
                    'installed_in_equipment',
                    'installed_in_vehicle',
                    'installed_in_vessel',
                    'not_installed',
                  ],
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
              required: ['lithium_battery'],
              properties: {
                lithium_battery: {
                  contains: {
                    required: ['packaging'],
                    properties: {
                      packaging: {
                        contains: {
                          required: ['value'],
                          properties: {
                            value: {
                              enum: ['batteries_contained_in_equipment'],
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
              required: ['lithium_battery'],
              properties: {
                lithium_battery: {
                  contains: {
                    required: ['packaging'],
                    properties: {
                      packaging: {
                        contains: {
                          required: ['value'],
                          properties: {
                            value: {
                              enum: ['batteries_contained_in_equipment'],
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
        {
          allOf: [
            {
              required: ['non_lithium_battery_packaging'],
              properties: {
                non_lithium_battery_packaging: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: ['batteries_contained_in_equipment'],
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
              required: ['non_lithium_battery_packaging'],
              properties: {
                non_lithium_battery_packaging: {
                  contains: {
                    required: ['value'],
                    properties: {
                      value: {
                        enum: ['batteries_contained_in_equipment'],
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
      required: ['battery_installation_device_type'],
    },
  },
  {
    if: {
      anyOf: [
        {
          allOf: [
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
        {
          allOf: [
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
      required: ['item_package_dimensions', 'item_package_weight'],
    },
  },
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
                      'ITEM_DISPLAY_WEIGHT',
                      'COLOR_NAME/ITEM_DISPLAY_WEIGHT',
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
      required: ['item_display_weight'],
    },
  },
];

module.exports = { rules };
