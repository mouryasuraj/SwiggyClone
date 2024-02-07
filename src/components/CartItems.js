import VegIcon from './VegIcon'
import NonVegIcon from './NonVegIcon'
import Quantity from './Quantity'
import { menuListImgURL } from '../Utils/constant'
import { removeItem } from '../Utils/slices/cartSlice'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

const CartItems = ({ data, index }) => {

    const [num, setNum] = useState(1)

    const { name, id, price, defaultPrice, imageId = "5a148e63e9c54942e37627da1aa156be", isVeg, areaName = 'chembur' } = data?.card?.info

    const [itemPrice, setItemPrice] = useState((price || defaultPrice) / 100)

    const dispatch = useDispatch()
    const handleRemoveItem = (id) => {
        dispatch(removeItem(id))
    }

    return (
        <div className="cart-items">
            <div className="cart-item-left">
                <img src={menuListImgURL + imageId} alt="Dish Image" />
            </div>
            <div className="cart-item-right">
                <h3 className='cart-item-title'>{name}</h3>
                <div className='location'>
                    {isVeg ? <VegIcon /> : <NonVegIcon />}
                    <p>{areaName}</p>
                </div>
                <div className="item-quantity">
                    <Quantity index={index} num={num} setNum={setNum} setItemPrice={setItemPrice} />
                    <h4 className='price'><i className="fa-solid fa-indian-rupee-sign" />{((price || defaultPrice) / 100).toFixed(2)}</h4>
                </div>
                <h4 className='totalPrice price'>Total : <i className="fa-solid fa-indian-rupee-sign" />{itemPrice.toFixed(2)}</h4>
            </div>
            <div onClick={() => handleRemoveItem(id)} className="remove-item">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}
export default CartItems