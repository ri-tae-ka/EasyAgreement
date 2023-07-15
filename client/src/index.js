import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./store";
import { AuthProvider } from "@pangeacyber/react-auth";

const hostedLoginURL = process.env.REACT_APP_LOGIN_URL || "";
const authConfig = {
  clientToken: process.env.REACT_APP_CLIENT_TOKEN || "",
  domain: process.env.REACT_APP_PROVIDER_API || "",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthProvider loginUrl={hostedLoginURL} config={authConfig} redirectOnLogout={true}>
      <App />
    </AuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
