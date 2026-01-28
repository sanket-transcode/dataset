const { validator } = require('../validation');
const { keys } = require('./keys');
const { rules } = require('./rules');

const result = validator(rules, keys, {
  item_name: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'Product name',
    },
  ],
  brand: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'Generic',
    },
  ],
  supplier_declared_has_product_identifier_exemption: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: true,
    },
  ],
  item_type_keyword: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: 't-shirt',
    },
  ],
  manufacturer: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'CLSEVXY',
    },
  ],
  fulfillment_availability: [
    {
      quantity: 0,
      fulfillment_channel_code: 'AMAZON_NA',
    },
  ],
  purchasable_offer: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      our_price: [
        {
          schedule: [
            {
              value_with_tax: 0,
            },
          ],
        },
      ],
    },
  ],
  condition_type: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: 'new_new',
    },
  ],
  list_price: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      currency: 'USD',
      value: 20,
    },
  ],
  merchant_shipping_group: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: 'temp-value',
    },
  ],
  product_description: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'Product Description',
    },
  ],
  special_feature: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'Double-sided, 1/15X Magnifying, 6.25 Inches',
    },
  ],
  material: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'glass',
    },
  ],
  fabric_type: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'Glass, Acrylic',
    },
  ],
  number_of_items: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: 1,
    },
  ],
  part_number: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: 'CLS-0511',
    },
  ],
  item_shape: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'Round',
    },
  ],
  is_assembly_required: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: false,
    },
  ],
  mounting_type: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'Tabletop Mount',
    },
  ],
  product_site_launch_date: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: '2022-09-14T14:59:44.173Z',
    },
  ],
  included_components: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'mirror',
    },
  ],
  room_type: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      language_tag: 'en_US',
      value: 'Bedroom',
    },
  ],
  country_of_origin: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: 'CN',
    },
  ],
  batteries_required: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: true,
    },
  ],
  supplier_declared_dg_hz_regulation: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      value: 'storage',
    },
  ],
  frame: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      material: [
        {
          language_tag: 'en_US',
          value: 'Polystyrene (PS)',
        },
      ],
      color: [
        {
          language_tag: 'en_US',
          value: 'Transparent',
        },
      ],
    },
  ],
  item_length_width: [
    {
      marketplace_id: 'ATVPDKIKX0DER',
      length: {
        unit: 'inches',
        value: 10,
      },
      width: {
        value: 12,
        unit: 'inches',
      },
    },
  ],
});

console.log(JSON.stringify(result, null, 2));
