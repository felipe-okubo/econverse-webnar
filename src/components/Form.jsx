import React, { useState } from "react";
import "../../css/econverse-form.css";

import formImage from "../assets/images/form-image.png";
import formImageMobile from "../assets/images/form-image-mobile.png";

import PopUpForm from "../components/PopUpForm.jsx";

const Form = () => {
  const isMobile = window.innerWidth < 768;
  const [email, setEmail] = useState("");
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [cargo, setCargo] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleTelefoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value
      .replace(/^(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})$/, "$1-$2");
    setTelefone(formattedValue);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    const response = await fetch("/api/submitForm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ nome, email, phone: telefone, enterprise: empresa, role: cargo }),
    });

    if (response.ok) {
      setShowPopup(true);
      setNome("");
      setEmail("");
      setTelefone("");
      setEmpresa("");
      setCargo("");
    } else {
      alert("Erro ao enviar o formulário.");
    }
  };

  return (
    <>
      {showPopup && (
        <PopUpForm show={showPopup} hide={() => setShowPopup(false)} />
      )}

      <div id="form-container">
        <div className="left-side">
          <span>Inscreva-se!</span>
          <p>
            Se você não conseguir participar da live, registra-se para receber o
            material gratuitamente :)
          </p>

          <form className="form" onSubmit={handleSubmit}>
            <label htmlFor="nome">
              Nome
              <input
                type="text"
                name="nome"
                value={nome}
                placeholder="Seu nome completo"
                onChange={(e) => setNome(e.target.value)}
              />
            </label>

            <label htmlFor="email">
              E-mail
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Seu melhor e-mail"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label htmlFor="telefone">
              Telefone
              <input
                type="text"
                name="telefone"
                value={telefone}
                placeholder="Telefone"
                onChange={handleTelefoneChange}
                maxLength="15" // Limita o comprimento para o formato (XX) XXXXX-XXXX
              />
            </label>

            <label htmlFor="empresa">
              Empresa
              <input
                type="text"
                name="empresa"
                value={empresa}
                placeholder="Empresa:"
                onChange={(e) => setEmpresa(e.target.value)}
              />
            </label>

            <label htmlFor="cargo">
              Cargo
              <input
                type="text"
                name="cargo"
                value={cargo}
                placeholder="Cargo:"
                onChange={(e) => setCargo(e.target.value)}
              />
            </label>

            <button type="submit">CADASTRAR</button>
          </form>
        </div>

        <img
          className="form-image"
          src={isMobile ? formImageMobile : formImage}
          alt="Imagem formulário"
        />
      </div>
    </>
  );

};

export default Form;
