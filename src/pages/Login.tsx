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

const Login: React.FC = () => {
  const classes = useStyles();

  //const loginContext = useContext(LoginContext);

  useEffect(() => {}, []);

  return (
    <>
      <LoginForm  />
    </>
  );
};

export default React.memo(Login);
