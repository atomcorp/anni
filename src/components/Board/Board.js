import React from 'react';
import css from './Board.module.css';
import Tile from '../Tile/Tile';

/**
 * is greater or equal to min
 * is less than, but not equal, to max
 * @param {number} min
 * @param {number} max
 * @return {number} integer
 */
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 *
 * @param {string} type
 * @return {number} integer
 */
const tilesSwitch = (tileType) => {
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
const return2dArray = (x, y, intGenerator) =>
  Array(y)
    .fill(null)
    .map(() =>
      Array(x)
        .fill(null)
        .map(() => intGenerator())
    );

const handleVerticalAlgorithm = (
  {prevTile = 0, nextTile},
  recusive = false
) => {
  console.log(prevTile, nextTile, recusive);
  if (prevTile === 1) {
    return 4;
  }
  if (prevTile === 2) {
    return 3;
  }
  if (
    (nextTile === 4 && prevTile !== 1) ||
    (nextTile === 3 && prevTile !== 2)
  ) {
    handleVerticalAlgorithm({prevTile, nextTile: getRandomInt(0, 5)}, true);
  }
  return nextTile;
};

const switchTileAlgorithm = (algorithmType) => ({prevTile, nextTile}) => {
  switch (algorithmType) {
    case 'vertical':
      return handleVerticalAlgorithm({prevTile, nextTile});
    default:
      return nextTile;
  }
};

/**
 * need to make a function which loops through each tile
 * and can alter the whole board as it goes
 *
 */

let root = document.documentElement;

const Board = (props) => {
  root.style.setProperty('--wide', props.wide);
  root.style.setProperty('--tall', props.tall);
  root.style.setProperty('--size', props.size);
  const tileType = tilesSwitch(props.tileType);
  const base = return2dArray(props.wide, props.tall, tileType);
  const algorithm = switchTileAlgorithm(props.algorithm);
  // algorithm should be done here
  console.log(base.flat());
  return (
    <div className={css.container}>
      {base.flat().map((tile, index, baseArr) => (
        // there shouldn't be any logic or algorithming here
        <Tile
          index={algorithm({nextTile: tile, prevTile: baseArr[index - 1]})}
          key={index}
        />
      ))}
    </div>
  );
};

export default Board;
