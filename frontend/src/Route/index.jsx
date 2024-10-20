import React from "react";

const Hero = React.lazy(() => import("../Pages/Public/Hero"));
const AboutUs = React.lazy(() => import("../Pages/Public/AboutUs"));
const Login = React.lazy(() => import("../Pages/Public/Auth/Login"));
const Signup = React.lazy(() => import("../Pages/Public/Auth/Signup"))

const PublicRoute = [
    {
        path:"/",
        element:<Hero/>
    },
    {
        path:"/about",
        element:<AboutUs/>
    },
    {
        path:"/login",
        element:<Login/>
    },
    {
        path:"/register",
        element:<Signup/>
    }
];


export {PublicRoute}