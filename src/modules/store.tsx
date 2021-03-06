import { createStore, compose, applyMiddleware } from "redux";
import rootReducer, { rootSaga } from "../modules";
import createSagaMiddleware from 'redux-saga';


const createReduxStore = () =>
{
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : (noop) => noop
    )
  );

  sagaMiddleware.run(rootSaga);


  return store;
};

export default createReduxStore;
