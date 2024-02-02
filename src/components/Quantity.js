
import { useDispatch } from "react-redux";
import { increaseQuantity, decreaseQuantity, removeItem } from "../Utils/slices/cartSlice";


const Quantity = ({ index, id, num, setNum, setItemPrice }) => {


    const dispatch = useDispatch();

    const handleIncreaseQuantity = () => {
        dispatch(increaseQuantity({ index, setNum, setItemPrice }))
    }
    const handleDecreaseQuantity = () => {
        if (num === 1) {
            dispatch(removeItem(id))
        } else {
            dispatch(decreaseQuantity({ index, setNum, setItemPrice }))
        }
    }

    return (
        <div className='quantity'>
            <div onClick={handleDecreaseQuantity} className="decrease">-</div>
            <div className="no-of-quantity">{num}</div>
            <div onClick={handleIncreaseQuantity} className="increase">+</div>
        </div>
    )
}
export default Quantity;