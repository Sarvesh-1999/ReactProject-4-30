import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import RegisterPage from "../components/RegisterPage";
import LoginPage from "../components/LoginPage";
import Dashboard from "../components/Dashboard";
import Home from "../components/Home";
import Products from "../components/Products";
import PrivateUserRoute from "./PrivateUserRoute";

export let myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/home",
        element: (
          <PrivateUserRoute>
            <Home />
          </PrivateUserRoute>
        ),
      },
      {
        path: "/products",
        element: (
          <PrivateUserRoute>
            <Products />
          </PrivateUserRoute>
        ),
      },
    ],
  },
]);
