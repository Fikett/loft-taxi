import React, { useContext, useEffect } from "react";
import {
  Button,
  Card,
  Grid,
  Link,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";

const styles = (theme) => ({
  header: {
    marginBottom: 30,
  },
  text: {
    marginBottom: 30,
  },
  paper: {
    position: "absolute",
    top: 0,
    left: 20,
    maxWidth: "30%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: "44px 60px",
    },
  },
});
const useStyles = makeStyles(styles);

const FillPaymentInfoPreview: React.FC = () => {
  const history = useHistory();

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Typography
              className={classes.header}
              component="h1"
              variant="h4"
              align="left"
            >
              Заполните платежные данные
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text}>
              Укажите информацию о банковской карте, чтобы сделать заказ.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={(event) => {
                event.preventDefault();

                history.push("/profile");
              }}
            >
              Перейти в профиль
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default React.memo(FillPaymentInfoPreview);
