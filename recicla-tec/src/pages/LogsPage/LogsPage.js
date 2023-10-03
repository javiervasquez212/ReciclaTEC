import React, { useState } from "react";
import "./LogsPage.css";
import TopBar from "../../components/TopBar/TopBar";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AppServices from "../../Services/AppServices";

const RecyclingLog = () => {
  const [recycledItems, setRecycledItems] = useState([]);
  const [newItem, setNewItem] = useState({
    kg: 0,
    date: "",
    material: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const handleAddItem = async (e) => {
    e.preventDefault();
    // if (newItem.quantity && newItem.date && newItem.material) {
    //   setRecycledItems([...recycledItems, newItem]);
    //   setNewItem({ quantity: 0 + "", date: "", material: "" });
    // }
    const item = await AppServices.addRecycledItem(newItem);
  };

  return (
    <div>
      <TopBar />
      <div className="landing-page">
        <div className="recycling-log">
          <Container
            component="main"
            maxWidth="md"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginTop: 2,
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
                Registro de Reciclaje
              </Typography>
              <form sx={{ width: "100%", mt: 2 }}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  id="quantity"
                  label="Cantidad (KG)"
                  name="quantity"
                  value={newItem.quantity}
                  onChange={handleInputChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="date"
                  id="date"
                  name="date"
                  value={newItem.date}
                  onChange={handleInputChange}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="material"
                  label="Material Reciclado"
                  name="material"
                  value={newItem.material}
                  onChange={handleInputChange}
                />
                <Button
                  type="button"
                  fullWidth
                  variant="contained"
                  color="primary"
                  onClick={handleAddItem}
                  sx={{ mt: 2, bgcolor: "green", color: "white" }}
                >
                  Agregar Registro
                </Button>
              </form>
            </Paper>
            <TableContainer
              component={Paper}
              sx={{ marginTop: 3, bgcolor: "#E0E0E0" }}
            >
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ textAlign: "center" }}>Cantidad</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>Fecha</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      Material Reciclado
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {recycledItems.map((item, index) => (
                    <TableRow key={index}>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.quantity}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.date}
                      </TableCell>
                      <TableCell sx={{ textAlign: "center" }}>
                        {item.material}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default RecyclingLog;
