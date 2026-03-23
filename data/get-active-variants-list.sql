WITH filtered_variants AS (
  SELECT 
    v.id AS variant_id, 
    variant_info.sku AS sku, 
    variant_info.product_name AS product_name, 
    variant_info.identity_type AS identity_type, 
    variant_info.identity_value AS identity_value, 
    vm.asin AS asin 
  FROM 
    tbl_product_variants v -- SKU, Product Name, ASIN
    JOIN LATERAL (
      SELECT 
        MAX(
          CASE WHEN a.name = 'SKU' 
          AND tpa.channel_id IS NULL 
          AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
        ) AS sku, 
        COALESCE(
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Product Name' 
              AND tpa.channel_id = 124 
              AND tpa.language_code = 'es_MX' THEN tpa.value_varchar END
            ), 
            ''
          ), 
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Product Name' 
              AND tpa.channel_id IS NULL 
              AND tpa.language_code = 'es_MX' THEN tpa.value_varchar END
            ), 
            ''
          ), 
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Product Name' 
              AND tpa.channel_id IS NULL 
              AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
            ), 
            ''
          )
        ) AS product_name, 
        COALESCE(
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Identity Type' 
              AND tpa.channel_id = 124 
              AND tpa.language_code = 'es_MX' THEN tpa.value_varchar END
            ), 
            ''
          ), 
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Identity Type' 
              AND tpa.channel_id IS NULL 
              AND tpa.language_code = 'es_MX' THEN tpa.value_varchar END
            ), 
            ''
          ), 
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Identity Type' 
              AND tpa.channel_id IS NULL 
              AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
            ), 
            ''
          )
        ) AS identity_type, 
        COALESCE(
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Identity Value' 
              AND tpa.channel_id = 124 
              AND tpa.language_code = 'es_MX' THEN tpa.value_varchar END
            ), 
            ''
          ), 
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Identity Value' 
              AND tpa.channel_id IS NULL 
              AND tpa.language_code = 'es_MX' THEN tpa.value_varchar END
            ), 
            ''
          ), 
          NULLIF(
            MAX(
              CASE WHEN a.name = 'Identity Value' 
              AND tpa.channel_id IS NULL 
              AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
            ), 
            ''
          )
        ) AS identity_value 
      FROM 
        tbl_product_attributes tpa 
        JOIN tbl_product_attribute_groups pag ON pag.id = tpa.product_attribute_group_id 
        AND pag.product_id = 4515 
        AND pag.is_active IS TRUE 
        AND pag.is_product_structure IS TRUE 
        JOIN tbl_attributes a ON a.id = tpa.attribute_id 
        AND a.is_deleted IS FALSE 
        AND a.name IN (
          'SKU', 'Product Name', 'Identity Type', 
          'Identity Value'
        ) 
      WHERE 
        tpa.variant_id = v.id 
        AND (
          tpa.channel_id = 124 
          OR tpa.channel_id IS NULL
        ) 
        AND tpa.language_code IN (
          'es_MX', 'en_US'
        )
    ) variant_info ON TRUE 
    JOIN tbl_product_variant_channels vc ON vc.product_variant_id = v.id 
    AND vc.channel_id = 124 
    AND vc.is_active IS TRUE 
    JOIN tbl_variant_marketplaces vm ON vm.product_variant_id = v.id 
    AND vm.product_channel_marketplace_id = 4754 
    AND vm.status IS TRUE 
  WHERE 
    v.product_id = 4515 
  ORDER BY 
    v."createdAt" ASC OFFSET 0 
  LIMIT 
    20 
    ), 
