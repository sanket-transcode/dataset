INSERT INTO tbl_product_attributes (
  product_attribute_group_id, attribute_id, 
  language_code, channel_id, variant_id, 
  value_varchar, value_text, value_int, 
  value_array, value_decimal, value_bool, 
  value_date, value_date_and_time, 
  value_time, value_decimal_2, unit_of_measure, 
  sequence, is_inherited, is_imported_from_product, 
  is_translate_enable, ai_value, value_group_id, 
  account_id
) 
SELECT 
  incoming.product_attribute_group_id, 
  incoming.attribute_id, 
  incoming.language_code, 
  incoming.channel_id, 
  incoming.variant_id, 
  incoming.value_varchar, 
  incoming.value_text, 
  incoming.value_int, 
  incoming.value_array, 
  incoming.value_decimal, 
  incoming.value_bool, 
  incoming.value_date, 
  incoming.value_date_and_time, 
  incoming.value_time, 
  incoming.value_decimal_2, 
  incoming.unit_of_measure, 
  incoming.sequence, 
  incoming.is_inherited, 
  incoming.is_imported_from_product, 
  incoming.is_translate_enable, 
  incoming.ai_value, 
  incoming.value_group_id, 
  incoming.account_id 
FROM 
  (
    VALUES 
      (
        7348 :: BIGINT, 
        184677 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        'Custom Variant 9' :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        2 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184675 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        'Custom Variant 9' :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        4 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        )
  ) AS incoming (
    product_attribute_group_id, attribute_id, 
    language_code, channel_id, variant_id, 
    value_varchar, value_text, value_int, 
    value_array, value_decimal, value_bool, 
    value_date, value_date_and_time, 
    value_time, value_decimal_2, unit_of_measure, 
    sequence, is_inherited, is_imported_from_product, 
    is_translate_enable, ai_value, value_group_id, 
    account_id
  ) 
WHERE 
  NOT EXISTS (
    SELECT 
      1 
    FROM 
      tbl_product_attributes existing 
    WHERE 
      existing.product_attribute_group_id = incoming.product_attribute_group_id 
      AND existing.attribute_id IS NOT DISTINCT 
    FROM 
      incoming.attribute_id 
      AND existing.language_code = incoming.language_code 
      AND existing.channel_id IS NOT DISTINCT 
    FROM 
      incoming.channel_id 
      AND existing.variant_id IS NOT DISTINCT 
    FROM 
      incoming.variant_id 
      AND existing.value_group_id IS NOT DISTINCT 
    FROM 
      incoming.value_group_id
  );
UPDATE 
  tbl_product_attributes AS target 
SET 
  value_varchar = incoming.value_varchar, 
  value_text = incoming.value_text, 
  value_int = incoming.value_int, 
  value_array = incoming.value_array, 
  value_decimal = incoming.value_decimal, 
  value_bool = incoming.value_bool, 
  value_date = incoming.value_date, 
  value_date_and_time = incoming.value_date_and_time, 
  value_time = incoming.value_time, 
  value_decimal_2 = incoming.value_decimal_2, 
  unit_of_measure = incoming.unit_of_measure, 
  sequence = incoming.sequence, 
  is_inherited = incoming.is_inherited, 
  is_imported_from_product = incoming.is_imported_from_product, 
  is_translate_enable = incoming.is_translate_enable, 
  ai_value = incoming.ai_value 
FROM 
  (
    VALUES 
      (
        7348 :: BIGINT, 
        184677 :: BIGINT, 
        'en_CA', 
        124 :: BIGINT, 
        32321 :: BIGINT, 
        'Custom Variant 9' :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        1 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        null :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184675 :: BIGINT, 
        'en_CA', 
        124 :: BIGINT, 
        32321 :: BIGINT, 
        'Custom Variant 9' :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        3 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        null :: BIGINT 
        -- ✅ ADD THIS
        )
  ) AS incoming (
    product_attribute_group_id, attribute_id, 
    language_code, channel_id, variant_id, 
    value_varchar, value_text, value_int, 
    value_array, value_decimal, value_bool, 
    value_date, value_date_and_time, 
    value_time, value_decimal_2, unit_of_measure, 
    sequence, is_inherited, is_imported_from_product, 
    is_translate_enable, ai_value, value_group_id
  ) 
