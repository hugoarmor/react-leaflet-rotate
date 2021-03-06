import { EventedProps } from 'react-leaflet-rotate/@react-leaflet/core';
import { LatLngExpression, Tooltip as LeafletTooltip, TooltipOptions } from 'react-leaflet-rotate/leaflet-rotate-map';
import { ReactNode } from 'react';
export interface TooltipProps extends TooltipOptions, EventedProps {
    children?: ReactNode;
    onClose?: () => void;
    onOpen?: () => void;
    position?: LatLngExpression;
}
export declare const Tooltip: import("react").ForwardRefExoticComponent<TooltipProps & import("react").RefAttributes<LeafletTooltip>>;
