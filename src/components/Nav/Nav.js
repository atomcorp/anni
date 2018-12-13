import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => (
  <section>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/board">Board</Link>
      </li>
      <li>
        <Link to="/tileexamples">Tile examples</Link>
      </li>
      <li>
        <Link to="/vertboardexample">Vertical board example</Link>
      </li>
    </ul>
  </section>
);

export default Nav;
