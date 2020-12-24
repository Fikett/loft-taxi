import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import PaymentForm from "components/Profile/PaymentForm";
import PaymentSaveWindow from "components/Profile/PaymentSaveWindow";
import { setPaymentSavedWindowShow } from "modules/payment/actions";
import { selectPaymentSavedWindowShow } from "modules/payment/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import img from "../assets/img/login-background.jpg";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover",
  },
  paper: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
    padding: "44px 60px",
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: "44px 60px",
    },
  },
  subtitle: {
    color: "rgba(0, 0, 0, 0.54)",
    marginBottom: 40,
  },
});

const useStyles = makeStyles(styles);

const Profile = () => {
  const dispatch = useDispatch();

  const classes = useStyles();

  useEffect(() => {
    dispatch(setPaymentSavedWindowShow(false));
  }, []);

  const paymentSavedWindowShow = useSelector(selectPaymentSavedWindowShow);

  return (
    <>
      <Paper className={classes.background}>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item>
            <Paper className={classes.paper}>
              <Typography component="h1" variant="h4" align="center">
                Профиль
              </Typography>
              <Typography
                align="center"
                gutterBottom
                className={classes.subtitle}
              >
                Способ оплаты
              </Typography>

              {paymentSavedWindowShow ? <PaymentSaveWindow /> : <PaymentForm />}
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default React.memo(Profile);
