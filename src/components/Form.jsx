import React, { useState } from "react";
import "../../css/econverse-form.css";

import formImage from "../assets/images/form-image.png";
import formImageMobile from "../assets/images/form-image-mobile.png";

import PopUpForm from "../components/PopUpForm.jsx";

const Form = () => {
  const isMobile = window.innerWidth < 768;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Por favor, insira um e-mail válido.");
      return;
    }

    const response = await fetch("https://app.tarefy.com/nodeapi/event/econverse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
      setShowPopup(true);
      setName("");
      setEmail("");
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
            <label htmlFor="name">
              Nome
              <input
                type="text"
                name="name"
                value={name}
                placeholder="Seu nome completo"
                onChange={(e) => setName(e.target.value)}
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

            <button type="submit">CADASTRAR</button>
          </form>
        </div>

        <img
          className="form-image"
          src={isMobile ? formImageMobile : formImage}
          alt="Imageem formulário"
        />
      </div>
    </>
  );
};

export default Form;
