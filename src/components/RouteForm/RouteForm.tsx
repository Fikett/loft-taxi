import React, { Component, useEffect, useState } from "react";
import {
  Paper,
  Button,
  withStyles,
  makeStyles,
  emphasize,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import {
  calculateRouteRequest,
  getAddressListRequest,
} from "modules/routes/actions";
import { selectAddressesList } from "modules/routes/selectors";
import Select from "react-select";
import _ from "lodash";
import { ISelectItem } from "@common";
import { IFetchCalculateRouteRequest } from "@modules-auth";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: 250,
  },
  input: {
    display: "flex",
    padding: 0,
    height: "auto",
    minWidth: 384,
  },
  valueContainer: {
    display: "flex",
    flexWrap: "wrap",
    flex: 1,
    alignItems: "center",
    overflow: "hidden",
  },
  chip: {
    margin: theme.spacing(0.5, 0.25),
  },
  chipFocused: {
    backgroundColor: emphasize(
      theme.palette.type === "light"
        ? theme.palette.grey[300]
        : theme.palette.grey[700],
      0.08
    ),
  },
  noOptionsMessage: {
    padding: theme.spacing(1, 2),
  },
  singleValue: {
    fontSize: 16,
  },
  placeholder: {
    position: "absolute",
    left: 2,
    bottom: 6,
    fontSize: 16,
  },
  paper: {
    position: "absolute",
    zIndex: 1,
    marginTop: theme.spacing(1),
    left: 0,
    right: 0,
  },
  divider: {
    height: theme.spacing(5),
  },
  paper1: {
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

const RouteForm: React.FC = () => {
  const dispatch = useDispatch();

  const addressesList = useSelector(selectAddressesList);

  useEffect(() => {
    dispatch(getAddressListRequest());
  }, []);

  const [from, setfrom] = useState<ISelectItem>(null);
  const [to, setto] = useState<ISelectItem>(null);

  const classes = useStyles();

  return (
    <Paper className={classes.paper1}>
      <Grid container>
        <Grid item xs={12}>
          <Select
            options={
              to
                ? _.filter(addressesList, (item) => {
                    if (item.value === to.value) {
                      return false;
                    } else {
                      return true;
                    }
                  })
                : addressesList
            }
            value={from}
            onChange={(event) => {
              setfrom(event);
            }}
            placeholder={"Откуда"}
            isClearable
          />
          <div className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Select
            options={
              from
                ? _.filter(addressesList, (item) => {
                    if (item.value === from.value) {
                      return false;
                    } else {
                      return true;
                    }
                  })
                : addressesList
            }
            value={to}
            onChange={(event) => {
              setto(event);
            }}
            placeholder={"Куда"}
            isClearable
          />
          <div className={classes.divider} />
        </Grid>
        <Grid item xs={12}>
          <Button
            disabled={!(from && to)}
            variant="contained"
            color="primary"
            fullWidth
            onClick={() => {
              let req: IFetchCalculateRouteRequest = {
                address1: from.value,
                address2: to.value,
              };

              dispatch(calculateRouteRequest(req));
            }}
          >
            Вызвать такси
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default React.memo(RouteForm);
