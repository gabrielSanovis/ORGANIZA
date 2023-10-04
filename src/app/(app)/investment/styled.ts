import styled from 'styled-components';

export const Title2 = styled.h2`
  font-size: 17px;
  margin: 20px 0 0 3rem;
`;

export const Title1 = styled.h1`
  font-size: 30px;
  margin: -10px 0 0 3rem;
  font-weight: 800;
`;

export const Divbutton = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  height: 45vh; /* Define a altura da div container */
`;

export const Label1 = styled.label`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
`;

export const ModalButton = styled.button`
  background-color: #34d01a; /* Cor azul */
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Cor de destaque ao passar o cursor */
  }

  &:active {
    background-color: #003d80; /* Cor quando clicado */
  }
`;

export const Button = styled.button`
  border: none;
  width: 153px;
  margin-left: 2px;
  margin-right: 40px;
  height: 51px;
  border-radius: 4px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #000; /* Cor de destaque ao passar o cursor */
  }

  &:active {
    background-color: #003d80; /* Cor quando clicado */
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;

  .BotoesForm {
    width: 400px;
    height: 83px;
    padding: 32px 0px 0px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 18.75px;
    :hover {
      background-color: #ffffff;
    }
  }

  .modal-content {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-width: 400px;
    width: 100%;
    text-align: center;

    h2 {
      margin-bottom: 20px;
    }

    form {
      display: flex;
      flex-direction: column;

      label {
        margin-bottom: 10px;
      }

      input {
        padding: 8px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
      }

      button {
        background: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
      }
    }
  }
`;

export default Modal;
