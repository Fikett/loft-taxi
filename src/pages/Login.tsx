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
import LoginForm from "components/LoginForm/LoginForm";
import React, { useContext, useEffect } from "react";
import { PagesEnum } from "../utils/common";
import { LoginContext } from "./HomePage/HomePage";
import { Logo } from "loft-taxi-mui-theme";

import img from "../assets/img/login-bg.png";

const styles = () => ({
  background: {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
  },
});

const useStyles = makeStyles(styles);

const Login: React.FC = () => {
  const classes = useStyles();

  return (
   
      <Paper className={classes.background}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <Logo white animated />
          </Grid>
          <Grid item xs={3}>
            <LoginForm />
          </Grid>
        </Grid>
      </Paper>
    
  );
};

export default React.memo(Login);
