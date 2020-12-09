import React, { useContext, useEffect, useState } from "react";
import { IProps } from "@home-page";
import {
  Button,
  Card,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { LoginContext } from "pages/HomePage/HomePage";
import { PagesEnum } from "utils/common";
import { useHistory } from "react-router-dom";

const styles = () => ({
  header: {
    marginBottom: 30,
  },
  subheader: {
    marginBottom: 10,
  },
  input: {
    marginBottom: 30,
  },
});
const useStyles = makeStyles(styles);

const RegistrationForm: React.FC = () => {
  const classes = useStyles();

  const loginContext = useContext(LoginContext);
  const history = useHistory();

  const [email, updateemail] = useState("");
  const [name, updatename] = useState("");
  const [surname, updatesurname] = useState("");
  const [password, updatepassword] = useState("");

  useEffect(() => {}, []);

  return (
    <>
      <Card>
        <form>
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
                <Button
                  onClick={(event) => {
                    event.preventDefault();
                    // event.stopPropagation();
                    // event.nativeEvent.stopImmediatePropagation();

                    history.push("/login");
                    //props.setCurentPage(PagesEnum.Login);
                  }}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Войти
                </Button>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                label="Адрес электронной почты"
                placeholder="Адрес электронной почты"
                error={false}
                helperText=""
                onChange={(event) => {
                  updateemail(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="name"
                label="Имя"
                placeholder="Имя"
                error={false}
                helperText=""
                onChange={(event) => {
                  updatename(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="surname"
                label="Фамилия"
                placeholder="Фамилия"
                error={false}
                helperText=""
                onChange={(event) => {
                  updatesurname(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Пароль"
                placeholder="Пароль"
                error={false}
                helperText=""
                onChange={(event) => {
                  updatepassword(event.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  // event.stopPropagation();
                  // event.nativeEvent.stopImmediatePropagation();

                  //loginContext.loginFunc("test", "testtest");
                  history.push("/map");
                  //props.setCurentPage(PagesEnum.Map);
                }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Зарегестрироваться
              </Button>
            </Grid>
          </Grid>
        </form>
      </Card>
    </>
  );
};

export default React.memo(RegistrationForm);
