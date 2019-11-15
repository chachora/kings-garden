const pixelEnum = [' ', '-', '|'];

/**
 * Returns 2D array with garden layout
 * @param width
 * @param height
 * @param padding
 * @returns {Array}
 */
export const draw = (width, height, padding) => {
  return [];
};

/**
 * Returns string based on garden array
 * @param garden
 * @returns {String}
 */
export const print = garden => {
  return garden
    .reduce((result, row, i) => {
      // Iterate each row
      return row.reduce((rowResult, value) => {
        // Convert value to symbol
        return `${rowResult}${pixelEnum[value]}`;
      }, `${result}\n`);
    }, '')
    .slice(1);
};
