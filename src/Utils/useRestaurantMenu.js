import { swiggyResMenuAPI } from "./constant";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
    const [listOfMenu, setListOfMenu] = useState(null);

    useEffect(() => {
        fetchMenuData()
    }, [])

    async function fetchMenuData() {
        try {
            const menuList = await fetch(swiggyResMenuAPI + resId);
            const jsonData = await menuList.json();
            setListOfMenu(jsonData)
        } catch (error) {
            console.log(error);
        }
    };

    return listOfMenu;
}

export default useRestaurantMenu;