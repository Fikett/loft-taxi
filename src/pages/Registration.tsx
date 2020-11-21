import React, { useEffect } from "react";
import { IProps } from "@home-page";
import {
  Button,
  Card,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { pages } from "../utils/common";

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

const Registration: React.FC<IProps> = (props) => {
  const classes = useStyles();

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

                    props.setCurentPage(pages.Login);
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
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="name"
                label="Имя"
                placeholder="Имя"
                error={false}
                helperText=""
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                name="surname"
                label="Фамилия"
                placeholder="Фамилия"
                error={false}
                helperText=""
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                label="Пароль"
                placeholder="Пароль"
                error={false}
                helperText=""
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={(event) => {
                  event.preventDefault();
                  // event.stopPropagation();
                  // event.nativeEvent.stopImmediatePropagation();

                  props.setCurentPage(pages.Map);
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

export default React.memo(Registration);
