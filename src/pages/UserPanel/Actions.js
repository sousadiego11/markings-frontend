import axios from 'axios';
import React, {
  useCallback, useContext, useEffect,
} from 'react';
import { Loggout, OpenModal } from '../styles/index';
import { authConfig } from '../utils';
import { Context } from '../utils/Context';
import { UserModal } from './components/UserModal';

export const Actions = () => {
  const {
    setModalVisible, setModalType, setIsLogged, isLogged,
  } = useContext(Context);

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
      <UserModal />
    </>
  );
};
