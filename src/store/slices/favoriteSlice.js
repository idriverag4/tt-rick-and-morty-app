import { createSlice } from '@reduxjs/toolkit'

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        value: 0,
    },

    reducers: {
        increment: (state, action) => {
            state.value = action.payload +1;
          },
    },
})

export const { increment } = favoriteSlice.actions
