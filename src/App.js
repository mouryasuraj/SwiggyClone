import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Help from "./components/Help";
import Cart from "./components/Cart";
import Offers from "./components/Offers";
import RestaurantMenu from "./components/RestaurantMenu";
import Restaurants from "./components/Restaurants";
import Help from "./components/Help";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from 'react-redux'
import appStore from './Utils/appStore'
import Search from "./components/Search";
import UserProfile from "./components/UserProfile";
import ShowMsgContext from "./Utils/context/showMsgContext";



// Root Component
const App = () => {
    const [showSuccessMsg, setShowSuccessMsg] = useState(false)
    const [itemInCartMsg, setItemInCartMsg] = useState(false)
    return (
        <Provider store={appStore}>
            <ShowMsgContext.Provider value={{ showMsg: showSuccessMsg, itemInCart:itemInCartMsg, setItemInCartMsg, setShowSuccessMsg }}>
                <div id="main">
                    <Header />
                    <Outlet />
                </div>
            </ShowMsgContext.Provider>
        </Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Body />
            },
            {
                path: '/help',
                element: <Help />
            },
            {
                path: '/offers',
                element: <Offers />
            },
            {
                path: '/cart',
                element: <Cart />
            },
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/profile',
                element: <UserProfile />
            },
            {
                path: '/restaurant-menu/:resId',
                element: <RestaurantMenu />
            },
            {
                path: '/category/:catId/:catType',
                element: <Restaurants />
            },
            {
                path: '/category/:catId/:catType/restaurant-menu/:resId',
                element: <RestaurantMenu />
            }
        ]
    }
])


const rootDOM = ReactDOM.createRoot(document.getElementById('root'));
rootDOM.render(<RouterProvider router={appRouter} />)