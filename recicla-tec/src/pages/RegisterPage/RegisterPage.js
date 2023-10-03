import React from "react";
import "./RegisterPage.css"; // Asegúrate de tener un archivo CSS para el estilo
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import TopBar from "../../components/TopBar/TopBar";
import AppServices from "../../Services/AppServices";

const Register = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const registration = async (e) => {
    e.preventDefault();
    await AppServices.registerUser(name, email, password);
  }

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
              Registro
            </Typography>
            <form sx={{ width: "100%", mt: 2 }}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nombre"
                name="name"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Correo electrónico"
                name="email"
                autoComplete="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
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
                autoComplete="new-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{ mt: 2, bgcolor: "green", color: "white" }}
                onClick={registration}
              >
                Registrarse
              </Button>
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Register;
