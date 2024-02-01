import VegIcon from './VegIcon'
import NonVegIcon from './NonVegIcon'
import Quantity from './Quantity'
import { menuListImgURL } from '../Utils/constant'
import { removeItem } from '../Utils/slices/cartSlice'
import { useDispatch } from 'react-redux'

const CartItems = ({ data }) => {
    const { name, id, price, defaultPrice, imageId = "5a148e63e9c54942e37627da1aa156be", isVeg, areaName = 'chembur' } = data?.card?.info
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
                    <Quantity />
                    <h4 className='price'><i className="fa-solid fa-indian-rupee-sign" />{(defaultPrice || price) / 100}</h4>
                </div>
            </div>
            <div onClick={() => handleRemoveItem(id)} className="remove-item">
                <i class="fa-solid fa-trash"></i>
            </div>
        </div>
    )
}
export default CartItems