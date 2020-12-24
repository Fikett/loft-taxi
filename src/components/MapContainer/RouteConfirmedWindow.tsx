import React, { useContext, useEffect } from "react";
import {
  Button,
  Card,
  Grid,
  makeStyles,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

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

type IProps = {
  resetMapFunc: () => void;
};

const RouteConfirmedWindow: React.FC<IProps> = (props) => {
  const history = useHistory();

  const classes = useStyles();

  return (
    <>
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item xs={12}>
            <Typography
              className={classes.header}
              component="h1"
              variant="h4"
              align="left"
            >
              Заказ размещён
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text}>
              Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={props.resetMapFunc}
            >
              Сделать новый заказ
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default React.memo(RouteConfirmedWindow);
