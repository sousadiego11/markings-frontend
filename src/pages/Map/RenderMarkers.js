import axios from 'axios';
import React, {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { Marker, Popup } from 'react-map-gl';
import styled from 'styled-components';

const PopupParagraph = styled.p`
color: #353535;
wordBreak: 'break-all';
`;

export const RenderMarkers = ({ viewport }) => {
  const [markers, setMarkers] = useState([]);
  const [popup, setPopup] = useState();

  const handleClickedMarker = useCallback((clickedMarker = {}) => {
    setPopup(clickedMarker);
  }, []);

  const MarkersMemo = useMemo(() => markers.map((m) => (
    <Marker
      latitude={+m.latitude}
      longitude={+m.longitude}
      offsetLeft={-23}
      offsetTop={-36}
      key={m.id_marker}
      onClick={() => handleClickedMarker(m)}
    >
      <span
        className="material-icons"
        style={{ fontSize: viewport.zoom * 2.5, color: '#067cd6', cursor: 'pointer' }}
      >
        place
      </span>
    </Marker>
  )), [markers]);

  useEffect(async () => {
    try {
      const markersRes = await axios.get(`${process.env.REACT_APP_API_URL}/markers`);
      setMarkers(markersRes.data);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  return (
    <>
      {MarkersMemo}
      {popup && (
      <Popup
        latitude={+popup.latitude}
        longitude={+popup.longitude}
        anchor="left"
        closeButton
        onClose={() => setPopup(undefined)}
      >
        <div style={{ maxWidth: 230 }}>
          <PopupParagraph>
            <b>Usuário:</b>
            {' '}
            {popup.user_name}
          </PopupParagraph>
          <PopupParagraph>
            <b>Descrição:</b>
            {' '}
            {popup.description}
          </PopupParagraph>
        </div>

      </Popup>
      )}
    </>
  );
};
