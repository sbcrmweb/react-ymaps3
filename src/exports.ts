import * as YMaps from '@yandex/ymaps3-types';
import * as Controls from '@yandex/ymaps3-types/packages/controls';
import * as Markers from '@yandex/ymaps3-types/packages/markers';
import utils from './utils';

// TODO: inspect this types:
// seems more apporiate in "some" casese but not in others
import * as YMapsReact from '@yandex/ymaps3-types/react';

export enum YMapsPackage {
  CartesianProjection = '@yandex/ymaps3-cartesian-projection@0.0.1',
  Clusterer = '@yandex/ymaps3-clusterer@0.0.1',
  Controls = '@yandex/ymaps3-controls@0.0.1',
  Hint = '@yandex/ymaps3-hint@0.0.1',
  Markers = '@yandex/ymaps3-markers@0.0.1',
  SphericalMercatorProjection = '@yandex/ymaps3-spherical-mercator-projection@0.0.1',
}

export const YMap = utils.createElement<
  YMaps.YMap,
  YMaps.YMapProps
>('YMap');

export const YMapMarker = utils.createElement<
  YMaps.YMapMarker,
  YMaps.YMapMarkerProps
>('YMapMarker');

export const YMapDefaultSchemeLayer = utils.createElement<
  YMaps.YMapDefaultSchemeLayer,
  YMaps.YMapDefaultSchemeLayerProps
>('YMapDefaultSchemeLayer');

export const YMapDefaultFeaturesLayer = utils.createElement<
  YMaps.YMapDefaultFeaturesLayer,
  YMaps.YMapDefaultFeaturesLayerProps
>('YMapDefaultFeaturesLayer');

export const YMapListener = utils.createElement<
  YMaps.YMapListener,
  YMaps.YMapListenerProps
>('YMapListener');

export const YMapDefaultMarker = utils.createElement<
  Markers.YMapDefaultMarker,
  Markers.YMapDefaultMarkerProps
>('YMapDefaultMarker', YMapsPackage.Markers);

export const YMapControls = utils.createElement<
  YMaps.YMapControls,
  YMaps.YMapControlsProps
>('YMapControls');

export const YMapControlButton = utils.createElement<
  YMaps.YMapControlButton,
  YMaps.YMapControlButtonProps
>('YMapControlButton');

export const YMapContainer = utils.createElement<
  YMaps.YMapContainer,
  YMaps.YMapContainerProps<any>
>('YMapContainer');

export const YMapZoomControl = utils.createElement<
  Controls.YMapZoomControl,
  Controls.YMapZoomControlProps
>('YMapZoomControl', YMapsPackage.Controls);

export const YMapGeolocationControl = utils.createElement<
  Controls.YMapGeolocationControl,
  Controls.YMapGeolocationControlProps
>('YMapGeolocationControl', YMapsPackage.Controls);

export const YMapCollection =
  utils.createElement<YMaps.YMapCollection>(
    'YMapCollection',
  );

export const YMapFeature =
  utils.createElement<YMaps.YMapFeature>('YMapFeature');

export const YMapFeatureDataSource = utils.createElement<
  YMaps.YMapFeatureDataSource,
  YMaps.YMapFeatureDataSourceProps
>('YMapFeatureDataSource');

export { default as YMapClusterer } from './components/YMapClusterer';
