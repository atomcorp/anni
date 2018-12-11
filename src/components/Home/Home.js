import React from 'react';
import {Link} from 'react-router-dom';

import Tile from '../Tile/Tile';
const Home = () => (
  <section>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tileexamples">Tile examples</Link>
      </li>
    </ul>

    <Tile index={2} />
  </section>
);

export default Home;
