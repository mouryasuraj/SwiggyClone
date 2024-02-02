import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './slices/cartSlice'
import menuListReducer from './slices/menuListSlice'

const appStore = configureStore({
    reducer: {
        cart: cartReducer,
        menuList: menuListReducer
    }
});
export default appStore;