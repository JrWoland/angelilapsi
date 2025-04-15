import React from 'react';

import config from '../config/index.json';

const MainHero = () => {
  const { mainHero } = config;
  return (
    <header className="relative flex items-center justify-center h-full mb-12 overflow-hidden">
      <div className="flex flex-col-reverse lg:flex lg:flex-row sm:flex sm:flex-col-reverse  z-10 text-white rounded-xl w-full h-full">
        <div className="flex flex-1 items-start justify-center mt-10">
          <div className="flex flex-col items-start justify-center lg:w-1/2 text-center">
            <img
              className="w-2/3 self-center"
              src="/assets/images/angeli_lapsi.png"
              alt="logo"
            />
            <div className="text-center text-4xl lg:text-6xl self-center">
              <h1 className="text-white">{mainHero.title}</h1>
              <h2 className="text-primary">{mainHero.subtitle}</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center mt-10">
          <div className="w-3/4 text-center text-xl lg:text-4xl">
            <div className="mb-6">{mainHero.description}</div>
            <a
              href="#pricing"
              className="px-10 pt-4 pb-6 border-none text-black text-2xl lg:text-4xl bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url(/assets/images/button.svg)' }}
            >
              WESPRZYJ
            </a>
          </div>
        </div>
      </div>
      <video
        src="/assets/videos/hero-video.mp4"
        autoPlay
        loop
        playsInline
        muted
        className="absolute w-auto min-w-full min-h-full max-w-none"
      >
        Your browser does not support the video tag.
      </video>
    </header>
  );
};

export default MainHero;
