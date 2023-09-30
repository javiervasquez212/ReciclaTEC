import React from "react";
import "./LandingPage.css";
import "../../components/TopBar/TopBar";
import TopBar from "../../components/TopBar/TopBar";
import GaselLogo from "../../Img/Foto-Gasel.ico";

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <div className="landing-page">
        <div className="centered-image">
          <img src={GaselLogo} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
