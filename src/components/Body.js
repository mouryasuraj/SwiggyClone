import RestaurantCard from "./RestaurantCard"
import resList from "../Utils/mock-data"
import { useState } from "react"

const Body = () => {

    // State for Restuarant
    const [listOfRes, setListOfRes] = useState(resList)

    // State for Checkbox
    const [topRatedRes, setTopRatedRes] = useState(false)

    // State for Search bar
    const [searchTerm, setSearchTerm] = useState('')

    // HandleSearchInput
    const handleSearchInput = (e) => {
        const term = e.target.value
        setSearchTerm(term)
        const filterSearch = resList.filter(res => res.info.name.toLowerCase().includes(term.toLowerCase()));
        setListOfRes(filterSearch)
    }


    // Top rated Restaurant Logic
    const handleTopRatedRes = () => {
        setTopRatedRes(!topRatedRes)
        // Filtered restaurant which have rating more than 4.3
        const filteredRes = listOfRes.filter(res => res.info.avgRating > 4.3);
        if (!topRatedRes) {
            setListOfRes(filteredRes)
        } else {
            setListOfRes(resList)
        }

    }


    return (
        <div className="body">

            {/* Search BAR  */}
            <div className="search">
                <input type="text" placeholder="Search...." value={searchTerm} onChange={handleSearchInput} />
            </div>

            {/* Title */}
            <div className="title-container">
                <h1 className="title">Restaurants</h1>
            </div>

            {/* FIlter */}
            <div className="filter">
                {/* Top rated */}
                <div className="top-rated">
                    <input type="checkbox" id="topRated" checked={topRatedRes} onChange={handleTopRatedRes} />
                    <label htmlFor="topRated" title="More than 4.3 rating">top rated restaurant</label>
                </div>
            </div>

            {/* Restaurant Container */}
            <div className="restaurant-container">
                {
                    listOfRes.map((card) => {
                        return <RestaurantCard key={card.info.id} resData={card} />
                    })
                }
            </div>
        </div>
    )
}

export default Body
