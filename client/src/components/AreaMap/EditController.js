import { createControlComponent, useLeafletContext } from '@react-leaflet/core';
import L from 'leaflet';
import { useEffect } from 'react';
// @ts-ignore
import 'leaflet-draw';

const handlerTypes = {
  onEdited: L.Draw.Event.EDITED,
  onDrawStart: L.Draw.Event.DRAWSTART,
  onDrawStop: L.Draw.Event.DRAWSTOP,
  onDrawVertex: L.Draw.Event.DRAWVERTEX,
  onEditStart: L.Draw.Event.EDITSTART,
  onEditMove: L.Draw.Event.EDITMOVE,
  onEditResize: L.Draw.Event.EDITRESIZE,
  onEditVertex: L.Draw.Event.EDITVERTEX,
  onEditStop: L.Draw.Event.EDITSTOP,
  onDeleted: L.Draw.Event.DELETED,
  onDeleteStart: L.Draw.Event.DELETESTART,
  onDeleteStop: L.Draw.Event.DELETESTOP,
  onCreated: L.Draw.Event.CREATED,
  onToolbarClosed: L.Draw.Event.TOOLBARCLOSED,
  onToolbarOpened: L.Draw.Event.TOOLBAROPENED,
  onMarkerContext: L.Draw.Event.MARKERCONTEXT,
};

const CreateDrawControl = (props) => {
  const { draw, edit, position, ...eventHandlers } = props;
  const context = useLeafletContext();
  const isChildOfFeatureGroup =
    context.layerContainer instanceof L.FeatureGroup;
  const featureGroup = context.layerContainer;
  useEffect(() => {
    Object.entries(eventHandlers).forEach(([name, handler]) => {
      const type = handlerTypes[name];

      context.map.on(type, (e) => {
        const layer = e.layer;
        const bounds = layer.getLatLngs();
        const newRectangle = [];
        for (const bound of bounds[0]) {
          newRectangle.push([bound.lat, bound.lng]);
        }
      });
    });
    console.log(Object.entries(eventHandlers));
    if (featureGroup) {
      context.map.on(L.Draw.Event.CREATED, (e) => {
        featureGroup.addLayer(e.layer);
      });
    }
    return () => {
      Object.entries(eventHandlers).forEach(([name]) => {
        const type = handlerTypes[name];
        context.map.off(type);
      });
    };
  }, [context.map, featureGroup, props, eventHandlers]);

  let editOptions = {
    ...props.edit,
    featureGroup,
  };
  return new L.Control.Draw({
    ...props,
    edit: props.edit && editOptions,
  });
};
export const DrawControl = createControlComponent(CreateDrawControl);
