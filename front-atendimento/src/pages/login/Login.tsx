import React, { useState } from "react";
import { TextField, Button, Typography, Box, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import MuiCard from "@mui/material/Card";

// import { MultilineChartRounded } from "@mui/icons-material";

const Card = styled(MuiCard)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  maxWidth: "500px",
  boxShadow:
    "hsla(220, 30%, 5%, 0.05) 0px 5px 15px 0px, hsla(220, 25%, 10%, 0.05) 0px 15px 35px -5px",
  padding: theme.spacing(4), //nao entendi ainda como q esse theme trabalha
  margin: "auto", // está centralizando o elemento automaticamente
  // alignSelf: "center",
  // justifyContent: "center",
}));

const SignInContainer = styled(Stack)(({ theme }) => ({
  // height: "80%",
}));

interface LoginProps {
  onLogin: () => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    onLogin();
    navigate("/dashboard");
  };

  return (
    <Card variant="outlined">
      <SignInContainer direction="column" justifyContent="space-between">
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            gap: 2,
          }}
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
        </Box>
      </SignInContainer>
    </Card>
  );
};

export default Login;
