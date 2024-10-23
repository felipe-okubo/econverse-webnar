import React, { useState } from "react";
import "../../css/econverse-form.css";

import axios from "axios";

import formImage from "../assets/images/form-image.png";

const Form = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("🍕🍕🍕 ~ name:", name);
    console.log("🍕🍕🍕 ~ email:", email);

    const response = await fetch('/api/form', {  // A URL do endpoint da API
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
   });

    if (response.ok) {
      alert('Formulário enviado com sucesso!');
      setName('');
      setEmail('');
    } else {
      alert('Erro ao enviar o formulário.');
    }

  };

  return (
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

      <img className="form-image" src={formImage} alt="Imageem formulário" />
    </div>
  );
};

export default Form;
