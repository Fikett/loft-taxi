import React, { useEffect } from "react";
import {
  Button,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { IFetchRegisterRequest } from "@modules-auth";
import {
  clearRegisterError,
  fetchRegisterRequest,
  setRegisterData,
} from "modules/auth/actions";
import { useDispatch, useSelector } from "react-redux";
import {
  selectRegisterData,
  selectRegisterError,
} from "modules/auth/selectors";
import { useForm } from "react-hook-form";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@material-ui/core";

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

const RegistrationForm: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();

  const registerData = useSelector(selectRegisterData);
  const registerError = useSelector(selectRegisterError);

  const {
    register,
    setValue,
    handleSubmit,
    errors,
  } = useForm<IFetchRegisterRequest>();

  useEffect(() => {
    dispatch(clearRegisterError());
  }, []);

  const onSubmit = (data: IFetchRegisterRequest) => {
    console.log("register submit");

    dispatch(setRegisterData(data));

    let req: IFetchRegisterRequest = {
      email: data.email,
      name: data.name,
      password: data.password,
      surname: data.surname,
    };

    dispatch(fetchRegisterRequest({ ...req, history }));
  };

  return (
    <>
      <Paper className={classes.paper}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                className={classes.header}
                component="h1"
                variant="h4"
                align="left"
              >
                Регистрация
              </Typography>
              <Typography
                className={classes.subheader}
                component="p"
                align="left"
              >
                Уже зарегистрированы?
                <Link component={RouterLink} to="/login">
                  {" "}
                  Войти{" "}
                </Link>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                required
                name="email"
                fullWidth
                type={"email"}
                label="Адрес электронной почты"
                placeholder="Адрес электронной почты"
                error={registerError ? true : false}
                helperText={registerError}
                inputRef={register}
                defaultValue={registerData.email}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                name="name"
                fullWidth
                required
                label="Имя"
                type={"text"}
                placeholder="Имя"
                error={registerError ? true : false}
                helperText={registerError}
                inputRef={register}
                defaultValue={registerData.name}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                className={classes.input}
                name="surname"
                fullWidth
                type={"text"}
                required
                label="Фамилия"
                placeholder="Фамилия"
                error={registerError ? true : false}
                helperText={registerError}
                inputRef={register}
                defaultValue={registerData.surname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className={classes.input}
                required
                fullWidth
                name="password"
                type={"password"}
                label="Пароль"
                placeholder="Пароль"
                error={registerError ? true : false}
                helperText={registerError}
                inputRef={register}
                defaultValue={registerData.password}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                data-testid="registerBtn"
                variant="contained"
                color="primary"
                type="submit"
              >
                Зарегистрироваться
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </>
  );
};

export default React.memo(RegistrationForm);
