import { MediaOverlayProps } from 'react-leaflet-rotate/@react-leaflet/core';
import { SVGOverlay as LeafletSVGOverlay } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ReactNode } from 'react';
export interface SVGOverlayProps extends MediaOverlayProps {
    attributes?: Record<string, string>;
    children?: ReactNode;
}
export declare const useSVGOverlayElement: (props: SVGOverlayProps, context: import("@react-leaflet/core").LeafletContextInterface) => import("react").MutableRefObject<import("@react-leaflet/core").LeafletElement<LeafletSVGOverlay, any>>;
export declare const useSVGOverlay: (props: SVGOverlayProps) => import("react").MutableRefObject<import("@react-leaflet/core").LeafletElement<LeafletSVGOverlay, any>>;
export declare const SVGOverlay: import("react").ForwardRefExoticComponent<SVGOverlayProps & import("react").RefAttributes<LeafletSVGOverlay>>;
