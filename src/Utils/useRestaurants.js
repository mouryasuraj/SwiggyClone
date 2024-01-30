import { useEffect, useState } from "react";

const useRestaurants = (catId,catType) =>{
    const [categoryRestaurant, setCategoryRestaurant] = useState(null);

    useEffect(()=>{
        fetchData();
        window.scrollTo(0,0)
    },[])

    const fetchData = async () =>{
        const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&collection=${catId}&tags=layout_CCS_${catType}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
        const json = await data.json();
        setCategoryRestaurant(json?.data?.cards)
    }
    return categoryRestaurant;
}

export default useRestaurants;