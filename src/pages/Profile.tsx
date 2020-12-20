import { Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import PaymentForm from "components/Profile/PaymentForm";
import React, { useEffect } from "react";

const styles = (theme) => ({
  background: {
    backgroundImage: `url(${"assets/login-background.jpg"})`,
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
  useEffect(() => {}, []);

  const classes = useStyles();

  return (
    <>
      Profile
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
              <PaymentForm />
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default React.memo(Profile);
