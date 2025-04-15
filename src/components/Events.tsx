import React from 'react';

import Divider from './Divider';
import { Hymn } from './events/Hymn';
import { Msze } from './events/Msze';
import { Rosary } from './events/Rosary';

const Events = () => {
  return (
    <section className={`bg-background py-8`} id="pricing">
      <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
        <h2 className="my-2 lg:text-5xl text-3xl text-secondary font-bold leading-relaxed text-center rounded-lg bg-gold-gradient">
          WYDARZENIA
        </h2>
        <div className="lg:flex-row sm:flex sm:flex-col justify-around">
          <div className="items-start justify-center mt-10">
            <h3 className="text-3xl text-center lg:text-left">MINIONE</h3>
            <Hymn />
            <Divider />
            <Msze />
          </div>
          <div className="items-start justify-center mt-10">
            <h3 className="text-3xl text-center lg:text-left">NADCHODZĄCE</h3>
            <Rosary />
            <div className="items-start justify-center mt-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