WHERE 
  target.product_attribute_group_id = incoming.product_attribute_group_id 
  AND target.attribute_id IS NOT DISTINCT 
FROM 
  incoming.attribute_id 
  AND target.language_code = incoming.language_code 
  AND target.channel_id IS NOT DISTINCT 
FROM 
  incoming.channel_id 
  AND target.variant_id IS NOT DISTINCT 
FROM 
  incoming.variant_id 
  AND target.value_group_id IS NOT DISTINCT 
FROM 
  incoming.value_group_id 
  AND (
    target.value_varchar IS DISTINCT 
    FROM 
      incoming.value_varchar 
      OR target.value_text IS DISTINCT 
    FROM 
      incoming.value_text 
      OR target.value_int IS DISTINCT 
    FROM 
      incoming.value_int 
      OR target.value_array IS DISTINCT 
    FROM 
      incoming.value_array 
      OR target.value_decimal IS DISTINCT 
    FROM 
      incoming.value_decimal 
      OR target.value_bool IS DISTINCT 
    FROM 
      incoming.value_bool 
      OR target.value_date IS DISTINCT 
    FROM 
      incoming.value_date 
      OR target.value_date_and_time IS DISTINCT 
    FROM 
      incoming.value_date_and_time 
      OR target.value_time IS DISTINCT 
    FROM 
      incoming.value_time 
      OR target.value_decimal_2 IS DISTINCT 
    FROM 
      incoming.value_decimal_2 
      OR target.unit_of_measure IS DISTINCT 
    FROM 
      incoming.unit_of_measure 
      OR target.sequence IS DISTINCT 
    FROM 
      incoming.sequence 
      OR target.is_inherited IS DISTINCT 
    FROM 
      incoming.is_inherited 
      OR target.is_imported_from_product IS DISTINCT 
    FROM 
      incoming.is_imported_from_product 
      OR target.is_translate_enable IS DISTINCT 
    FROM 
      incoming.is_translate_enable 
      OR target.ai_value IS DISTINCT 
    FROM 
      incoming.ai_value
  );
-- Only update if any of the fields have changed
INSERT INTO tbl_product_attributes (
  product_attribute_group_id, attribute_id, 
  language_code, channel_id, variant_id, 
  value_varchar, value_text, value_int, 
  value_array, value_decimal, value_bool, 
  value_date, value_date_and_time, 
  value_time, value_decimal_2, unit_of_measure, 
  sequence, is_inherited, is_imported_from_product, 
  is_translate_enable, ai_value, value_group_id, 
  account_id
) 
SELECT 
  incoming.product_attribute_group_id, 
  incoming.attribute_id, 
  incoming.language_code, 
  incoming.channel_id, 
  incoming.variant_id, 
  incoming.value_varchar, 
  incoming.value_text, 
  incoming.value_int, 
  incoming.value_array, 
  incoming.value_decimal, 
  incoming.value_bool, 
  incoming.value_date, 
  incoming.value_date_and_time, 
  incoming.value_time, 
  incoming.value_decimal_2, 
  incoming.unit_of_measure, 
  incoming.sequence, 
  incoming.is_inherited, 
  incoming.is_imported_from_product, 
  incoming.is_translate_enable, 
  incoming.ai_value, 
  incoming.value_group_id, 
  incoming.account_id 
FROM 
  (
    VALUES 
      (
        7348 :: BIGINT, 
        184677 :: BIGINT, 
        'en_CA', 
        124 :: BIGINT, 
        32321 :: BIGINT, 
        'Custom Variant 9' :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        1 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184675 :: BIGINT, 
        'en_CA', 
        124 :: BIGINT, 
        32321 :: BIGINT, 
        'Custom Variant 9' :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        3 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        )
  ) AS incoming (
    product_attribute_group_id, attribute_id, 
    language_code, channel_id, variant_id, 
    value_varchar, value_text, value_int, 
    value_array, value_decimal, value_bool, 
    value_date, value_date_and_time, 
    value_time, value_decimal_2, unit_of_measure, 
    sequence, is_inherited, is_imported_from_product, 
    is_translate_enable, ai_value, value_group_id, 
    account_id
  ) 
