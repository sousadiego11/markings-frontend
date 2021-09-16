import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormItem = styled.div`
    margin: 8px 0 8px 0;
    height: 30px;
    padding: 6px 4px 6px 4px;

    background: #e9e9e9;

    display: flex;

    border-radius: 6px;

  .form-input {
    border: none;

    outline: none;

    padding: 0px 6px 0px 6px;
    width: 100%;

    background: #e9e9e9;
    color: #8a909a;
  }

  .material-icons {
    color: #8a909a;
  }
`;

export const Submit = styled.button`
  height: 36px;
  width: 160px;

  margin-top: 8px;
  align-self: center;

  border: none;
  border-radius: 24px;

  font-weight: 700;

  background-image: linear-gradient(90deg, rgba(15,63,156,1) 0%, rgba(73,177,231,1) 50%, rgba(206,58,255,1) 84%);
  background-size: 200%;
  background-position: 0%;

  color: #FFF;

  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-position: 100% 0%;
  }
`;

export const LoginLink = styled(Link)`
  align-self: center;
  margin-top: 6px;

  font-size: 14px;

  color: #4f5259;
`;

export const Welcome = styled.h1`
  align-self: center;
  margin: 6px 0 6px 0;
  color: #4f5259;
`;

export const FormWrapper = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
  width: 60%;
`;

export const FormContainer = styled.div`
  background: white;

  margin: 80px auto 80px auto;

  width: 500px;
  height: 300px;

  border-radius: 8px;
`;
