import * as React from "react";
import App from "../App";
import Adicionar from "../views/Adiconar";
import {
  createBrowserRouter,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/adicionar",
    element: <Adicionar/>,
  },
]);

export default router;