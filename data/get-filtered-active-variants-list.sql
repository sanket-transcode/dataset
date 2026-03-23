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