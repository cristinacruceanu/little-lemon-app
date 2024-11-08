import React from "react";
import ReactDOM from "react-dom/client";
import { ReservationProvider } from "./context/ReservationContext";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ReservationProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReservationProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
