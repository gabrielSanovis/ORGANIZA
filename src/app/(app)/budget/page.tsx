//'use client';
//import React from 'react';
//import { Link } from '@chakra-ui/next-js';
//import * as S from './styled';


//const Budget = () => {
  //return (
    //<main>
      //<h1>ORGANIZA ORÇAMENTO</h1>
      //<S.TituloTexto>Deseja adiconar alguma meta?</S.TituloTexto>
      //<S.Button>Adicionar Meta</S.Button>

  
    //</main>
  //);
//};

//export default Budget;



'use client';
import { Link } from '@chakra-ui/next-js';
import React, { useState } from 'react';
import Modal from './styled'; // Importe o componente de estilo Modal
import * as S from './styled';;




const Budget = () => {
  const [showModal, setShowModal] = useState(false);
  const [FormBudget, setFormBudget] = useState({
    type: '',
    value: '',
    institution: '',
    maturity: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormBudget({
      ...FormBudget,
      [name]: value,
    });
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(FormBudget);
    setShowModal(false);
  };

  return (
    <div>
      <S.Title2>ORGANIZA</S.Title2>
      <S.Title1> ORÇAMENTO</S.Title1>
      <div>
      <S.Divbutton>
      <div>
      <S.ModalButton onClick={handleModalToggle} >Adicionar Meta</S.ModalButton>
      </div>
      </S.Divbutton>
      {showModal && (
   
        <Modal>
          <div className="modal-content">
            <h2>Adicionar Meta</h2>
            <p> Campos obrigatorios possuem o símbolo *</p>
            <S.Form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="type" className='LabelEstilo'>Categoria*</label>
                <br></br>
                <S.Teste>
                <input
                  type="text"
                  name="type" 
                  value={FormBudget.type}
                  onChange={handleInputChange}
                />
                </S.Teste>
              </div>
              <div>
                <label htmlFor="value" className='LabelEstilo'>Valor da Meta*</label>
                <br></br>
                <S.Teste>
                <input className='teste'
                  name="value"
                  value={FormBudget.value}
                  onChange={handleInputChange}
                />
                </S.Teste>
              </div>
              <div>
                <label htmlFor="institution" className='LabelEstilo'>Periodo</label>
                <br></br>
                <S.Teste>
                <input
                  type="date"
                  name="institution"
                  value={FormBudget.institution}
                  onChange={handleInputChange}
                />
                </S.Teste>
              </div>
              <div>
                <label htmlFor="maturity" className='LabelEstilo'>Descrição</label>
                <br></br>
                <S.Teste>
                <input
                  type="text"
                  name="maturity"
                  value={FormBudget.maturity}
                  onChange={handleInputChange}
                />
                </S.Teste>
              </div>
              <div className='BotoesForm'>
              <S.Button type="submit" className='BotaoOne'>Enviar</S.Button>
              <S.Button type="submit" className='BotaoTwo'>Adicionar Outros</S.Button>
              </div>
            </S.Form>
          </div>
        </Modal>
     
      )}
      </div>
    </div>

  );
};

export default Budget;