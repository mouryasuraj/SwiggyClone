import { useState } from "react";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenuList = ({ card }) => {
    const [showItems, setShowItems] = useState(true)

    const handleShowItems = () => {
        setShowItems(!showItems)
    }


    const { title, itemCards } = card?.card?.card
    return (
        <>
            <div style={showItems ? {borderBottom : '1px solid rgb(205,205,205)'} : {borderBottom: '0'}} className="res-dish-header" onClick={handleShowItems}>
                <h1>{title} ({itemCards.length})</h1>
                <div>{showItems ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}</div>
            </div>
            <div className="item-cards">
                {showItems && <RestaurantCategory data={itemCards} />}
            </div>
        </>
    )
}

export default RestaurantMenuList
