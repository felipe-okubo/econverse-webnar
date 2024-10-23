import React, { useState } from "react";
import "../../css/econverse-popUpForm.css";
import checkIcon from "../assets/images/check-circle.png";

const PopUpForm = () => {
  const [showPopup, setShowPopup] = useState(true);

  return (
    showPopup && (
      <div id="popup-container">
        <div className="overlay" onClick={() => setShowPopup(false)}> </div>
  
        <div className="form-container">
          <img src={checkIcon} alt="Check Icon" />
  
          <span>Inscrição realizada!</span>
  
          <p>
            Obrigada por se inscrever! Em breve, você receberá mais informações
            sobre o evento. Fique de olho na sua caixa de e-mail. Até logo! 
            <br/><br/>Equipe Econverse
          </p>
  
          <button onClick={() => setShowPopup(false)} >OK!</button>
        </div>
      </div>
    )
  );

};

export default PopUpForm;
