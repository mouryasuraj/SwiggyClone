import { createSlice, current } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [
        //     {
        //     card: {
        //         info: {
        //             name: 'Suraj',
        //             imageId: 'adfdsfs',
        //             price: 45000,
        //             isVeg: true,
        //             id: 12345,
        //             areaName: 'chembur'
        //         }
        //     }
        // }
        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload)
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((c)=> c.card.info.id !== action.payload    );
        },
        clearCart: (state) => {
            state.items.length = 0;
        }
    }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;