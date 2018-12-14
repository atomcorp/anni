import React from 'react';
import Board from '../Board/Board';

const VerticalBoardExample = (props) => (
  <div>
    <Board
      wide={24}
      tall={16}
      size="30px"
      tileType="noFills"
      algorithm="vertical"
    />
  </div>
);

export default VerticalBoardExample;
