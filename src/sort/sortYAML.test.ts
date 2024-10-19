import { assert, describe, expect, it } from 'vitest';
import { sortYAML } from './sortYAML';

describe('sortYAML', () => {
  it('preserves comments when sorting YAML input', () => {
    const input = `
    variables:
      C_VARIABLE: 'true' # Comment C
      A_VARIABLE: 'true' # Comment A
      B_VARIABLE: 'true' # Comment B
  `;

    const actual = sortYAML(input);
    assert(actual.type === 'success');
    expect(actual.payload).toMatchSnapshot();
  });
});
