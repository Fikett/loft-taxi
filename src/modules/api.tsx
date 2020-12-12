import {
  IFetchAddressList,
  IFetchAuth,
  IfetchAuthFailurePayload,
  IFetchAuthRequestPayload,
  IfetchAuthSuccessPayload,
  IFetchCalculateRoute,
  IFetchRegister,
  IFetchUpdatePayment,
  ISavePaymentData,
} from "@modules-auth";
import _ from "lodash";

async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

async function getData(url = "", data = {}) {
  // Default options are marked with *

  if (!_.isEmpty(data)) {
    url = url + "?" + new URLSearchParams(data);
  }

  const response = await fetch(url, {
    method: "GET", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *client
    //body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

const fetchAuth: IFetchAuth = (request) =>
  postData("https://loft-taxi.glitch.me/auth", request);

const fetchRegister: IFetchRegister = (request) =>
  postData("https://loft-taxi.glitch.me/register ", request);

const fetchUpdatePayment: IFetchUpdatePayment = (request: ISavePaymentData) =>
  postData("https://loft-taxi.glitch.me/card", request);

const fetchAddressList: IFetchAddressList = () =>
  getData("https://loft-taxi.glitch.me/addressList ");

const fetchCalculateRoute: IFetchCalculateRoute = (request) =>
  getData("https://loft-taxi.glitch.me/route", request);

export default {
  fetchAuth,
  fetchRegister,
  fetchUpdatePayment,
  fetchAddressList,
  fetchCalculateRoute,
};
