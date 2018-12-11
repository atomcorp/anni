import React from 'react';
import css from './Tile.module.css';

import {shapeSwitch} from './helpers';

const Tile = (props) => <div className={css[shapeSwitch(props.index)]} />;

export default Tile;
