import React from 'react';
import {
  FormContainer, FormItem, FormWrapper, LoginLink, Submit, Welcome,
} from '../styles';

export const Signup = () => {
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
            <input className="form-input" name="email" type="email" placeholder="Email" />
          </FormItem>
          <FormItem>
            <span className="material-icons">
              lock
            </span>
            <input className="form-input" name="senha" type="password" placeholder="Senha" />
          </FormItem>
          <Submit type="submit">REGISTRAR-SE</Submit>
          <LoginLink to="/login">Já possui uma conta?</LoginLink>
        </FormWrapper>
      </form>
    </FormContainer>
  );
};
