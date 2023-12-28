import RestaurantCard from "./RestaurantCard"
import resList from "../Utils/mock-data"

const Body = () => {
    return (
        <div className="body">
        
            {/* Search BAR  */}
            <div className="search">
                Search
            </div>

            {/* Restaurant Container */}
            <div className="restaurant-container">
                {
                    resList.map((card) => {
                        return <RestaurantCard key={card.info.id} resData={card} />
                    })
                }
            </div>
        </div>
    )
}

export default Body
