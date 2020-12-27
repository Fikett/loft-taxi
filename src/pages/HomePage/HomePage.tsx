import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Map from "../Map";
import { PagesEnum } from "../../utils/common";
import Login from "../Login";
import Profile from "../Profile";
import Registration from "../Registration";

import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { selectAuthenticated, selecttoken } from "modules/auth/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentRequest } from "modules/payment/actions";
import { IFetchGetPaymentRequest } from "@modules-payment";

// export const LoginContext = React.createContext<LoginContext>({
//   status: false,
// });

// export type LoginContext = {
//   status: boolean;
// };

const HomePage = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectAuthenticated);

  const token = useSelector(selecttoken);

  useEffect(() => {
    if (isLoggedIn) {
      history.push("/map");
    } else {
      history.push("/login");
    }
  }, [isLoggedIn]);

  useEffect(() => {
    if (isLoggedIn && token) {
      let req: IFetchGetPaymentRequest = {
        token: token,
      };

      dispatch(getPaymentRequest(req));
    }
  }, [isLoggedIn, token]);

  return (
    <>
      {/* <LoginContext.Provider value={{ status: isLoggedIn }}> */}
        <Switch>
          <Route exact path="/map">
            {isLoggedIn ? (
              <>
                <Header />
                <Map />
              </>
            ) : (
              <Redirect to={"/login"} />
            )}
          </Route>
          <Route exact path="/profile">
            {isLoggedIn ? (
              <>
                <Header />
                <Profile />
              </>
            ) : (
              <Redirect to={"/login"} />
            )}
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Registration />
          </Route>
        </Switch>
      {/* </LoginContext.Provider> */}
    </>
  );
};

export default React.memo(HomePage);
