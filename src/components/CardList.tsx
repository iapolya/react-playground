import React from 'react';
import Card from './Card';
import { ICat } from '../types';

const CardList = ({ cats }: { cats: Array<ICat> }) => {
  return (
    <section>
      {cats.map((cat, i) => {
        return <Card key={i} id={cat.id} name={cat.name} email={cat.email} />;
      })}
    </section>
  );
};

export default CardList;
