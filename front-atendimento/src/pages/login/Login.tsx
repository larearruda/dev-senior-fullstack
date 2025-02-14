import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    navigate('/tickets');
    // Aqui você pode adicionar a lógica de autenticação, como chamadas API, etc.
  };

  return (
    
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 2,
          border: '1px solid #ddd',
          borderRadius: 1,
          boxShadow: 3,
          justifyContent: 'center',
          position: 'absolute', // Usa position absoluta para centralizar
          top: '50%', // Posiciona no meio da tela
          left: '50%', // Posiciona no meio da tela
          transform: 'translate(-50%, -50%)', // Ajusta para garantir que a caixa esteja perfeitamente centralizada
        }}
      >
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            required
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
        </form>
      </Box>
  );
};

export default Login;
