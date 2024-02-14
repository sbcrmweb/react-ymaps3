import type { Reactify } from '@yandex/ymaps3-types/reactify';
import React from 'react';
import ReactDOM from 'react-dom';
import type { YMaps } from '..';

export const init = (
  apiKey: string,
  lang: string = 'ru_RU',
): Promise<{ ymaps: YMaps; reactify: Reactify }> => {
  return new Promise(async (resolve, reject) => {
    if ('ymaps3' in window) {
      const ymaps = window.ymaps3;
      await ymaps.ready;
      const ymaps3Reactify = await ymaps.import(
        '@yandex/ymaps3-reactify',
      );
      const reactify = ymaps3Reactify.reactify.bindTo(
        React,
        ReactDOM,
      );

      resolve({
        ymaps,
        reactify,
      });
    } else {
      const script = document.createElement('script');
      document.body.appendChild(script);
      script.type = 'text/javascript';
      script.src = `https://api-maps.yandex.ru/v3/?apikey=${apiKey}&lang=${lang}`;
      script.onload = async () => {
        const ymaps = window.ymaps3;
        await ymaps.ready;
        const ymaps3Reactify = await ymaps.import(
          '@yandex/ymaps3-reactify',
        );
        const reactify = ymaps3Reactify.reactify.bindTo(
          React,
          ReactDOM,
        );

        resolve({
          ymaps,
          reactify,
        });
      };

      script.onerror = reject;
    }
  });
};
