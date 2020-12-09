import {
  AppBar,
  Button,
  makeStyles,
  Toolbar,
  Typography,
  withStyles,
} from "@material-ui/core";
import { LoginContext } from "pages/HomePage";
import React, { useContext, useEffect } from "react";
import { PagesEnum } from "../../utils/common";
import { Logo } from "loft-taxi-mui-theme";

type IProps = {
  setCurentPage: Function;
};

const styles = {
  appBar: {
    backgroundColor: "#ffffff",
  },
  grow: {
    flexGrow: "1",
  },
};

const useStyles = makeStyles(styles);

const Header: React.FC<IProps> = (props) => {
  const classes = useStyles();

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
            <Button onClick={() => props.setCurentPage(PagesEnum.Map)}>
              Карта
            </Button>
          )}

          {loginContext.status && (
            <Button onClick={() => props.setCurentPage(PagesEnum.Profile)}>
              Профиль
            </Button>
          )}
          {loginContext.status ? (
            <Button
              onClick={() => {
                loginContext.logoutFunc();
                props.setCurentPage(PagesEnum.Login);
              }}
            >
              Выйти
            </Button>
          ) : (
            <Button
              data-testid="headerLoginBtn"
              onClick={() => props.setCurentPage(PagesEnum.Login)}
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
