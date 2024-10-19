import { type ParsedNode, YAMLMap, YAMLSeq, parseDocument } from 'yaml';
import type { SortFunction } from './SortFunction';

function sortDeep(node: ParsedNode | null): void {
  if (node instanceof YAMLMap) {
    node.items.sort((itemA, itemB) => (itemA.key < itemB.key ? -1 : itemA.key > itemB.key ? 1 : 0));
    for (const item of node.items) {
      sortDeep(item.value);
    }
  } else if (node instanceof YAMLSeq) {
    for (const item of node.items) {
      sortDeep(item);
    }
  }
}

export const sortYAML: SortFunction = (text: string) => {
  try {
    const document = parseDocument(text);
    sortDeep(document.contents);

    return {
      payload: document.toString(),
      type: 'success',
    };
  } catch (error) {
    return {
      error: error as Error,
      type: 'error',
    };
  }
};
