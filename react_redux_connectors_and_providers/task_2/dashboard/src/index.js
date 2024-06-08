import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiReducer';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: uiReducer,
  middleware: middleware
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isLoggedIn={true} displayDrawer={false}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);