import React, { useContext } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

import { requestPost } from "../../../utils/Request";
import { GlobalContext } from "../../../context/Global";

interface INewCarProps {
  open: boolean;
  handleClose: () => void;
}

function NewCar({ open, handleClose }: INewCarProps) {
  const {
    login: { logout },
  } = useContext(GlobalContext);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const carRawData = {
      nome: data.get("nome"),
      marca: data.get("marca"),
      modelo: data.get("modelo"),
      foto_url: data.get("foto"),
      ano: Number(data.get("ano")),
      localizacao: data.get("localizacao"),
      quilometragem: Number(data.get("quilometragem")),
      valor_original: Number(data.get("valor_original")),
    };

    const response = await requestPost("/api/v1/carros", carRawData);
    if (!response) {
      alert("Erro ao cadastrar carro, deslogando...");
      await logout();
    }
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <DialogTitle>Cadastrar novo carro</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: ".7rem" }}
        >
          <TextField
            required
            autoFocus
            fullWidth
            id="nome"
            name="nome"
            label="Nome"
            placeholder="Model X Branco"
            type="text"
            variant="standard"
            color="secondary"
          />
          <TextField
            required
            autoFocus
            fullWidth
            id="marca"
            name="marca"
            label="Marca"
            placeholder="Tesla"
            type="text"
            variant="standard"
            color="secondary"
          />
          <TextField
            required
            autoFocus
            fullWidth
            id="modelo"
            name="modelo"
            label="Modelo"
            placeholder="X"
            type="text"
            variant="standard"
            color="secondary"
          />
          <TextField
            required
            autoFocus
            fullWidth
            id="foto"
            name="foto"
            label="Link da Foto"
            placeholder="https://<linkaqui>.png"
            type="text"
            variant="standard"
            color="secondary"
          />
          <TextField
            required
            autoFocus
            fullWidth
            id="ano"
            name="ano"
            label="Ano"
            placeholder="2020"
            type="number"
            variant="standard"
            color="secondary"
          />
          <TextField
            required
            autoFocus
            fullWidth
            id="localizacao"
            name="localizacao"
            label="Localização"
            placeholder="Goiânia"
            type="text"
            variant="standard"
            color="secondary"
          />
          <TextField
            required
            autoFocus
            fullWidth
            id="quilometragem"
            name="quilometragem"
            label="Quilometragem"
            placeholder="25000"
            type="number"
            variant="standard"
            color="secondary"
          />
          <TextField
            required
            autoFocus
            fullWidth
            id="valorOriginal"
            name="valor_original"
            label="Valor Original"
            placeholder="1200000"
            type="number"
            variant="standard"
            color="secondary"
          />
        </DialogContent>
        <DialogActions>
          <Button color="error" onClick={handleClose}>
            Cancelar
          </Button>
          <Button color="secondary" type="submit">
            Cadastrar
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

NewCar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default NewCar;
