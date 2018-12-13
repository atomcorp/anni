import verticalAlgorithm from './vertical-algorithm';

/**
 * is greater or equal to min
 * is less than, but not equal, to max
 * @param {number} min
 * @param {number} max
 * @return {number} integer
 */
export const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 *
 * @param {string} type
 * @return {number} integer
 */
export const tilesSwitch = (tileType) => {
  switch (tileType) {
    case 'arrows':
      return () => getRandomInt(0, 5);
    case 'noFills':
      return () => getRandomInt(0, 5);
    case 'noEmpties':
      return () => getRandomInt(1, 6);
    case 'all':
    default:
      return () => getRandomInt(0, 6);
  }
};

/**
 *
 * @param {number} x
 * @param {number} y
 */
export const return2dArray = (x, y, intGenerator) =>
  Array(y)
    .fill(null)
    .map(() =>
      Array(x)
        .fill(null)
        .map(() => intGenerator())
    );

export const getTile = (matrix, row, col) => matrix[row][col];

export const switchTileAlgorithm = (algorithmType) => (baseMatrix) => {
  switch (algorithmType) {
    case 'vertical':
      return verticalAlgorithm(baseMatrix);
    default:
      return baseMatrix;
  }
};
