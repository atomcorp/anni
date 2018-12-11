import React from 'react';
import css from './Board.module.css';

import Tile from '../Tile/Tile';
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
          <Tile index={parseInt(Math.random() * 6, 10)} key={index} />
        ))}
    </div>
  );
};

export default Board;
