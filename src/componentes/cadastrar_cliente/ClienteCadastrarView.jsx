import React, { useState } from "react";
import "./ClienteCadastrarStyles.css";

function ClienteCadastrarView() {
  const [cpf, setCpf] = useState("");
  const [nome, setNome] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");

  const handleConfirm = () => {
    const clienteData = {
      cpf,
      nome,
      cep,
      email,
    };
    console.log(JSON.stringify(clienteData, null, 2));
  };

  return (
    <div className="cliente-cadastrar-view">
      <h1 className="title">Cadastrar Cliente</h1>
      <form>
        <div>
          <label>CPF:</label>
          <input
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
          />
        </div>
        <div>
          <label>Nome:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div>
          <label>CEP:</label>
          <input
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="button" className="button" onClick={handleConfirm}>
          Confirmar
        </button>
      </form>
    </div>
  );
}

export default ClienteCadastrarView;
