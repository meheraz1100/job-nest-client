import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Login/Login";
import Error from "../Error/Error";
import Register from "../Register/Register";
import Blogs from "../Blogs/Blogs";
import AddJob from "../AddJob/AddJob";
import AllJob from "../AllJobs/AllJob";
import JobDetails from '../AllJobs/JobDetails'
import PrivateRoutes from "./PrivateRoutes";
import MyJobs from "../MyJobs/MyJobs";
import UpdateJobCard from "../UpdateJobCard/UpdateJobCard";
import AppliedJob from "../AppliedJob/AppliedJob";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <Error></Error>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: () => fetch('https://m-63-assignment-11-career-nest-server.vercel.app/addJob')
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/addJob',
          element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
        },
        {
          path: '/allJob',
          element: <AllJob></AllJob>,
          loader: () => fetch('https://m-63-assignment-11-career-nest-server.vercel.app/addJob')
        },
        {
          path: '/jobDetails/:id',
          element: <PrivateRoutes><JobDetails></JobDetails></PrivateRoutes>,
          loader: ({params}) => fetch(`https://m-63-assignment-11-career-nest-server.vercel.app/addJob/${params.id}`)
        },
        {
          path: '/myJobs',
          element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>,
          loader: () => fetch('https://m-63-assignment-11-career-nest-server.vercel.app/addJob')
        },
        {
          path: '/updateJob/:id',
          element: <PrivateRoutes><UpdateJobCard></UpdateJobCard></PrivateRoutes>,
          loader: ({params}) => fetch(`https://m-63-assignment-11-career-nest-server.vercel.app/addJob/${params.id}`)
        },
        {
          path: '/appliedJobs/',
          element: <PrivateRoutes><AppliedJob></AppliedJob></PrivateRoutes>,
          loader: () => fetch('https://m-63-assignment-11-career-nest-server.vercel.app/appliedjobs')
        }
    ]
    }
  ]);

export default router;



// https://m-63-assignment-11-career-nest-server.vercel.app
// https://m-63-assignment-11-career-nest-server.vercel.app/