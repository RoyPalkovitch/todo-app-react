import {createBrowserRouter} from "react-router-dom";
import {ToDoApp} from "../src/pages/ToDoApp"
import { SignIn } from "./pages/SignIn";
import {Home} from '../src/pages/Home'
import App from "./App";
import React from "react";
export const router = createBrowserRouter([
  {
    element: <App />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/home",
        element: <Home />
      },
      {
        path:"/sign-in",
        element: <SignIn />,

      },
      {
        path:"/todosApp",
        element: <ToDoApp />,
        children:[
          {path:"/todosApp/active",
          element: <ToDoApp />},
          {path:"/todosApp/completed",
          element: <ToDoApp />,}
        ]

      }
    ]
  }
])