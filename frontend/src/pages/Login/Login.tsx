import * as React from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { requestPost } from "../../utils/Request";
import { GlobalContext } from "../../context/Global";

export default function SignIn() {
  const {
    login: { login },
  } = React.useContext(GlobalContext);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const userLogin = {
      username: data.get("username"),
      password: data.get("password"),
    };

    const response = await requestPost("/api/v1/token/", userLogin);
    if (!response) alert("Usuário ou senha inválidos");

    const userData = {
      name: "João Pster",
      username: "joaopster",
      email: "joaopsterdev@gmail.com",
      token: response.access,
    };

    await login(userData);
    navigate("/admin");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "primary" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Painel Administrativo
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Nome de Usuário"
            placeholder="joaopster"
            name="username"
            autoComplete="username"
            color="secondary"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            placeholder="%joaopster2022%"
            type="password"
            id="password"
            autoComplete="current-password"
            color="secondary"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="secondary" />}
            label="Lembrar credenciais"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            color="secondary"
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="http://localhost:3000/login"
                variant="body2"
                color="secondary"
              >
                Perdeu a Senha?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="http://localhost:3000/login"
                variant="body2"
                color="secondary"
              >
                Não tem um conta? Registre-se
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
