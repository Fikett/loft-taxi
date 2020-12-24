import React from "react";
import { Button, Grid, makeStyles, Paper, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = (theme) => ({
  message: {
    marginBottom: 30,
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(),
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

const PaymentSaveWindow: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.card}>
        <Grid container data-testid="success" spacing={2}>
          <Grid item xs={12} align="center">
            <Typography className={classes.message}>
              Платёжные данные обновлены. Теперь вы можете заказывать такси.
            </Typography>
          </Grid>
          <Grid item xs={12} align="center">
            <Button
              to="/map"
              variant="contained"
              color="primary"
              component={Link}
            >
              Перейти на карту
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default React.memo(PaymentSaveWindow);
