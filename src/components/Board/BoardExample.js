import React from 'react';
import Board from './Board';

const BoardExample = (props) => (
  <div>
    <Board wide={16} tall={16} size="60px" tileType="arrows" />
  </div>
);

export default BoardExample;
