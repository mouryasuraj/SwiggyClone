import RestaurantCard from "./RestaurantCard"
import resList from "../Utils/mock-data"
import Filter from "./Filter"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"

const Body = () => {


    // State for Restuarant
    const [listOfRes, setListOfRes] = useState([])
    const [filteredRes, setFilteredRes] = useState([])

    // State for Checkbox
    const [topRatedRes, setTopRatedRes] = useState(false)
    const [under200, setUnder200] = useState(false)

    // State for Search bar
    const [searchTerm, setSearchTerm] = useState('')

    // HandleSearchInput
    const handleSearchInput = (e) => {
        e.preventDefault()
        const filterSearch = listOfRes.filter(res => res.info.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredRes(filterSearch)
    }

    const handleInput = (e) =>{
        setSearchTerm(e.target.value)
    }

    // Top rated Restaurant Logic
    const handleTopRatedRes = () => {
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
        setTimeout(() => {
            setListOfRes(resList)
            setFilteredRes(resList)
        }, 1000);
    }, [])


    // Conditional Rendering
    // if (listOfRes.length === 0) {
    //     return <Shimmer />
    // }

    // We can also perform conditional Rendering using ternary operator.
    return (
        <div className="body">

            {/* Search BAR  */}
            <form onSubmit={handleSearchInput} className="search">
                <input type="text" placeholder="Search for restaurant...." value={searchTerm} onChange={handleInput} />
                <button>Search</button>
            </form>

            {/* Title */}
            <div className="title-container">
                <h1 className="title">Restaurants</h1>
            </div>

            {/* FIlter */}
            <div className="filter">
                {/* Top rated */}
                <Filter topRatedRes={topRatedRes} id="topRated" filterName="top rated restaurant" handleEvent={handleTopRatedRes} />

                {/* Under 200 */}
                <Filter id="under200" filterName="under 200" handleEvent={handleUnder200} />
            </div>

            {/* Restaurant Container */}
            <div className="restaurant-container">
                {
                    listOfRes.length === 0
                    ? <Shimmer />
                    : filteredRes.map((card) => {
                        return <RestaurantCard key={card.info.id} resData={card} />
                    }) && filteredRes.length === 0 
                    ? <h1>Results not found.</h1>
                    : filteredRes.map((card) => {
                        return <RestaurantCard key={card.info.id} resData={card} />
                    })
                }
            </div>
        </div>
    )
}

export default Body
