import React from 'react';
import { Login, Signup } from '.';
import {
  FormWrapper, ModalClose, ModalCustom, Welcome,
} from '../../styles';

export const UserModal = ({ props }) => (
  <ModalCustom isOpen={props.modalVisible}>
    <form>
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
          ? <Signup setModalType={props.setModalType} setModalVisible={props.setModalVisible} />
          : (
            <Login
              setModalType={props.setModalType}
              setModalVisible={props.setModalVisible}
              setIsLogged={props.setIsLogged}
            />
          )}
      </FormWrapper>
    </form>
  </ModalCustom>
);
