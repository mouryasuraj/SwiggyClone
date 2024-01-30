import { useEffect, useState } from "react";

const useRestaurants = (catId,catType) =>{
    const [categoryRestaurant, setCategoryRestaurant] = useState(null);

    useEffect(()=>{
        fetchData();
        window.scrollTo(0,0)
    },[])

    const fetchData = async () =>{
        try { 
            const data = await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0512616&lng=72.9368399&collection=${catId}&tags=layout_CCS_${catType}&sortBy=&filters=&type=rcv2&offset=0&page_type=null`)
            const json = await data.json();
            setCategoryRestaurant(json?.data?.cards)
        } catch (error) {
            console.log(error);
        }
    }
    return categoryRestaurant;
}

export default useRestaurants;