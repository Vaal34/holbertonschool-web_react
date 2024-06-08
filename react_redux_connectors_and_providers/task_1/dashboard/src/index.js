import React from "react";
import ReactDOM from "react-dom";
import App from "./App/App";
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './reducers/uiReducer';

const store = configureStore({
  reducer: uiReducer
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App isLoggedIn={true} displayDrawer={false}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root"),
);