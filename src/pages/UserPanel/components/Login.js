/* eslint-disable no-alert */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import {
  ErrorMessage, FormItem, LoginLink, Submit,
} from '../../styles';
import { Context } from '../../utils/Context';

export const Login = () => {
  const [userData, setUserData] = useState({ email: null, password: null });
  const [error, setError] = useState();
  const {
    setModalType, setModalVisible, setIsLogged, setUserId,
  } = useContext(Context);

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post(`${process.env.REACT_APP_API_URL}/users/login`, userData)
      .then((res) => {
        const { token, id } = res.data;
        window.alert('Autenticado com sucesso!');
        window.localStorage.setItem('access_token', token);

        setModalVisible(false);
        setIsLogged(true);
        setUserId(id);
        setError(undefined);
      }).catch((err) => {
        setError(err.response.data.error);
      });
  };

  const handleDataChange = (e, target) => {
    const newValue = e.target.value.trim() === '' ? null : e.target.value.trim();
    setUserData((prev) => ({ ...prev, [target]: newValue }));
  };

  return (
    <>
      <FormItem>
        <span className="material-icons">
          email
        </span>
        <input
          onChange={(e) => handleDataChange(e, 'email')}
          required
          className="form-input"
          name="email"
          type="email"
          placeholder="Email"
        />
      </FormItem>
      <FormItem>
        <span className="material-icons">
          lock
        </span>
        <input
          onChange={(e) => handleDataChange(e, 'password')}
          required
          className="form-input"
          name="password"
          type="password"
          placeholder="Senha"
        />
      </FormItem>
      <Submit name="action" onClick={handleLogin} value={2}>LOGIN</Submit>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <LoginLink onClick={() => setModalType(1)}>Não é cadastrado?</LoginLink>
    </>
  );
};
