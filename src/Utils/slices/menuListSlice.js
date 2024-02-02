import { createSlice } from "@reduxjs/toolkit";

const menuListSlice = createSlice({
    name: 'menuListSlice',
    initialState: {
        num: 1
    },
    reducers: {
        increaseQuantity: (state, action) => {
            console.log(action.payload);
        },
        decreaseQuantity: (state, action) => {

        }
    }
})

export const { increaseQuantity, decreaseQuantity } = menuListSlice.actions
export default menuListSlice.reducer;