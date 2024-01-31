import { useSelector, useDispatch } from 'react-redux'
import RestaurantCategory from './RestaurantCategory'
import { clearCart } from '../Utils/slices/cartSlice'
import { useEffect } from 'react'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const cartLength = cartItems.length;

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart())
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="cart-container">
            <div className='cart-header'>
                <h1>Cart</h1>
              {cartLength ? <button onClick={handleClearCart}>Clear Cart</button> : ''}
            </div>
            {cartLength ? <RestaurantCategory data={cartItems} /> : <h1>Your cart is empty.</h1>}
        </div>
    )
}
export default Cart;