WHERE 
  NOT EXISTS (
    SELECT 
      1 
    FROM 
      tbl_product_attributes existing 
    WHERE 
      existing.product_attribute_group_id = incoming.product_attribute_group_id 
      AND existing.attribute_id IS NOT DISTINCT 
    FROM 
      incoming.attribute_id 
      AND existing.language_code = incoming.language_code 
      AND existing.channel_id IS NOT DISTINCT 
    FROM 
      incoming.channel_id 
      AND existing.variant_id IS NOT DISTINCT 
    FROM 
      incoming.variant_id 
      AND existing.value_group_id IS NOT DISTINCT 
    FROM 
      incoming.value_group_id
  );
INSERT INTO tbl_product_attributes (
  product_attribute_group_id, attribute_id, 
  language_code, channel_id, variant_id, 
  value_varchar, value_text, value_int, 
  value_array, value_decimal, value_bool, 
  value_date, value_date_and_time, 
  value_time, value_decimal_2, unit_of_measure, 
  sequence, is_inherited, is_imported_from_product, 
  is_translate_enable, ai_value, value_group_id, 
  account_id
) 
SELECT 
  incoming.product_attribute_group_id, 
  incoming.attribute_id, 
  incoming.language_code, 
  incoming.channel_id, 
  incoming.variant_id, 
  incoming.value_varchar, 
  incoming.value_text, 
  incoming.value_int, 
  incoming.value_array, 
  incoming.value_decimal, 
  incoming.value_bool, 
  incoming.value_date, 
  incoming.value_date_and_time, 
  incoming.value_time, 
  incoming.value_decimal_2, 
  incoming.unit_of_measure, 
  incoming.sequence, 
  incoming.is_inherited, 
  incoming.is_imported_from_product, 
  incoming.is_translate_enable, 
  incoming.ai_value, 
  incoming.value_group_id, 
  incoming.account_id 
FROM 
  (
    VALUES 
      (
        7348 :: BIGINT, 
        184675 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        1 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184676 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        2 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184677 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        3 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184678 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        4 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184679 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        5 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184680 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        6 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184681 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        7 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184682 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        8 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184683 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        null :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        9 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        '' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        )
  ) AS incoming (
    product_attribute_group_id, attribute_id, 
    language_code, channel_id, variant_id, 
    value_varchar, value_text, value_int, 
    value_array, value_decimal, value_bool, 
    value_date, value_date_and_time, 
    value_time, value_decimal_2, unit_of_measure, 
    sequence, is_inherited, is_imported_from_product, 
    is_translate_enable, ai_value, value_group_id, 
    account_id
  ) 
WHERE 
  NOT EXISTS (
    SELECT 
      1 
    FROM 
      tbl_product_attributes existing 
    WHERE 
      existing.product_attribute_group_id = incoming.product_attribute_group_id 
      AND existing.attribute_id IS NOT DISTINCT 
    FROM 
      incoming.attribute_id 
      AND existing.language_code = incoming.language_code 
      AND existing.channel_id IS NOT DISTINCT 
    FROM 
      incoming.channel_id 
      AND existing.variant_id IS NOT DISTINCT 
    FROM 
      incoming.variant_id 
      AND existing.value_group_id IS NOT DISTINCT 
    FROM 
      incoming.value_group_id
  );
parentProductDescriptionValues : 5 { productAttributeBaseRecords : 1, 
productAttributeRecords : 4 } INSERT INTO tbl_product_attributes (
  product_attribute_group_id, attribute_id, 
  language_code, channel_id, variant_id, 
  value_varchar, value_text, value_int, 
  value_array, value_decimal, value_bool, 
  value_date, value_date_and_time, 
  value_time, value_decimal_2, unit_of_measure, 
  sequence, is_inherited, is_imported_from_product, 
  is_translate_enable, ai_value, value_group_id, 
  account_id
) 
SELECT 
  incoming.product_attribute_group_id, 
  incoming.attribute_id, 
  incoming.language_code, 
  incoming.channel_id, 
  incoming.variant_id, 
  incoming.value_varchar, 
  incoming.value_text, 
  incoming.value_int, 
  incoming.value_array, 
  incoming.value_decimal, 
  incoming.value_bool, 
  incoming.value_date, 
  incoming.value_date_and_time, 
  incoming.value_time, 
  incoming.value_decimal_2, 
  incoming.unit_of_measure, 
  incoming.sequence, 
  incoming.is_inherited, 
  incoming.is_imported_from_product, 
  incoming.is_translate_enable, 
  incoming.ai_value, 
  incoming.value_group_id, 
  incoming.account_id 
