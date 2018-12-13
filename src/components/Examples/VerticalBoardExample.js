import React from 'react';
import Board from '../Board/Board';

const VerticalBoardExample = (props) => (
  <div>
    <Board
      wide={8}
      tall={4}
      size="80px"
      tileType="noFills"
      algorithm="vertical"
    />
  </div>
);

export default VerticalBoardExample;
