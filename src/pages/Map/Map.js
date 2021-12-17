import axios from 'axios';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import ReactMapGL, {
  GeolocateControl, NavigationControl,
} from 'react-map-gl';
import observable from '../../utils';
import { Actions } from '../UserPanel';
import { MarkerCadastro } from './MarkerCadastro';
import { RenderMarkers } from './RenderMarkers';
import {
  defaultViewport, geolocateControlStyle, mapStyle, navControlStyle,
} from './utils';

export const Map = () => {
  const [viewport, setViewport] = useState(defaultViewport);
  const [showMarker, setShowMarker] = useState(false);
  const [marker, setMarker] = useState();
  const [popupDesc, setPopupDesc] = useState();

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

  const setMarkerFeat = (e) => {
    setMarker({
      lat: e.lngLat[1],
      long: e.lngLat[0],
    });
    setShowMarker(true);
  };

  const handleSaveMarker = async () => {
    const values = {
      description: popupDesc,
      latitude: marker.lat,
      longitude: marker.long,
    };
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/markers`, { marker: values }, { headers: { authorization: `Bearer ${window.localStorage.getItem('access_token')}` } });
      setShowMarker(false);
      setPopupDesc(undefined);
      observable.notify(true);
      window.alert('Ponto salvo com sucesso!');
    } catch (error) {
      window.alert('Você não está autenticado!');
      setShowMarker(false);
      setPopupDesc(undefined);
    }
  };

  useEffect(async () => {
    getUserLocation();
  }, []);

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle={mapStyle}
      onDblClick={setMarkerFeat}
      doubleClickZoom={false}
    >
      {
        showMarker
      && (
      <MarkerCadastro
        marker={marker}
        setPopupDesc={setPopupDesc}
        setShowMarker={setShowMarker}
        handleSaveMarker={handleSaveMarker}
      />
      )
      }
      <RenderMarkers viewport={viewport} />
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
