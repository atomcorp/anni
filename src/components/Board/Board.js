import React from 'react';
import css from './Board.module.css';
import Tile from '../Tile/Tile';

const allTiles = () => parseInt(Math.random() * 5, 10);
const arrowTiles = () => parseInt(Math.random() * 4, 10) + 1;

const tilesSwitch = (type) => {
  switch (type) {
    case 'all':
      return allTiles();
    case 'arrows':
      return arrowTiles();
    default:
      return allTiles;
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
