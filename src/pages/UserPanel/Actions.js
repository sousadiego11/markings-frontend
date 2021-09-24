import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { Loggout, OpenModal } from '../styles/index';
import { UserModal } from './components/UserModal';
import { authConfig } from '../utils';

export const Actions = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(1);
  const [isLogged, setIsLogged] = useState(false);

  const openModal = useCallback((newModal) => {
    setModalVisible(true);
    setModalType(newModal);
  }, []);

  const handleLogout = () => {
    window.localStorage.removeItem('access_token');
    setIsLogged(false);
  };

  const checkLoggedUser = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/users/auth`, null, authConfig);
      setIsLogged(true);
    } catch (error) {
      setIsLogged(false);
      setModalVisible(true);
    }
  };

  useEffect(() => {
    checkLoggedUser();
  }, []);

  return (
    <>
      {isLogged
        ? <Loggout onClick={handleLogout}>LOGOUT</Loggout>
        : (
          <>
            <OpenModal onClick={() => openModal(1)}>REGISTRAR</OpenModal>
            <OpenModal onClick={() => openModal(2)}>LOGIN</OpenModal>
          </>
        )}
      <UserModal props={{
        modalVisible, setModalVisible, modalType, setModalType, setIsLogged,
      }}
      />
    </>
  );
};
