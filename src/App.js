import React from 'react';
import Router from './Router';
import Nav from './components/Nav/Nav';

import {BrowserRouter} from 'react-router-dom';
const App = () => (
  <BrowserRouter>
    <section>
      <Nav />
      <Router />
    </section>
  </BrowserRouter>
);

export default App;
