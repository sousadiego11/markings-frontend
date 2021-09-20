import React, { useCallback, useEffect, useState } from 'react';
import ReactMapGL, { GeolocateControl, NavigationControl } from 'react-map-gl';
import { Actions } from '../UserPanel';
import { geolocateControlStyle, navControlStyle } from './utils';

export const Map = () => {
  const [viewport, setViewport] = useState({
    width: '100vw',
    height: '100vh',
    latitude: -27.6411,
    longitude: -48.6790,
    zoom: 8,
  });

  const getUserLocation = useCallback(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setViewport((prevViewport) => ({
        ...prevViewport,
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        zoom: 14,
      }));
    });
  }, []);

  useEffect(() => {
    getUserLocation();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/mapbox/streets-v11"
      onClick={(e) => console.log(e)}
    >
      <Actions />
      <NavigationControl style={navControlStyle} />
      <GeolocateControl
        style={geolocateControlStyle}
        positionOptions={{ enableHighAccuracy: true }}
        trackUserLocation
        auto
      />
    </ReactMapGL>
  );
};
