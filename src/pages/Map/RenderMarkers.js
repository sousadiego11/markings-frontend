import axios from 'axios';
import React, {
  useCallback, useContext, useEffect, useMemo, useState,
} from 'react';
import { Marker, Popup } from 'react-map-gl';
import styled from 'styled-components';
import { Observable } from '../../utils';
import { Context } from '../utils/Context';

const PopupParagraph = styled.p`
color: #353535;
wordBreak: 'break-all';
`;

export const shouldFetchMarkers = new Observable();

export const RenderMarkers = () => {
  const [markers, setMarkers] = useState([]);
  const [popup, setPopup] = useState();
  const { userId } = useContext(Context);

  const handleClickedMarker = useCallback((clickedMarker = {}) => {
    setPopup(clickedMarker);
  }, []);

  const handleFetchMarkers = useCallback(async () => {
    try {
      const markersRes = await axios.get(`${process.env.REACT_APP_API_URL}/markers`);
      setMarkers(markersRes.data);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  const MarkersMemo = useMemo(() => markers.map((m) => {
    const color = userId && +userId === +m.user_id ? '#1eba74' : '#067cd6';
    return (
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
          style={{ fontSize: 35, color, cursor: 'pointer' }}
        >
          place
        </span>
      </Marker>
    );
  }), [markers, userId]);

  useEffect(async () => {
    handleFetchMarkers();
  }, []);

  useEffect(() => {
    shouldFetchMarkers.attach(handleFetchMarkers);

    return () => shouldFetchMarkers.detach(handleFetchMarkers);
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
