import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Map from "./Map";
import { PagesEnum } from "../utils/common";
import Login from "./Login";
import Profile from "./Profile";
import Registration from "./Registration";

export const LoginContext = React.createContext<LoginContext>({
  status: false,
});

export type LoginContext = {
  status: boolean;
  loginFunc?: Function;
  logoutFunc?: Function;
};

const HomePage = () =>
{
  const [currentPage, setCurrentPage] = useState<number>(PagesEnum.Login);



  const [isLoggedIn, changeIsLoggedIn] = useState<boolean>(false);

  const login = (email: string, password: string) =>
  {

    if (email && password)
    {
      changeIsLoggedIn(true);
    }

  };

  const logout = () =>
  {
    changeIsLoggedIn(false);
  };



  //console.log("currentPage", currentPage);

  return (
    <>
      <LoginContext.Provider
        value={{ status: isLoggedIn, loginFunc: login, logoutFunc: logout }}
      >
        <Header setCurentPage={setCurrentPage} />




        {currentPage === PagesEnum.Map && <Map />}
        {currentPage === PagesEnum.Profile && <Profile />}
        {currentPage === PagesEnum.Login && (
          <Login setCurentPage={setCurrentPage} />
        )}
        {currentPage === PagesEnum.Register && (
          <Registration setCurentPage={setCurrentPage} />
        )}
      </LoginContext.Provider>
    </>
  );
};

export default React.memo(HomePage);
