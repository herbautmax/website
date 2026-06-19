/**
 * Notion a fait évoluer le format renvoyé par `notion-client` (`getPage`) :
 * chaque enregistrement est désormais imbriqué sous la forme
 *   { spaceId, value: { value: <record>, role } }
 * alors que `react-notion-x` attend l'ancien format
 *   { role, value: <record> }.
 *
 * Sans normalisation, `block[id].value.id` est `undefined`, ce qui fait planter
 * le rendu (`uuidToId(undefined)` → "Cannot read properties of undefined
 * (reading 'replaceAll')").
 *
 * Cette fonction ré-aplatit chaque table vers le format attendu. Elle est
 * idempotente : un recordMap déjà au bon format est laissé tel quel.
 */

type AnyRecord = Record<string, any>;

function flattenTable(table: AnyRecord | undefined): AnyRecord | undefined {
  if (!table) return table;
  const out: AnyRecord = {};
  for (const [id, entry] of Object.entries(table)) {
    if (
      entry &&
      typeof entry === 'object' &&
      entry.value &&
      typeof entry.value === 'object' &&
      'value' in entry.value &&
      'role' in entry.value
    ) {
      // Nouveau format imbriqué → on déballe
      out[id] = { role: entry.value.role, value: entry.value.value };
    } else {
      // Déjà au bon format
      out[id] = entry;
    }
  }
  return out;
}

export function normalizeRecordMap<T extends AnyRecord>(recordMap: T): T {
  return {
    ...recordMap,
    block: flattenTable(recordMap.block),
    collection: flattenTable(recordMap.collection),
    collection_view: flattenTable(recordMap.collection_view),
    notion_user: flattenTable(recordMap.notion_user),
  };
}
