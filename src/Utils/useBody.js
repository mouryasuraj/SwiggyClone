import { swiggyResAPI } from "../Utils/constant"
import { useState, useEffect } from "react"

const useBody = () => {
    // State for Restuarant
    const [listOfRes, setListOfRes] = useState([])
    const [filteredRes, setFilteredRes] = useState([])
    const [loading, setLoading] = useState(null)

    // useSTate for Cuisines Container
    const [cuisines, setCuisines] = useState(null)

    // State for Checkbox
    const [topRatedRes, setTopRatedRes] = useState(false)
    const [under200, setUnder200] = useState(false)

    // State for Search bar
    const [searchTerm, setSearchTerm] = useState('')

    // HandleSearchInput
    const handleSearchInput = (e) => {
        e.preventDefault()
        const filterSearch = listOfRes.filter(res => res.info.name.toLowerCase().includes(searchTerm.toLowerCase()));
        showLoading()
        setFilteredRes(filterSearch)
    }

    // Show laoding
    const showLoading = () =>{
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }

    const handleInput = (e) => {
        setSearchTerm(e.target.value)
    }

    // Top rated Restaurant Logic
    const handleTopRatedRes = () => {
        showLoading()
        setTopRatedRes(!topRatedRes)
        // Filtered restaurant which have rating more than 4.3
        const filteredRes = listOfRes.filter(res => res.info.avgRating > 4.3);
        if (!topRatedRes) {
            setFilteredRes(filteredRes)
        } else {
            setFilteredRes(listOfRes)
        }

    }

    // Under 200 Restaurant Logic
    const handleUnder200 = () => {
        showLoading()
        setUnder200(!under200)
        // Filtered restaurant which have rating more than 4.3
        const filteredRestaurant = listOfRes.filter(res => res.info.costForTwo.slice(1, 4) <= 200);
        if (!under200) {
            setFilteredRes(filteredRestaurant)
        } else {
            setFilteredRes(listOfRes)
        }

    }

    useEffect(() => {
        fetchedData()
        window.scrollTo(0,0)
    }, [])

    async function fetchedData() {
        try {
            const data = await fetch(swiggyResAPI);
            const json = await data.json();
            setCuisines(json)
            setListOfRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setFilteredRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } catch (error) {
            console.log(error);
        }

    }
    return [handleInput, handleSearchInput, handleTopRatedRes, handleUnder200, searchTerm, filteredRes, listOfRes, topRatedRes, loading, cuisines]
}

export default useBody;