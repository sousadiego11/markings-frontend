import React, { useContext } from 'react';
import { Login, Signup } from '.';
import {
  FormWrapper, ModalClose, ModalCustom, Welcome,
} from '../../styles';
import { Context } from '../../utils/Context';

export const UserModal = () => {
  const { modalVisible, setModalVisible, modalType } = useContext(Context);
  return (
    <ModalCustom isOpen={modalVisible}>
      <form>
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
            ? (
              <Signup />
            )
            : (
              <Login />
            )}
        </FormWrapper>
      </form>
    </ModalCustom>
  );
};
