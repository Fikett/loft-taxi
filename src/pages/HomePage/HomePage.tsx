import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../Map";
import { PagesEnum } from "../../utils/common";
import Login from "../Login";
import Profile from "../Profile";
import Registration from "../Registration";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { selectAuthenticated } from "modules/auth/selectors";
import { useDispatch, useSelector } from "react-redux";

export const LoginContext = React.createContext<LoginContext>({
  status: false,
});

export type LoginContext = {
  status: boolean;
};

const HomePage = () => {
  //const [currentPage, setCurrentPage] = useState<number>(PagesEnum.Login);

  const history = useHistory();

  const isLoggedIn = useSelector(selectAuthenticated);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/map");
    } else {
      history.push("/login");
    }
  }, [isLoggedIn]);

  return (
    <>
      <LoginContext.Provider value={{ status: isLoggedIn }}>
        <Header />

        <Switch>
          <Route exact path="/map">
            {isLoggedIn ? <Map /> : <Redirect to={"/login"} />}
          </Route>
          <Route exact path="/profile">
            {isLoggedIn ? <Profile /> : <Redirect to={"/login"} />}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
      </LoginContext.Provider>

      {/* <LoginContext.Provider value={{ status: isLoggedIn }}>
        <Header setCurentPage={setCurrentPage} />
        {currentPage === PagesEnum.Map && <Map />}
        {currentPage === PagesEnum.Profile && <Profile />}
        {currentPage === PagesEnum.Login && (
          <Login setCurentPage={setCurrentPage} />
        )}
        {currentPage === PagesEnum.Register && (
          <Registration setCurentPage={setCurrentPage} />
        )}
      </LoginContext.Provider> */}
    </>
  );
};

export default React.memo(HomePage);
