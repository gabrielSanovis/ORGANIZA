'use client';
import React, { useState } from 'react';
import Modal from './styled';
import * as S from './styled';

const Investment = () => {
  const [showModal, setShowModal] = useState(false);
  const [investmentData, setInvestmentData] = useState({
    type: '',
    value: '',
    institution: '',
    maturity: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInvestmentData({
      ...investmentData,
      [name]: value
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
      <div>
        <S.Title2>Organiza</S.Title2>
        <S.Title1>Investimentos</S.Title1>

        <S.Divbutton>
          <div>
            <S.ModalButton onClick={handleModalToggle}>
              Adicionar Investimento
            </S.ModalButton>
          </div>
        </S.Divbutton>

        {showModal && (
          <Modal>
            <div className="modal-content">
              <h2>Adicionar Investimento</h2>
              <form onSubmit={handleFormSubmit}>
                <div>
                  <S.Label1 htmlFor="type">Tipo:</S.Label1>
                  <input
                    type="text"
                    name="type"
                    value={investmentData.type}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <S.Label1 htmlFor="value">Valor:</S.Label1>
                  <input
                    type="text"
                    name="value"
                    value={investmentData.value}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <S.Label1 htmlFor="institution">Instituição:</S.Label1>
                  <input
                    type="text"
                    name="institution"
                    value={investmentData.institution}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <S.Label1 htmlFor="maturity">Vencimento:</S.Label1>
                  <input
                    type="text"
                    name="maturity"
                    value={investmentData.maturity}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="BotoesForm">
                  <S.Button type="submit" className="BotaoOne">
                    Enviar
                  </S.Button>
                  <S.Button type="submit" className="BotaoTwo">
                    Adicionar Outros
                  </S.Button>
                </div>
              </form>
            </div>
          </Modal>
        )}
      </div>
    </div>
  );
};

export default Investment;
