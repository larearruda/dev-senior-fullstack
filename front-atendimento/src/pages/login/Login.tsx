import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TextField,
  Button,
  Typography,
  Box,
  Stack,
  Divider,
  Checkbox,
  FormControlLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";
import { StateIterface } from "../../store/store";
import { loginAction } from "../../store/auth";
import { User } from "../../model/user";
import {
  FacebookIcon,
  GoogleIcon,
} from "../../components/custom-icons/CustomIcon";

const Card = styled(MuiCard)(({ theme }) => ({
  // display: "flex",
  flexDirection: "column",
  maxWidth: "400px",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  padding: theme.spacing(4), //nao entendi ainda como q esse theme trabalha
  margin: "auto", // centralizando horizontalmente o elemento automaticamente
  marginTop: "150px", // coloquei fixo pq nao consegui ajustar automaticamente ¯\_(ツ)_/¯
  alignSelf: "center",
  justifyContent: "center",
}));

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const userAuth = useSelector((state: StateIterface) => state.auth.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    //TODO: verificar validade do usuário na API
    const loggedUser: User = {
      id: 999, // ou algum ID mock
      uuid: "123-456", // gera um UUID se quiser
      username: email,
    };
    dispatch(loginAction(loggedUser));
    onLogin();
    navigate("/dashboard");
  };

  return (
    <Card variant="outlined">
      {/* <SignInContainer direction="column" justifyContent="space-between"> */}
      <Typography variant="h5" gutterBottom>
        Login
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        noValidate
        // sx={{
        //   display: "flex",
        //   flexDirection: "column",
        //   width: "100%",
        //   gap: 2,
        // }}
      >
        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          required
          autoFocus
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          margin="normal"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Acessar
        </Button>
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Lembrar de mim"
        />
        <Box
          sx={{
            padding: "20px",
          }}
        >
          <Divider>or</Divider>
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert("Sign in with Google")}
          startIcon={<GoogleIcon />}
        >
          Acessar com Google
        </Button>
        <Button
          fullWidth
          variant="outlined"
          onClick={() => alert("Sign in with Facebook")}
          startIcon={<FacebookIcon />}
        >
          Acessar com Facebook
        </Button>
      </Box>
      {/* </SignInContainer> */}
    </Card>
  );
};

export default Login;
