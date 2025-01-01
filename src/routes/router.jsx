import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Adventures from "../Pages/Adventures";
import AboutUs from "../Pages/AboutUs";
import MyProfile from "../Pages/MyProfile";
import AdventureDetails from "../Pages/AdventureDetails";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

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
                element:<MyProfile></MyProfile>,
            },
            {
                path:'/viewDetails/:id',
                element:<AdventureDetails></AdventureDetails>,
                loader:()=>fetch('../eco.json'),
            },
            {
                path:'/login',
                element:<LogIn></LogIn>,
            },
            {
                path:'/register',
                element:<Register></Register>,
            }
          
        ]
      
    }
]);

export default router;

