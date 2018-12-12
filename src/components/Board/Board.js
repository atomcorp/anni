import React from 'react';
import css from './Board.module.css';
import Tile from '../Tile/Tile';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const tilesSwitch = (type) => {
  switch (type) {
    case 'arrows':
      return getRandomInt(1, 4);
    case 'noFills':
      return getRandomInt(0, 4);
    case 'noEmpties':
      return getRandomInt(1, 5);
    case 'all':
    default:
      return getRandomInt(0, 5);
  }
};

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
