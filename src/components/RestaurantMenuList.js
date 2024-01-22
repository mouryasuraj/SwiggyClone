import VegIcon from "./VegIcon";
import NonVegIcon from "./NonVegIcon";
import { memo } from "react";
import { menuListImgURL } from "../Utils/constant";

const RestaurantMenuList = (props) => {

    const { cards } = props;
    const { name, price, defaultPrice, description, imageId, isVeg } = cards?.card?.info

    return (
            <div className="res-dish-list">
                <div className="left">
                    <div className="dish-details">
                        {isVeg === 1 ? <VegIcon /> : <NonVegIcon />}
                        <h3 className="dish-title">
                            {name}
                        </h3>
                        <p className="dish-price"><i className="fa-solid fa-indian-rupee-sign"></i> {(defaultPrice || price) / 100}</p>
                        <p className="dish-description">{description}</p>
                    </div>
                </div>
                <div className="right">
                    <div className="dish-img-container">
                        <img src={menuListImgURL + imageId} alt="" />
                        <button>ADD</button>
                    </div>
                </div>
            </div>
    )
}

export default RestaurantMenuList
