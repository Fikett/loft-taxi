import React, { useContext, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { MCIcon } from "loft-taxi-mui-theme";
import { LoginContext } from "pages/HomePage/HomePage";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Box, Paper, TextField } from "@material-ui/core";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { selectPaymentData, selecttoken } from "modules/auth/selectors";
import { saveCardRequest, setPaymentData } from "modules/auth";
import moment from "moment";
import { ParsableDate } from "@material-ui/pickers/constants/prop-types";
import { ISavePaymentData } from "@modules-auth";

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

  const history = useHistory();

  const loginContext = useContext(LoginContext);

  const token = useSelector(selecttoken);

  const paymentData = useSelector(selectPaymentData);

  const [selectedDate, handleDateChange] = React.useState(new Date());

  // useEffect(() => {
  //   handleDateChange(paymentData.date);
  // }, [paymentData.date]);

  // useEffect(() => {
  //   dispatch(setPaymentData({ date: selectedDate }));
  // }, [selectedDate]);

  return (
    <>
      <form onSubmit={() => {}}>
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
                      name="cardNumber"
                      label="Номер карты"
                      placeholder="0000 0000 0000 0000"
                      error={false}
                      helperText=""
                      value={paymentData.cardNumber}
                      onChange={(event) => {
                        dispatch(
                          setPaymentData({ cardNumber: event.target.value })
                        );
                      }}
                    />
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <DatePicker
                        clearable
                        required
                        inputProps={{ "data-testid": "date" }}
                        views={["year", "month"]}
                        format="MM/yy"
                        value={selectedDate}
                        onChange={handleDateChange}
                      />

                      {/* <DatePicker
                        //clearable
                        //required
                         inputProps={{ "data-testid": "date" }}
                        //views={["year", "month"]}
                        //format="MM/yy"
                        value={paymentData.date as ParsableDate }
                        onChange={(event) => {

                         let a = moment(event).toDate();

                          dispatch(setPaymentData({ date: a }));
                        }}

                        //   {...input}
                        //   {...custom}
                      /> */}
                    </MuiPickersUtilsProvider>
                    {/* <RenderDatePicker
                    clearable
                    name="date"
                    required
                    label="Срок действия"
                    inputRef={register}
                  /> */}
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
                      label="Имя владельца"
                      placeholder="USER NAME"
                      error={false}
                      helperText=""
                      value={paymentData.cardName}
                      onChange={(event) => {
                        dispatch(
                          setPaymentData({ cardName: event.target.value })
                        );
                      }}
                    />

                    {/* <RenderField
                      required
                      error={!!errors.cardName}
                      helperText={!!errors.cardName && errors.cardName.message}
                      name="cardName"
                      label="Имя владельца"
                      placeholder="USER NAME"
                      onChange={cardName}
                      fullWidth
                      inputRef={register}
                    /> */}

                    <TextField
                      name="cvc"
                      label="CVC"
                      error={false}
                      helperText=""
                      value={paymentData.cvc}
                      onChange={(event) => {
                        dispatch(setPaymentData({ cvc: event.target.value }));
                      }}
                    />

                    {/* <RenderField
                      required
                      error={!!errors.cvc}
                      helperText={!!errors.cvc && errors.cvc.message}
                      name="cvc"
                      label="CVC"
                      onChange={cvc}
                      inputRef={register}
                    /> */}
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
                onClick={(event) => {
                  event.preventDefault();
                  //event.stopPropagation();
                  //event.nativeEvent.stopImmediatePropagation();

                  let a: ISavePaymentData = {
                    cardName: paymentData.cardName,
                    cardNumber: paymentData.cardNumber,
                    cvc: paymentData.cvc,
                    expiryDate: paymentData.date,
                    token: token,
                  };

                  dispatch(saveCardRequest(a));
                }}
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
