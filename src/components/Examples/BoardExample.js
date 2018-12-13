import React from 'react';
import Board from '../Board/Board';

const BoardExample = (props) => (
  <div>
    <Board wide={16} tall={16} size="30px" tileType="arrows" />
  </div>
);

export default BoardExample;
