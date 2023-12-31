import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Home } from "./components/Home";
import { NumberGame } from "./components/game/NumberGame";
import { ErrorPage } from "./components/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "numbergame",
        element: <NumberGame />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <RouterProvider router={router} />
  // </React.StrictMode>
);
