import React, { useState } from 'react';
import {
  FormContainer, FormWrapper, ModalClose, Welcome,
} from '../../styles';
import { Login, Signup } from '.';

export const UserModal = ({ props }) => {
  const {
    modalType, modalVisible, setModalType, setModalVisible,
  } = props;
  const [userData, setUserData] = useState();
  console.log('🚀 ~ file: UserModal.js ~ line 12 ~ UserModal ~ userData', userData);

  const handleSubmit = (e) => {
    e.preventDefault();

    setUserData({
      nome: e.target.nome?.value,
      email: e.target.email?.value,
      senha: e.target.senha?.value,
      action: e.target.action?.value,
    });
  };

  return (
    <FormContainer isOpen={modalVisible}>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <ModalClose type="button" onClick={() => setModalVisible(false)}>
            <span
              className="material-icons-outlined"
            >
              close
            </span>
          </ModalClose>
          <Welcome>Markings</Welcome>
          {modalType === 1
            ? <Signup setModalType={setModalType} />
            : <Login setModalType={setModalType} />}
        </FormWrapper>
      </form>
    </FormContainer>
  );
};
