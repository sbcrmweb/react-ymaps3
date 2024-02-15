import * as YMaps from '@yandex/ymaps3-types';
import * as YMapsReact from '@yandex/ymaps3-types/react';

import * as Controls from '@yandex/ymaps3-types/packages/controls';
import * as ControlsReact from '@yandex/ymaps3-types/packages/controls/react';

import * as Markers from '@yandex/ymaps3-types/packages/markers';
import * as MarkersReact from '@yandex/ymaps3-types/packages/markers/react';

import utils from './utils';

// TODO: inspect this types:
// seems more apporiate in "some" casese but not in others
// import * as YMapsReact from '@yandex/ymaps3-types/react';

export enum YMapsPackage {
  CartesianProjection = '@yandex/ymaps3-cartesian-projection@0.0.1',
  Clusterer = '@yandex/ymaps3-clusterer@0.0.1',
  Controls = '@yandex/ymaps3-controls@0.0.1',
  Hint = '@yandex/ymaps3-hint@0.0.1',
  Markers = '@yandex/ymaps3-markers@0.0.1',
  SphericalMercatorProjection = '@yandex/ymaps3-spherical-mercator-projection@0.0.1',
}

export type YMapProps = React.ComponentPropsWithoutRef<
  typeof YMapsReact.YMap
>;
export const YMap = utils.createElement<
  YMaps.YMap,
  YMapProps
>('YMap');

export type YMapMarkerProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapMarker
  >;

export const YMapMarker = utils.createElement<
  YMaps.YMapMarker,
  YMapMarkerProps
>('YMapMarker');

export type YMapDefaultSchemeLayerProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapDefaultSchemeLayer
  >;

export const YMapDefaultSchemeLayer = utils.createElement<
  YMaps.YMapDefaultSchemeLayer,
  YMapDefaultSchemeLayerProps
>('YMapDefaultSchemeLayer');

export type YMapDefaultFeaturesLayerProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapDefaultFeaturesLayer
  >;

export const YMapDefaultFeaturesLayer = utils.createElement<
  YMaps.YMapDefaultFeaturesLayer,
  YMapDefaultFeaturesLayerProps
>('YMapDefaultFeaturesLayer');

export type YMapDefaultSatelliteLayerProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapDefaultFeaturesLayer
  >;

export const YMapDefaultSatelliteLayer =
  utils.createElement<
    YMaps.YMapDefaultSatelliteLayer,
    YMapDefaultSatelliteLayerProps
  >('YMapDefaultSatelliteLayer');

export type YMapListenerProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapListener
  >;

export const YMapListener = utils.createElement<
  YMaps.YMapListener,
  YMapListenerProps
>('YMapListener');

export type YMapDefaultMarkerProps =
  React.ComponentPropsWithoutRef<
    typeof MarkersReact.YMapDefaultMarker
  >;

export const YMapDefaultMarker = utils.createElement<
  Markers.YMapDefaultMarker,
  YMapDefaultMarkerProps
>('YMapDefaultMarker', YMapsPackage.Markers);

export type YMapControlsProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapControls
  >;

export const YMapControls = utils.createElement<
  YMaps.YMapControls,
  YMapControlsProps
>('YMapControls');

export type YMapControlButtonProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapControlButton
  >;

export const YMapControlButton = utils.createElement<
  YMaps.YMapControlButton,
  YMapControlButtonProps
>('YMapControlButton');

export type YMapContainerProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapContainer
  >;

export const YMapContainer = utils.createElement<
  YMaps.YMapContainer,
  YMapContainerProps
>('YMapContainer');

export type YMapZoomControlProps =
  React.ComponentPropsWithoutRef<
    typeof ControlsReact.YMapZoomControl
  >;

export const YMapZoomControl = utils.createElement<
  Controls.YMapZoomControl,
  YMapZoomControlProps
>('YMapZoomControl', YMapsPackage.Controls);

export type YMapGeolocationControlProps =
  React.ComponentPropsWithoutRef<
    typeof ControlsReact.YMapGeolocationControl
  >;

export const YMapGeolocationControl = utils.createElement<
  Controls.YMapGeolocationControl,
  YMapGeolocationControlProps
>('YMapGeolocationControl', YMapsPackage.Controls);

export type YMapCollectionProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapContainer
  >;

export const YMapCollection = utils.createElement<
  YMaps.YMapCollection,
  YMapCollectionProps
>('YMapCollection');

export type YMapFeatureProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapFeature
  >;

export const YMapFeature = utils.createElement<
  YMaps.YMapFeature,
  YMapFeatureProps
>('YMapFeature');

export type YMapFeatureDataSourceProps =
  React.ComponentPropsWithoutRef<
    typeof YMapsReact.YMapFeatureDataSource
  >;

export const YMapFeatureDataSource = utils.createElement<
  YMaps.YMapFeatureDataSource,
  YMapFeatureDataSourceProps
>('YMapFeatureDataSource');

export { default as YMapClusterer } from './components/YMapClusterer';
