const { parentProducts } = require('../data/parent-list');

for (let i = 0; i < parentProducts.length; i++) {
  const parentProduct = parentProducts[i];

  // Skip if already processed
  if (parentProduct.isProcessed) continue;

  const currentParentVariants = parentProduct.variants || [];

  // Find parents across the list which shares minimum one same variant
  const identicalParents = !parentProduct.isStandaloneProduct
    ? parentProducts.reduce((acc, wp, wpIdx) => {
        if (wpIdx !== i) {
          let isIdentical = false;

          // If parent SKU matches
          if (parentProduct.sku && wp.sku && wp.sku === parentProduct.sku)
            isIdentical = true;

          if (!isIdentical) {
            const currentWrapperVariants = wp.variants || [];

            if (
              currentWrapperVariants.some((v) =>
                currentParentVariants.some((pv) => pv.sku === v.sku),
              )
            ) {
              isIdentical = true;
            }
          }

          if (isIdentical) {
            acc.push({ wrapper: wp, wrapperIndex: wpIdx });
          }
        }

        return acc;
      }, [])
    : [];

  // Second round for getting identical parents, by matching SKUs only
  if (!parentProduct.isStandaloneProduct) {
    parentProducts.forEach((wp, wpIdx) => {
      if (
        wpIdx !== i &&
        wp.sku &&
        identicalParents.some(
          (ip) =>
            ip.wrapper.sku &&
            ip.wrapper.sku === wp.sku &&
            ip.wrapperIndex !== wpIdx,
        )
      ) {
        identicalParents.push({ wrapper: wp, wrapperIndex: wpIdx });
      }
    });
  }

  // Add the current parent as well into identical list
  identicalParents.unshift({ wrapper: parentProduct, wrapperIndex: i });

  const enrichedIdenticalParents = groupParents(
    identicalParents.map((p) => p.wrapper),
  );

  if (
    enrichedIdenticalParents.some((p) =>
      p.variants.some((v) => v.sku === '19333170031854605557'),
    )
  ) {
    console.log({
      identicalWrappers: identicalParents.length,
    });
    console.log(enrichedIdenticalParents);
  }

  for (const { wrapperIndex } of identicalParents) {
    parentProducts[wrapperIndex].isProcessed = true;
  }
}

function groupParentsOld(parents) {
  const grouped = [];

  for (const parent of parents) {
    if (!parent.sku && !parent.asin) {
      // Try to find an existing group with same marketplaces + theme
      const existing = grouped.find(
        (g) =>
          !g.sku &&
          !g.asin &&
          g.variationTheme === parent.variationTheme &&
          g.productType === parent.productType &&
          arraysEqual(g.marketplaces, parent.marketplaces),
      );

      if (existing) {
        // Merge variants
        existing.variants.push(...parent.variants);
      } else {
        // Add new group
        grouped.push({ ...parent, variants: [...parent.variants] });
      }
    } else {
      // Keep non-parent items as-is
      grouped.push(parent);
    }
  }

  return grouped;
}

function groupParents(parents) {
  const result = [];

  const listingMap = new Map();
  const emptyWrapperMap = new Map();
  const getKey = (p) =>
    `${p.productType}|${p.variationTheme}|${p.marketplaces.join(',')}`;

  // -------- PASS 1: register valid listings ----------
  for (const parent of parents) {
    const hasListing = isNotEmpty(nullifyValue(parent.productName));
    const isWrapper = isEmptyProduct(parent);

    if (!isWrapper && hasListing) {
      listingMap.set(getKey(parent), parent);
    }
  }

  // -------- PASS 2: merge everything ----------
  for (const parent of parents) {
    const key = getKey(parent);

    const isWrapper = isEmptyProduct(parent);
    const hasListing = isNotEmpty(nullifyValue(parent.productName));

    const validListing = listingMap.get(key);

    // ✅ merge missing listing into valid listing
    if (!hasListing && validListing && parent !== validListing) {
      validListing.variants.push(...parent.variants);
      continue;
    }

    // ✅ group empty wrappers together if no valid listing
    if (isWrapper && !validListing) {
      const existing = emptyWrapperMap.get(key);

      if (existing) {
        existing.variants.push(...parent.variants);
      } else {
        const copy = { ...parent, variants: [...parent.variants] };
        emptyWrapperMap.set(key, copy);
        result.push(copy);
      }
      continue;
    }

    // ✅ keep valid listing or normal items
    if (parent === validListing || hasListing || !isWrapper) {
      result.push(parent);
    }
  }

  return result;
}

function isNotEmpty(value) {
  return value !== null && value !== undefined;
}

function nullifyValue(value) {
  const isValidValue =
    isNotEmpty(value) &&
    (typeof value !== 'string' || !!value.trim().replace('<p></p>', '')) &&
    (!(Array.isArray(value) && value.length <= 1) || nullifyValue(value[0]));

  return isValidValue ? value : null;
}

function isEmptyProduct(product) {
  return !product.sku && !product.asin;
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;

  // Create frequency maps
  const freqA = new Map();
  const freqB = new Map();

  for (const item of a) {
    freqA.set(item, (freqA.get(item) ?? 0) + 1);
  }
  for (const item of b) {
    freqB.set(item, (freqB.get(item) ?? 0) + 1);
  }

  // Compare maps
  if (freqA.size !== freqB.size) return false;

  for (const [key, countA] of freqA) {
    if (freqB.get(key) !== countA) return false;
  }

  return true;
}
