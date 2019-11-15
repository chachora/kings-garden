const pixelEnum = [' ', '-', '|'];

/**
 * Recursive method for generating garden layout
 * @param garden
 * @param startWidth
 * @param startHeight
 * @param padding
 * @returns {*}
 */
const calc = (garden, startWidth, startHeight, padding) => {
  const height = garden.length;
  const width = garden[0].length;

  if (startHeight >= height / 2 || startWidth >= width / 2) return garden;

  // Draw top and bottom border
  for (let i = startWidth; i < width - startWidth; i++) {
    garden[startHeight][i] = 1;
    garden[height - startHeight - 1][i] = 1;
  }

  // Draw left and right border
  for (let i = startHeight; i < height - startHeight; i++) {
    garden[i][startWidth] = 2;
    garden[i][width - startWidth - 1] = 2;
  }

  return calc(garden, startWidth + padding, startHeight + padding, padding);
};

/**
 * Returns 2D array with garden layout
 * @param width
 * @param height
 * @param padding
 * @returns {Array}
 */
export const draw = (width, height, padding) => {
  width = width - (width % 2);
  height = height - (height % 2);
  if (padding <= 0) return [];
  // Initialize 2D array
  const garden = new Array(height).fill(0).map(() => new Array(width).fill(0));
  return calc(garden, 0, 0, Math.floor(padding / 2) + 1);
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
