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

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
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
            }
           
          
        ]
      
    }
]);

export default router;

