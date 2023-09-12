import React, { useState } from "react";
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
} from "@mui/material";
import { tableData } from "../database/dataExample";

export const Inputs = () => {

  const [registros, setRegistros] = useState([]);
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [precio, setPrecio] = useState("");
  const [finalData, setFinalData] = useState({});
  const [primerIngreso, setPrimerIngreso] = useState(false)


  const handleSubmit = (event) => {
    event.preventDefault();

    const item = {
      nombre: nombre,
      cantidad: cantidad,
      precio: precio,
    };

    setRegistros([...registros, item]);
    setNombre("");
    setCantidad("");
    setPrecio("");
  };

  

  const handleSort = () => {
    const sortedRegistros = [...registros].sort((a, b) => b.precio - a.precio);
    
    let productosA = 0;
    let productosASuma = 0;

    let productosB = 0;
    let productosBSuma = 0;

    let productosC = 0;
    let productosCSuma = 0;

    const classifiedRegistros = sortedRegistros.map((item, index) => {
      let clasificacion = "";
      if (index < Math.round(sortedRegistros.length * 0.15)) {
        clasificacion = "A";
        productosA += 1;
        productosASuma += (item.cantidad * item.precio);
      } else if (index < Math.round(sortedRegistros.length * 0.35)) {
        clasificacion = "B";
        productosB += 1;
        productosBSuma += (item.cantidad * item.precio);
      } else {
        clasificacion = "C";
        productosC += 1;
        productosCSuma += (item.cantidad * item.precio);
      }
      return { ...item, clasificacion};
    });    

    let productosAporc = ((productosA / registros.length) * 100).toFixed(2);
    let productosBporc = ((productosB / registros.length) * 100).toFixed(2);
    let productosCporc = ((productosC / registros.length) * 100).toFixed(2);

    setRegistros(classifiedRegistros);
    let sumaFinal = (productosASuma + productosBSuma + productosCSuma)

    setFinalData({
      productosA,
      productosB,
      productosC,
      productosAporc,
      productosBporc,
      productosCporc,
      productosASuma,
      productosBSuma,
      productosCSuma,
      sumaFinal
    })

    setPrimerIngreso(true);

  };


  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Box sx={{width:800, margin: "0 20px" }}>
        <Typography variant="h4" component="h4" m={2} color='primary'>
          Inventarios ABC
        </Typography>
        <Typography variant="body1" component="p" m={2} textAlign='justify'>
        "¡Bienvenido al Sistema de Inventarios ABC! Esta herramienta está diseñada para simplificar y optimizar la gestión de inventarios de tu empresa. Utiliza el método ABC, una estrategia de clasificación que identifica y prioriza los productos más importantes para tu negocio. 
        </Typography>
        <Typography variant="h5" component="p" m={2}>
        Ingreso de productos
        </Typography>
        <Grid
          container
          spacing={2}
          sx={{ padding: "0, 50", alignItems: "center" }}
        >
          <Grid item xs={12} md={6}>
            <TextField
              label="Nombre de producto"
              variant="filled"
              fullWidth
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Cantidad"
              type="number"
              variant="filled"
              value={cantidad}
              fullWidth
              onChange={(e) => setCantidad(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <TextField
              label="Precio"
              type="number"
              variant="filled"
              value={precio}
              fullWidth
              onChange={(e) => setPrecio(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button variant="contained" onClick={handleSubmit}>
              Agregar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Button
        variant="contained"
        onClick={handleSort}
        sx={{ mt: 2 }}
        color="success"
      >
        Ordenar y Clasificar
      </Button>
      {
        primerIngreso ? (
      <Box width={800} sx={{ mb: 2 }}>
        <Typography variant="h5" component="p" m={2}>
          Resumen de inventario
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center">
                  <b>Tipo</b>
                </TableCell>
                <TableCell align="center">
                  <b>Productos</b>
                </TableCell>
                <TableCell align="center">
                  <b>Porcentaje</b>
                </TableCell>
                <TableCell align="center">
                  <b>Inversion</b>
                </TableCell>
                <TableCell align="center">
                  <b>Porcentaje</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            <TableRow>
                <TableCell align="center">A</TableCell>
                <TableCell align="center">{finalData.productosA}</TableCell>
                <TableCell align="center">{finalData.productosAporc + " %"}</TableCell>
                <TableCell align="center">{"$ " + finalData.productosASuma}</TableCell>
                <TableCell align="center">{ ((finalData.productosASuma / finalData.sumaFinal) * 100).toFixed(2) + " %" }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">B</TableCell>
                <TableCell align="center">{finalData.productosB}</TableCell>
                <TableCell align="center">{finalData.productosBporc + " %"}</TableCell>
                <TableCell align="center">{"$ " + finalData.productosBSuma}</TableCell>
                <TableCell align="center">{ ((finalData.productosBSuma / finalData.sumaFinal) * 100).toFixed(2) + " %" }</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center">C</TableCell>
                <TableCell align="center">{finalData.productosC}</TableCell>
                <TableCell align="center">{finalData.productosCporc + " %" }</TableCell>
                <TableCell align="center">{"$ " + finalData.productosCSuma}</TableCell>
                <TableCell align="center">{ ((finalData.productosCSuma / finalData.sumaFinal) * 100).toFixed(2) + " %"}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
        ) : (
          <Typography></Typography>
        )
      }
      <Box width={800} sx={{ mb: 13 }}>
        <Typography variant="h5" component="p" mt={2}>
          Tabla de clasificacion
        </Typography>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Nombre</b>
                </TableCell>
                <TableCell align="center">
                  <b>Cantidad</b>
                </TableCell>
                <TableCell align="center">
                  <b>Precio</b>
                </TableCell>
                <TableCell align="center">
                  <b>Clasificación</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {registros.map((row) => (
                <TableRow key={row.nombre}>
                  <TableCell>{row.nombre}</TableCell>
                  <TableCell align="center">{row.cantidad}</TableCell>
                  <TableCell align="center">{row.precio}</TableCell>
                  <TableCell align="center">{row.clasificacion}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};
