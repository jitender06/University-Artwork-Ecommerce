import React from "react";

const Hero = React.lazy(() => import("../Pages/Public/Hero"));
const AboutUs = React.lazy(() => import("../Pages/Public/AboutUs"));
const Login = React.lazy(() => import("../Pages/Public/Auth/Login"));
const Signup = React.lazy(() => import("../Pages/Public/Auth/Signup"))
const ArtworkStore = React.lazy(() => import("../Pages/Public/ArtworkStore/index"))
const Contact = React.lazy(() => import('../Pages/Public/Contact/index'))
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
    },
    {
        path:"/artwork",
        element:<ArtworkStore/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
];


export {PublicRoute}