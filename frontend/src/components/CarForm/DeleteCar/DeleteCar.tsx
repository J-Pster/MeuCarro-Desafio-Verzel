import React, { useContext } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { requestDelete } from "../../../utils/Request";
import { GlobalContext } from "../../../context/Global";

interface IDeleteCarProps {
  open: boolean;
  carId: string;
  handleClose: () => void;
}

function DeleteCar({ open, carId, handleClose }: IDeleteCarProps) {
  const {
    login: { logout },
    refresh: { refresh, setRefresh },
  } = useContext(GlobalContext);

  const handleDelete = async () => {
    const response = await requestDelete("/api/v1/carros", carId);

    if (!response || response.status !== 204) {
      alert("Erro ao deletar carro, deslogando...");
      await logout();
    }

    setRefresh(!refresh);
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        Tem certeza que quer deletar?
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Essa ação não pode ser desfeita, e não nos responsabilizamos pelos
          dados que você vai excluir.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="secondary" onClick={handleClose}>
          Cancelar
        </Button>
        <Button color="error" onClick={handleDelete} autoFocus>
          Deletar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

DeleteCar.propTypes = {
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  carId: PropTypes.string.isRequired,
};

export default DeleteCar;
