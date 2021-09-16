import React from 'react';
import {
  FormContainer, FormItem, FormWrapper, LoginLink, Submit, Welcome,
} from '../styles';

export const Login = () => {
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
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormWrapper>
          <Welcome>Olá novamente!</Welcome>
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
          <LoginLink to="/">Não é cadastrado?</LoginLink>
        </FormWrapper>
      </form>
    </FormContainer>
  );
};
