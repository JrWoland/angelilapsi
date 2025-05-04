/* eslint-disable react/no-unescaped-entities */

import React from 'react';

import Divider from './Divider';

const items = [
  {
    img: '/assets/images/Warsztaty_sztuki_religijnej.webp',
    title: 'Warsztaty sztuki religijnej "Droga do Światła"',
    publicationDate: '2 kwietnia 2025',
    description: `Warsztaty sztuki religijnej "Droga do Światła" to propozycja,
                która łączy duchowy rozwój z twórczością artystyczną. Warsztaty
                mają na celu zgłębienie duchowych aspektów religii i ich
                wyrażenie przez sztukę. Uczestnicy będą mieli okazję nie tylko
                do twórczego działania, ale także do osobistego poszukiwania
                sensu, który towarzyszy każdemu duchowemu doświadczeniu.`,
  },
  {
    img: '/assets/images/religia_nie_zna_granic.webp',
    title:
      '"Religia nie zna granic - program transgranicznej wymiany doświadczeń osób nawróconych - meetingi online"',
    publicationDate: '5 marca 2025',
    description: `Projekt Fundacji "Religia nie zna granic – program transgranicznej wymiany doświadczeń osób nawróconych – meetingi online" ma na celu stworzenie przestrzeni do wymiany duchowych doświadczeń i wzajemnego wsparcia dla osób, które przeszły proces nawrócenia. Program ten opiera się na idei, że religia i duchowość nie mają granic, a doświadczenia osób, które przeszły głęboką przemianę wewnętrzną, mogą stać się inspiracją i pomocą dla innych, niezależnie od ich narodowości czy miejsca zamieszkania.`,
  },
  {
    img: '/assets/images/W_bogu_znalazlem_swiatlo.webp',
    title: 'Konkurs artystyczny „W Bogu znalazłem światło do wyjścia z nałogu”',
    publicationDate: '4 luty 2025',
    description: `Konkurs artystyczny „W Bogu znalazłem światło do wyjścia z nałogu” jest inicjatywą skierowaną do osób uzależnionych, które przebywają w ośrodkach leczenia uzależnień. Celem konkursu jest umożliwienie uczestnikom wyrażenia swojej drogi do uzdrowienia i transformacji poprzez sztukę, oraz ukazanie, jak religia, wiara i duchowość mogą odegrać rolę w procesie wyjścia z nałogu. Konkurs ma na celu nie tylko artystyczne wyrażenie doświadczeń, ale także stanowi formę terapeutyczną, pomagając uczestnikom w odkrywaniu ich wewnętrznych zasobów i odnajdywaniu nadziei.`,
  },
];
const News = () => {
  return (
    <div className={`container max-w-5xl mx-auto m-8 bg-background`}>
      <section className={`bg-background py-8`} id="news">
        <div className={`container mx-auto px-2 pt-4 pb-12 text-primary`}>
          <h2 className="my-2 lg:text-5xl text-3xl text-secondary font-bold leading-relaxed text-center rounded-lg bg-gold-gradient">
            AKTUALNOŚCI
          </h2>
          {items.map((item, key) => (
            <div
              key={key}
              className="lg:flex-row sm:flex sm:flex-col justify-around"
            >
              <div className="items-start justify-center mt-10">
                <Divider />
                <h3 className="text-3xl text-center lg:text-left">
                  {item.title}
                </h3>

                <p className={`text-white`}>
                  <img
                    className={`float-left w-1/4 h-1/4 object-cover rounded-lg shadow-lg mr-4`}
                    src={item.img}
                    alt={item.title}
                  />
                  {item.description}
                </p>
                <p>Data publikacji: {item.publicationDate}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default News;
