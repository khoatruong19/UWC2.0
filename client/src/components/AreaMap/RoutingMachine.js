import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'lrm-graphhopper';
import { useDispatch } from 'react-redux';
import depot from '../../images/Depot.png';
import mcp from '../../images/recycling-place.png';
import { checkIsOfficeAddress } from '../../utils/helper';

const icon = L.icon({
  iconUrl: depot,
  iconSize: [40, 40],
});

const iconMCP = L.icon({
  iconUrl: mcp,
  iconSize: [40, 40],
});

const getMarkerMCPPopup = (params) => {
  return `
    <div><strong>Location:</strong> ${params.address}</div>
    <div><strong>Max Capacity:</strong> ${params.maxCapacity}</div>
    <div><strong>Last time:</strong> ${params.capacity}</div>
  `;
};

const getMarkerOfficePopup = (params) => {
  return `
    <div><strong>Location:</strong> ${params.address}</div>
  `;
};

const createRoutineMachineLayer = ({
  waypoints,
  addMCP,
  updateMCPPos,
  vertexs,
  ...props
}) => {
  console.log({ waypoints });
  const realWaypoints = waypoints.map((point) =>
    L.latLng(point.coordinate.lat, point.coordinate.lng)
  );
  console.log({ realWaypoints });

  const instance = L.Routing.control({
    waypoints: realWaypoints,
    router:
      props.routing &&
      L.Routing.graphHopper(process.env.REACT_APP_GRAPHHOPPER_API),
    routeLine:
      props.routing &&
      function (route) {
        var line = L.Routing.line(route, {
          addWaypoints: false,
          extendToWaypoints: false,
          routeWhileDragging: false,
          autoRoute: true,
          useZoomParameter: false,
          draggableWaypoints: false,
          styles: [{ color: 'green', weight: 4 }],
        });
        line.eachLayer(function (l) {
          l.on('click', function (e) {
            console.log(e);
          });
        });

        return line;
      },
    createMarker: (i, waypoint, n) => {
      var vextex = vertexs[i];
      console.log({ waypoint });
      if (checkIsOfficeAddress(waypoint.latLng.lat, waypoint.latLng.lng)) {
        return L.marker(waypoint.latLng, {
          draggable: true,
          icon: icon,
        }).bindPopup(getMarkerOfficePopup(vextex));
      }
      return L.marker(waypoint.latLng, {
        draggable: true,

        icon: iconMCP,
      })
        .bindPopup(getMarkerMCPPopup(vextex))
        .addEventListener('dragend', (e) => {
          const latlng = {
            lati: e.target._latlng.lat,
            longti: e.target._latlng.lng,
          };
          updateMCPPos({ ...waypoints[i], ...latlng });
        });
    },
    show: false,
    addWaypoints: false,
    routeWhileDragging: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
  });

  return instance;
};

const RoutingMachine = createControlComponent(createRoutineMachineLayer);

export default RoutingMachine;
