import {getRandomInt} from './helpers';

/**
 * - Rules
 * range - 0-4
 * if blank (0) - OK
 * if NE (1) - OK
 * if SE (2) - OK
 * if NW (4) - previous tile must be NE (1)
 * if SW (3) - previous tile must be (2)
 * no diamonds
 */

const algorithm = (matrix) => {
  let latestMatrix = matrix;
  const totalRows = matrix.length - 1;
  const totalCols = matrix[0].length - 1;
  const recursiveSearch = (currentRow, currentCol) => {
    const tile = latestMatrix[currentRow][currentCol];
    if (
      (tile === 3 && latestMatrix[currentRow][currentCol - 1] !== 2) ||
      (tile === 4 && latestMatrix[currentRow][currentCol - 1] !== 1)
    ) {
      // tile is invalid, create a new one and check again
      latestMatrix[currentRow][currentCol] = getRandomInt(0, 5);
      return recursiveSearch(currentRow, currentCol);
    }
    // check for diamonds
    if ((tile === 1 || tile === 4) && currentRow !== 0) {
      const aboveTile = latestMatrix[currentRow - 1][currentCol];
      if (aboveTile === 3 || aboveTile === 2) {
        const columnToAlter = aboveTile === 3 ? currentCol - 1 : currentCol;
        latestMatrix[currentRow - 1][columnToAlter] = getRandomInt(0, 5);
        return recursiveSearch(currentRow - 1, columnToAlter);
        // we flip a coin to randomly change either the upp row
        // of the current row
        // if (Math.round(Math.random()) === 0) {
        //   latestMatrix[currentRow - 1][columnToAlter] = getRandomInt(0, 5);
        //   return recursiveSearch(currentRow - 1, columnToAlter);
        // } else {
        //   latestMatrix[currentRow][columnToAlter] = getRandomInt(0, 5);
        //   return recursiveSearch(currentRow, columnToAlter);
        // }
      }
    }
    // if nothing else check the next column
    if (currentCol < totalCols) {
      // if 1 or 2, assign next tile
      if (tile === 1) {
        latestMatrix[currentRow][currentCol + 1] = 4;
      }
      if (tile === 2) {
        latestMatrix[currentRow][currentCol + 1] = 3;
      }
      return recursiveSearch(currentRow, currentCol + 1);
    }
    // if last in the row and an invalid tile
    if (tile === 1 || tile === 2) {
      latestMatrix[currentRow][currentCol] = 0;
    }
    // if end of columns, check the next row
    if (currentRow < totalRows) {
      return recursiveSearch(currentRow + 1, 0);
    }
    // if you get here, it's the end of search
  };
  recursiveSearch(0, 0);
  return latestMatrix;
};

const verticalAlgorithm = (matrix) => {
  const newMatrix = algorithm(matrix);
  // console.log(newMatrix);
  return newMatrix;
};

export default verticalAlgorithm;
