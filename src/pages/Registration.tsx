import React, { useContext, useEffect } from "react";
import { IProps } from "@home-page";
import {
  Button,
  Card,
  Grid,
  makeStyles,
  TextField,
  Typography,
} from "@material-ui/core";
import { PagesEnum } from "../utils/common";
import { LoginContext } from "./HomePage/HomePage";
import RegistrationForm from "components/RegistrationForm/RegistrationForm";

import { Paper } from "@material-ui/core";

import { Logo } from "loft-taxi-mui-theme";
import img from "../assets/img/login-background.jpg";

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
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
  },
});
const useStyles = makeStyles(styles);

const Registration: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.background}>
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <Logo white animated />
          </Grid>
          <Grid item xs={3}>
            <RegistrationForm />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default React.memo(Registration);
