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

let root = document.documentElement;
const Board = (props) => {
  root.style.setProperty('--wide', props.wide);
  root.style.setProperty('--tall', props.tall);
  root.style.setProperty('--size', props.size);
  return (
    <div className={css.container}>
      {Array.from(Array(props.wide * props.tall))
        .fill(null)
        .map((_, index) => (
          <Tile index={tilesSwitch(props.tileType)} key={index} />
        ))}
    </div>
  );
};

export default Board;
