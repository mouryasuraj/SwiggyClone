import { Link, useParams } from "react-router-dom";
import RestaurantMenuList from "./RestaurantMenuList";
import Shimmer from './Shimmer'
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import NavigateHome from "./NavigateHome";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const listOfMenu = useRestaurantMenu(resId);

    if (listOfMenu === null) return <Shimmer />

    // details of restaurnt
    const { name, cuisines, areaName, sla, avgRating, totalRatingsString } = listOfMenu?.data?.cards[0]?.card?.card?.info

    // details of list of menu
    const categories = listOfMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c) => c?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")





    return (
        <div className="res-menu">
            <NavigateHome name={name} />
            <div className="res-menu-details">
                <div className="left">
                    <h2 className="res-menu-title">{name}</h2>
                    <p className="res-menu-cuisines">{cuisines.join(', ')}</p>
                    <p className="location">{areaName}, {sla?.lastMileTravelString}</p>
                </div>
                <div className="right">
                    <h2 className="res-menu-rating"><i style={{ marginRight: '3px' }} className="fa-solid fa-star"></i>{avgRating}</h2>
                    <h4 className="rating">{totalRatingsString}</h4>
                </div>
            </div>
            <hr className="main-line" />
            {/* Dish details */}
            <div>
                {
                    categories.map((card, index) => {
                        return (
                            <RestaurantMenuList key={index} card={card} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default RestaurantMenu;