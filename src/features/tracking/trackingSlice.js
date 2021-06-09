import { createSlice } from '@reduxjs/toolkit'

export const trackingSlice = createSlice({
    name: 'tracking',
    initialState: {
        myNumbers: [],
    },
    reducers: {
        deleteNumber: (state, action) => {
            state.myNumbers = state.myNumbers.filter(item => item !== action.payload)
        },
        addNumber: (state, action) => {
            state.myNumbers = state.myNumbers.filter(item => item !== action.payload);
            state.myNumbers.push(action.payload)
        },
        addNumber: (state, action) => {
            console.log(state.myNumbers)
            if (!state.myNumbers.some(item => action.payload.trackingNumber === item.trackingNumber)) {
                state.myNumbers.push(action.payload)
        
            }
        },
    },
})

// Action creators are generated for each case reducer function
export const { deleteNumber, addNumber } = trackingSlice.actions

export default trackingSlice.reducer