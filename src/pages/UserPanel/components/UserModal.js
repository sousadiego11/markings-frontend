import React, { useState } from 'react';
import {
  ModalCustom, FormWrapper, ModalClose, Welcome,
} from '../../styles';
import { Login, Signup } from '.';

export const UserModal = ({ props }) => {
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
    <ModalCustom isOpen={props.modalVisible}>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <ModalClose type="button" onClick={() => props.setModalVisible(false)}>
            <span
              className="material-icons-outlined"
            >
              close
            </span>
          </ModalClose>
          <Welcome>Markings</Welcome>
          {props.modalType === 1
            ? <Signup setModalType={props.setModalType} />
            : <Login setModalType={props.setModalType} />}
        </FormWrapper>
      </form>
    </ModalCustom>
  );
};
