import type { SortFunction } from './SortFunction';
import { brutesort } from './brutesort';
import { sortJSON } from './sortJSON';
import { sortPlaintext } from './sortPlaintext';

export const sortJSONOrPlainText: SortFunction = (input: string) => {
  try {
    const result = brutesort(input, [sortJSON, sortPlaintext]);
    if (result?.type === 'success') {
      return result;
    }
    throw new Error('Failed to sort as JSON or plain text.');
  } catch (error) {
    return {
      error: error as Error,
      type: 'error',
    };
  }
};
