import React, { useMemo } from 'react';
import { useYMapContext } from '../components/YMapProvider';

export const createElement = <T, U = unknown>(
  component: string,
  pkg?: string,
  defaultProps?: U,
) =>
  React.forwardRef<T, React.PropsWithChildren<U>>(
    ({ ...props }, ref) => {
      const {
        reactify,
        ymaps,
        packages,
        onLoadPackage,
        isLoading,
      } = useYMapContext();

      const packageLoaded = packages.includes(pkg) || !pkg;

      if (!packageLoaded) {
        onLoadPackage(pkg);
      }

      return useMemo(() => {
        if (reactify !== null && packageLoaded) {
          const Component =
            reactify.module(ymaps)[component];

          return (
            // @ts-expect-error
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
    },
  );
