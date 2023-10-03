import React from "react";
import "./LoginPage.css";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import TopBar from "../../components/TopBar/TopBar";
import { Link } from "react-router-dom"; // Importar el componente Link
import AppServices from "../../Services/AppServices";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const users = await AppServices.signIn(email, password);
    if (users) {
      navigate("/RecyclingLog");
    } else {
      alert("Usuario no encontrado");
    }
  };

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
                autoComplete="current-password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              {/* <Link to="/RecyclingLog"> */}
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  sx={{ mt: 2, bgcolor: "green", color: "white" }}
                  onClick={handleSubmit}
                >
                  Iniciar sesión
                </Button>
              {/* </Link> */}
            </form>
          </Paper>
        </Container>
      </div>
    </div>
  );
};

export default Login;
