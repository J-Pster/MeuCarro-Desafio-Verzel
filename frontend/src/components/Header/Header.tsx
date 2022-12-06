import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import { SxProps } from "@mui/material";

import images from "../../constants/images";

import { GlobalContext } from "../../context/Global";

import "./Header.scss";

const buttonSx: SxProps = {
  borderRadius: "500px",
};

function Header() {
  const {
    user: { currentUser },
    login: { isSignedIn },
  } = useContext(GlobalContext);

  const navigate = useNavigate();

  return (
    <div className="app__header">
      <div className="app__header-left">
        <img src={images.Logo} alt="logo" />
      </div>
      <div className="app__flex app__header-nav">
        <Button color="secondary" sx={buttonSx} onClick={() => navigate("/")}>
          Inicio
        </Button>
        <Button color="secondary" sx={buttonSx} onClick={() => navigate("/")}>
          Nossos Carros
        </Button>
        <Button color="secondary" sx={buttonSx} onClick={() => navigate("/")}>
          Sobre Nós
        </Button>
        {isSignedIn && (
          <Button
            color="secondary"
            sx={buttonSx}
            onClick={() => navigate("/admin")}
          >
            Administração
          </Button>
        )}
      </div>
      {isSignedIn ? (
        <div className="app__flex app__header-right">
          <h3>{currentUser.name}</h3>
          <Avatar alt={currentUser.name} src={images.Profile} />
        </div>
      ) : (
        <Button
          color="secondary"
          onClick={() => navigate("/login")}
          sx={buttonSx}
        >
          Fazer Login
        </Button>
      )}
    </div>
  );
}

export default Header;
