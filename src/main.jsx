import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./components/Root/Root.jsx";
import Home from "./components/Home/Home.jsx";
import Apps from "./components/Apps/Apps.jsx";
import InstallationApps from "./components/InstallationApps/InstallationApps.jsx";
import AppDetails from "./components/AppDetails/AppDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
      },
      {
        path: "/apps",
        loader: () => fetch("/data.json"),
        element: <Apps></Apps>,
      },
      {
        path: "/apps/:id",
        loader: () => fetch("/data.json"),
        element: <AppDetails></AppDetails>,
      },
      {
        path: "/installation-apps",
        loader: () => fetch("/data.json"),
        element: <InstallationApps></InstallationApps>,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>,
);
