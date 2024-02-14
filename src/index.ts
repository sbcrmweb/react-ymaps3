export * from './components/YMapsProvider';
export { default as YMapsProvider } from './components/YMapsProvider';

export { default as ymaps } from './utils';

export * from './exports';

/**
 * @returns {CartesianProjection} \@yandex/ymaps3-cartesian-projection@0.0.1 - Projection package cartesian-projection
 * @returns {Clusterer} \@yandex/ymaps3-clusterer@0.0.1 - Clusterer
 * @returns {Controls} \@yandex/ymaps3-controls@0.0.1 - Control Package
 * @returns {Hint} \@yandex/ymaps3-hint@0.0.1 - Hints Package
 * @returns {Markers} \@yandex/ymaps3-markers@0.0.1 - Default Marker Pack
 * @returns {SphericalMercatorProjection} \@yandex/ymaps3-spherical-mercator-projection@0.0.1 - Projection package spherical-mercator-projection
 */

export type YMaps =
  typeof import('@yandex/ymaps3-types/index');
