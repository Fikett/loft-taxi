import { IProps } from "@home-page";
import {
  Button,
  Card,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React, { useEffect } from "react";
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
  background: {
    backgroundImage: `url(${"assets/img/login-bg.png"})`,
    backgroundSize: "cover",
  },
});

const stylesBg = () => ({
  background: {
    backgroundImage: `url(${"assets/img/login-bg.png"})`,
    backgroundSize: "cover",
  },
});

const useStyles = makeStyles(styles);

const Login: React.FC<IProps> = (props) => {
  const classes = useStyles();

  useEffect(() => {}, []);

  return (
    <>
      <Paper className={classes.background}>
        <Card>
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
                      // event.stopPropagation();
                      // event.nativeEvent.stopImmediatePropagation();

                      props.setCurentPage(pages.Register);
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
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  name="password"
                  label={"Пароль"}
                  placeholder={"Пароль"}
                  error={false}
                  helperText={""}
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
                  Войти
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Paper>
      ;
    </>
  );
};

export default React.memo(Login);
