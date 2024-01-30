
import useRestaurants from "../Utils/useRestaurants";
import { useParams, Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import RestaurantCard from "./RestaurantCard";
import NavigateHome from './NavigateHome'
import { restaurantWithLabel } from "./RestaurantCard";


const Restaurants = () => {
    // Cat for category
    const { catId, catType } = useParams();

    const categoryRestaurant = useRestaurants(catId, catType)


    // RestaurantWithLable
    const RestaurantWithLabel = restaurantWithLabel(RestaurantCard)


    if (categoryRestaurant === null) return <Shimmer />
    // Fetch title and description 
    const { title, description } = categoryRestaurant[0]?.card?.card;

    // Fetching Restaurants
    const catRes = categoryRestaurant.filter((c) => c?.card?.card['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")

    return (
        <>
            <div className="navigate-home">
                <NavigateHome name={title} />
            </div>
            <div className="res-category-container">
                <div className="cat-details">
                    <h1>{title}</h1>
                    <p>{description}</p>
                </div>
                <div className="res-category-cards-container">
                    {
                        catRes.map((item) => (
                            <Link className="menu" to={`restaurant-menu/${item?.card?.card?.info?.id}`} key={item?.card?.card?.info?.id}>
                            {
                                item?.card?.card?.info?.promoted ? <RestaurantWithLabel resData={item?.card?.card} /> : <RestaurantCard resData={item?.card?.card} />
                            }
                            </Link>
                        ))
                    }
                </div>
            </div>
        </>
    )
}




export default Restaurants;