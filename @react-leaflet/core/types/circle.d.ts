import { LatLngExpression, CircleMarker as LeafletCircleMarker, CircleMarkerOptions } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ReactNode } from 'react';
import { PathProps } from './path';
export interface CircleMarkerProps extends CircleMarkerOptions, PathProps {
    center: LatLngExpression;
    children?: ReactNode;
}
export declare function updateCircle(layer: LeafletCircleMarker, props: CircleMarkerProps, prevProps: CircleMarkerProps): void;
