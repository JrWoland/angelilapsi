import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { about } = config;
  const { sections } = about;

  return (
    <div
      id="contact"
      className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12"
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-primary leading-2">KONTAKT</div>
        <address className="text-primary leading-2 text-center">
          <p>
            {about.address.street} {about.address.city} {about.address.postal}
          </p>
          <p>tel: {about.phone}</p>
          <a href={`mailto:${about.email}?subject=Kontakt`}>{about.email}</a>
        </address>
        <div className={'text-primary'}>
          <p>{about.nip}</p>
          <p>{about.regon}</p>
          <p>{about.krs}</p>
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-4 h-12">
          {sections.map((section, index) => (
            <a
              key={`${section.name}-${index}`}
              href={section.href}
              rel="noopener noreferrer"
              download
              target="_blank"
              className="hover:text-primary text-base cursor-pointer leading-4 text-primary dark:text-gray-400 dark:hover:text-white"
            >
              {section.name}
            </a>
          ))}
        </div>

        <div className="flex items-center mt-6">
          <p className="mt-6 text-xs lg:text-sm leading-none text-primary dark:text-gray-50">
            &copy;{' '}
            {`${new Date().getFullYear()} Fundacja Angeli Lapsi. Wszelkie prawa zastrzeżone.`}
          </p>
        </div>
      </div>
    </div>
  );
};
export default About;
