import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import App from './App';
import "./app.scss";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App}></Route>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);