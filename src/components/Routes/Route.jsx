import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";
import AllJobs from "../../pages/AllJobs/AllJobs";
import Blogs from "../../pages/Blogs/Blogs";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";
import AddJob from "../../pages/AddJob/AddJob";
import PrivateRoutes from "./PrivateRoutes";
import JobDetails from "../../pages/JobDetails/JobDetails";
import MyJobs from "../../pages/MyJobs/MyJobs";
import AppliedJobs from "../../pages/AppliedJobs/AppliedJobs";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
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
        element: <AllJobs></AllJobs>,
        // loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
      },
      {
        path: "/add-job",
        element: <PrivateRoutes><AddJob /></PrivateRoutes>
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>
      },
      {
        path: "/job/:id",
        element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
      },
      {
        path: "/my-jobs",
        element: <PrivateRoutes><MyJobs /></PrivateRoutes>
      },
      {
        path: "/applied-jobs",
        element: <PrivateRoutes><AppliedJobs /></PrivateRoutes>
      }
    ]
  },
]);

export default router;