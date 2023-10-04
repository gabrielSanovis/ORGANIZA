'use client';
import { Link } from '@chakra-ui/next-js';
import React, { useState } from 'react';
import Modal from './styled'; // Importe o componente de estilo Modal
import * as S from './styled';;

const Investment = () => {
  const [showModal, setShowModal] = useState(false);
  const [investmentData, setInvestmentData] = useState({
    type: '',
    value: '',
    institution: '',
    maturity: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInvestmentData({
      ...investmentData,
      [name]: value,
    });
  };

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(investmentData);
    setShowModal(false);
  };

  return (
    <div>
      <S.ModalButton onClick={handleModalToggle} >Adicionar Investimento</S.ModalButton>

      {showModal && (
   
        <Modal>
          <div className="modal-content">
            <h2>Adicionar Investimento</h2>
            <form onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="type">Tipo:</label>
                <input
                  type="text"
                  name="type"
                  value={investmentData.type}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="value">Valor:</label>
                <input
                  type="text"
                  name="value"
                  value={investmentData.value}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="institution">Instituição:</label>
                <input
                  type="text"
                  name="institution"
                  value={investmentData.institution}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="maturity">Vencimento:</label>
                <input
                  type="text"
                  name="maturity"
                  value={investmentData.maturity}
                  onChange={handleInputChange}
                />
              </div>
              <S.Button type="submit" bg="green 500">Enviar</S.Button>
            </form>
          </div>
        </Modal>
     
      )}
    </div>

  );
};

export default Investment;
