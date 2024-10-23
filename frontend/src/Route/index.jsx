import React from "react";

const Hero = React.lazy(() => import("../Pages/Public/Hero"));
const AboutUs = React.lazy(() => import("../Pages/Public/AboutUs"));
const Login = React.lazy(() => import("../Pages/Public/Auth/Login"));
const Signup = React.lazy(() => import("../Pages/Public/Auth/Signup"))
const ArtworkStore = React.lazy(() => import("../Pages/Public/ArtworkStore/index"));
const Contact = React.lazy(() => import('../Pages/Public/Contact/index'));
const Gallery = React.lazy(() => import('../Pages/Public/Gallery/Gallery'));
const Drawing = React.lazy(() => import('../Pages/Public/Gallery/Drawing'));
const Digitalart = React.lazy(() => import('../Pages/Public/Gallery/Digitalart'));
const Sculpture = React.lazy(() => import('../Pages/Public/Gallery/Sculpture'));
const Dashboard = React.lazy(() => import('../Pages/Admin/Dashboard/index'))
const Users = React.lazy(() => import("../Pages/Admin/Users"));
const ProductsManage = React.lazy(() => import("../Pages/Admin/ProductsManage/index"))
const Painting = React.lazy(() => import('../Pages/Public/Gallery/Painting.jsx'))
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
        path:"/painting",
        element:<Painting/>
    },
    {
        path:"/gallery",
        element:<Gallery/>
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


const AdminRoute = [
    {
        path:"/admin/dashboard",
        element:<Dashboard/>
    },
    {
        path:"/admin/user",
        element:<Users/>
    },
    {
        path:"/admin/products",
        element:<ProductsManage/>
    },
];

export {PublicRoute, AdminRoute}