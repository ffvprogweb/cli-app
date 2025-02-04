import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css"; // Importa o arquivo de estilos
const Menu = () => {
  return (
    <div className="menu-container">
      <h3>Gerenciamento de Clientes</h3>
      <nav>
        <ul>
          <li>
            <Link to="/cadastrar">Cadastrar Cliente</Link>
          </li>
          <li>
            <Link to="/consultar">Consultar Clientes</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
