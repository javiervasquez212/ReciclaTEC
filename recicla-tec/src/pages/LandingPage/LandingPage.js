import React from "react";
import "./LandingPage.css";
import GaselLogo from "../../Img/Foto-Gasel.ico";
import MainTopBar from "../../components/MainTopBar/MainTopBar";

const LandingPage = () => {
  
  // Función para redirigir al hacer clic en el logo
  const redirectToLinktree = () => {
    window.location.href = "https://linktr.ee/GaselTEC_Ambiente";
  };
  return (
    <div>
      <MainTopBar />
      <div className="landing-page">
        {/* Usamos la etiqueta <a> para redirigir */}
        <a
          href="https://linktr.ee/GaselTEC_Ambiente"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="centered-image" onClick={redirectToLinktree}>
            <img src={GaselLogo} alt="Gasel Logo" />
          </div>
        </a>
      </div>
    </div>
  );
};

export default LandingPage;
