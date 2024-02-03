import { createSlice, current } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalPrice: 0,
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((c) => c?.card?.info?.id !== action.payload);
        },
        clearCart: (state) => {
            state.items.length = 0;
            state.totalPrice = 0;
        },
        increaseQuantity: (state, action) => {
            const { index, setNum, setItemPrice } = action.payload;
            const { price, defaultPrice } = state.items[index]?.card?.info
            setNum((prev) => prev + 1)
            setItemPrice((prev) => prev + (price || defaultPrice) / 100)
            state.totalPrice = state.totalPrice + price
        },
        decreaseQuantity: (state, action) => {
            const { index, setNum, setItemPrice } = action.payload;
            const { price, defaultPrice } = state.items[index]?.card?.info
            setNum((prev) => prev - 1)
            setItemPrice((prev) => prev - (price || defaultPrice) / 100)
            state.totalPrice = state.totalPrice - price
        }
    }
});

export const { addItem, removeItem, clearCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;