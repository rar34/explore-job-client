import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AllJobs from "../../pages/AllJobs/AllJobs";
import Blogs from "../../pages/Blogs/Blogs";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch(`${import.meta.env.VITE_API_URL}/jobs`)
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: '/all-jobs',
          element: <AllJobs></AllJobs>
        },
        {
          path: "/blogs",
          element: <Blogs></Blogs>
        }
      ]
    },
  ]);

  export default router;