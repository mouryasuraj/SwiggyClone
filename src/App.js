import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Cart from "./components/Cart";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
// Root Component
const App = () =>{
    return(
        <>
            <Header />
            <Outlet />
        </>
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
                path:'/restaurant/:resId',
                element:<RestaurantMenu />
            }
        ]
    }
])


const rootDOM = ReactDOM.createRoot(document.getElementById('root'));
rootDOM.render(<RouterProvider router={appRouter} />)