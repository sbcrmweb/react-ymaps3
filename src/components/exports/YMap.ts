import { YMap as YMapHandle } from '@yandex/ymaps3-types';
import { YMap as YMapComponent } from '@yandex/ymaps3-types/react';
import utils from '../../utils';
import { Modify } from '../../utils/typescript';

export type YMapProps = Modify<
  React.ComponentPropsWithRef<typeof YMapComponent>,
  {
    key?: React.Key;
  }
>;

const YMap = utils.createElement<YMapHandle, YMapProps>(
  'YMap',
) as React.ForwardRefExoticComponent<YMapProps>;

export default YMap;

export { YMap as YMapHandle } from '@yandex/ymaps3-types';
