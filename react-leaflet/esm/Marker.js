import { createLayerComponent } from 'react-leaflet-rotate/@react-leaflet/core';
import { Marker as LeafletMarker } from 'react-leaflet-rotate/leaflet-rotate-map';
export const Marker = createLayerComponent(function createMarker({
  position,
  ...options
}, ctx) {
  const instance = new LeafletMarker(position, options);
  return {
    instance,
    context: { ...ctx,
      overlayContainer: instance
    }
  };
}, function updateMarker(marker, props, prevProps) {
  if (props.position !== prevProps.position) {
    marker.setLatLng(props.position);
  }

  if (props.icon != null && props.icon !== prevProps.icon) {
    marker.setIcon(props.icon);
  }

  if (props.zIndexOffset != null && props.zIndexOffset !== prevProps.zIndexOffset) {
    marker.setZIndexOffset(props.zIndexOffset);
  }

  if (props.opacity != null && props.opacity !== prevProps.opacity) {
    marker.setOpacity(props.opacity);
  }

  if (marker.dragging != null && props.draggable !== prevProps.draggable) {
    if (props.draggable === true) {
      marker.dragging.enable();
    } else {
      marker.dragging.disable();
    }
  }
});