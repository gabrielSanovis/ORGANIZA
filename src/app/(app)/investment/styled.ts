import styled from 'styled-components';



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


const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

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