filtered_variants_total AS (
  SELECT 
    COUNT(*) AS total_count 
  FROM 
    filtered_variants
), 
product_attribute_groups AS (
  SELECT 
    id, 
    is_product_structure, 
    sequence, 
    is_active 
  FROM 
    tbl_product_attribute_groups 
  WHERE 
    product_id = 4515
), 
primary_attributes AS (
  SELECT 
    id, 
    name 
  FROM 
    tbl_attributes 
  WHERE 
    is_primary_attribute IS TRUE 
    AND account_id = 68
), 
media_inheritance AS (
  SELECT 
    pva.variant_id, 
    JSONB_BUILD_OBJECT(
      'attributeId', 
      MAX(pva.attribute_id), 
      'value', 
      MAX(pva.value_varchar), 
      'isInherited', 
      MAX(pva.is_inherited :: int):: BOOLEAN
    ) AS media_info 
  FROM 
    tbl_product_attributes pva 
    JOIN primary_attributes pa ON pa.id = pva.attribute_id 
    AND pa.name = 'Primary Media' 
    JOIN product_attribute_groups pag ON pag.id = pva.product_attribute_group_id 
    AND pag.is_active IS TRUE 
    AND pag.is_product_structure IS TRUE 
    JOIN filtered_variants fv ON fv.variant_id = pva.variant_id 
  WHERE 
    channel_id = 124 
    AND language_code = 'es_MX' 
  GROUP BY 
    pva.variant_id
), 
variant_attributes_precomputed AS (
  SELECT 
    vav.product_variant_id AS product_variant_id, 
    vav.product_variant_attribute_id AS product_variant_attribute_id, 
    a.id AS attribute_id, 
    a.name AS attribute_name, 
    a.label AS attribute_label, 
    BOOL_OR(
      vav.channel_id = 124 
      AND vav.language_code = 'es_MX'
    ) AS has_channel_override, 
    MAX(vav.value :: TEXT) FILTER (
      WHERE 
        vav.channel_id IS NULL 
        AND vav.language_code = 'es_MX'
    ):: jsonb AS fallback_value, 
    MAX(vav.value :: TEXT) FILTER (
      WHERE 
        vav.channel_id IS NULL 
        AND vav.language_code = 'en_US'
    ):: jsonb AS base_value, 
    MAX(vav.value :: TEXT) FILTER (
      WHERE 
        vav.channel_id = 124 
        AND vav.language_code = 'es_MX'
    ):: jsonb AS value 
  FROM 
    tbl_variants_attributes_values vav 
    JOIN filtered_variants fv ON fv.variant_id = vav.product_variant_id 
    JOIN tbl_product_variant_attributes pva ON vav.product_variant_attribute_id = pva.id 
    AND pva.product_id = 4515 
    JOIN tbl_attributes a ON a.id = pva.attribute_id 
    JOIN tbl_variant_marketplaces vm ON vm.product_variant_id = vav.product_variant_id 
    AND vm.product_channel_marketplace_id = 4754 
    JOIN tbl_wrapper_variant_attributes wva ON wva.wrapper_id = vm.wrapper_id 
    AND wva.attribute_id = a.id 
  WHERE 
    (
      vav.channel_id = 124 
      OR vav.channel_id IS NULL
    ) 
    AND vav.language_code IN (
      'es_MX', 'en_US'
    ) 
  GROUP BY 
    vav.product_variant_id, 
    vav.product_variant_attribute_id, 
    a.id
), 
variant_attributes AS (
  SELECT 
    product_variant_id, 
    JSONB_AGG(
      JSONB_BUILD_OBJECT(
        'attributeId', attribute_id,
        'attributeName', attribute_name,
        'attributeLabel', attribute_label,
        'productVariantAttributeId', product_variant_attribute_id,
        'fallbackValue', CASE WHEN has_channel_override THEN null ELSE fallback_value END, 
        'baseValue', CASE WHEN has_channel_override THEN null ELSE base_value END, 
        'value', value
      ) 
      ORDER BY 
        attribute_name
    ) AS attributes 
  FROM 
    variant_attributes_precomputed 
  GROUP BY 
    product_variant_id
), 
variant_prices AS (
  SELECT 
    DISTINCT ON (fv.variant_id) fv.variant_id, 
    CASE WHEN pvp.id IS NOT NULL 
    AND (
      pvp.pricing_details -> 'offerPrice' ->> 'isInherited'
    ):: BOOLEAN = FALSE THEN (
      pvp.pricing_details -> 'offerPrice' ->> 'price'
    ):: NUMERIC ELSE (
      fallback_pvp.pricing_details -> 'offerPrice' ->> 'price'
    ):: NUMERIC END AS compare_at_price, 
    CASE WHEN pvp.id IS NOT NULL 
    AND (
      pvp.pricing_details -> 'salePrice' ->> 'isInherited'
    ):: BOOLEAN = FALSE 
    AND (
      pvp.pricing_details -> 'salePrice' ->> 'startAt'
    ):: TIMESTAMPTZ <= NOW() 
    AND (
      pvp.pricing_details -> 'salePrice' ->> 'endAt'
    ):: TIMESTAMPTZ >= NOW() THEN (
      pvp.pricing_details -> 'salePrice' ->> 'price'
    ):: NUMERIC ELSE (
      CASE WHEN (
        fallback_pvp.pricing_details -> 'salePrice' ->> 'startAt'
      ):: TIMESTAMPTZ <= NOW() 
      AND (
        fallback_pvp.pricing_details -> 'salePrice' ->> 'endAt'
      ):: TIMESTAMPTZ >= NOW() THEN (
        fallback_pvp.pricing_details -> 'salePrice' ->> 'price'
      ):: NUMERIC ELSE NULL END
    ) END AS price, 
    JSONB_BUILD_OBJECT(
      'id', CASE WHEN pvp.id IS NOT NULL THEN tc.id ELSE fallback_tc.id END, 
      'currency', CASE WHEN pvp.id IS NOT NULL THEN tc.currency ELSE fallback_tc.currency END
    ) AS currency 
  FROM 
    filtered_variants fv 
    LEFT JOIN tbl_product_variant_prices pvp ON pvp.variant_id = fv.variant_id 
    AND pvp.channel_id = 124 --AND (pvp.pricing_details->'offerPrice'->>'isInherited')::BOOLEAN IS FALSE
    AND (
      pvp.amazon_marketplace_id = 3 
      OR pvp.amazon_marketplace_id IS NULL
    ) 
    AND pvp.currency_id = (
      SELECT 
        c.id 
      FROM 
        tbl_currencies c 
      WHERE 
        c.currency = 'MXN' 
        AND c.account_id = 68 
      ORDER BY 
        c.id ASC 
      LIMIT 
        1
    ) LEFT JOIN tbl_currencies tc ON tc.id = pvp.currency_id 
    LEFT JOIN tbl_product_variant_prices fallback_pvp ON fallback_pvp.variant_id = fv.variant_id 
    AND fallback_pvp.channel_id IS NULL 
    AND (
      fallback_pvp.amazon_marketplace_id = 3 
      OR fallback_pvp.amazon_marketplace_id IS NULL
    ) 
    AND fallback_pvp.currency_id = (
      SELECT 
        c.id 
      FROM 
        tbl_currencies c 
      WHERE 
        c.currency = 'MXN' 
        AND c.account_id = 68 
      ORDER BY 
        c.id ASC 
      LIMIT 
        1
    ) LEFT JOIN tbl_currencies fallback_tc ON fallback_tc.id = fallback_pvp.currency_id 
  ORDER BY 
    fv.variant_id, 
    COALESCE(pvp.id, fallback_pvp.id) DESC
), 
channel_health AS (
  SELECT 
    vm.product_variant_id, 
    vm.sync_status, 
    COALESCE(
      (
        vm.external_status :: jsonb @> '["DISCOVERABLE"]' :: jsonb
      ), 
      FALSE
    ) AS searchable, 
    JSONB_BUILD_OBJECT(
      'mainStatus', 
      CASE WHEN COALESCE(
        (
          vm.external_status :: jsonb @> '["BUYABLE"]' :: jsonb
        ), 
        FALSE
      ) THEN 'ACTIVE' WHEN (
        SELECT 
          e ->> 'type' 
        FROM 
          jsonb_array_elements(
            COALESCE(
              vm.listing_errors :: jsonb, '[]' :: jsonb
            )
          ) e 
        WHERE 
          e ->> 'type' IN (
            'CATALOG_ITEM_REMOVED', 'BRAND_ABUSE_DETECTED', 
            'TRADEMARK_VIOLATION'
          ) 
        LIMIT 
          1
      ) IS NOT NULL THEN 'INACTIVE' WHEN COALESCE(vm.amazon_stock, 0) = 0 THEN 'OUT_OF_STOCK' ELSE 'INACTIVE' END, 
      'subStatus', 
      COALESCE(
        (
          SELECT 
            e ->> 'type' 
          FROM 
            jsonb_array_elements(
              COALESCE(
                vm.listing_errors :: jsonb, '[]' :: jsonb
              )
            ) e 
          LIMIT 
            1
        ), ''
      )
    ) AS sellable_status 
  FROM 
    tbl_variant_marketplaces vm 
  WHERE 
    vm.product_channel_marketplace_id = 4754 
    AND vm.status IS TRUE
), 
product_current_offers AS (
  SELECT 
    pco.variant_id AS variant_id, 
    pco.channel_id AS channel_id, 
    pco.amazon_marketplace_id AS amazon_marketplace_id, 
    pco.raw_data AS raw_data, 
    pco.last_checked AS last_checked 
  FROM 
    tbl_product_current_offers pco 
    JOIN filtered_variants fv ON fv.variant_id = pco.variant_id 
  WHERE 
    product_id = 4515 
    AND pco.channel_id = 124 
    AND pco.amazon_marketplace_id = 3
) 
SELECT 
  v.id, 
  v.internal_id AS "internalId", 
  fv.sku, 
  fv.product_name AS "name", 
  fv.identity_type AS "identityType", 
  fv.identity_value AS "identityValue", 
  fv.asin, 
  COALESCE(rv.readiness_value, 0) AS "readinessValue", 
  COALESCE(oi_stats.order_count, 0) AS "orderCount", 
  COALESCE(oi_stats.total_revenue, 0) AS "totalRevenue", 
  product_variant_media.variant_images AS "images", 
  COALESCE(mi.media_info, '{}' :: jsonb) AS "mediaInfo", 
  COALESCE(va.attributes, '{}' :: jsonb) AS "attributes", 
  product_variant_stock.stock :: INT AS "stock", 
  product_variant_stock.is_fba AS "isFba", 
  JSONB_BUILD_OBJECT(
    'price', vpr.price, 'compareAtPrice', 
    vpr.compare_at_price, 'currency', 
    vpr.currency
  ) AS "price", 
  JSONB_BUILD_OBJECT(
    'channelId', pco.channel_id, 'amazonMarketplaceId', 
    pco.amazon_marketplace_id, 'rawData', 
    pco.raw_data, 'lastChecked', pco.last_checked
  ) AS "currentOffer", 
  JSONB_BUILD_OBJECT(
    'id', 
    vm.id, 
    'asin', 
    vm.asin, 
    'conditionType', 
    vm.condition_type, 
    'shippingTemplateId', 
    vm.shipping_template_id, 
    'shippingTemplate', 
    JSONB_BUILD_OBJECT(
      'id', st.id, 'externalId', st.external_id, 
      'name', st.name
    ), 
    'listingErrors', 
    COALESCE(vm.listing_errors, '[]' :: json), 
    'externalStatus', 
    COALESCE(vm.external_status, '[]' :: json), 
    'status', 
    vm.status, 
    'syncStatus;', 
    vm.sync_status, 
    'amazonStock', 
    vm.amazon_stock
  ) AS "variantMarketplace", 
  JSONB_BUILD_OBJECT(
    'syncStatus', 
    ch.sync_status, 
    'searchable', 
    ch.searchable, 
    'externalStatus', 
    COALESCE(
      ch.sellable_status, '{"mainStatus":"INACTIVE","subStatus":""}' :: jsonb
    )
  ) AS "channelHealth", 
  JSONB_BUILD_OBJECT('mainStatus', '', 'subStatus', '') AS status, 
  ft.total_count AS "totalCount" 
