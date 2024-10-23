import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Root from "../pages/Root/Root";
import SingleNews from "../components/others/SingleNews";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("news.json"),
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoutes>
            <SingleNews></SingleNews>
          </PrivateRoutes>
        ),
      },
    ],
  },
]);
