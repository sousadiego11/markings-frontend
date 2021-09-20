import React from 'react';
import { FormItem, LoginLink, Submit } from '../../styles';

export const Login = ({ setModalType }) => (
  <>
    <FormItem>
      <span className="material-icons">
        email
      </span>
      <input className="form-input" name="email" type="email" placeholder="Email" />
    </FormItem>
    <FormItem>
      <span className="material-icons">
        lock
      </span>
      <input className="form-input" name="senha" type="password" placeholder="Senha" />
    </FormItem>
    <Submit type="submit">LOGIN</Submit>
    <LoginLink onClick={() => setModalType(1)}>Não é cadastrado?</LoginLink>
  </>
);
