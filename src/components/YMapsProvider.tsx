import { Reactify } from '@yandex/ymaps3-types/reactify';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from 'react';
import useIsomorphicEffect from '../hooks/useIsomorphicEffect';
import utils from '../utils';
import type { YMaps, YMapsPackage } from '..';

export interface YMapsContext {
  ymaps: YMaps;
  reactify: Reactify;
  packages: string[];
  isLoading: boolean;
  onLoadPackage: (pkg: string) => Promise<void>;
}

export interface YMapsProviderProps {
  apiKey: string;
  lang?: string;
  children?: React.ReactNode;
  packages?: YMapsPackage[];
  fallback?: React.ReactNode | null;
}

export const ymapsContext = createContext<YMapsContext>(
  null!,
);

const YMapsProvider = ({
  apiKey,
  lang,
  children,
  fallback = null,
}: YMapsProviderProps): JSX.Element => {
  const [isLoading, setLoading] = useState(true);
  const [packages, setPackages] = useState<string[]>([]);

  const invalidate = useRef(true);

  const ymaps = useRef<YMaps>(null!);
  const reactify = useRef<Reactify>(null!);

  const handleInit = useCallback(async () => {
    if (invalidate.current) {
      invalidate.current = false;

      const res = await utils.init(apiKey, lang);
      ymaps.current = res.ymaps;
      reactify.current = res.reactify;

      setLoading(false);
    }
  }, [invalidate]);

  const handlePackage = useCallback(
    async (pkg: string) => {
      ymaps.current = await utils.loadPackage(
        pkg,
        ymaps.current,
      );
      setPackages([...packages, pkg]);
    },
    [packages],
  );

  useIsomorphicEffect(() => {
    handleInit();
  }, []);

  return (
    <ymapsContext.Provider
      value={{
        ymaps: ymaps.current,
        reactify: reactify.current,
        packages,
        onLoadPackage: handlePackage,
        isLoading,
      }}
    >
      {children}
    </ymapsContext.Provider>
  );
};

export default YMapsProvider;

export const useYMapsContext = () => {
  const value =
    useContext(ymapsContext) ?? ({} as YMapsContext);
  return useMemo(() => value, [value]);
};
