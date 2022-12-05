/* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";

const AppWrap = (
  Component: any,
  Header: any = null,
  Footer: any = null,
  classNames: any = null
) =>
  function HOC() {
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
