import React from 'react';
import css from './Board.module.css';
import Tile from '../Tile/Tile';
import {tilesSwitch, return2dArray, switchTileAlgorithm} from './helpers';

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
  const baseMatrix = return2dArray(props.wide, props.tall, tileType);
  // algorithm should be done here
  const algorithm = switchTileAlgorithm(props.algorithm)(baseMatrix);
  return (
    <div className={css.container}>
      {algorithm.flat().map((tile, index, baseArr) => (
        // there shouldn't be any logic or algorithming here
        <Tile index={tile} key={index} />
      ))}
    </div>
  );
};

export default Board;
