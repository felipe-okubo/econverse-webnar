import React from "react";
import "../../css/econverse-header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="https://www.econverse.com.br/">
        <img
          src="https://www.econverse.com.br/wp-content/uploads/2024/01/Logo-para-fundo-claro.png"
          alt="Logo Econverse"
        />
      </a>

      <nav className="menu">
        <ul>
          <a href="https://www.econverse.com.br/">Home</a>

          <a href="https://www.econverse.com.br/servicos-e-solucoes/">
            Serviços
          </a>

          <a href="https://www.econverse.com.br/cases/">Cases</a>

          <a href="https://www.econverse.com.br/app-commerce/">App Commerce</a>

          <a href="https://www.econverse.com.br/sobre-nos/">Sobre nós</a>

          <a href="https://www.econverse.com.br/blog/">Blog</a>

          <a href="https://www.econverse.com.br/contato/">Contato</a>
        </ul>
      </nav>

      <a className="contact-button" href="/">
        Fale Conosco
      </a>
    </header>
  );
};

export default Header;
