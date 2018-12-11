import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import TileExamples from './components/Tile/TileExamples';
import BoardExample from './components/Board/BoardExample';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/tileexamples" component={TileExamples} />
      <Route path="/board" component={BoardExample} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;
