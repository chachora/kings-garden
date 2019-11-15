import { print, draw } from './garden-helper';
import testData from '../../tests/test_data';

describe('print()', () => {
  it('should return string with correct layout', () => {
    const garden = [[2, 1, 1, 0, 1, 1, 2]];
    const expectedValue = '|-- --|';
    expect(print(garden)).toEqual(expectedValue);
  });
});

describe('draw()', () => {
  it('should return correct values for all inputs', () => {
    testData.forEach(item => {
      const input = item.input.split(',');
      const expectedValues = item.pixelArrayJson;
      expect(JSON.stringify(draw(...input))).toEqual(expectedValues);
    });
  });
});
