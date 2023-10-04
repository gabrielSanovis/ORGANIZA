/* // components/AddTransacaoModal.tsx

import { useState } from "react";

interface AddTransacaoModalProps {
  onClose: () => void;
  tipo: "receita" | "despesa";
}

const AddTransacaoModal: React.FC<AddTransacaoModalProps> = ({ onClose, tipo }) => {
  const [data, setData] = useState<string>("");
  const [valor, setValor] = useState<number | string>("");
  const [categoria, setCategoria] = useState<string>("");
  const [descricao, setDescricao] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou fazer o que for necessário com eles.
    // Por exemplo, você pode criar uma função para adicionar a transação no estado global ou enviar para uma API.
    // Em seguida, você pode fechar a modal chamando onClose.
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Adicionar {tipo === "receita" ? "Receita" : "Despesa"}</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="data">Data:</label>
          <input
            type="date"
            id="data"
            name="data"
            value={data}
            onChange={(e) => setData(e.target.value)}
            required
          />

          <label htmlFor="valor">Valor:</label>
          <input
            type="number"
            id="valor"
            name="valor"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            step="0.01"
            required
          />

          <label htmlFor="categoria">Categoria:</label>
          <input
            type="text"
            id="categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
            required
          />

          <label htmlFor="descricao">Descrição:</label>
          <textarea
            id="descricao"
            name="descricao"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)}
            rows={4}
            required
          />

          <button type="submit">Adicionar {tipo === "receita" ? "Receita" : "Despesa"}</button>
        </form>
      </div>
    </div>
  );
};

export default AddTransacaoModal;
 */