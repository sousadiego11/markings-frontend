import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';
import ReactMapGL, {
  GeolocateControl, NavigationControl, Marker, Popup,
} from 'react-map-gl';
import { FormItem, Submit } from '../styles';
import { Actions } from '../UserPanel';
import { authConfig } from '../utils';
import {
  geolocateControlStyle, navControlStyle, mapStyle, defaultViewport,
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
      await axios.post(`${process.env.REACT_APP_API_URL}/markers`, { marker: values }, authConfig);
      setShowMarker(false);
      setPopupDesc(undefined);
    } catch (error) {
      window.alert('Você não está autenticado!');
    }
  };

  useEffect(() => {
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
      <>
        <Marker
          latitude={marker.lat}
          longitude={marker.long}
          offsetLeft={-25}
          offsetTop={-40}
        >
          <span className="material-icons" style={{ fontSize: viewport.zoom * 3, color: '#067cd6' }}>
            place
          </span>
        </Marker>
        <Popup
          latitude={marker.lat}
          longitude={marker.long}
          anchor="left"
          closeButton
          onClose={() => setShowMarker(false)}
        >
          <FormItem>
            <span className="material-icons-outlined">
              rate_review
            </span>
            <input
              required
              onChange={(e) => setPopupDesc(e.target.value)}
              className="form-input"
              type="text"
              placeholder="Descrição"
            />
          </FormItem>
          <Submit style={{ width: '60px', height: 30, marginLeft: 60 }} onClick={handleSaveMarker}> Save</Submit>
        </Popup>
      </>
      )
      }
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
