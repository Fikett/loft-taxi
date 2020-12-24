import React from "react";
import { fetchAuthFlow, fetchRegisterFlow } from "modules/auth/sagas";
import api, { fetchAuth } from "modules/api";
import reducer from "modules/auth";
import { IFetchRegisterRequest, ILoginData } from "@modules-auth";
import { runSaga } from "redux-saga";

describe("authSaga", () => {
  it("fetchAuthFlow", async () => {
    const fakeFetchAuthResponse = { success: true, token: "aaa", error: "" };
    const requestFetchAuth = jest
      .spyOn(api, "fetchAuth")
      .mockImplementation(() => Promise.resolve(fakeFetchAuthResponse));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchAuthFlow,
      { payload: { email: "", password: "" } }
    );

    expect(requestFetchAuth).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      {
        //payload: true,
        type: "fetchAuthSuccess",
      },
      {
        payload: "aaa",
        type: "saveToken",
      },
    ]);

    requestFetchAuth.mockClear();
  });
});

describe("registerSaga", () => {
  it("fetchRegisterFlow", async () => {
    const fakeFetchRegisterResponse = {
      success: true,
      token: "aaa",
      error: "",
    };
    const requestFetchRegister = jest
      .spyOn(api, "fetchRegister")
      .mockImplementation(() => Promise.resolve(fakeFetchRegisterResponse));

    const dispatched = [];
    const result = await runSaga(
      {
        dispatch: (action) => dispatched.push(action),
      },
      fetchRegisterFlow,
      {
        payload: {
          email: "",
          password: "",
          name: "",
          surname: "",
          history: null,
        },
      }
    );

    expect(requestFetchRegister).toHaveBeenCalledTimes(1);

    expect(dispatched).toEqual([
      {
        //payload: true,
        type: "fetchAuthSuccess",
      },
      {
        //payload: true,
        type: "fetchRegisterSuccess",
      },
      {
        payload: "aaa",
        type: "saveToken",
      },
    ]);

    requestFetchRegister.mockClear();
  });
});

describe("authReducer", () => {
  const initial = {
    authenticated: false,
    token: "",
    loginData: {
      login: "",
      password: "",
    },
    loginError: "",
    registerData: {
      email: "",
      name: "",
      password: "",
      surname: "",
    },
    registerError: "",
  };

  it("authenticated", () => {
    const action = {
      type: "fetchAuthSuccess",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      authenticated: true,
    });
  });

  it("token", () => {
    const action = {
      type: "saveToken",
      payload: "test",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      token: "test",
    });
  });

  it("loginData", () => {
    let a: ILoginData = {
      login: "a",
      password: "b",
    };

    const action = {
      type: "setLoginData",
      payload: a,
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      loginData: {
        login: "a",
        password: "b",
      },
    });
  });

  it("loginError", () => {
    const action = {
      type: "setLoginError",
      payload: "a",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      loginError: "a",
    });
  });

  it("registerData", () => {
    let a: IFetchRegisterRequest = {
      email: "a",
      password: "b",
      name: "c",
      surname: "d",
    };

    const action = {
      type: "setRegisterData",
      payload: a,
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      registerData: {
        email: "a",
        name: "c",
        password: "b",
        surname: "d",
      },
    });
  });

  it("registerError", () => {
    const action = {
      type: "setRegisterError",
      payload: "a",
    };

    expect(reducer(initial, action)).toEqual({
      ...initial,
      registerError: "a",
    });
  });
});
