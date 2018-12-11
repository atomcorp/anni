import React from 'react';
import css from './Board.module.css';

import Tile from '../Tile/Tile';

const Board = (props) => (
  <div
    style={{width: `${props.wide * 100}px`, height: `${props.tall * 100}px`}}
  >
    {Array.from(Array(props.wide * props.tall)).fill(
      <Tile index={parseInt(Math.random() * 6, 10)} />
    )}
  </div>
);

export default Board;
