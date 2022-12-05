import React from "react";

import AppWrap from "../../constants/wrapper/AppWrap";
import { Header, Footer } from "../../components";

import "./Home.scss";

function Home() {
  return <div>Home</div>;
}

export default AppWrap(Home, Header, Footer);
