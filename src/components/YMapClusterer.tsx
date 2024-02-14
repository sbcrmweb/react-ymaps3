import {
  IClusterMethod,
  YMapClusterer as YMapClustererHandle,
} from '@yandex/ymaps3-types/packages/clusterer';
import { YMapClusterer as YMapClustererReact } from '@yandex/ymaps3-types/packages/clusterer/react';
import React, { useMemo } from 'react';
import { YMapsPackage } from '..';
import { useYMapsContext } from './YMapsProvider';

export type YMapClustererProps = Omit<
  React.ComponentProps<typeof YMapClustererReact>,
  'method'
> & {
  gridSize?: number;
  method?: IClusterMethod;
};

export const YMapClusterer = React.forwardRef<
  YMapClustererHandle,
  YMapClustererProps
>(({ gridSize, ...props }, ref) => {
  const {
    reactify,
    ymaps,
    packages,
    onLoadPackage,
    isLoading,
  } = useYMapsContext();

  const packageLoaded = packages.includes(
    YMapsPackage.Clusterer,
  );

  if (!packageLoaded) {
    onLoadPackage(YMapsPackage.Clusterer);
  }

  return useMemo(() => {
    if (reactify !== null && packageLoaded) {
      const Component =
        reactify.module(ymaps)['YMapClusterer'];

      const method =
        reactify.module(ymaps)['clusterByGrid'];

      // @ts-expect-error
      const gridSizedMethod = method({ gridSize });

      return (
        // @ts-expect-error
        <Component
          ref={ref}
          method={gridSizedMethod}
          {...props}
        />
      );
    }

    return null;
  }, [reactify, props, packages, isLoading]);
});

export default YMapClusterer;
