import React from 'react';

import config from '../config/index.json';
import Divider from './Divider';
import LazyShow from './LazyShow';

const Product = () => {
  const { product } = config;
  const [firstItem, secondItem] = product.items;

  return (
    <section className={`bg-background`} id="product">
      <div className={`container max-w-5xl mx-auto m-8 px-4 sm:px-6 lg:px-8`}>
        <LazyShow>
          <h2 className="my-2 lg:text-5xl text-3xl font-bold leading-relaxed text-center rounded-lg bg-gold-gradient">
            {product.title.split(' ').map((word, index) => (
              <span key={index} className={'text-secondary'}>
                {word}{' '}
              </span>
            ))}
          </h2>
        </LazyShow>
        <Divider />
        <div className={`flex flex-wrap text-center`}>
          <div className={`w-full sm:w-1/2 p-6 self-center`}>
            <p className={`text-tertiary text-2xl`}>{firstItem?.owner}</p>
            <p className={`text-tertiary text-2xl`}>{firstItem?.description}</p>
          </div>
          <div className={`relative w-full h-full sm:w-1/2 `}>
            <div className="absolute w-full  sabsolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-white bg-opacity-50">
              <h3
                className={`text-3xl lg:text-5xl text-secondary font-bold leading-loose`}
              >
                {firstItem?.title}
              </h3>
            </div>
            <video
              src="/assets/videos/peace.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div
          className={`flex flex-wrap flex-col-reverse sm:flex-row text-center  mt-20`}
        >
          <div className="relative w-full sm:w-1/2 text-center">
            <video
              src="/assets/videos/woman.mp4"
              autoPlay
              loop
              playsInline
              muted
              className="w-auto"
            >
              Your browser does not support the video tag.
            </video>
            <div className="absolute w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-50">
              <h3
                className={`text-3xl lg:text-5xl text-secondary font-bold leading-loose`}
              >
                {secondItem?.title}
              </h3>
            </div>
          </div>
          <div className={`w-full sm:w-1/2 p-6 self-center`}>
            <div className={`align-middle`}>
              <p className={`text-tertiary mb-8 text-2xl`}>
                {secondItem?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
