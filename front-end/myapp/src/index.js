import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from "./app/index"
import Notes from './components/Dashboad/Notes';
import Login from './pages/login';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/Partials/SignUp';
import SignIn from './pages/Partials/SignIn';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/dashboard",
    element: <Notes />
  },
  {
    path: "/signup",
    element: <SignUp />
  },
  {
    path: "/signin",
    element: <SignIn />
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
  <RouterProvider router={router} />
  </>
)