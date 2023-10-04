//import { color } from "framer-motion";
//import styled from "styled-components";


//export const Button = styled.button`
//text-align: center;
//margin-top: 84px;
//box-shadow: 0px 4px 0px rgba(0, 0 ,0.25);
//`;
//export const TituloTexto = styled.p`
//color: #000;
//font-size: 20px;
//font-weight: 700;
//`;
//-------------------------------------------------------------
//text-align: center;
//margin-top: 84px;


//font-size: 70px;
//color: red; 
//export const Texto = styled.div`
//text-align: center;
//margin-top: 84px; `;
//-------------------------------------------------
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
  color: #34d01a;
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
export const Title2 = styled.h2
  `font-size:17px;
  margin: 20px 0 0 3rem; `
;

export const Title1 = styled.h1
  `font-size:30px; 
  margin: -10px 0 0 3rem;
  font-weight: 800;`
;
export const Divbutton = styled.div `
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 45vh; `;

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
    width: 432px;
    height: 594.72px;
    top: 63px;
    left: 424px;
    border-radius: 16px;
    padding: 16px;
    gap: 16px;
    background:#262626; 

    //background: #fff;
    //padding: 20px;
 //border-radius: 8px;
   // box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    //max-width: 400px;
    //width: 100%;
    //text-align: center;

    .LabelEstilo{
        width: 400px;
       height: 84px;
        gap: 16px;
        column-gap: center;
        
        
    }

    h2 {
      margin-bottom: 20px;
      text-align: center;
      font-weight: 700;
      font-size: 32px;
    line-height: 37.5px;
      color: #FFFFFF;

    }
    p{
      margin-bottom: 10px;
    text-align: center;
    //width: 302px;
    height: 14px;
    font-weight:400;
    font-size: 12px;
    line-height: 14.06px;
    color: #FFFFFF;
    
    }

    form {
      display: flex;
      flex-direction: column;
      color: #FFFFFF;

      label {
        margin-bottom: 10px;
      }

      input {
        padding: 8px;
        margin-bottom: 20px;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 200px;
      }

      button {
        background: #007bff;
        color: #fff;
        border: none;
        border-radius: 4px;
        padding: 10px;
        cursor: pointer;
      }
     .BotoesForm{
    width: 400px;
    height: 83px;
    padding: 32px 0px 0px 0px;
    font-weight: 600;
    font-size: 16px;
    line-height: 18.75px;
    :hover{ background-color: #FFFFFF;}
    
     }
     .BotaoOne{
        width: 153px;
        height: 51px;
        border-radius: 16px;
        padding: 16px;
        background-color:#34D01A;
        margin-right: 20px;
        color: #262626;
     }
     .BotaoTwo{
    width: 153px;
    height: 51px;
    border-radius: 16px;
    padding: 16px;
    background-color:#34D01A;
    margin-left: 20px;
    color: #262626;
     }
    }
  }
`;

export const Teste = styled.div `
  color: #000;
`;


export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Modal;
