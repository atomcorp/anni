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
const tilesSwitch = (type) => {
  switch (type) {
    case 'arrows':
      return getRandomInt(1, 5);
    case 'noFills':
      return getRandomInt(0, 5);
    case 'noEmpties':
      return getRandomInt(1, 6);
    case 'all':
    default:
      return getRandomInt(0, 6);
  }
};

/**
 *
 * @param {number} x
 * @param {number} y
 */
const return2dArray = (x, y) => {
  return Array.from(Array(y)).fill(Array.from(Array(x)).fill(0));
};

let root = document.documentElement;

const Board = (props) => {
  root.style.setProperty('--wide', props.wide);
  root.style.setProperty('--tall', props.tall);
  root.style.setProperty('--size', props.size);
  const base = return2dArray(props.wide, props.tall);
  return (
    <div className={css.container}>
      {base
        .map((row, rowIndex) =>
          row.map((tile, tileIndex) => (
            <Tile
              index={tilesSwitch(props.tileType)}
              key={String.fromCharCode(97 + rowIndex) + tileIndex}
            />
          ))
        )
        .flat()}
    </div>
  );
};

export default Board;
