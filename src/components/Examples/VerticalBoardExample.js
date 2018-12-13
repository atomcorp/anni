import React from 'react';
import Board from '../Board/Board';

const VerticalBoardExample = (props) => (
  <div>
    <Board
      wide={6}
      tall={2}
      size="100px"
      tileType="noFills"
      algorithm="vertical"
    />
  </div>
);

export default VerticalBoardExample;
