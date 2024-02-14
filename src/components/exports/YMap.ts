import { YMap as YMapHandle } from '@yandex/ymaps3-types';
import { YMap as YMapComponent } from '@yandex/ymaps3-types/react';
import utils from '../../utils';

export type YMapProps = React.ComponentProps<
  typeof YMapComponent
>;

const YMap = utils.createElement<YMapHandle, YMapProps>(
  'YMap',
);

export default YMap;

//export { YMap as YMapHandle } from '@yandex/ymaps3-types';
