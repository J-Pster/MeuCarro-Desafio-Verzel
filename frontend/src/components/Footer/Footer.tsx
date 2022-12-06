import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

import "./Footer.scss";

function Footer() {
  return (
    <div className="app__flex app__footer">
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © | Desenvolvido com 🖤 por "}
        <Link color="inherit" href="https://joaopster.com.br/">
          João Pster
        </Link>
        {" | "}
        {new Date().getFullYear()}.
      </Typography>
    </div>
  );
}

export default Footer;
