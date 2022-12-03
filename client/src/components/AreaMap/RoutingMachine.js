import { createControlComponent } from '@react-leaflet/core';
import L from 'leaflet';
import 'leaflet-routing-machine';
import 'lrm-graphhopper';
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
  setOpen,
  setOpenContext,
  ...props
}) => {

  const realWaypoints = waypoints.map((point) => ({
    latLng: L.latLng(point.coordinate.lat, point.coordinate.lng),
    name: point.areaId + "-" + point.id
  })
  );

  const instance = L.Routing.control({
    waypoints: realWaypoints,
   
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
        .addEventListener('dragend', (e) => {
          const latlng = {
            lati: e.target._latlng.lat,
            longti: e.target._latlng.lng,
          };

          const splitIds = waypoint.name.split("-")

          updateMCPPos({ areaId: splitIds[0],id:splitIds[1] ,...latlng });
        })
        .addEventListener('click', () => setOpen(true))
        .addEventListener('contextmenu', (e) => {
          const latlng = {
            lati: e.target._latlng.lat,
            longti: e.target._latlng.lng,
          };
          const splitIds = waypoint.name.split("-")
          setOpenContext(
          { points: {
            x: e.layerPoint.x,
            y: e.layerPoint.y,
            latlng: e.latlng,
          },
          MCP: {areaId: splitIds[0],id:splitIds[1],...latlng}
        })
      })
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
