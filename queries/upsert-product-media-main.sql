UPDATE 
  tbl_product_media_linkers AS target 
SET 
  channel_marketplace_id = incoming.channel_marketplace_id, 
  digital_assets_id = incoming.digital_assets_id, 
  account_id = incoming.account_id, 
  sequence = incoming.sequence, 
  is_main_image = incoming.is_main_image, 
  amazon_url = incoming.amazon_url 
FROM 
  (
    VALUES 
      (
        7613, null :: BIGINT, 516 :: BIGINT, 1374 :: BIGINT, 
        'en_US', 113420, 248 :: BIGINT, 1 :: BIGINT, 
        true :: BOOLEAN, 'https://m.media-amazon.com/images/I/41vl6G8-7PL.jpg'
      ), 
      (
        7613, null :: BIGINT, 516 :: BIGINT, 1373 :: BIGINT, 
        'en_CA', 113420, 248 :: BIGINT, 1 :: BIGINT, 
        true :: BOOLEAN, 'https://m.media-amazon.com/images/I/41vl6G8-7PL.jpg'
      )
  ) AS incoming (
    product_id, variant_id, channel_id, 
    channel_marketplace_id, language_code, 
    digital_assets_id, account_id, sequence, 
    is_main_image, amazon_url
  ) 
WHERE 
  (
    -- main image
    (
      incoming.is_main_image = TRUE 
      AND target.product_id IS NOT DISTINCT 
      FROM 
        incoming.product_id 
        AND target.variant_id IS NOT DISTINCT 
      FROM 
        incoming.variant_id 
        AND target.language_code IS NOT DISTINCT 
      FROM 
        incoming.language_code 
        AND target.channel_id IS NOT DISTINCT 
      FROM 
        incoming.channel_id
    ) 
    OR -- non-main image
    (
      incoming.is_main_image = FALSE 
      AND target.product_id IS NOT DISTINCT 
      FROM 
        incoming.product_id 
        AND target.variant_id IS NOT DISTINCT 
      FROM 
        incoming.variant_id 
        AND target.language_code IS NOT DISTINCT 
      FROM 
        incoming.language_code 
        AND target.channel_id IS NOT DISTINCT 
      FROM 
        incoming.channel_id 
        AND target.amazon_url IS NOT DISTINCT 
      FROM 
        incoming.amazon_url
    )
  );
INSERT INTO tbl_product_media_linkers (
  product_id, variant_id, channel_id, 
  channel_marketplace_id, language_code, 
  digital_assets_id, account_id, sequence, 
  is_main_image, amazon_url
) 
SELECT 
  incoming.product_id, 
  incoming.variant_id, 
  incoming.channel_id, 
  incoming.channel_marketplace_id, 
  incoming.language_code, 
  incoming.digital_assets_id, 
  incoming.account_id, 
  incoming.sequence, 
  incoming.is_main_image, 
  incoming.amazon_url 
FROM 
  (
    VALUES 
      (
        7613, null :: BIGINT, null :: BIGINT, 
        1374 :: BIGINT, 'en_US', 113420, 248 :: BIGINT, 
        1 :: BIGINT, true :: BOOLEAN, 'https://m.media-amazon.com/images/I/41vl6G8-7PL.jpg'
      ), 
      (
        7613, null :: BIGINT, 516 :: BIGINT, 1374 :: BIGINT, 
        'en_US', 113420, 248 :: BIGINT, 1 :: BIGINT, 
        true :: BOOLEAN, 'https://m.media-amazon.com/images/I/41vl6G8-7PL.jpg'
      ), 
      (
        7613, null :: BIGINT, null :: BIGINT, 
        1373 :: BIGINT, 'en_CA', 113420, 248 :: BIGINT, 
        1 :: BIGINT, true :: BOOLEAN, 'https://m.media-amazon.com/images/I/41vl6G8-7PL.jpg'
      ), 
      (
        7613, null :: BIGINT, 516 :: BIGINT, 1373 :: BIGINT, 
        'en_CA', 113420, 248 :: BIGINT, 1 :: BIGINT, 
        true :: BOOLEAN, 'https://m.media-amazon.com/images/I/41vl6G8-7PL.jpg'
      )
  ) AS incoming (
    product_id, variant_id, channel_id, 
    channel_marketplace_id, language_code, 
    digital_assets_id, account_id, sequence, 
    is_main_image, amazon_url
  ) 
WHERE 
  NOT EXISTS (
    SELECT 
      1 
    FROM 
      tbl_product_media_linkers existing 
    WHERE 
      (
        -- main image
        (
          incoming.is_main_image = TRUE 
          AND existing.product_id IS NOT DISTINCT 
          FROM 
            incoming.product_id 
            AND existing.variant_id IS NOT DISTINCT 
          FROM 
            incoming.variant_id 
            AND existing.language_code IS NOT DISTINCT 
          FROM 
            incoming.language_code 
            AND existing.channel_id IS NOT DISTINCT 
          FROM 
            incoming.channel_id 
            AND existing.is_main_image = TRUE
        ) 
        OR -- non-main image + channel
        (
          incoming.is_main_image = FALSE 
          AND incoming.channel_id IS NOT NULL 
          AND existing.product_id IS NOT DISTINCT 
          FROM 
            incoming.product_id 
            AND existing.variant_id IS NOT DISTINCT 
          FROM 
            incoming.variant_id 
            AND existing.language_code IS NOT DISTINCT 
          FROM 
            incoming.language_code 
            AND existing.channel_id IS NOT DISTINCT 
          FROM 
            incoming.channel_id 
            AND existing.amazon_url IS NOT DISTINCT 
          FROM 
            incoming.amazon_url
        ) 
        OR -- non-main image + master channel
        (
          incoming.is_main_image = FALSE 
          AND incoming.channel_id IS NULL 
          AND existing.product_id IS NOT DISTINCT 
          FROM 
            incoming.product_id 
            AND existing.variant_id IS NOT DISTINCT 
          FROM 
            incoming.variant_id 
            AND existing.language_code IS NOT DISTINCT 
          FROM 
            incoming.language_code 
            AND existing.channel_id IS NOT DISTINCT 
          FROM 
            incoming.channel_id 
            AND existing.is_main_image = FALSE
        )
      )
  );
