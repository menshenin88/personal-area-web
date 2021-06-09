import { configureStore } from '@reduxjs/toolkit'
import trackingReducer from '../features/tracking/trackingSlice'

export default configureStore({
  reducer: {
    tracking: trackingReducer,
  },
})