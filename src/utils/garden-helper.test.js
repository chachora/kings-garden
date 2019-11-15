import { print } from './garden-helper';

describe('print()', () => {
  it('should return string with correct layout', () => {
    const garden = [[2, 1, 1, 0, 1, 1, 2]];
    const expectedValue = '|-- --|';
    expect(print(garden)).toEqual(expectedValue);
  });
});
