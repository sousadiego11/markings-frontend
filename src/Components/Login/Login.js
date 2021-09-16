import React from 'react';
import {
  FormWrapper, Welcome, FormItem, Submit, LoginLink, FormContainer,
} from './styles';

export const Login = () => (
  <FormContainer>
    <form>
      <FormWrapper>
        <Welcome>Seja bem vindo!</Welcome>
        <FormItem>
          <span className="material-icons">
            person
          </span>
          <input className="form-input" name="nome" type="text" placeholder="Nome" />
        </FormItem>
        <FormItem>
          <span className="material-icons">
            email
          </span>
          <input className="form-input" name="email" type="text" placeholder="Email" />
        </FormItem>
        <FormItem>
          <span className="material-icons">
            lock
          </span>
          <input className="form-input" name="senha" type="email" placeholder="Senha" />
        </FormItem>
        <Submit type="submit">REGISTRAR-SE</Submit>
        <LoginLink>Já possui uma conta?</LoginLink>
      </FormWrapper>
    </form>
  </FormContainer>
);
