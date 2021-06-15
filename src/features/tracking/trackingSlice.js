import { createSlice } from '@reduxjs/toolkit'

export const trackingSlice = createSlice({
    name: 'tracking',
    initialState: {
        myNumbers: [],
        termsAccepted: false
    },
    reducers: {
        deleteNumber: (state, action) => {
            console.log(state.myNumbers)
            state.myNumbers = state.myNumbers.filter(item => item.trackingNumber !== action.payload)
        },
        addNumber: (state, action) => {
            state.myNumbers = state.myNumbers.filter(item => item !== action.payload);
            state.myNumbers.push(action.payload)
        },
        acceptTerms: (state, action) => {
            state.termsAccepted = true
        },
        declineTerms: (state, action) => {
            state.termsAccepted = false
        }
    },
})

// Action creators are generated for each case reducer function
export const { deleteNumber, addNumber, acceptTerms, declineTerms } = trackingSlice.actions

export default trackingSlice.reducer