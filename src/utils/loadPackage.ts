import type { YMaps } from '..';

export const loadPackage = async (
  pkg: string,
  ymaps: YMaps,
) => ({
  ...(await ymaps.import(pkg as any)),
  ...ymaps,
});
