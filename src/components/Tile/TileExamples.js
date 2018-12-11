import React from 'react';
import css from './TileExamples.module.css';
import Tile from './Tile';

const TileExamples = () => (
  <section>
    <section className={css.row}>
      <Tile index={0} />
      <Tile index={1} />
      <Tile index={2} />
      <Tile index={3} />
      <Tile index={4} />
      <Tile index={5} />
    </section>
    <section className={css.grid}>
      <Tile index={2} />
      <Tile index={3} />
      <Tile index={0} />
      <Tile index={6} />
      <Tile index={6} />
      <Tile index={0} />
      <Tile index={4} />
      <Tile index={1} />
      <Tile index={1} />
      <Tile index={4} />
      <Tile index={6} />
      <Tile index={0} />
      <Tile index={0} />
      <Tile index={6} />
      <Tile index={3} />
      <Tile index={2} />
    </section>
  </section>
);

export default TileExamples;
