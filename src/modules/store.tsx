import { createStore, compose, applyMiddleware } from "redux";
import { authMiddleware } from "../modules/auth";
import rootReducer from "../modules";

const createReduxStore = () =>
{
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(authMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );

  return store;
};

export default createReduxStore;