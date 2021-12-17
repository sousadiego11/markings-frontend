import React, { useContext } from 'react';
import { Marker, Popup } from 'react-map-gl';
import { FormItem, Submit } from '../styles';
import { Context } from '../utils/Context';

export const MarkerCadastro = ({
  marker = {},
  setPopupDesc = () => {},
  setShowMarker = () => {},
  handleSaveMarker = () => {},
}) => {
  const { userId } = useContext(Context);
  const color = userId ? '#1eba74' : '#067cd6';
  return (
    <>
      <Marker
        latitude={marker.lat}
        longitude={marker.long}
        offsetLeft={-23}
        offsetTop={-36}
      >
        <span className="material-icons" style={{ fontSize: 35, color }}>
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
  );
};
