import React, { useContext, useEffect } from "react";
import { IProps } from "@home-page";
import
  {
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

const Registration: React.FC = () =>
{
  const classes = useStyles();

  const loginContext = useContext(LoginContext);

  useEffect(() => { }, []);

  return (
    <>
      < RegistrationForm  />


    </>
  );
};

export default React.memo(Registration);