FROM 
  (
    VALUES 
      (
        7348 :: BIGINT, 
        184676 :: BIGINT, 
        'en_US', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        'Experience ultimate comfort and style with our Men''s Premium Cotton Crew Neck T-Shirt. Crafted from high-quality, breathable cotton, this tee offers a soft feel and a perfect fit for everyday wear. Available in a variety of colors, it''s the ideal staple for any wardrobe. Durable and easy to care for, this shirt is designed to last.' :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        2 :: BIGINT, 
        true :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        'Experience ultimate comfort and style with our Men''s Premium Cotton Crew Neck T-Shirt. Crafted from high-quality, breathable cotton, this tee offers a soft feel and a perfect fit for everyday wear. Available in a variety of colors, it''s the ideal staple for any wardrobe. Durable and easy to care for, this shirt is designed to last.' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        )
  ) AS incoming (
    product_attribute_group_id, attribute_id, 
    language_code, channel_id, variant_id, 
    value_varchar, value_text, value_int, 
    value_array, value_decimal, value_bool, 
    value_date, value_date_and_time, 
    value_time, value_decimal_2, unit_of_measure, 
    sequence, is_inherited, is_imported_from_product, 
    is_translate_enable, ai_value, value_group_id, 
    account_id
  ) 
WHERE 
  NOT EXISTS (
    SELECT 
      1 
    FROM 
      tbl_product_attributes existing 
    WHERE 
      existing.product_attribute_group_id = incoming.product_attribute_group_id 
      AND existing.attribute_id IS NOT DISTINCT 
    FROM 
      incoming.attribute_id 
      AND existing.language_code = incoming.language_code 
      AND existing.channel_id IS NOT DISTINCT 
    FROM 
      incoming.channel_id 
      AND existing.variant_id IS NOT DISTINCT 
    FROM 
      incoming.variant_id 
      AND existing.value_group_id IS NOT DISTINCT 
    FROM 
      incoming.value_group_id
  );
INSERT INTO tbl_product_attributes (
  product_attribute_group_id, attribute_id, 
  language_code, channel_id, variant_id, 
  value_varchar, value_text, value_int, 
  value_array, value_decimal, value_bool, 
  value_date, value_date_and_time, 
  value_time, value_decimal_2, unit_of_measure, 
  sequence, is_inherited, is_imported_from_product, 
  is_translate_enable, ai_value, value_group_id, 
  account_id
) 
SELECT 
  incoming.product_attribute_group_id, 
  incoming.attribute_id, 
  incoming.language_code, 
  incoming.channel_id, 
  incoming.variant_id, 
  incoming.value_varchar, 
  incoming.value_text, 
  incoming.value_int, 
  incoming.value_array, 
  incoming.value_decimal, 
  incoming.value_bool, 
  incoming.value_date, 
  incoming.value_date_and_time, 
  incoming.value_time, 
  incoming.value_decimal_2, 
  incoming.unit_of_measure, 
  incoming.sequence, 
  incoming.is_inherited, 
  incoming.is_imported_from_product, 
  incoming.is_translate_enable, 
  incoming.ai_value, 
  incoming.value_group_id, 
  incoming.account_id 
