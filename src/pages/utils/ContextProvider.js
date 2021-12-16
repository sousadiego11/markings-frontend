import React, { useState } from 'react';
import { Context } from './Context';

export const ContextProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(1);
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState();

  return (
    <Context.Provider
      value={{
        modalVisible,
        modalType,
        isLogged,
        userId,
        setModalType,
        setModalVisible,
        setIsLogged,
        setUserId,
      }}
    >
      {children}
    </Context.Provider>
  );
};
