import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import "./Styles/style.css";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Auth/Login/Login";
import { Provider } from "react-redux";
import Notfound from "./Pages/Notfound/NotFound";
import store from "./Redux/Store/Store";
import App from "./App";
import Pages from "./Routes/Pages";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <Notfound />,
  },
  {
    path: "/",
    element: <App />,
    children: Pages,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </React.StrictMode>
);

reportWebVitals();
