import { LatLng, LatLngBounds } from 'leaflet';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import {
  FeatureGroup,
  MapContainer,
  Rectangle,
  TileLayer,
  useMap,
  Pane,
  Polygon,
  Marker,
  LayerGroup,
} from 'react-leaflet';
import L from 'leaflet';
import { EditControl } from 'react-leaflet-draw';
import RoutineMachine from './RoutingMachine';
import { nanoid } from 'nanoid';
import {
  deleteArea,
  deleteMCP,
  triggerAreaModal,
  triggerMCPModal,
  updateMCPPos,
} from '../../store/slices/AreasSlice';
import { useDispatch, useSelector } from 'react-redux';
import MCPInfoModal from '../modals/MCPInfoModal';
import { Button } from '@mui/material';

const RecenterAutomatically = ({ area }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([area[0] + 0.01, area[1] + 0.015]);
  }, [area]);
  return null;
};


const maps = {
  base: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
};

const AreaMap = ({ areas, area, routing, width, height , handleOutMCP, handleGetRoute, zIndex}) => {
  const [openAreaContext, setOpenAreaContext] = useState(false);
  const [openMCPContext, setOpenMCPContext] = useState(false);
  const [openMCPModal, setOpenMCPModal] = useState(false)
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
    latlng: { lat: 0, lng: 0 },
  });
  const [selectedArea, setSelectedArea] = useState(0);
  const [selectedMCP, setSelectedMCP] = useState(0);

  const rMachine = useRef();

  const { companyVertex } = useSelector((state) => state.areas);
  const dispatch = useDispatch();

  const vertexs = useMemo(() => {
    let points = [companyVertex];
    if (area && area.length > 0) {
      areas.forEach((area) => {
        points.push(...area.MCPs);
      });
      return points;
    }
    return points;
  }, [areas]);

  const waypoints =  useMemo(() => {
    let points = [
      {
        coordinate: L.latLng(companyVertex.lati, companyVertex.longti),
        id: "1",
        areaId: "1",
      },
    ];
    areas.forEach((area) => {
      area.MCPs.forEach(
        (MCP) =>
          (points = [
            ...points,
            {
              coordinate: L.latLng(MCP.lati, MCP.longti),
              id: MCP.id,
              areaId: MCP.areaId,
            },
          ])
      );
    });
    return points;
  }, [areas]);


  const handleAddMCP = (latlng) => {
    dispatch(
      triggerMCPModal({
        type: 'ADD',
        data: {
          areaId: selectedArea.id,
          latlng,
        },
      })
    )
  };

  const handleUpdateMCPPos = (MCP) => {
    dispatch(updateMCPPos(MCP));
  };

  const refreshWaypoints = () => {
    if (rMachine.current && waypoints) {
      const realWaypoints = waypoints.map((point) =>
        ({
          latLng:L.latLng(point.coordinate.lat, point.coordinate.lng),
          name: point.areaId + "-" + point.id
        })
      );
      rMachine.current.setWaypoints(realWaypoints)
    }
  }

  const handleOpenMCPContext = ({points, MCP}) => {
    setOpenMCPContext(true)
    setPoints(points)
    setSelectedMCP(MCP)
  }

  useEffect(() => {
    const handleCloseContextMenu = () => {
      setOpenAreaContext(false)
      setOpenMCPContext(false)
    }
    window.addEventListener('click', handleCloseContextMenu);
    return () => window.removeEventListener('click', handleCloseContextMenu);
  }, []);

  useEffect(() => {
    refreshWaypoints()
  }, [waypoints, rMachine]);



  return (
    <>
      {handleGetRoute && (
        <Button onClick={() => handleGetRoute(rMachine.current._selectedRoute.instructions)}>Get Route Instructions</Button>
      )}
      <MapContainer
        center={area}
        zoom={10}
        style={{
          height: height || '100%',
          width: width || '100%',
          zIndex: zIndex || 1
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={maps.base}
        />

        <FeatureGroup>
          <EditControl
            draw={{
              circle: false,
              circlemarker: false,
              polygon: false,
              polyline: false,
              marker: false,
            }}
            onCreated={(e) => {
              const layer = e.layer;
              const bounds = layer.getLatLngs();
              layer.remove();
              dispatch(
                triggerAreaModal({
                  type: 'ADD',
                  data: {
                    id: nanoid(),
                    bounds,
                  },
                })
              );
            }}
          />
        </FeatureGroup>
            <Pane>

        {areas &&
          areas.length > 0 &&
          areas.map((item, i) => {
            return (
              <LayerGroup key={i}>
                <Marker
                  position={{
                    lat: item.bounds[0][0].lat,
                    lng: item.bounds[0][0].lng,
                  }}
                  icon={L.divIcon({
                    html: `${item.name}`,
                    iconSize: { scaleBy: 10 },
                    className: 'areaName',
                  })}
                />
                <Rectangle
                  bounds={item.bounds}
                  fillOpacity={0}
                  color={'#425F57'}
                  eventHandlers={{
                    contextmenu: (e) => {
                      setSelectedArea(item);
                      setPoints({
                        x: e.layerPoint.x,
                        y: e.layerPoint.y,
                        latlng: e.latlng,
                      });
                      setOpenAreaContext(true);
                    },
                    // click: () => {
                    //   let newAreas = areas.filter((item, index) => i !== index);
                    //   setAreas(newAreas);
                    // },
                  }}
                />
              </LayerGroup>
            );
          })}
            </Pane>
        <RecenterAutomatically area={area} />
        {openAreaContext && (
          <Pane style={{}}>
            <div
              style={{
                position: 'absolute',
                top: `${points.y}px`,
                left: `${points.x}px`,
                width: '90px',
                zIndex: 9999,
              }}
            >
              <div
                className="bg-success p-2 cursor-pointer op9 "
                style={{ fontWeight: 600 }}
                onClick={() =>
                  dispatch(
                    triggerAreaModal({ type: 'UPDATE', data: selectedArea })
                  )
                }
              >
                Update
              </div>
              <div
                className="bg-success p-2 cursor-pointer op9 "
                style={{ fontWeight: 600 }}
                onClick={() => {
                  dispatch(deleteArea({ id: selectedArea.id }))

                }}
              >
                Delete
              </div>
              <div
                className="bg-success p-2 cursor-pointer op9 "
                style={{ fontWeight: 600 }}
                onClick={() =>
                  handleAddMCP({
                    lati: points.latlng.lat,
                    longti: points.latlng.lng,
                  })
                }
              >
                Add MCPs
              </div>
            </div>
          </Pane>
        )}
        {openMCPContext && (
          <Pane style={{}}>
            <div
              style={{
                position: 'absolute',
                top: `${points.y}px`,
                left: `${points.x}px`,
                width: '90px',
                zIndex: 9999,
              }}
            >
              {handleOutMCP && (

              <div
                className="bg-success p-2 cursor-pointer op9 "
                style={{ fontWeight: 600 }}
                onClick={() =>
                  handleOutMCP(selectedMCP)
                }
              >
                Out
              </div>
              )}
              <div
                className="bg-success p-2 cursor-pointer op9 "
                style={{ fontWeight: 600 }}
                onClick={() => {
                  dispatch(deleteMCP(selectedMCP))
                }}
              >
                Delete
              </div>
            </div>
          </Pane>
        )}
        <RoutineMachine
          ref={rMachine}
          waypoints={waypoints}
          vertexs={vertexs}
          updateMCPPos={handleUpdateMCPPos}
          routing={routing}
          setOpen={setOpenMCPModal}
          setOpenContext={handleOpenMCPContext}
        />
        <MCPInfoModal open={openMCPModal} setOpen={setOpenMCPModal}/>
      </MapContainer>
    </>
  );
};

export default AreaMap;
