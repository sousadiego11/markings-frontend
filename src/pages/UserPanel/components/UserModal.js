import React from 'react';
import {
  FormContainer, FormWrapper, ModalClose, Welcome,
} from '../../styles';
import { Login, Signup } from '.';

export const UserModal = ({ props }) => {
  const {
    modalType, modalVisible, setModalType, setModalVisible,
  } = props;
  const handleSubmit = (e) => {
    e.preventDefault();

    const credenciais = {
      nome: e.target[0].value,
      email: e.target[1].value,
      senha: e.target[2].value,
    };
    console.log('🚀 ~ file: Login.js ~ line 16 ~ submit ~ credenciais', credenciais);
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
