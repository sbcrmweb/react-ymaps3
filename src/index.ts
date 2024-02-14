export * from './components/YMapsProvider';
export { default as YMapsProvider } from './components/YMapsProvider';

export { default as ymaps } from './utils';

export * from './exports';

export type YMaps =
  typeof import('@yandex/ymaps3-types/index');
