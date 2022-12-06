import React from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";

import { ICarroWithId } from "../../../constants/interfaces/Carro";

import "./DefaultCard.scss";

interface IDefaultCardProps {
  car: ICarroWithId;
}

function DefaultCard({ car }: IDefaultCardProps) {
  const carroValorConvertido = Number(car.valor_original).toLocaleString(
    "pt-BR",
    {
      style: "currency",
      currency: "BRL",
    }
  );

  return (
    <div className="app__card box-shadow">
      <div className="card__image">
        <img src={car.foto_url} alt={car.nome} />
      </div>
      <div className="card__content">
        <div className="card__info">
          <h3>{`${car.marca} ${car.nome}`}</h3>
          <div className="info__details">
            <h5>{car.ano}</h5>
            <div className="dot-spacer" />
            <h5>{car.quilometragem.toLocaleString()} km</h5>
            <div className="dot-spacer" />
            <h5>{car.localizacao}</h5>
          </div>
        </div>
        <div className="card__price">
          <div className="price-box">
            <h3>{carroValorConvertido}</h3>
          </div>
          <Button variant="outlined" color="secondary">
            Ver detalhes
          </Button>
        </div>
      </div>
    </div>
  );
}

DefaultCard.propTypes = {
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
};

export default DefaultCard;