FROM 
  (
    VALUES 
      (
        7348 :: BIGINT, 
        184676 :: BIGINT, 
        'af', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        'Ervaar uiteindelike gemak en styl met ons Mans se Premium Katoen Ronde Nek T-hemp. Gemaak van hoë-gehalte, asemende katoen, bied hierdie hemp ''n sagte gevoel en ''n perfekte pasvorm vir alledaagse drag. Beskikbaar in ''n verskeidenheid kleure, dit is die ideale stapelvoedsel vir enige klerekas. Duursaam en maklik om te versorg, hierdie hemp is ontwerp om te hou.' :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        2 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        'Ervaar uiteindelike gemak en styl met ons Mans se Premium Katoen Ronde Nek T-hemp. Gemaak van hoë-gehalte, asemende katoen, bied hierdie hemp ''n sagte gevoel en ''n perfekte pasvorm vir alledaagse drag. Beskikbaar in ''n verskeidenheid kleure, dit is die ideale stapelvoedsel vir enige klerekas. Duursaam en maklik om te versorg, hierdie hemp is ontwerp om te hou.' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184676 :: BIGINT, 
        'en_GB', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        'Experience ultimate comfort and style with our Men''s Premium Cotton Crew Neck T-Shirt. Crafted from high-quality, breathable cotton, this tee offers a soft feel and a perfect fit for everyday wear. Available in a variety of colours, it''s the ideal staple for any wardrobe. Durable and easy to care for, this shirt is designed to last.' :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        2 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        'Experience ultimate comfort and style with our Men''s Premium Cotton Crew Neck T-Shirt. Crafted from high-quality, breathable cotton, this tee offers a soft feel and a perfect fit for everyday wear. Available in a variety of colours, it''s the ideal staple for any wardrobe. Durable and easy to care for, this shirt is designed to last.' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184676 :: BIGINT, 
        'es_MX', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        'Experimenta la máxima comodidad y estilo con nuestra camiseta de cuello redondo de algodón premium para hombre. Confeccionada con algodón transpirable de alta calidad, esta camiseta ofrece una sensación suave y un ajuste perfecto para el uso diario. Disponible en una variedad de colores, es el básico ideal para cualquier guardarropa. Duradera y fácil de cuidar, esta camisa está diseñada para durar.' :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        2 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        'Experimenta la máxima comodidad y estilo con nuestra camiseta de cuello redondo de algodón premium para hombre. Confeccionada con algodón transpirable de alta calidad, esta camiseta ofrece una sensación suave y un ajuste perfecto para el uso diario. Disponible en una variedad de colores, es el básico ideal para cualquier guardarropa. Duradera y fácil de cuidar, esta camisa está diseñada para durar.' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        ), 
      (
        7348 :: BIGINT, 
        184676 :: BIGINT, 
        'fr_FR', 
        null :: BIGINT, 
        32321 :: BIGINT, 
        null :: TEXT, 
        'Découvrez un confort et un style ultimes avec notre t-shirt ras du cou en coton de qualité supérieure pour hommes. Fabriqué à partir de coton respirant de haute qualité, ce t-shirt offre une sensation de douceur et une coupe parfaite pour un usage quotidien. Disponible dans une variété de couleurs, c''est l''article de base idéal pour toute garde-robe. Durable et facile d''entretien, cette chemise est conçue pour durer.' :: TEXT, 
        null :: INT, 
        NULL :: JSONB, 
        null :: DECIMAL, 
        null :: BOOLEAN, 
        NULL :: DATE, 
        NULL :: TIMESTAMP, 
        NULL :: TIME, 
        null :: DECIMAL, 
        null :: TEXT, 
        2 :: BIGINT, 
        false :: BOOLEAN, 
        false :: BOOLEAN, 
        true :: BOOLEAN, 
        'Découvrez un confort et un style ultimes avec notre t-shirt ras du cou en coton de qualité supérieure pour hommes. Fabriqué à partir de coton respirant de haute qualité, ce t-shirt offre une sensation de douceur et une coupe parfaite pour un usage quotidien. Disponible dans une variété de couleurs, c''est l''article de base idéal pour toute garde-robe. Durable et facile d''entretien, cette chemise est conçue pour durer.' :: TEXT, 
        null :: INTEGER, 
        68 :: BIGINT 
        -- ✅ ADD THIS
        )
  ) AS incoming (
    product_attribute_group_id, attribute_id, 
    language_code, channel_id, variant_id, 
    value_varchar, value_text, value_int, 
    value_array, value_decimal, value_bool, 
    value_date, value_date_and_time, 
    value_time, value_decimal_2, unit_of_measure, 
    sequence, is_inherited, is_imported_from_product, 
    is_translate_enable, ai_value, value_group_id, 
    account_id
  ) 
WHERE 
  NOT EXISTS (
    SELECT 
      1 
    FROM 
      tbl_product_attributes existing 
    WHERE 
      existing.product_attribute_group_id = incoming.product_attribute_group_id 
      AND existing.attribute_id IS NOT DISTINCT 
    FROM 
      incoming.attribute_id 
      AND existing.language_code = incoming.language_code 
      AND existing.channel_id IS NOT DISTINCT 
    FROM 
      incoming.channel_id 
      AND existing.variant_id IS NOT DISTINCT 
    FROM 
      incoming.variant_id 
      AND existing.value_group_id IS NOT DISTINCT 
    FROM 
      incoming.value_group_id
  );
