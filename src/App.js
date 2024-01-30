import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import RestaurantMenu from "./components/RestaurantMenu";
import Restaurants from "./components/Restaurants";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";


// Root Component
const App = () =>{
    return(
        <div id="main">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path:'/',
        element:<App />,
        children:[
            {
                path:'/',
                element:<Body />
            },
            {
                path:'/about',
                element:<About />
            },
            {
                path:'/contact',
                element:<Contact />
            },
            {
                path:'/cart',
                element:<Cart />
            },
            {
                path:'/restaurant-menu/:resId',
                element:<RestaurantMenu />
            },
            {
                path:'/category/:catId/:catType',
                element: <Restaurants />
            },
            {
                path:'/category/:catId/:catType/restaurant-menu/:resId',
                element:<RestaurantMenu />
            }
        ]
    }
])


const rootDOM = ReactDOM.createRoot(document.getElementById('root'));
rootDOM.render(<RouterProvider router={appRouter} />)