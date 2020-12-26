import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import { LoginContext } from "pages/HomePage/HomePage";
import React, { useContext, useEffect } from "react";
import { PagesEnum } from "../../utils/common";
import { Logo } from "loft-taxi-mui-theme";
import { fetchAuthFailure, fetchRegisterFailure, resetLoginData } from "modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";

import { Switch, Route, useHistory } from "react-router-dom";
import { selectAuthenticated } from "modules/auth";

const styles = {
  appBar: {
    backgroundColor: "#ffffff",
  },
  grow: {
    flexGrow: "1",
  },
};

const useStyles = makeStyles(styles);

const Header: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const history = useHistory();

  const isLoggedIn = useSelector(selectAuthenticated);

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className={classes.grow}>
            <Logo />
          </Typography>
          {isLoggedIn && (
            <Button onClick={() => history.push("/map")}>Карта</Button>
          )}

          {isLoggedIn && (
            <Button onClick={() => history.push("/profile")}>Профиль</Button>
          )}
          {isLoggedIn ? (
            <Button
              data-testid="headerExitBtn"
              onClick={() => {
                dispatch(fetchAuthFailure());
                dispatch(resetLoginData());
                dispatch(fetchRegisterFailure());
              }}
            >
              Выйти
            </Button>
          ) : (
            <Button
              data-testid="headerLoginBtn"
              onClick={() => {
                history.push("/login");
              }}
            >
              Войти
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default React.memo(Header);
