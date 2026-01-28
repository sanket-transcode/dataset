WITH product_attrs AS (
  SELECT 
    DISTINCT pa.attribute_id 
  FROM 
    tbl_product_attributes pa 
  WHERE 
    pa.product_attribute_group_id = 9584 
    AND pa.language_code = 'el' 
    AND pa.channel_id IS NULL 
    AND pa.variant_id IS NULL
), 
attr AS (
  SELECT 
    a.id, 
    a.name, 
    a.label, 
    a.attribute_type, 
    a.is_primary_attribute, 
    a.attribute_configuration, 
    -- Compute display_label from the aggregated translations
    COALESCE(
      MAX(
        CASE WHEN at.language_code = 'el' 
        AND at.key = 'label' THEN at.translation END
      ), 
      MAX(
        CASE WHEN at.language_code = 'en_US' 
        AND at.key = 'label' THEN at.translation END
      ), 
      a.label, 
      a.name
    ) AS display_label, 
    -- Aggregate translations
    COALESCE(
      JSON_AGG(
        JSONB_BUILD_OBJECT(
          'key', at.key, 'translation', at.translation, 
          'languageCode', at.language_code
        ) 
        ORDER BY 
          CASE WHEN at.language_code = 'el' THEN 0 ELSE 1 END, 
          at.key
      ) FILTER (
        WHERE 
          at.id IS NOT NULL
      ), 
      '[]' :: json
    ) AS attribute_translations 
  FROM 
    tbl_attributes a 
    JOIN product_attrs pra ON pra.attribute_id = a.id 
    LEFT JOIN tbl_attribute_translations at ON at.attribute_id = a.id 
    AND at.language_code IN (
      'el', 'en_US'
    ) 
  WHERE 
    a.is_deleted IS FALSE 
  GROUP BY 
    a.id
), 
attr_with_config AS (
  SELECT 
    id, 
    name, 
    label, 
    attribute_type, 
    is_primary_attribute, 
    display_label, 
    attribute_translations, 
    CASE WHEN attribute_configuration IS NOT NULL THEN CASE WHEN jsonb_typeof(
      attribute_configuration :: jsonb -> 'options'
    ) = 'array' 
    AND jsonb_array_length(
      attribute_configuration :: jsonb -> 'options'
    ) > 0 
    AND (
      attribute_configuration :: jsonb -> 'options' -> 0 -> 'marketplaceLanguage'
    ) IS NOT NULL THEN (
      SELECT 
        attribute_configuration :: jsonb || JSONB_BUILD_OBJECT(
          'options', 
          COALESCE(
            (
              SELECT 
                JSONB_AGG(
                  JSONB_BUILD_OBJECT(
                    'value', opt ->> 'value', 'label', opt ->> 'label', 
                    'marketplaceLanguage', opt -> 'marketplaceLanguage'
                  )
                ) 
              FROM 
                jsonb_array_elements(
                  attribute_configuration :: jsonb -> 'options'
                ) AS opt
            ), 
            attribute_configuration :: jsonb -> 'options'
          )
        )
    ) ELSE attribute_configuration :: jsonb END ELSE NULL END AS attribute_configuration 
  FROM 
    attr
), 
base_attributes AS (
  SELECT 
    pa.attribute_id, 
    pa.value_varchar AS base_value_varchar, 
    pa.value_text AS base_value_text, 
    pa.value_int AS base_value_int, 
    pa.value_decimal AS base_value_decimal, 
    pa.value_decimal_2 AS base_value_decimal_2, 
    pa.value_bool AS base_value_bool, 
    pa.value_date AS base_value_date, 
    pa.value_time AS base_value_time, 
    pa.value_date_and_time AS base_value_date_and_time, 
    pa.value_array AS base_value_array, 
    pa.unit_of_measure AS base_unit_of_measure 
  FROM 
    tbl_product_attributes pa 
  WHERE 
    pa.product_attribute_group_id = 9584 
    AND pa.language_code = 'en_US' 
    AND pa.channel_id IS NULL 
    AND pa.variant_id IS NULL
) -- Main Query
SELECT 
  pa.id AS id, 
  pa.attribute_id AS "attributeId", 
  pa.product_attribute_group_id AS "productAttributeGroupId", 
  pa.variant_id AS "variantId", 
  pa.language_code AS "languageCode", 
  pa.channel_id AS "channelId", 
  pa.is_active AS "isActive", 
  pa.is_inherited AS "isInherited", 
  pa.sequence AS "sequence", 
  pa."createdAt" AS "createdAt", 
  pa."updatedAt" AS "updatedAt", 
  -- All value fields in camel case
  pa.value_varchar AS "valueVarchar", 
  pa.value_text AS "valueText", 
  pa.value_int AS "valueInt", 
  pa.value_decimal AS "valueDecimal", 
  pa.value_decimal_2 AS "valueDecimal2", 
  pa.value_bool AS "valueBoolean", 
  pa.value_date AS "valueDate", 
  pa.value_time AS "valueTime", 
  pa.value_date_and_time AS "valueDateAndTime", 
  pa.value_array AS "valueArray", 
  pa.unit_of_measure AS "unitOfMeasure", 
  JSON_BUILD_OBJECT(
    'valueVarchar', ba.base_value_varchar, 
    'valueText', ba.base_value_text, 
    'valueInt', ba.base_value_int, 'valueDecimal', 
    ba.base_value_decimal, 'valueDecimal2', 
    ba.base_value_decimal_2, 'valueBoolean', 
    ba.base_value_bool, 'valueDate', 
    ba.base_value_date, 'valueTime', 
    ba.base_value_time, 'valueDateAndTime', 
    ba.base_value_date_and_time, 'valueArray', 
    ba.base_value_array, 'unitOfMeasure', 
    ba.base_unit_of_measure
  ) AS "baseValues", 
  a.display_label AS "displayLabel", 
  JSONB_BUILD_OBJECT(
    'id', a.id, 'name', a.name, 'label', 
    a.label, 'attributeType', a.attribute_type, 
    'isPrimaryAttribute', a.is_primary_attribute, 
    'displayLabel', a.display_label, 
    'attributeConfiguration', a.attribute_configuration, 
    'attributeTranslations', a.attribute_translations
  ) AS "attribute", 
  -- ProductGroupsAndAttributesSequence equivalent data
  JSONB_BUILD_OBJECT(
    'id', 
    pa.id, 
    'sequence', 
    COALESCE(pa.sequence, 1)
  ) AS "productGroupsAndAttributesSequence" 
FROM 
  tbl_product_attributes pa 
  JOIN attr_with_config a ON a.id = pa.attribute_id 
  LEFT JOIN base_attributes ba ON ba.attribute_id = pa.attribute_id 
WHERE 
  pa.product_attribute_group_id = 9584 
  AND pa.language_code = 'el' 
  AND pa.channel_id IS NULL 
  AND pa.variant_id IS NULL 
ORDER BY 
  pa.sequence NULLS LAST, 
  pa.id ASC;
