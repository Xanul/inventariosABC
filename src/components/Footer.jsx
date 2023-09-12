import { Container, Typography, Paper, Box } from '@mui/material';

export const Footer = () => {
    return (
    <Paper
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '20px', // Ajusta el espaciado según tus necesidades
        backgroundColor: '#f0f0f0', // Color de fondo del footer
        zIndex: 1000, // Asegura que esté sobre otros elementos
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" color="textSecondary" align="center">
          © {new Date().getFullYear()} Programa desarrollado por Rodrigo Rivas para investigacion de operaciones
        </Typography>
      </Container>
    </Paper>
      );
}
