/* eslint-disable no-alert */
import axios from 'axios';
import React, {
  useCallback, useEffect, useState,
} from 'react';
import ReactMapGL, {
  GeolocateControl, NavigationControl,
} from 'react-map-gl';
import { Actions } from '../UserPanel';
import { ContextProvider } from '../utils/ContextProvider';
import { MarkerCadastro } from './MarkerCadastro';
import {
  defaultViewport, geolocateControlStyle, mapStyle, navControlStyle,
} from './utils';

export const Map = () => {
  const [viewport, setViewport] = useState(defaultViewport);
  const [showMarker, setShowMarker] = useState(false);
  const [marker, setMarker] = useState();
  const [markers, setMarkers] = useState([]);
  const [popupDesc, setPopupDesc] = useState();
  console.log('🚀 ~ file: Map.js ~ line 22 ~ Map ~ markers', markers);

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
      window.alert('Ponto salvo com sucesso!');
    } catch (error) {
      window.alert('Você não está autenticado!');
      setShowMarker(false);
      setPopupDesc(undefined);
    }
  };

  useEffect(async () => {
    getUserLocation();
    const markersRes = await axios.get(`${process.env.REACT_APP_API_URL}/markers`);
    setMarkers(markersRes.data);
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
        viewport={viewport}
        setPopupDesc={setPopupDesc}
        setShowMarker={setShowMarker}
        handleSaveMarker={handleSaveMarker}
      />
      )
      }
      <ContextProvider>
        <Actions />
      </ContextProvider>
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
