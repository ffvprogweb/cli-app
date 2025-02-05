import React, { useState } from "react";
import ClienteCadastrar from "./ClienteCadastrar";
import "./ClienteCadastrarStyles.css"; // Importando o CSS

const ClienteCadastrarView = () => {
  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    const clienteData = {
      cpf,
      nome,
      cep,
      email,
    };
    console.log(JSON.stringify(clienteData, null, 2));

    e.preventDefault();
    const cliente = { cpf, nome, cep, email };
    try {
      const result = await ClienteCadastrar(cliente);

      if (result.data) {
        setMensagem("Cliente cadastrado com sucesso");
        console.log(result.data);
      } else {
        console.log(`Erro componente cadastrar view: ${result.error}`);
        setMensagem(`Erro componente cadastrar view: ${result.error}`);
      }
    } catch (error) {
      setMensagem(`Erro não esperado cadastrar view: ${error.message}`);
    }
  };
  return (
    <div className="cliente-cadastrar-view">
      <h3>Cadastrar Cliente</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf">CPF:</label>
          <input
            id="cpf"
            type="text"
            value={cpf}
            onChange={(e) => setCpf(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="nome">Nome:</label>
          <input
            id="nome"
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="cep">CEP:</label>
          <input
            id="cep"
            type="text"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">e-mail:</label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="button">
          Confirmar
        </button>
      </form>
      {/* Label para mostrar a mensagem com data-testid */}
      {mensagem && <p data-testid="mensagem">{mensagem}</p>}
    </div>
  );
};
export default ClienteCadastrarView;
