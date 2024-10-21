import React from "react";

const Hero = React.lazy(() => import("../Pages/Public/Hero"));
const AboutUs = React.lazy(() => import("../Pages/Public/AboutUs"));
const Login = React.lazy(() => import("../Pages/Public/Auth/Login"));
const Signup = React.lazy(() => import("../Pages/Public/Auth/Signup"))
const ArtworkStore = React.lazy(() => import("../Pages/Public/ArtworkStore/index"));
const Contact = React.lazy(() => import('../Pages/Public/Contact/index'));
const Paintings = React.lazy(() => import('../Pages/Public/Gallery/Paintings'));
const Drawing = React.lazy(() => import('../Pages/Public/Gallery/Drawing'));
const Digitalart = React.lazy(() => import('../Pages/Public/Gallery/Digitalart'));
const Sculpture = React.lazy(() => import('../Pages/Public/Gallery/Sculpture'));


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
    },
    {
        path:"/paintings",
        element:<Paintings/>
    },
    {
        path:"/digitalart",
        element:<Digitalart/>
    },
    {
        path:"/drawings",
        element:<Drawing/>
    },
    {
        path:"/sculpture",
        element:<Sculpture/>
    },
];


export {PublicRoute}