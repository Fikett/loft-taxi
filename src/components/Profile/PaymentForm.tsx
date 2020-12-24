import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { MCIcon } from "loft-taxi-mui-theme";
import { useDispatch, useSelector } from "react-redux";
import { Box, Paper, TextField } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { selecttoken } from "modules/auth/selectors";
import moment from "moment";

import { useForm } from "react-hook-form";
import { saveCardRequest, setPaymentData } from "modules/payment/actions";
import {
  selectPaymentData,
  selectPaymentError,
} from "modules/payment/selectors";
import { IPaymentData, ISavePaymentData } from "@modules-payment";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 1,
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(),
  },
  card: {
    width: 300,
    height: 300 * 0.63,
    paddingLeft: theme.spacing(4),
    paddingRight: theme.spacing(4),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    position: "relative",
  },
});
const useStyles = makeStyles(styles);
const PaymentForm: React.FC = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const { register, setValue, handleSubmit, errors } = useForm<IPaymentData>();
  const token = useSelector(selecttoken);
  const paymentData = useSelector(selectPaymentData);
  const paymentError = useSelector(selectPaymentError);

  const [selectedDate, handleDateChange] = useState(new Date());

  useEffect(() => {
    let parsedDate = moment(paymentData.date).toDate();

    handleDateChange(parsedDate);
  }, [paymentData.date]);

  const onSubmit = (data: IPaymentData) => {
    let aa: IPaymentData = {
      cardName: data.cardName,
      cardNumber: data.cardNumber,
      cvc: data.cvc,
      date: moment(selectedDate).toDate(),
    };

    dispatch(setPaymentData(aa));

    let a: ISavePaymentData = {
      cardName: data.cardName,
      cardNumber: data.cardNumber,
      cvc: data.cvc,
      expiryDate: moment(selectedDate).toDate().toString(),
      token: token,
    };

    dispatch(saveCardRequest(a));
  };

  const cvcOnChangeHandler = (event) => {
    if (!event.target.value) {
      event.target.value = "";
    }
    let cvcFormatted = event.target.value.replace(/\D/g, "").substring(0, 3);

    event.target.value = cvcFormatted;
  };

  const cardNumberOnChangeHandler = (event) => {
    if (!event.target.value) {
      event.target.value = "";
    }
    const cardNumberFormated =
      event.target.value
        .replace(/\D/g, "")
        .substring(0, 16)
        .match(/.{1,4}/g) || [];
    event.target.value = cardNumberFormated.join(" ");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container alignContent="center">
          <Grid item xs={12}>
            <Grid
              container
              className={classes.root}
              justify="center"
              spacing={4}
            >
              <Grid item xs={6}>
                <Paper elevation={3} className={classes.card}>
                  <Box
                    display="flex"
                    height="100%"
                    flexDirection="column"
                    justifyContent="space-around"
                  >
                    <MCIcon />
                    <TextField
                      data-testid="cardNumber"
                      required
                      name="cardNumber"
                      label="Номер карты"
                      placeholder="0000 0000 0000 0000"
                      error={paymentError ? true : false}
                      helperText={paymentError}
                      inputRef={register}
                      fullWidth
                      defaultValue={paymentData.cardNumber}
                      onChange={cardNumberOnChangeHandler}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        clearable
                        required
                        inputProps={{ "data-testid": "date" }}
                        views={["year", "month"]}
                        format="MM/yy"
                        inputRef={register}
                        value={selectedDate}
                        onChange={handleDateChange}
                      />
                    </MuiPickersUtilsProvider>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={3} className={classes.card}>
                  <Box
                    display="flex"
                    height="100%"
                    flexDirection="column"
                    justifyContent="space-around"
                  >
                    <TextField
                      name="cardName"
                      required
                      label="Имя владельца"
                      placeholder="USER NAME"
                      error={paymentError ? true : false}
                      helperText={paymentError}
                      inputRef={register}
                      fullWidth
                      defaultValue={paymentData.cardName}
                    />

                    <TextField
                      name="cvc"
                      label="CVC"
                      placeholder="CVC"
                      required
                      error={paymentError ? true : false}
                      helperText={paymentError}
                      inputRef={register}
                      fullWidth
                      defaultValue={paymentData.cvc}
                      onChange={cvcOnChangeHandler}
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
            <Grid align="center">
              <Button
                variant="contained"
                color="primary"
                elevation={0}
                type="submit"
                className={classes.button}
              >
                Сохранить
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default React.memo(PaymentForm);
