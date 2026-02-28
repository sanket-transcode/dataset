WITH product_variants_filtered AS (
  SELECT 
    id 
  FROM 
    tbl_product_variants 
  WHERE 
    product_id = 1961
), 
variant_flags_precomputed AS (
  SELECT 
    vm.product_variant_id, 
    bool_or(vm.wrapper_id = 743) AS is_active, 
    bool_or(vm.wrapper_id != 743) AS is_disabled 
  FROM 
    tbl_variant_marketplaces vm 
    JOIN tbl_wrappers tw ON tw.id = vm.wrapper_id 
    AND tw.channel_id = 60 
  WHERE 
    vm.product_channel_marketplace_id = 1214 
    AND vm.status IS TRUE 
    AND vm.product_variant_id IN (
      SELECT 
        id 
      FROM 
        product_variants_filtered
    ) 
  GROUP BY 
    vm.product_variant_id
), 
filtered_variants AS (
  SELECT 
    v.id AS variant_id, 
    COALESCE(vf.is_active, FALSE) AS is_active, 
    COALESCE(vf.is_disabled, FALSE) AS is_disabled, 
    variant_info.sku AS sku, 
    variant_info.product_name AS product_name, 
    variant_asin.asin AS asin 
  FROM 
    tbl_product_variants v 
    LEFT JOIN variant_flags_precomputed vf ON vf.product_variant_id = v.id -- SKU & Product Name
    JOIN LATERAL (
      SELECT 
        COALESCE(
          MAX(
            CASE WHEN a.name = 'SKU' 
            AND tpa.channel_id = 60 
            AND tpa.language_code = 'en_CA' 
            AND tpa.is_inherited IS FALSE THEN tpa.value_varchar END
          ), 
          MAX(
            CASE WHEN a.name = 'SKU' 
            AND tpa.channel_id IS NULL 
            AND tpa.language_code = 'en_CA' 
            AND tpa.is_inherited IS FALSE THEN tpa.value_varchar END
          ), 
          MAX(
            CASE WHEN a.name = 'SKU' 
            AND tpa.channel_id IS NULL 
            AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
          )
        ) AS sku, 
        COALESCE(
          MAX(
            CASE WHEN a.name = 'Product Name' 
            AND tpa.channel_id = 60 
            AND tpa.language_code = 'en_CA' 
            AND tpa.is_inherited IS FALSE THEN tpa.value_varchar END
          ), 
          MAX(
            CASE WHEN a.name = 'Product Name' 
            AND tpa.channel_id IS NULL 
            AND tpa.language_code = 'en_CA' 
            AND tpa.is_inherited IS FALSE THEN tpa.value_varchar END
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
    ) variant_info ON TRUE 
    LEFT JOIN LATERAL (
      SELECT 
        vm.asin 
      FROM 
        tbl_variant_marketplaces vm 
      WHERE 
        vm.product_variant_id = v.id 
        AND vm.product_channel_marketplace_id = 1214 
        AND vm.status IS TRUE 
      LIMIT 
        1
    ) variant_asin ON TRUE 
  WHERE 
    v.product_id = 1961 
    AND (
      vf.is_disabled IS FALSE 
      OR vf.is_disabled IS NULL
    ) 
  ORDER BY 
    COALESCE(vf.is_active, FALSE) DESC, 
    COALESCE(vf.is_disabled, FALSE) ASC OFFSET 0 
  LIMIT 
    20 
    ), 
filtered_variants_total AS (
  SELECT 
    COUNT(*) AS total_count 
  FROM 
    tbl_product_variants v 
    LEFT JOIN variant_flags_precomputed vf ON vf.product_variant_id = v.id -- SKU & Product Name
    JOIN LATERAL (
      SELECT 
        COALESCE(
          MAX(
            CASE WHEN a.name = 'SKU' 
            AND tpa.channel_id = 60 
            AND tpa.language_code = 'en_CA' 
            AND tpa.is_inherited IS FALSE THEN tpa.value_varchar END
          ), 
          MAX(
            CASE WHEN a.name = 'SKU' 
            AND tpa.channel_id IS NULL 
            AND tpa.language_code = 'en_CA' 
            AND tpa.is_inherited IS FALSE THEN tpa.value_varchar END
          ), 
          MAX(
            CASE WHEN a.name = 'SKU' 
            AND tpa.channel_id IS NULL 
            AND tpa.language_code = 'en_US' THEN tpa.value_varchar END
          )
        ) AS sku, 
        COALESCE(
          MAX(
            CASE WHEN a.name = 'Product Name' 
            AND tpa.channel_id = 60 
            AND tpa.language_code = 'en_CA' 
            AND tpa.is_inherited IS FALSE THEN tpa.value_varchar END
          ), 
          MAX(
            CASE WHEN a.name = 'Product Name' 
            AND tpa.channel_id IS NULL 
            AND tpa.language_code = 'en_CA' 
            AND tpa.is_inherited IS FALSE THEN tpa.value_varchar END
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
    ) variant_info ON TRUE 
    LEFT JOIN LATERAL (
      SELECT 
        vm.asin 
      FROM 
        tbl_variant_marketplaces vm 
      WHERE 
        vm.product_variant_id = v.id 
        AND vm.product_channel_marketplace_id = 1214 
        AND vm.status IS TRUE 
      LIMIT 
        1
    ) variant_asin ON TRUE 
  WHERE 
    v.product_id = 1961 
    AND (
      vf.is_disabled IS FALSE 
      OR vf.is_disabled IS NULL
    )
), 
variant_attributes_precomputed AS (
  SELECT 
    vav.product_variant_id AS product_variant_id, 
    vav.product_variant_attribute_id AS product_variant_attribute_id, 
    a.id AS attribute_id, 
    a.name AS attribute_name, 
    MAX(vav.value :: TEXT) FILTER (
      WHERE 
        vav.channel_id IS NULL 
        AND vav.language_code = 'en_CA'
    ):: jsonb AS fallback_value, 
    MAX(vav.value :: TEXT) FILTER (
      WHERE 
        vav.channel_id IS NULL 
        AND vav.language_code = 'en_US'
    ):: jsonb AS base_value, 
    MAX(vav.value :: TEXT) FILTER (
      WHERE 
        vav.channel_id = 60 
        AND vav.language_code = 'en_CA'
    ):: jsonb AS value 
  FROM 
    tbl_variants_attributes_values vav 
    JOIN filtered_variants fv ON fv.variant_id = vav.product_variant_id 
    JOIN tbl_product_variant_attributes pva ON vav.product_variant_attribute_id = pva.id 
    AND pva.product_id = 1961 
    JOIN tbl_attributes a ON a.id = pva.attribute_id 
  WHERE 
    vav.language_code IN (
      'en_CA', 'en_US'
    ) 
  GROUP BY 
    vav.product_variant_id, 
    vav.product_variant_attribute_id, 
    a.id
), 
variant_attributes AS (
  SELECT 
    product_variant_id, 
    JSONB_OBJECT_AGG(
      attribute_name, 
      JSONB_BUILD_OBJECT(
        'productVariantAttributeId', product_variant_attribute_id, 
        'fallbackValue', fallback_value, 
        'baseValue', base_value, 'value', 
        value
      )
    ) AS attributes 
  FROM 
    variant_attributes_precomputed 
  GROUP BY 
    product_variant_id
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
    product_id = 1961
), 
primary_attributes AS (
  SELECT 
    id, 
    name 
  FROM 
    tbl_attributes 
  WHERE 
    is_primary_attribute IS TRUE 
    AND account_id = 32
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
    JOIN product_variants_filtered pvf ON pvf.id = pva.variant_id 
  WHERE 
    channel_id = 60 --      AND language_code = :languageCode
  GROUP BY 
    pva.variant_id
), 
variant_publications AS (
  SELECT 
    vm.product_variant_id AS variant_id, 
    BOOL_OR(
      vm.sync_status IN (
        'SUCCESS', 'ERROR', 'OUT_OF_SYNC'
      )
    ) AS is_published 
  FROM 
    filtered_variants fv 
    LEFT JOIN tbl_variant_marketplaces vm ON vm.product_variant_id = fv.variant_id 
  GROUP BY 
    vm.product_variant_id
), 
variant_prices AS (
  SELECT 
    DISTINCT ON (fv.variant_id) fv.variant_id, 
    CASE WHEN pvp.id IS NOT NULL THEN (
      pvp.pricing_details -> 'offerPrice' ->> 'price'
    ):: NUMERIC ELSE (
      fallback_pvp.pricing_details -> 'offerPrice' ->> 'price'
    ):: NUMERIC END AS price, 
    JSONB_BUILD_OBJECT(
      'id', CASE WHEN pvp.id IS NOT NULL THEN tc.id ELSE fallback_tc.id END, 
      'currency', CASE WHEN pvp.id IS NOT NULL THEN tc.currency ELSE fallback_tc.currency END
    ) AS currency 
  FROM 
    filtered_variants fv 
    LEFT JOIN tbl_product_variant_prices pvp ON pvp.variant_id = fv.variant_id 
    AND pvp.channel_id = 60 
    AND (
      pvp.pricing_details -> 'offerPrice' ->> 'isInherited'
    ):: BOOLEAN IS FALSE 
    AND pvp.currency_id = (
      SELECT 
        c.id 
      FROM 
        tbl_currencies c 
      WHERE 
        c.currency = 'CAD' 
        AND c.account_id = 32
    ) 
    LEFT JOIN tbl_currencies tc ON tc.id = pvp.currency_id 
    LEFT JOIN tbl_product_variant_prices fallback_pvp ON fallback_pvp.variant_id = fv.variant_id 
    AND fallback_pvp.channel_id IS NULL 
    AND fallback_pvp.currency_id = (
      SELECT 
        c.id 
      FROM 
        tbl_currencies c 
      WHERE 
        c.currency = 'CAD' 
        AND c.account_id = 32
    ) 
    LEFT JOIN tbl_currencies fallback_tc ON fallback_tc.id = fallback_pvp.currency_id 
  ORDER BY 
    fv.variant_id, 
    COALESCE(pvp.id, fallback_pvp.id) DESC
) 
SELECT 
  v.id, 
  v.internal_id AS "internalId", 
  fv.sku, 
  variant_asin.asin, 
  fv.product_name AS "name", 
  product_variant_media.variant_images AS "images", 
  COALESCE(mi.media_info, '{}' :: jsonb) AS "mediaInfo", 
  COALESCE(vf.is_active, FALSE) AS "isActive", 
  COALESCE(vf.is_disabled, FALSE) AS "isDisabled", 
  COALESCE(vp.is_published, FALSE) AS "isPublishedOnAmazon", 
  COALESCE(va.attributes, '{}' :: jsonb) AS "attributes", 
  COALESCE(
    variant_channels.channels, '[]' :: jsonb
  ) AS "variantChannels", 
  product_variant_stock.stock :: INT AS "stock", 
  product_variant_stock.is_fba AS "isFba", 
  JSONB_BUILD_OBJECT(
    'price', vpr.price, 'currency', vpr.currency
  ) AS "price", 
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
  ft.total_count AS "totalCount" 
FROM 
  filtered_variants fv 
  JOIN tbl_product_variants v ON v.id = fv.variant_id -- ASIN
  LEFT JOIN LATERAL (
    SELECT 
      vm.asin 
    FROM 
      tbl_variant_marketplaces vm 
    WHERE 
      vm.product_variant_id = v.id 
      AND vm.product_channel_marketplace_id = 1214 
      AND vm.status IS TRUE 
    LIMIT 
      1
  ) variant_asin ON TRUE -- Flags (precomputed)
  LEFT JOIN variant_flags_precomputed vf ON vf.product_variant_id = v.id -- Media Inheritance
  LEFT JOIN media_inheritance mi ON mi.variant_id = v.id -- Publications
  LEFT JOIN variant_publications vp ON vp.variant_id = v.id -- Channels
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
      AND vc.channel_id = 60 
    WHERE 
      vc.product_variant_id = v.id 
      AND vc.is_active IS TRUE
  ) variant_channels ON TRUE -- Stock
  JOIN LATERAL (
    SELECT 
      CASE WHEN vm.is_fba IS TRUE THEN (
        SELECT 
          COALESCE(fba.total_quantity, 0) 
        FROM 
          tbl_amazon_fba_inventories fba 
        WHERE 
          fba.product_id = v.product_id 
          AND fba.variant_id = v.id 
          AND fba.channel_id = 60 
          AND fba.marketplace_id = 1 
        LIMIT 
          1
      ) ELSE vm.amazon_stock END AS stock, 
      vm.is_fba AS is_fba 
    FROM 
      tbl_variant_marketplaces vm 
      JOIN tbl_product_channel_marketplaces pcm ON pcm.id = vm.product_channel_marketplace_id 
      AND pcm.status IS TRUE 
    WHERE 
      vm.product_variant_id = v.id 
      AND vm.product_channel_marketplace_id = 1214 
      AND vm.status IS TRUE
  ) product_variant_stock ON TRUE -- Images (optimized with DISTINCT ON + fallback for channel & marketplace)
  JOIN LATERAL (
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
          fi.channel_id = 60
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
            tpml.channel_id = 60 
            OR tpml.channel_id IS NULL
          ) --AND tpml.language_code IN (:languageCode, :baseLanguageCode)
        ORDER BY 
          tpml.sequence
      ) fi
  ) product_variant_media ON TRUE -- Attributes (precomputed)
  LEFT JOIN variant_attributes va ON va.product_variant_id = v.id -- Prices (from CTE)
  LEFT JOIN variant_prices vpr ON vpr.variant_id = v.id 
  LEFT JOIN tbl_variant_marketplaces vm ON vm.product_variant_id = v.id 
  AND vm.product_channel_marketplace_id = 1214 
  LEFT JOIN tbl_amazon_channel_shipping_templates st ON st.id = vm.shipping_template_id CROSS 
  JOIN filtered_variants_total ft 
ORDER BY 
  COALESCE(vf.is_active, FALSE) DESC, 
  COALESCE(vf.is_disabled, FALSE) ASC;
