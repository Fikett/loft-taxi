import { IProps } from "@home-page";
import {
  Button,
 
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { LoginContext } from "pages/HomePage/HomePage";
import React, { useContext, useEffect, useState } from "react";
import { PagesEnum } from "utils/common";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuthRequest, setLoginData } from "modules/auth/actions";
import { IFetchAuthRequestPayload } from "@modules-auth";
import { selectLoginData } from "modules/auth/selectors";
import { useHistory } from "react-router-dom";

const styles = (theme) => ({
  header: {
    marginBottom: 30
  },
  subheader: {
    marginBottom: 10
  },
  input: {
    marginBottom: 30
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: "44px 60px",
      minWidth: "500px"
    }
  },
  loginBackground: {
    backgroundImage: `url(${"assets/login-background.jpg"})`,
    backgroundSize: "cover"
  }
});

const useStyles = makeStyles(styles);

const LoginForm: React.FC = () => {
  const classes = useStyles();

  const history = useHistory();

  const loginData = useSelector(selectLoginData);

  const dispatch = useDispatch();

  return (
    <Paper className={classes.paper}>
      
        <form>
          <Grid container>
            <Grid item xs={12}>
              <Typography
                className={classes.header}
                component="h1"
                variant="h4"
                align="left"
              >
                Войти
              </Typography>
              <Typography
                className={classes.subheader}
                component="p"
                align="left"
              >
                Новый пользователь?
                <Button
                  onClick={(event) => {
                    event.preventDefault();

                    history.push("/register");
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Зарегистрируйтесь
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="name"
                label={"Имя пользователя"}
                placeholder={"Имя пользователя"}
                error={false}
                helperText={""}
                value={loginData.login}
                onChange={(event) => {
                  dispatch(setLoginData({ login: event.target.value }));
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label={"Пароль"}
                placeholder={"Пароль"}
                error={false}
                helperText={""}
                value={loginData.password}
                onChange={(event) => {
                  dispatch(setLoginData({ password: event.target.value }));
                }}
              />
            </Grid>
            <Grid item xs={12} align="right">
              <Button
                data-testid="loginBtn"
                onClick={(event) => {
                  event.preventDefault();

                  let req: IFetchAuthRequestPayload = {
                    email: loginData.login,
                    password: loginData.password,
                  };

                  //req = { email: "test@test.com", password: "123123" };

                  dispatch(fetchAuthRequest(req));
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Войти
              </Button>
            </Grid>
          </Grid>
        </form>
     
      </Paper>
  );
};

export default React.memo(LoginForm);
