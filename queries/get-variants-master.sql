WITH product_variants_filtered AS (
  SELECT 
    id 
  FROM 
    tbl_product_variants 
  WHERE 
    product_id = 5654
), 
variant_flags_precomputed AS (
  SELECT 
    id AS product_variant_id, 
    TRUE AS is_active, 
    FALSE AS is_disabled 
  FROM 
    product_variants_filtered
), 
attribute_valid_options AS (
  SELECT 
    a.id AS attribute_id, 
    opt ->> 'value' AS valid_value 
  FROM 
    tbl_attributes a CROSS 
    JOIN LATERAL jsonb_array_elements(
      CASE WHEN jsonb_typeof(
        a.attribute_configuration :: jsonb -> 'options'
      ) = 'array' 
      AND jsonb_array_length(
        a.attribute_configuration :: jsonb -> 'options'
      ) > 0 
      AND (
        a.attribute_configuration :: jsonb -> 'options' -> 0 -> 'marketplaceLanguage'
      ) IS NOT NULL THEN a.attribute_configuration :: jsonb -> 'options' ELSE '[]' :: jsonb END
    ) AS opt 
  WHERE 
    (opt -> 'marketplaceLanguage') ? 'en_US'
), 
variant_attributes_precomputed AS (
  SELECT 
    vav.product_variant_id, 
    JSONB_OBJECT_AGG(
      COALESCE(a.name, a.label), 
      JSONB_BUILD_OBJECT(
        'value', vav.value, 'valueLabel', 
        vav.value_labels, 'isValueMissing', 
        vav.is_value_missing
      )
    ) AS attributes 
  FROM 
    (
      SELECT 
        vav.product_variant_id, 
        vav.product_variant_attribute_id, 
        vav.value, 
        vav.language_code, 
        -- Calculate value labels array from translations
        ARRAY(
          SELECT 
            COALESCE(at_inner.translation, val) 
          FROM 
            unnest(
              CASE WHEN jsonb_typeof(vav.value) = 'array' THEN ARRAY(
                SELECT 
                  jsonb_array_elements_text(vav.value)
              ) ELSE ARRAY[] :: text[] END
            ) AS val 
            LEFT JOIN tbl_attribute_translations at_inner ON at_inner.attribute_id = pva.attribute_id 
            AND at_inner.key = val 
            AND at_inner.language_code = CASE WHEN vav.language_code = 'en_US' THEN 'en_US' ELSE 'en_US' END 
          ORDER BY 
            val
        ) AS value_labels, 
        -- Check if any value is missing from valid options
        FALSE AS is_value_missing, 
        -- Rank records to pick highest priority for (channel, language)
        ROW_NUMBER() OVER (
          PARTITION BY vav.product_variant_id, 
          pva.attribute_id 
          ORDER BY 
            CASE WHEN vav.channel_id IS NULL 
            AND vav.language_code = 'en_US' THEN 2 WHEN vav.channel_id IS NULL 
            AND vav.language_code = 'en_US' THEN 3 ELSE 4 END
        ) AS rn 
      FROM 
        tbl_variants_attributes_values vav 
        JOIN tbl_product_variant_attributes pva ON pva.id = vav.product_variant_attribute_id 
        JOIN (
          SELECT 
            id, 
            name, 
            label, 
            attribute_configuration, 
            CASE WHEN attribute_configuration IS NOT NULL 
            AND jsonb_typeof(
              attribute_configuration :: jsonb -> 'options'
            ) = 'array' 
            AND jsonb_array_length(
              attribute_configuration :: jsonb -> 'options'
            ) > 0 
            AND (
              attribute_configuration :: jsonb -> 'options' -> 0 -> 'marketplaceLanguage'
            ) IS NOT NULL THEN TRUE ELSE FALSE END AS is_language_sensitive 
          FROM 
            tbl_attributes 
          WHERE 
            is_deleted IS FALSE
        ) a ON a.id = pva.attribute_id 
      WHERE 
        vav.product_variant_id IN (
          SELECT 
            id 
          FROM 
            product_variants_filtered
        ) 
        AND vav.value IS NOT NULL 
        AND jsonb_typeof(vav.value) = 'array' 
        AND jsonb_array_length(vav.value) > 0 
        AND (
          (FALSE) 
          OR (
            vav.channel_id IS NULL 
            AND vav.language_code IN (
              'en_US', 'en_US'
            )
          )
        )
    ) vav 
    JOIN tbl_product_variant_attributes pva ON pva.id = vav.product_variant_attribute_id 
    JOIN (
      SELECT 
        id, 
        name, 
        label, 
        attribute_configuration, 
        CASE WHEN attribute_configuration IS NOT NULL 
        AND jsonb_typeof(
          attribute_configuration :: jsonb -> 'options'
        ) = 'array' 
        AND jsonb_array_length(
          attribute_configuration :: jsonb -> 'options'
        ) > 0 
        AND (
          attribute_configuration :: jsonb -> 'options' -> 0 -> 'marketplaceLanguage'
        ) IS NOT NULL THEN TRUE ELSE FALSE END AS is_language_sensitive 
      FROM 
        tbl_attributes 
      WHERE 
        is_deleted IS FALSE
    ) a ON a.id = pva.attribute_id 
  WHERE 
    vav.rn = 1 -- ✅ keep only the top-priority record per attribute
  GROUP BY 
    vav.product_variant_id
) 
SELECT 
  v.id, 
  v.internal_id AS "internalId", 
  variant_info.sku, 
  variant_asin.asin, 
  variant_info.product_name AS "name", 
  product_variant_media.variant_images AS "images", 
  COALESCE(vf.is_active, FALSE) AS "isActive", 
  COALESCE(vf.is_disabled, FALSE) AS "isDisabled", 
  COALESCE(va.attributes, '{}' :: jsonb) AS "attributes", 
  variant_channels.channels AS "variantChannels", 
  product_variant_stock.stock :: INT AS "stock", 
  product_variant_prices.price :: INT AS "price", 
  product_variant_prices.currency AS "currency", 
  COUNT(*) OVER() AS "totalCount" 
