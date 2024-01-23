import { Link, useParams } from "react-router-dom";
import RestaurantMenuList from "./RestaurantMenuList";
import Shimmer from './Shimmer'
import useRestaurantMenu from "../Utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const { resId } = useParams();

    const listOfMenu = useRestaurantMenu(resId);

    if (listOfMenu === null) return <Shimmer />

    // details of restaurnt
    const { name, cuisines, areaName, sla, avgRating, totalRatingsString } = listOfMenu?.data?.cards[0]?.card?.card?.info

    // details of list of menu
    const { itemCards } = listOfMenu?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;




    return (
        <div className="res-menu">
            <div className="navigate">
                <p><Link to='/'><span>Home </span> </Link> <span style={{ fontSize: '12px', color: 'gray' }}> / </span> <span>{name}</span></p>
            </div>
            <div className="res-menu-details">
                <div className="left">
                    <h2 className="res-menu-title">{name}</h2>
                    <p className="res-menu-cuisines">{cuisines.join(', ')}</p>
                    <p className="location">{areaName}, {sla.lastMileTravelString}</p>
                </div>
                <div className="right">
                    <h2 className="res-menu-rating"><i style={{ marginRight: '3px' }} className="fa-solid fa-star"></i>{avgRating}</h2>
                    <h4 className="rating">{totalRatingsString}</h4>
                </div>
            </div>
            <hr className="main-line" />
            {/* Dish details */}
            <div>
                <h2>Recommended ({itemCards.length})</h2>
                {
                    itemCards.map((cards) => {
                        return (
                            <RestaurantMenuList key={cards.card.info.id} cards={cards} />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default RestaurantMenu;