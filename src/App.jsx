import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ClienteCadastrarView from "./componentes/cadastrar_cliente/ClienteCadastrarView";
import ClienteConsulta from "./componentes/consulta/ClienteConsulta";
import Menu from "./componentes/menu/Menu";

function App() {
  const clientes = [
    // Adicione alguns dados de exemplo para testar
    {
      id: 1,
      cpf: "123.456.789-00",
      nome: "João Silva",
      cep: "12345-678",
      endereco: "Rua A, 123",
      email: "joao@example.com",
      dataCadastro: "2023-01-01",
    },
    // Adicione mais clientes conforme necessário
  ];

  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/cadastrar" element={<ClienteCadastrarView />} />
        <Route path="/consultar" element={<ClienteConsulta />} />
      </Routes>
    </Router>
  );
}

export default App;