FROM 
  filtered_variants fv 
  JOIN tbl_product_variants v ON v.id = fv.variant_id 
  LEFT JOIN tbl_variant_marketplaces vm ON vm.product_variant_id = v.id 
  AND vm.product_channel_marketplace_id = 4754 
  LEFT JOIN tbl_amazon_channel_shipping_templates st ON st.id = vm.shipping_template_id -- Attributes (precomputed)
  LEFT JOIN variant_attributes va ON va.product_variant_id = v.id -- Prices (from CTE)
  LEFT JOIN variant_prices vpr ON vpr.variant_id = v.id -- Channel health (from CTE)
  LEFT JOIN channel_health ch ON ch.product_variant_id = v.id -- Media Inheritance
  LEFT JOIN media_inheritance mi ON mi.variant_id = v.id 
  LEFT JOIN tbl_readiness_values rv ON rv.variant_id = v.id 
  AND rv.channel_id = 124 
  AND rv.language_code = 'es_MX' 
  LEFT JOIN LATERAL (
    SELECT 
      COUNT(DISTINCT oi.order_id) AS order_count, 
      SUM(
        oi.quantity_shipped * COALESCE(oi.item_price_amount, 0)
      ) AS total_revenue 
    FROM 
      tbl_order_items oi 
    WHERE 
      oi.product_variant_id = v.id 
      AND oi.channel_id = 124 
      AND oi.amazon_channel_marketplace_id = 319
  ) oi_stats ON TRUE -- Stock
  LEFT JOIN LATERAL (
    SELECT 
      CASE WHEN vm.is_fba IS TRUE THEN (
        SELECT 
          COALESCE(fba.total_quantity, 0) 
        FROM 
          tbl_amazon_fba_inventories fba 
        WHERE 
          fba.product_id = v.product_id 
          AND fba.variant_id = v.id 
          AND fba.channel_id = 124 
          AND fba.marketplace_id = 3 
        LIMIT 
          1
      ) ELSE vm.amazon_stock END AS stock, 
      vm.is_fba AS is_fba 
    FROM 
      tbl_variant_marketplaces vm 
      JOIN tbl_product_channel_marketplaces pcm ON pcm.id = vm.product_channel_marketplace_id 
      AND pcm.id = 4754 
      AND pcm.status IS TRUE 
    WHERE 
      vm.product_variant_id = v.id 
      AND vm.status IS TRUE 
    LIMIT 
      1
  ) product_variant_stock ON TRUE -- Images
  LEFT JOIN LATERAL (
    SELECT 
      JSONB_AGG(
        JSONB_BUILD_OBJECT(
          'id', fi.id, 'digitalAssetId', fi.digital_assets_id, 
          'filePath', fi.file_path, 'fileUniqueName', 
          fi.file_unique_name, 'fileName', 
          fi.file_original_name, 'fileType', 
          fi.file_type, 'sequence', fi.sequence, 
          'isMainImage', fi.is_main_image, 
          'channelId', fi.channel_id, 'languageCode', 
          fi.language_code, 'isBaseValue', 
          fi.channel_id IS NULL, 'isExist', 
          fi.channel_id = 124
        ) 
        ORDER BY 
          fi.sequence
      ) AS variant_images 
    FROM 
      (
        SELECT 
          tpml.digital_assets_id, 
          da.file_path, 
          da.file_unique_name, 
          da.file_original_name, 
          da.file_type, 
          tpml.id, 
          tpml.sequence, 
          tpml.is_main_image, 
          tpml.channel_id, 
          tpml.language_code 
        FROM 
          tbl_product_media_linkers tpml 
          JOIN tbl_digital_assets da ON da.id = tpml.digital_assets_id 
        WHERE 
          tpml.variant_id = v.id 
          AND (
            (
              tpml.channel_id = 124 
              OR tpml.channel_id IS NULL
            )
          ) --AND tpml.language_code IN (:languageCode, :baseLanguageCode)
        ORDER BY 
          tpml.sequence
      ) fi
  ) product_variant_media ON TRUE 
  LEFT JOIN product_current_offers pco ON pco.variant_id = v.id 
  CROSS JOIN filtered_variants_total ft
