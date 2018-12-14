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

const randomColour = () =>
  Math.round(Math.random()) === 0 ? 'primary' : 'secondary';

const colouring = () => {
  let previousColour = randomColour();
  return (tile) => {
    if (tile === 0) {
      return;
    }
    if (tile === 2 || tile === 1) {
      previousColour = randomColour();
    }
    return previousColour;
  };
};

const Board = (props) => {
  root.style.setProperty('--wide', props.wide);
  root.style.setProperty('--tall', props.tall);
  root.style.setProperty('--size', props.size);
  root.style.setProperty('--background', props.background || '#439759');
  root.style.setProperty('--primary', props.primary || '#64766a');
  root.style.setProperty('--secondary', props.secondary || '#9aa587');
  const tileType = tilesSwitch(props.tileType);
  const baseMatrix = return2dArray(props.wide, props.tall, tileType);
  // algorithm should be done here
  const algorithm = switchTileAlgorithm(props.algorithm)(baseMatrix);
  const memoColouring = colouring();
  return (
    <section>
      <div>
        <h4>Stats</h4>
        <ul>
          <li>Rows: {props.tall}</li>
          <li>Columns: {props.wide}</li>
          <li>Tiles: {props.tall * props.wide}</li>
        </ul>
      </div>

      <div className={css.container}>
        {algorithm.flat().map((tile, index) => (
          // there shouldn't be any logic or algorithming here
          <Tile index={tile} key={index} colour={memoColouring(tile)} />
        ))}
      </div>
    </section>
  );
};

export default Board;
