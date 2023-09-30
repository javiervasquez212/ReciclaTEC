import React from "react";
import "./LandingPage.css";
import GaselLogo from "../../Img/Foto-Gasel.ico";
import MainTopBar from "../../components/MainTopBar/MainTopBar";

const LandingPage = () => {
  return (
    <div>
      <MainTopBar />
      <div className="landing-page">
        <div className="centered-image">
          <img src={GaselLogo} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
