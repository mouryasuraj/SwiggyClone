
import { CDN_URL } from "../Utils/constant";

const RestaurantCard = (props) => {

    const { resData } = props;
    const {name, cloudinaryImageId, costForTwo, cuisines, avgRating, sla, areaName} = resData?.info

    return (
        <div className="restaurant-card">
            {/* IMage */}
            <img className="restaurant-image" src={CDN_URL+cloudinaryImageId} alt="" />
            {/* Restaurant Name */}
            <h3 className="restaurant-name">{name}</h3>
            {/* Restaurant Cuinsines */}
            <h4 className="cuisines">{cuisines.join(", ")}</h4>
            {/* Restaurant Rating and ETS */}
            <div className="details">
                <h4 className="rating">{avgRating}⭐</h4>
                <h4 className="eta">{sla?.deliveryTime} MINS</h4>
            </div>
            {/* Restaurant Price */}
            <h4 className="price">{costForTwo}</h4>
            <h4 className="areaName">{areaName}</h4>
        </div>
    )
}

// Restaurant With Promoted Label
export const restaurantWithLabel = (RestaurantCard) =>{
    return (props)=>{
        return(
            <div className="res-lable-container">
                <h3 className="label">Promoted</h3>
                <RestaurantCard {...props} />
            </div>
        )
    }
}


export default RestaurantCard;
