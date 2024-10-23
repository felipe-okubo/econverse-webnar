import React from "react";
import "../../css/econverse-home.css";

import bannerImage from "../assets/images/main-banner.jpg";
import Form from "../components/Form.jsx";
import About from "../components/About.jsx";
import Speakers from "../components/Speakers.jsx";
import Topics from "../components/Topics.jsx";
import BottomBanner from "../components/BottomBanner.jsx";

const Home = () => {
  return (
    <div id="home">

      <a href="">
        <img src={bannerImage} alt="Banner Jornada de compras" />
      </a>

      <Form />
      <About />
      <Speakers />
      <Topics />
      <BottomBanner />

    </div>
  );
};

export default Home;
