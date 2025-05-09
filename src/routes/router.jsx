import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Adventures from "../Pages/Adventures";
import AboutUs from "../Pages/AboutUs";
import MyProfile from "../Pages/MyProfile";
import AdventureDetails from "../Pages/AdventureDetails";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";
import Loading from "../Pages/Loading";
import ForgetPass from "../Pages/ForgetPass";
import UpdateProfile from "../Pages/ProfileUpdate";
import ErrorPage from "../components/ErrorPage";
import DynamicTitle from "../components/DynamicTitle";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:()=>fetch('../eco.json'),
            },
            {
                path:'/adventure',
                element:<Adventures></Adventures>,
                loader:()=>fetch('../eco.json'),
            },
            {
                path:'/about',
                element:<AboutUs></AboutUs>,
            },
            {
                path:'/profile',
                element:<PrivateRoute><MyProfile></MyProfile></PrivateRoute>,
            },
            {
              path:'/update-pro',
              element:<PrivateRoute><UpdateProfile></UpdateProfile></PrivateRoute>
            },
            {
                path:'/viewDetails/:id',
                element:<PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>,
                loader:()=>fetch('../eco.json'),
            },
            {
                path:'/login',
                element:<LogIn></LogIn>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            },
            {
                path:'/forget-pass',
                element:<ForgetPass></ForgetPass>,
            },
           
          
        ]
      
    }
]);

export default router;

