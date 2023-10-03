import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  const appBarStyle = {
    backgroundColor: "green",
    height: 60,
  };
  const goBack = () => {
    // Utiliza window.history.back() para retroceder en la navegación
    navigate(-1);
  };

  return (
    <AppBar position="static" style={appBarStyle}>
      <Toolbar>
        <Typography variant="h6" component="div">
          ReciclaTEC
        </Typography>
        <div style={{ marginLeft: "auto" }}>
          <Button color="inherit" onClick={goBack}>Go back</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
