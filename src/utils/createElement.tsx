import React, { useMemo } from 'react';
import { useYMapsContext } from '../components/YMapsProvider';

export const createElement = <T, U>(
  component: string,
  pkg?: string,
  defaultProps?: U,
) =>
  React.forwardRef<T, U>(({ ...props }, ref) => {
    const {
      reactify,
      ymaps,
      packages,
      onLoadPackage,
      isLoading,
    } = useYMapsContext();

    const packageLoaded = packages.includes(pkg) || !pkg;

    if (!packageLoaded) {
      onLoadPackage(pkg);
    }

    return useMemo(() => {
      if (reactify !== null && packageLoaded) {
        const Component = reactify.module(ymaps)[component];

        return (
          // @ts-expect-error no way to cast
          <Component
            ref={ref}
            {...defaultProps}
            {...props}
          />
        );
      }

      return null;
    }, [
      reactify,
      defaultProps,
      props,
      packages,
      isLoading,
    ]);
  });
