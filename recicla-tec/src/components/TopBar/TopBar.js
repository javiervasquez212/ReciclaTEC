import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom"; // Importar el componente Link
import AppServices from "../../Services/AppServices";

function TopBar() {
  const usuarios = async (e) => {
    const users = await AppServices.getUsers();
    alert(users);
  }
  const appBarStyle = {
    backgroundColor: "green",
    height: 60,
  };
  const linkStyle = {
    textDecoration: "none",
    color: "white", // Establecer el color del texto en blanco
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <Typography variant="h6" component="div">
          ReciclaTEC
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Link to="/" style={linkStyle}>
            <Button color="inherit" onClick={usuarios}>Go back</Button>
          </Link>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
