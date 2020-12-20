import {
  Button,
  Grid,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearLoginError,
  fetchAuthRequest,
  setLoginData,
} from "modules/auth/actions";
import { IFetchAuthRequestPayload, ILoginData } from "@modules-auth";
import { selectLoginData, selectLoginError } from "modules/auth/selectors";
import { useHistory } from "react-router-dom";
import { useForm } from "react-hook-form";

import { Link as RouterLink, Redirect } from "react-router-dom";

const styles = (theme) => ({
  header: {
    marginBottom: 30,
  },
  subheader: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 30,
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: "44px 60px",
      minWidth: "500px",
    },
  },
});

const useStyles = makeStyles(styles);

const LoginForm: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const loginData = useSelector(selectLoginData);

  const loginError = useSelector(selectLoginError);

  const { register, setValue, handleSubmit, errors } = useForm<ILoginData>();

  useEffect(() => {
    dispatch(clearLoginError());
  }, []);

  const onSubmit = (data: ILoginData) => {
    console.log("login submit");

    dispatch(setLoginData(data));

    //event.preventDefault();

    let req: IFetchAuthRequestPayload = {
      email: data.email,
      password: data.password,
    };

    req = { email: "test@test.com", password: "123123" };

    dispatch(fetchAuthRequest(req));
  };

  return (
    <Paper className={classes.paper}>
      <form onSubmit={handleSubmit(onSubmit)}>
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
              <Link component={RouterLink} to="/register">
                {" "}
                Зарегистрируйтесь{" "}
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="email"
              fullWidth
              type={"email"}
              label={"Имя пользователя"}
              className={classes.input}
              placeholder={"Имя пользователя"}
              error={loginError ? true : false}
              helperText={loginError}
              inputRef={register}
              defaultValue={loginData.email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              name="password"
              fullWidth
              label={"Пароль"}
              className={classes.input}
              type={"password"}
              placeholder={"Пароль"}
              error={loginError ? true : false}
              helperText={loginError}
              inputRef={register}
              defaultValue={loginData.password}
            />
          </Grid>
          <Grid item xs={12} align="right">
            <Button
              data-testid="loginBtn"
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
