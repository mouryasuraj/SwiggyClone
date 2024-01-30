import RestaurantCard from "./RestaurantCard"
import Filter from "./Filter"
import Shimmer from "./Shimmer"
import {Link} from 'react-router-dom'
import useBody from "../Utils/useBody"
import Loader from "./Loader"
import Cuisines from "./Cuisines"

const Body = () => {

    const [handleInput, handleSearchInput, handleTopRatedRes, handleUnder200, searchTerm, filteredRes, listOfRes, topRatedRes, loading, cuisines ] = useBody()

    return listOfRes.length===0 ? <Shimmer /> :(
        <div className="body">

            {/* Cuinsins Container */}
            <Cuisines cuisines={cuisines} listOfRes={listOfRes} filteredRes={filteredRes} />

            {/* Search BAR  */}
            {/* <form onSubmit={handleSearchInput} className="search">
                <input type="text" placeholder="Search for restaurant...." value={searchTerm} onChange={handleInput} />
                <button>Search</button>
            </form> */}

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
                {   loading ? <Loader /> : (
                    filteredRes.length === 0 
                    ? <h1>Results not found.</h1>
                    : filteredRes.map((card) => {
                        return <Link className="menu" to={`restaurant-menu/${card.info.id}`} key={card.info.id}><RestaurantCard resData={card} /></Link>
                    }))
                }
            </div>
        </div>
    )
}

export default Body
