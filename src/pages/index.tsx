import React from 'react';

import About from '../components/About';
import Analytics from '../components/Analytics';
import Canvas from '../components/Canvas';
import Events from '../components/Events';
import Features from '../components/Features';
import Header from '../components/Header';
import LazyShow from '../components/LazyShow';
import MainHero from '../components/MainHero';
import Mission from '../components/Mission';
import News from '../components/News';
import Pricing from '../components/Pricing';
import Product from '../components/Product';
import Projects from '../components/Projects';

const App = () => {
  return (
    <div className={`bg-background grid gap-y-6 overflow-hidden`}>
      <div className={`bg-background`}>
        <div className="max-w-7xl mx-auto">
          <Header />
        </div>
      </div>
      <MainHero />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <News />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <Events />
      </LazyShow>
      <LazyShow>
        <Projects />
      </LazyShow>
      <LazyShow>
        <Mission />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics />
    </div>
  );
};

export default App;
