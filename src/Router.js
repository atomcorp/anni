import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './components/Home/Home';
import TileExamples from './components/Tile/TileExamples';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/tileexamples" component={TileExamples} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Router;