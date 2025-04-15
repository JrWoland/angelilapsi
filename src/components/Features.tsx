import React from 'react';

import config from '../config/index.json';
import LazyShow from './LazyShow';

const Features = () => {
  const { features } = config;
  const { subtitle, items: featuresList } = features;
  return (
    <div
      className={`container max-w-5xl mx-auto m-8 bg-background`}
      id="features"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LazyShow>
          <div className="lg:text-center">
            <h2 className="my-2 lg:text-5xl text-3xl text-secondary font-bold leading-relaxed text-center rounded-lg bg-gold-gradient">
              {subtitle}
            </h2>
          </div>
        </LazyShow>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {featuresList.map((feature) => (
              <div
                key={feature.name}
                className="relative border-primary border-4 rounded-md p-4"
              >
                <div>
                  <div
                    className={`absolute flex items-center justify-center  rounded-md bg-background text-tertiary`}
                  >
                    <img
                      className={`block h-6 w-6 rounded-full`}
                      src={feature.icon}
                      alt={feature.name}
                    />
                  </div>
                  <a
                    href={feature.pdf}
                    rel="noopener noreferrer"
                    download
                    target="_blank"
                    className="block ml-16 text-lg leading-6 font-medium text-primary"
                  >
                    {feature.name}
                  </a>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
};

export default Features;
