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
import { fetchAuthFailure } from "modules/auth/actions";
import { useDispatch } from "react-redux";

import { Switch, Route, useHistory } from "react-router-dom";

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

  const loginContext = useContext(LoginContext);

  useEffect(() => {}, []);

  return (
    <>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography className={classes.grow}>
            <Logo />
          </Typography>
          {loginContext.status && (
            <Button onClick={() => history.push("/map")}>Карта</Button>
          )}

          {loginContext.status && (
            <Button onClick={() => history.push("/profile")}>Профиль</Button>
          )}
          {loginContext.status ? (
            <Button
              onClick={() => {
                dispatch(fetchAuthFailure(false));
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
