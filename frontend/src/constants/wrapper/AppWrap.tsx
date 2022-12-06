/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useContext } from "react";

import { Loading } from "../../components";
import { GlobalContext } from "../../context/Global";

const AppWrap = (
  Component: any,
  Header: any = null,
  Footer: any = null,
  classNames: any = null
) =>
  function HOC() {
    console.log("HOC");

    const { loading } = useContext(GlobalContext);
    if (loading.loading) {
      return <Loading />;
    }

    return (
      <>
        {Header && <Header />}

        <div className="app__container">
          <div className={classNames || "app__wrapper app__flex"}>
            <Component />
          </div>
        </div>

        {Footer && <Footer />}
      </>
    );
  };

export default AppWrap;
