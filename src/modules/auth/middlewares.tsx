import {
  IfetchAuthFailurePayload,
  IfetchAuthSuccessPayload,
} from "@modules-auth";
import {
  fetchAuthFailure,
  fetchAuthRequest,
  fetchAuthSuccess,
} from "./actions";

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

export const authMiddleware = (store) => (next) => (action) => {
  if (action.type === fetchAuthRequest.toString()) {
    postData("https://loft-taxi.glitch.me/auth", action.payload)
      //.then((response) => response.json())
      .then((result: IfetchAuthSuccessPayload) => {
        if (result.success) {
          store.dispatch(fetchAuthSuccess(true));
        } else {
          store.dispatch(fetchAuthFailure(false));
        }

        
      })
      .catch((error: IfetchAuthFailurePayload) => {
        console.error(error);
      });
  }

  return next(action);
};
