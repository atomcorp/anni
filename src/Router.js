import React from 'react';
import {Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import TileExamples from './components/Tile/TileExamples';
import BoardExample from './components/Examples/BoardExample';

const Router = () => (
  <Switch>
    <Route path="/tileexamples" component={TileExamples} />
    <Route path="/board" component={BoardExample} />
    <Route component={Home} />
  </Switch>
);

export default Router;
