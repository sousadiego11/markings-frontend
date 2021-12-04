import React, { useState } from 'react';
import { Context } from './Context';

export const ContextProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState(1);
  const [isLogged, setIsLogged] = useState(false);

  return (
    <Context.Provider value={{
      modalVisible, modalType, isLogged, setModalType, setModalVisible, setIsLogged,
    }}
    >
      {children}
    </Context.Provider>
  );
};
