import React from "react";
import "./LoginPage.css";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import TopBar from "../../components/TopBar/TopBar";
import { Link } from "react-router-dom"; // Importar el componente Link

const Login = () => {
  return (
    <div>
      <TopBar />
      <div className="landing-page">
        <Container
          component="main"
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#E0E0E0",
            }}
          >
            <Typography component="h1" variant="h5" sx={{ color: "green" }}>
              Iniciar sesión
            </Typography>
            <form sx={{ width: "100%", mt: 2 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Link to="/RecyclingLog">
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, bgcolor: "green", color: "white" }}
                >
                  Iniciar sesión
                </Button>
              </Link>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Login;
