import { useSelector, useDispatch } from 'react-redux'
import CartItems from './CartItems'
import { clearCart } from '../Utils/slices/cartSlice'
import { useEffect } from 'react'
import NavigateHome from './NavigateHome'

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)
    const cartLength = cartItems.length;

    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(clearCart())
    }


    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="cart-container">
            <div className='cart-to-home'>
                <NavigateHome name='Cart' />
            </div>
            {
                cartLength
                    ? <div className="cart-items-container">
                        {
                            cartItems.map((cartItem) => (
                                <CartItems key={cartItem?.card?.info?.id} data={cartItem} />
                            ))
                        }
                        <button onClick={handleCart} className='clear-cart'><h4>Clear Cart</h4></button>
                    </div>
                    : <h1 className='empty-cart'>Your cart is Empty.</h1>
            }

        </div>
    )
}
export default Cart;