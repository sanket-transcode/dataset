# Change Sync Review — UI Logic

This document is the spec behind `delta-sync-review.html` (the prototype). It describes how
raw baseline rows become the review screen, how they are grouped, what each group renders, and
how selection / revert / sync behave. The HTML is a working prototype of everything below.

> Terminology: the UI calls each reviewable record a **change** (a row in a `*SyncBaseline`
> table). The feature and file names keep the historical word "delta"; they mean the same
> thing. This doc uses **change** throughout to match the UI.

---

## 1. What a "change" is

Every row in a `*SyncBaseline` table means: **this piece of data changed since the last stable
sync**, and the table stores the *previous synced value*. Each change is shown as two sides:

- **Original** — the last stable synced value (from the baseline row).
- **Current** — the live value in Categra right now.

If either side is `null` / `undefined` / `''` / an empty list, it renders as an italic
**_(empty)_**.

---

## 2. Screen layout

The page is **locked to the viewport height** (no whole-page scroll). Top bar and metrics are
fixed; the two workspace cards each scroll **independently** once their content exceeds the
available height.

### Top bar
- **Brand** "Categra · Sync" and a one-line description.
- **Three global buttons** (right):
  - **↺ Revert selected · `<scope>` (`<count>`)** — scoped, see §7.
  - **Revert whole product** — the only all-markets action.
  - **Sync selected · `<scope>` (`<count>`)** — scoped, see §7.

  The two scoped buttons are relabelled on every render with the active scope and selected
  count, e.g. `Sync selected · Amazon US (4)` (or `· Shopify` when Shopify is active).

### Metric cards (four)
1. **Products with Changes** — products that still have at least one non-reverted change.
2. **Changes in Current View** — all changes (selected or not) in the active
   channel + marketplace.
3. **Variants in This View** — distinct variant SKUs with a change in the active view.
4. **Selected for Sync** — changes currently selected in the active view (= exactly what the
   Sync button will push).

### Workspace — two cards side by side
- **Left card — Products.** Scrollable list. Each product card shows: **name**, **SKU**, a
  **total change count** ("N changes", in the secondary colour), and a **per-group breakdown**
  — one chip per group that has changes, showing the **group name + count** (chip outlined in
  the secondary colour; no icons). Selecting a product drives the right card. There is **no
  sidebar product list and no group legend**.
- **Right card — Working area.** For the selected product: the **channel tabs** and (for
  Amazon) the **marketplace chips**, then the **parent's own changes and all of its affected
  variants' changes together** — one block each — for the active channel/marketplace.

---

## 3. Navigation hierarchy

```
Product   (left card — products only)
  └─ Channel               (AMAZON | SHOPIFY)
       └─ Marketplace        (AMAZON only — e.g. US / CA / UK; SHOPIFY has none)
            ├─ Parent product block          → groups 1–3, 6
            └─ One block per affected variant (by SKU)  → groups 1–6
                 └─ Logical group (collapsible)
                      └─ Change cards (Original vs Current)
```

### Channel → Marketplace layering (important)
Changes live **per channel** for a given entity (product or variant). For **Amazon channels
there is an extra layer**: every change is also scoped to a **marketplace**, so the same entity
can have different changes on Amazon US vs CA vs UK. Shopify has no marketplace layer — a
Shopify change belongs directly to the channel.

In the UI:
- Channel tabs are always shown; the active channel uses the primary colour, and each tab
  shows its total change count.
- When the active channel is **Amazon**, a **marketplace chip row** appears (each chip shows
  its count); only the selected marketplace's changes are shown.
- When **Shopify** is selected, the marketplace row is **hidden**.

### Variants are identified by SKU
Variants carry **no numeric id** — the **SKU is the primary identifier** and what the user
sees. Every variant-level change references its `variantSku`.

### Variant changes are per-variant AND per-marketplace
Variant Structure and Variant Attributes (and any variant-level change) are tracked **per
variant, per channel, per marketplace**. A product with 10 variants might have 5 with structure
changes and 3 with value changes on **Amazon CA**, a different set on **Amazon US**, and another
on **Shopify**. Switching the marketplace re-computes which variant blocks appear and what each
contains. A variant block is rendered **only if** that variant has at least one change in the
active channel/marketplace. If the parent has no changes in the active view but some variant
does, the parent block is replaced by the note *"No parent-level changes for `<scope>` —
variant changes only."* If nothing changed at all in the active view, the body shows a "No
changes for `<scope>`" empty state.

---

## 4. The 6 logical groups

