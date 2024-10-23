import React, { useState } from "react";
import "../../css/econverse-form.css";
import "../../css/econverse-popUpForm.css";

import formImage from "../assets/images/form-image.png";
import formImageMobile from "../assets/images/form-image-mobile.png";

import PopUpForm from "../components/PopUpForm.jsx";

const Form = () => {
  const isMobile = window.innerWidth < 768;
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [visible, setShowPopup] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://formspree.io/f/mjkvkpyg', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      },
      body: JSON.stringify({ name, email }),
   });

    if (response.ok) {
      setShowPopup(true);
    } else {
      alert('Erro ao enviar o formulário.');
    }

  };

  return (
    <div id="form-container">

      {visible ? <PopUpForm /> : null}

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
              placeholder="Seu nome completo"
              onChange={(e) => setName(e.target.value)}
            />
          </label>

          <label htmlFor="email">
            E-mail
            <input
              type="email"
              name="email"
              placeholder="Seu melhor e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <button type="submit">CADASTRAR</button>
        </form>
      </div>

      <img className="form-image" src={isMobile ? formImageMobile : formImage} alt="Imageem formulário" />
    </div>
  );
};

export default Form;
