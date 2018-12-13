import {getRandomInt} from './helpers';

/**
 * - Rules
 * range - 0-4
 * if blank (0) - OK
 * if NE (1) - OK
 * if SE (2) - OK
 * if NW (4) - previous tile must be NE (1)
 * if SW (3) - previous tile must be (2)
 */

const algorithm = (matrix) => {
  let latestMatrix = matrix;
  const totalRows = matrix.length - 1;
  const totalCols = matrix[0].length - 1;
  let started = false;
  const recursiveSearch = (currentRow, currentCol) => {
    if (!latestMatrix[currentRow]) {
      return;
    }
    // if SW (3) - previous tile must be (2)
    // if NW (4) - previous tile must be NE (1)
    const tile = latestMatrix[currentRow][currentCol];
    if (
      (tile === 3 && latestMatrix[currentRow][currentCol - 1] !== 2) ||
      (tile === 4 && latestMatrix[currentRow][currentCol - 1] !== 1)
    ) {
      // tile is invalid, create a new one and check again
      latestMatrix[currentRow][currentCol] = getRandomInt(0, 5);
      return recursiveSearch(currentRow, currentCol);
    }
    // if nothing else check the next column
    if (currentCol < totalCols) {
      if (tile === 1) {
        // assign next tile and skip checking it
        latestMatrix[currentRow][currentCol + 1] = 4;
        return recursiveSearch(currentRow, currentCol + 2);
      }
      if (tile === 2) {
        // assign next tile and skip checking it
        latestMatrix[currentRow][currentCol + 1] = 3;
        return recursiveSearch(currentRow, currentCol + 2);
      }
      return recursiveSearch(currentRow, currentCol + 1);
    }
    // if last in the row and an invalid tile
    if (tile === 1 || tile === 2) {
      latestMatrix[currentRow][currentCol] = 0;
      return recursiveSearch(currentRow + 1, 0);
    }
    // if end of columns, check the next row
    if (currentRow < totalRows) {
      return recursiveSearch(currentRow + 1, 0);
    }
    // if you get here, it's the end of search
  };
  if (!started) {
    started = true;
    recursiveSearch(0, 0);
  }
  console.log(latestMatrix);
  return latestMatrix;
};

const verticalAlgorithm = (matrix) => {
  const newMatrix = algorithm(matrix);
  // console.log(newMatrix);
  return newMatrix;
};

export default verticalAlgorithm;
