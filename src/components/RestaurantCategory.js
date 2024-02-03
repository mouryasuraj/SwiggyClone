import VegIcon from "./VegIcon";
import NonVegIcon from "./NonVegIcon";
import { menuListImgURL } from "../Utils/constant";
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../Utils/slices/cartSlice'
import { useContext } from "react";
import ShowMsgContext from "../Utils/context/showMsgContext";

const RestaurantCategory = ({ data }) => {

    const {showMsg,setShowSuccessMsg, itemInCart, setItemInCartMsg} = useContext(ShowMsgContext)

    const { items } = useSelector((store) => store.cart)
    const dispatch = useDispatch();

    const handleAddItemToCart = (card, id, index) => {
        const isItemInCart = items.some((c) => c.card.info.id === id);
        if (!isItemInCart) {
            dispatch(addItem(card))
            setShowSuccessMsg(true)
            setTimeout(() => {
                setShowSuccessMsg(false)
            }, 2000);
        } else {
            setItemInCartMsg(true);
            setTimeout(()=>{
                setItemInCartMsg(false)
            },2000)
        }
    }

    return (
        <>
            {
                data.map((card, index) => {
                    const { name, price, defaultPrice, description, imageId, isVeg, id } = card?.card?.info
                    return (
                        <div key={id} className="res-dish-list">
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
                                    {imageId ? <img src={menuListImgURL + imageId} alt="" /> : ''}
                                    <button onClick={() => handleAddItemToCart(card, id, index)}>ADD</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </>
    )
}

export default RestaurantCategory