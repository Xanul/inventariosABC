import React, { useState } from 'react';
import {
  TextField,
  Grid,
  Typography,
  Box,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  Paper,
  TableRow,
  TableCell,
} from '@mui/material';

export const Inputs = () => {
  const [registros, setRegistros] = useState([]);
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precio, setPrecio] = useState('');

  const handleSortingAndClassifying = () => {
    const sortedRegistros = [...registros].sort((a, b) => b.precio - a.precio);
    const classifiedRegistros = sortedRegistros.map((item, index) => {
      let clasificacion = '';
      if (index < Math.floor(sortedRegistros.length * 0.15)) {
        clasificacion = 'A';
      } else if (index < Math.floor(sortedRegistros.length * 0.3)) {
        clasificacion = 'B';
      } else {
        clasificacion = 'C';
      }
      return { ...item, clasificacion };
    });

    setRegistros(classifiedRegistros);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      nombre: nombre,
      cantidad: cantidad,
      precio: parseFloat(precio), // Convierte el precio a un número
    };

    setRegistros([...registros, item]);
    setNombre('');
    setCantidad('');
    setPrecio('');
  };

  console.log(registros);

  return (
    <Box
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      <Box sx={{ width: 800, padding: '10px 20px' }}>
        <Typography variant='h4' component='h4' mb={2}>
          Ingreso de elementos
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label='Nombre de producto'
              variant='filled'
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label='Cantidad'
              type='number'
              variant='filled'
              value={cantidad}
              fullWidth
              onChange={(e) => setCantidad(e.target.value)}
            />
          </Grid>
          <Grid item xs={2}>
            <TextField
              label='Precio'
              type='number'
              variant='filled'
              value={precio}
              fullWidth
              onChange={(e) => setPrecio(e.target.value)}
            />
          </Grid>
          <Grid item xs={2} display='flex'>
            <Button variant='contained' onClick={handleSubmit}>
              Agregar
            </Button>
          </Grid>
        </Grid>
        <Button variant='contained' onClick={handleSortingAndClassifying}>
          Ordenar y Clasificar
        </Button>
      </Box>
      <Box sx={{ width: 800, padding: '10px 20px', mt: 5 }}>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Nombre</TableCell>
                <TableCell>Cantidad</TableCell>
                <TableCell>Precio</TableCell>
                <TableCell>Clasificacion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registros.map((row) => (
                <TableRow key={row.nombre}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell>{row.cantidad}</TableCell>
                  <TableCell>{row.precio}</TableCell>
                  <TableCell>{row.clasificacion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