FROM 
  product_variants_filtered pvf 
  JOIN tbl_product_variants v ON v.id = pvf.id -- SKU & Product Name
  JOIN LATERAL (
    SELECT 
      -- SKU
      COALESCE(
        MAX(
          CASE WHEN a.name = 'SKU' 
          AND tpa.channel_id IS NULL 
          AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
        ), 
        MAX(
          CASE WHEN a.name = 'SKU' 
          AND tpa.channel_id IS NULL 
          AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
        )
      ) AS sku, 
      -- Product Name
      COALESCE(
        MAX(
          CASE WHEN a.name = 'Product Name' 
          AND tpa.channel_id IS NULL 
          AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
        ), 
        MAX(
          CASE WHEN a.name = 'Product Name' 
          AND tpa.channel_id IS NULL 
          AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
        )
      ) AS product_name 
    FROM 
      tbl_product_attributes tpa 
      JOIN tbl_attributes a ON a.id = tpa.attribute_id 
      AND a.is_deleted IS FALSE 
      AND a.name IN ('SKU', 'Product Name') 
    WHERE 
      tpa.variant_id = v.id
  ) variant_info ON TRUE -- ASIN
  LEFT JOIN LATERAL (
    SELECT 
      NULL :: TEXT AS asin
  ) variant_asin ON TRUE -- Flags (precomputed)
  LEFT JOIN variant_flags_precomputed vf ON vf.product_variant_id = v.id -- Channels
  JOIN LATERAL (
    SELECT 
      JSONB_AGG(
        JSONB_BUILD_OBJECT(
          'id', 
          vc.id, 
          'isActive', 
          vc.is_active, 
          'lowStockThreshold', 
          vc.low_stock_threshold, 
          'completeness', 
          vc.completeness, 
          'shopifyInventoryItemId', 
          vc.shopify_inventory_item_id, 
          'channel', 
          JSONB_BUILD_OBJECT(
            'id', c.id, 'name', c.name, 'icon', 
            c.icon, 'channelType', c.channel_type, 
            'externalId', vc.external_id
          )
        ) 
        ORDER BY 
          c.name
      ) AS channels 
    FROM 
      tbl_product_variant_channels vc 
      JOIN tbl_channels c ON c.id = vc.channel_id 
      AND c.is_active IS TRUE 
    WHERE 
      vc.product_variant_id = v.id 
      AND vc.is_active IS TRUE
  ) variant_channels ON TRUE -- Stock
  JOIN LATERAL (
    SELECT 
      SUM(tpvs.in_hand_qty) AS stock 
    FROM 
      tbl_product_variant_stocks tpvs 
    WHERE 
      tpvs.variant_id = v.id
  ) product_variant_stock ON TRUE -- Prices
  LEFT JOIN LATERAL (
    SELECT 
      pvp.price, 
      tc.currency 
    FROM 
      tbl_product_variant_prices pvp 
      JOIN tbl_currencies tc ON tc.id = pvp.currency_id 
      AND tc.currency = 'USD' 
    WHERE 
      pvp.variant_id = v.id 
      AND pvp.channel_id IS NULL 
      AND pvp.amazon_marketplace_id IS NULL
  ) product_variant_prices ON TRUE -- Images (optimized with DISTINCT ON + fallback for channel & marketplace)
  JOIN LATERAL (
    SELECT 
      JSONB_AGG(
        JSONB_BUILD_OBJECT(
          'filePath', fi.file_path, 'fileUniqueName', 
          fi.file_unique_name, 'sequence', 
          fi.sequence, 'isMainImage', fi.is_main_image
        ) 
        ORDER BY 
          fi.sequence
      ) AS variant_images 
    FROM 
      (
        SELECT 
          DISTINCT ON (tpml.digital_assets_id) da.file_path, 
          da.file_unique_name, 
          tpml.sequence, 
          tpml.is_main_image 
        FROM 
          tbl_product_media_linkers tpml 
          JOIN tbl_digital_assets da ON da.id = tpml.digital_assets_id 
        WHERE 
          tpml.variant_id = v.id 
          AND tpml.language_code IN (
            'en_US', 'en_US'
          ) 
          AND (
            -- ✅ MAIN fallback logic
            (
              -- Case 1: channel-specific match (with marketplace if given)
              tpml.channel_id = null 
              AND (
                (
                  null IS NULL 
                  AND tpml.channel_marketplace_id IS NULL
                ) 
                OR (
                  null IS NOT NULL 
                  AND tpml.channel_marketplace_id = null
                )
              )
            ) 
            OR (
              -- Case 2: fallback to no-channel images if none exist for given channel
              null IS NOT NULL 
              AND NOT EXISTS (
                SELECT 
                  1 
                FROM 
                  tbl_product_media_linkers tpml_sub 
                WHERE 
                  tpml_sub.variant_id = v.id 
                  AND tpml_sub.language_code IN (
                    'en_US', 'en_US'
                  ) 
                  AND tpml_sub.channel_id = null 
                  AND (
                    (
                      null IS NULL 
                      AND tpml_sub.channel_marketplace_id IS NULL
                    ) 
                    OR (
                      null IS NOT NULL 
                      AND tpml_sub.channel_marketplace_id = null
                    )
                  )
              ) 
              AND tpml.channel_id IS NULL 
              AND (
                -- Fallback marketplace if given
                null IS NULL 
                OR tpml.channel_marketplace_id IS NULL
              )
            ) 
            OR (
              -- Case 3: no channel provided (base image case)
              null IS NULL 
              AND tpml.channel_id IS NULL
            )
          ) 
        ORDER BY 
          tpml.digital_assets_id, 
          CASE tpml.language_code WHEN 'en_US' THEN 1 ELSE 2 END, 
          tpml.sequence
      ) fi
  ) product_variant_media ON TRUE -- Attributes (precomputed)
  LEFT JOIN variant_attributes_precomputed va ON va.product_variant_id = v.id 
WHERE 
  v.product_id = 5654 
ORDER BY 
  COALESCE(vf.is_active, FALSE) DESC, 
  COALESCE(vf.is_disabled, FALSE) ASC
OFFSET 0
LIMIT 
  10;
