import styled from 'styled-components';
import Modal from 'react-modal';

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

  .material-icons, .material-icons-outlined {
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

export const OpenModal = styled.button`
  height: 35px;
  width: 100px;

  margin: 12px 0 0 12px;

  border: none;
  border-radius: 24px;

  font-weight: 700;
  /* font-size: 12px; */

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

export const Loggout = styled.button`
  height: 35px;
  width: 100px;

  margin: 12px 0 0 12px;

  border: none;
  border-radius: 24px;

  font-weight: 700;
  /* font-size: 12px; */

  background-image: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  background-size: 200%;
  background-position: 0%;

  color: #FFF;

  transition: 0.4s;
  cursor: pointer;

  &:hover {
    background-position: 100% 0%;
  }
`;

export const LoginLink = styled.a`
  align-self: center;
  margin-top: 6px;
  cursor: pointer;
  text-decoration: underline;

  font-size: 14px;

  color:  rgba(73,177,231,1);
`;

export const ErrorMessage = styled.p`
  align-self: center;
  margin-top: 6px;
  margin-bottom: 0;

  font-size: 14px;

  color:  rgba(253,29,29,1);
`;

export const Welcome = styled.h1`
  align-self: center;
  margin: 6px 0 6px 0;
  color: rgba(73,177,231,1);
`;

export const FormWrapper = styled.div`
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;

  box-sizing: border-box;
  width: 60%;
`;

export const ModalClose = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  padding: 0;

  color: #4f5259;
  background: none;

  border: none;
  cursor: pointer;
`;

export const ModalCustom = styled(Modal)`
  background: #FFf;

  padding-bottom: 10px;
  margin: 80px 35% 0 35%;
  position: relative;

  border-radius: 8px;
  outline: none;
  box-shadow: 5px 6px 15px 0px rgba(60,60,60,0.24);

  @media(max-width: 800px) {
    margin: 80px 5% 0 5%;
  }
`;
