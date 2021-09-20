import React, { useCallback, useState } from 'react';
import { OpenModal } from '../styles/index';
import { UserModal } from './components/UserModal';

export const Actions = () => {
  const [modalVisible, setModalVisible] = useState(true);
  const [modalType, setModalType] = useState(1);

  const openModal = useCallback((newModal) => {
    setModalVisible(true);
    setModalType(newModal);
  }, []);

  return (
    <>
      <OpenModal onClick={() => openModal(1)}>REGISTRAR</OpenModal>
      <OpenModal onClick={() => openModal(2)}>LOGIN</OpenModal>
      <UserModal props={{
        modalVisible, setModalVisible, modalType, setModalType,
      }}
      />
    </>
  );
};