Grouping is **conceptual**, not per-table. A change's source table does not decide its group;
its meaning does (e.g. an attribute whose Amazon root property is `purchasable_offer` is
conceptually **Pricing**, not Attributes). Each change record carries a `group` field; that
assigned bucket is the single source of truth the UI reads.

| # | Group              | Appears on            | Source baseline(s) |
|---|--------------------|-----------------------|--------------------|
| 1 | Attributes         | Parent **&** Variant  | `attributeSyncBaseline` (normal attributes) |
| 2 | Pricing            | Parent **&** Variant  | `priceSyncBaseline` + `attributeSyncBaseline` where `amazonRootProperty = purchasable_offer` |
| 3 | Media              | Parent **&** Variant  | `productMediaSyncBaseline` |
| 4 | Variant Structure  | **Variant only**      | `variantStructureBaseline` |
| 5 | Variant Attributes | **Variant only**      | `productVariantAttributes` (+ values) |
| 6 | Miscellaneous      | Parent **&** Variant  | `miscSyncBaseline` (keyed by `baselineType`) |

So the **parent block renders groups 1, 2, 3, 6**, and **each variant block renders groups
1–6** (in that order). A group is drawn only if it has at least one change for that block in
the active channel/marketplace.

---

## 5. Per-group display rules

Every group is an accordion. Each change inside it is a card with a header
(select checkbox + title + optional info/chip + per-change Revert) and a body.

### 1. Attributes
- Card title is the **attribute label**, followed by an **(i) info button** revealing the
  attribute's internal `name`/code on hover.
- A chip is shown **only when the change type is `Added` or `Removed`** — never for a plain
  update (no "updated" chip).
- **Original** — _(empty)_ when null, and always _(empty)_ for an `Added` attribute.
- **Current** — _(empty)_ when null, and always _(empty)_ for a `Removed` attribute.

### 2. Pricing
Card title **"Price structure"**. Pricing is a **channel-shaped structure**, not a single
scalar. The UI breaks it into a 3-column table (Price type · Original · Current) and compares
each price type, including its extra info.

**Amazon** structure:
```jsonc
{
  "listPrice":   { "price": null },
  "offerPrice":  { "price": "31.01" },
  "salePrice":   { "price": null, "startDate": null, "endDate": null },
  "businessPrice": {
    "baseBusinessPrice": null,
    "consumerSalePrice": null,
    "quantityDiscount": [
      { "priceType": "percent", "quantity": 2, "price": 15 },
      { "priceType": "fixed",   "quantity": 4, "price": 150 }
    ]
  }
}
```
Rows rendered: **List price**, **Offer price**, **Sale price** (with a meta line showing the
Original and Current `startDate → endDate` window), **Business base price**, **Consumer sale
price**, **Quantity discounts** (rendered as a readable list, e.g. `Qty ≥2: 15%`,
`Qty ≥4: 150 (fixed)`).

**Shopify** structure (subset):
```jsonc
{
  "listPrice":  { "price": null },
  "offerPrice": { "price": "31.01" }
}
```
Rows rendered: **List price**, **Offer price** only.

Any row whose Original ≠ Current is highlighted (alert tint); unchanged rows stay neutral.

### 3. Media
Card title **"Media gallery"**. Renders the **Original** and **Current** image-snapshot grids
side by side. Images present on only one side are flagged **NEW** / **DEL**; the main image is
starred.

### 4. Variant Structure (variant only)
Card title **"Variation structure"**.
- **Original axes** and **Current axes** — the variant's defining attributes (e.g. Color, Size,
  Width) as chips (the internal name shows on hover); axes added on the Current side are
  highlighted as added, axes only on the Original side as removed.
- **Amazon only:** also a **Parent wrapper** table (labelled "Parent wrapper (Amazon)") with
  **Parent SKU**, **ASIN**, and **Variation theme**, compared Original vs Current. Either
  wrapper may be `null` → its fields render as _(empty)_. **Shopify shows no wrapper.**

### 5. Variant Attributes (variant only)
- Card title is the **variant attribute label**, followed by an **(i) info button** with the
  internal `name`. Added/Removed chip shown when applicable.
- **Original** and **Current**, each a **list of value labels** (e.g. `Red` → `Crimson`). Empty
  lists render as _(empty)_.

### 6. Miscellaneous (`baselineType`-driven)
Catch-all backed by `miscSyncBaseline`. The card title is the change's `label` (or a humanised
`baselineType`). The `baselineType` decides how the value renders:
- **`category` / `shopify_category`** → Original/Current as a **breadcrumb path** joined with
  `›` (e.g. `Shoes › Running › Trail`).
