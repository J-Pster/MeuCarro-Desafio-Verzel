import React, { useEffect, useContext, useState } from "react";

import AppWrap from "../../constants/wrapper/AppWrap";
import { Header, Footer } from "../../components";
import { CarCard } from "../../components/CarCard";

import { GlobalContext } from "../../context/Global";
import { requestGet } from "../../utils/Request";

import { ICarroWithId } from "../../constants/interfaces/Carro";

import "./Home.scss";

function Home() {
  const [carros, setCarros] = useState<ICarroWithId[]>([]);

  const {
    loading: { setLoading },
  } = useContext(GlobalContext);

  useEffect(() => {
    setLoading(true);

    async function getCars() {
      console.log("Main!");
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
  }, []);

  return (
    <div className="app__home">
      {carros &&
        carros.map((car: ICarroWithId) => <CarCard car={car} key={car.id} />)}
    </div>
  );
}

export default AppWrap(Home, Header, Footer);
