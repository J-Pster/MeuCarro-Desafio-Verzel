import React, { useContext } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";

import { requestPut } from "../../../utils/Request";
import { GlobalContext } from "../../../context/Global";

import { ICarro, ICarroWithId } from "../../../constants/interfaces/Carro";

interface IEditCarProps {
  open: boolean;
  car: ICarroWithId;
  handleClose: () => void;
}

function EditCar({ open, car, handleClose }: IEditCarProps) {
  const {
    login: { logout },
    refresh: { refresh, setRefresh },
  } = useContext(GlobalContext);

  console.log("Carro: ", car);

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
      valor_promocional: 0,
    } as ICarro;

    const response = await requestPut("/api/v1/carros", car.id, carRawData);
    if (!response) {
      alert("Erro ao cadastrar carro, deslogando...");
      await logout();
    }

    setRefresh(!refresh);
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <DialogTitle>Atualizar um carro</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: ".7rem" }}
        >
          <TextField
            required
            autoFocus
            fullWidth
            defaultValue={car.nome}
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
            defaultValue={car.marca}
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
            defaultValue={car.modelo}
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
            defaultValue={car.foto_url}
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
            defaultValue={car.ano}
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
            defaultValue={car.localizacao}
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
            defaultValue={car.quilometragem}
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
            defaultValue={car.valor_original}
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
            Atualizar
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
}

EditCar.propTypes = {
  open: PropTypes.bool.isRequired,
  car: PropTypes.shape({
    id: PropTypes.string,
    nome: PropTypes.string,
    marca: PropTypes.string,
    modelo: PropTypes.string,
    foto_url: PropTypes.string,
    ano: PropTypes.number,
    localizacao: PropTypes.string,
    quilometragem: PropTypes.number,
    valor_original: PropTypes.string,
    valor_promocional: PropTypes.string,
  }).isRequired,
  handleClose: PropTypes.func.isRequired,
};

export default EditCar;
