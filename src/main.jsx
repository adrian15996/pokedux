import React from "react";
import ReactDOM from "react-dom/client";
import thunk from "redux-thunk";
import App from "./App";
import { rootReducer } from "./reducer/rootReducer";
import { Provider } from "react-redux";
import {
  applyMiddleware,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { logger } from "./middlewares";

const composeAlt = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composeEnhacers = compose(composeAlt(applyMiddleware(thunk, logger)));
const store = createStore(rootReducer, composeEnhacers);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