- **`tags`, `condition_type`, and anything else** → a generic Original/Current comparison
  (lists render comma-joined, scalars as-is).

New baseline types can be added without changing the layout — unrecognised types fall back to
the generic comparison.

---

## 6. Blocks and groups (containers)

### Parent / Variant blocks
Each block header shows:
- a **kind label** ("Parent" or "Variant"),
- the **SKU** (monospace) — for the parent this is the product SKU; for a variant its SKU,
- the variant's **description** (variant blocks only, e.g. "Size 42 · Red"),
- a count summary **"N changes · M selected"**,
- block-level actions: **Select all**, **Deselect all**, **↺ Revert parent / Revert variant**.

Clicking the header (anywhere except the action buttons) **collapses/expands the whole block**
(all its groups). A caret indicates state.

### Groups
Each group header shows the **group name**, **"N changes · M selected"**, and **Select all /
Deselect all / ↺ Revert group**. Clicking the header collapses/expands the group.

### Collapse persistence
Collapse state is kept in state (not just the DOM) and **namespaced per view**
(`product | channel | marketplace | block[::group]`). So a re-render triggered by selecting or
reverting changes does **not** reset which blocks/groups are open, and collapse state does not
bleed across products or marketplaces.

---

## 7. Selection model and review actions

Every change is **selected by default** (custom round checkbox: filled primary with a white
check when selected, neutral when not). Selection is a **neutral pick** — a deselected change
is **not dimmed**; it simply won't be acted on by the bulk buttons.

### Selection is scoped to the active Channel + Marketplace
The two top-level bulk buttons act **only on the changes visible in the current view** and are
relabelled to that scope with a live count (see §2 top bar):

- **Sync selected** — pushes the changes selected in the active channel/marketplace.
- **Revert selected** — reverts the changes selected in the active channel/marketplace.

Because sync/revert target one channel/marketplace surface, the action's blast radius equals
what the reviewer sees. Selections are **retained per view** (keyed by the unique change id, and
each change belongs to exactly one channel/marketplace), so switching marketplaces to compare
and coming back never loses picks. There is **no cross-channel bulk action** — to act on another
market the reviewer switches to it first.

### Granular controls (all scoped to the active view)
- **Toggle a single change** (checkbox).
- **Select all / Deselect all** at **block** level (parent or a variant) and at **group** level.
- **Revert a single change** — drops that change.
- **Revert a group** — reverts every change in that group, for that block.
- **Revert parent / Revert variant** — reverts every change in that block.
- **Revert whole product** — the one intentional all-markets action: reverts every change of
  the product across all channels/marketplaces (destructive, confirmed).

> In the prototype these mutate local state only. In production, *revert* deletes/consumes the
> baseline rows and restores the previous value, while *sync* pushes the selected changes to the
> channel/marketplace and clears their baselines.

---

## 8. Data contract the UI expects

The prototype normalises everything into one flat change-record shape so rendering is uniform; a
real endpoint can return this directly. Each product carries a `deltas: ChangeRecord[]` array
(the field name is the historical alias for changes).

```ts
interface ChangeRecord {
  id: number;                          // globally unique; used for selection/revert state
  group: 'attributes' | 'pricing' | 'media' | 'structure' | 'variantAttributes' | 'miscellaneous';
  level: 'product' | 'variant';
  variantSku: string | null;           // required when level === 'variant' (primary id)
  channel: 'AMAZON' | 'SHOPIFY';
  marketplace: string | null;          // required for AMAZON, null for SHOPIFY

  // ----- group-specific payload -----
  // attributes / variantAttributes:
  label?: string;                      // shown to the user (card title)
  name?: string;                       // internal code, shown in the (i) info button
  changeType?: 'added' | 'removed' | 'updated';
  original?: unknown;                  // scalar for attributes; string[] for variantAttributes
  current?: unknown;

  // pricing       -> original/current are the channel-shaped price structure objects (§5.2)
  // media         -> original/current are MediaSnapshot[]  ({ name, main? })
  // structure     -> original/current are { axes: { label, name }[], wrapper: Wrapper | null }
  //                  Wrapper = { sku, asin, variationTheme }  (AMAZON only; null on Shopify)
  // miscellaneous -> baselineType drives rendering; original/current shape depends on it
  baselineType?: string;               // e.g. 'category' | 'shopify_category' | 'tags' | 'condition_type' | …
}
```

The `group` field assigned to each record is the single source of truth for which of the **six**
groups a change is rendered under; a `product` block reads groups 1–3 and 6, a `variant` block
reads groups 1–6.
