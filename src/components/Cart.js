import { useSelector, useDispatch } from 'react-redux'
import CartItems from './CartItems'
import { clearCart } from '../Utils/slices/cartSlice'
import { useEffect } from 'react'
import NavigateHome from './NavigateHome'
import BillDetails from './BillDetails'

const Cart = () => {


    const cartItems = useSelector((store) => store.cart.items)
    const finalPrice = useSelector((store) => store.cart.totalPrice)
    const cartLength = cartItems.length;
    let totalPrice = 0
    cartItems.forEach((p) => {
        totalPrice = totalPrice + Number(p.card.info.defaultPrice || p.card.info.price)
    })
    const total = (totalPrice + finalPrice) / 100
    const gst = (total * 5) / 100;



    const dispatch = useDispatch()
    const handleCart = () => {
        dispatch(clearCart())
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        if (cartLength) {
            const cartLastItem = document.querySelector('.cartItems').lastChild
            cartLastItem.style.borderBottom = '0'
            cartLastItem.style.paddingBottom = '0'
            cartLastItem.style.marginBottom = '0'
        }
    }, [])

    return (
        <div className="cart-container">
            <div className='cart-to-home'>
                <NavigateHome name='Cart' />
            </div>
            {
                cartLength
                    ? <div className="cart-items-container">
                        {/* CartItems */}
                        <div className='cartItems'>
                            {
                                cartItems.map((cartItem, index) => (
                                    <CartItems className="cartItems" key={cartItem?.card?.info?.id} data={cartItem} index={index} />
                                ))
                            }
                        </div>
                        {/* ClearCartButton */}
                        <button onClick={handleCart} className='clear-cart'><h4>Clear Cart</h4></button>
                        {/* Billing Details */}
                        <BillDetails total={total} gst={gst} />
                    </div>
                    : <h1 className='empty-cart'>Your cart is Empty.</h1>
            }


        </div>
    )
}
export default Cart;