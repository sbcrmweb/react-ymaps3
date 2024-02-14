import { YMap as YMapHandle } from '@yandex/ymaps3-types';
import { YMap as YMapComponent } from '@yandex/ymaps3-types/react';
import utils from '../../utils';

export interface YMapProps
  extends React.ComponentProps<typeof YMapComponent> {}

const YMap = utils.createElement<YMapHandle, YMapProps>(
  'YMap',
) as typeof YMapComponent;

export default YMap;
