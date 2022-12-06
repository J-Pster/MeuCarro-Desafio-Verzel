import React, { useState, useContext, useEffect } from "react";

import { AddCircleOutline } from "@mui/icons-material";

import AppWrap from "../../constants/wrapper/AppWrap";
import { Header, Footer } from "../../components";

import { AdminCard } from "../../components/CarCard";
import { NewCarForm } from "../../components/CarForm";

import { ICarroWithId } from "../../constants/interfaces/Carro";
import { GlobalContext } from "../../context/Global";

import { requestGet } from "../../utils/Request";

import "./Admin.scss";

function Admin() {
  const [carros, setCarros] = useState<ICarroWithId[]>([]);
  const [openNew, setOpenNew] = useState(false);

  const {
    loading: { setLoading },
    refresh: { refresh, setRefresh },
  } = useContext(GlobalContext);

  const handleClickOpen = () => {
    setOpenNew(true);
  };

  const handleClose = () => {
    setOpenNew(false);
    setRefresh(!refresh);
  };

  useEffect(() => {
    setLoading(true);

    async function getCars() {
      const response = await requestGet("/api/v1/carros");
      if (response) {
        const carrosOrdenados = response.sort(
          (a: ICarroWithId, b: ICarroWithId) => {
            return Number(b.valor_original) - Number(a.valor_original);
          }
        );

        setCarros(carrosOrdenados);
      }
    }

    getCars();
    setLoading(false);
  }, [refresh]);

  return (
    <div className="app__admin">
      <div className="admin_list">
        <div className="admin_add">
          <AddCircleOutline
            onClick={handleClickOpen}
            sx={{ "&:hover": { cursor: "pointer" } }}
          />
        </div>
        {carros &&
          carros.map((car: ICarroWithId) => (
            <AdminCard car={car} key={car.id} />
          ))}
      </div>
      <NewCarForm open={openNew} handleClose={handleClose} />
    </div>
  );
}

export default AppWrap(Admin, Header, Footer);
