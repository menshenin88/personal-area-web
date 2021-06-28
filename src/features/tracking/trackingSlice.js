import { createSlice } from '@reduxjs/toolkit'

export const trackingSlice = createSlice({
    name: 'tracking',
    initialState: {
        myNumbers: [{
            trackingNumber: 'RP22593537',
            logisticsOrderCode: 'SBL21060001236194',
            weight: 640,
            weightUnit: 'g',
            bizType: 'SBER_COURIER',
            trackingDescription: 'Post final delivery',
            senderName: 'DECOS COMPANY LIMITED',
            buyerName: 'Андреева Ольга ',
            trackingHistory: [
              {
                opTime: '2021-06-05 15:18:29',
                timeZone: 'UTC',
                opLocation: 'MSK',
                trackingDescription: 'Post final delivery',
                status: 'EMI'
              },
              {
                opTime: '2021-06-04 21:22:07',
                timeZone: 'UTC',
                opLocation: 'MSK',
                trackingDescription: 'Post office of exchange out',
                status: 'EMF'
              },
              {
                opTime: '2021-06-02 05:00:46',
                timeZone: 'UTC',
                opLocation: 'https://cfapi.sberlogistics.ru',
                trackingDescription: 'Order created',
                status: 'NEW'
              },
              {
                opTime: '2021-06-02 05:00:45',
                timeZone: 'UTC',
                opLocation: 'https://cfapi.sberlogistics.ru',
                trackingDescription: 'Validation pending',
                status: 'PENDING'
              }
            ]
          },
          {
            trackingNumber: 'RP23018567',
            logisticsOrderCode: 'SBL21060001236203',
            weight: 8810,
            weightUnit: 'g',
            bizType: 'SBER_PARCEL',
            trackingDescription: 'Post final delivery',
            senderName: 'DECOS COMPANY LIMITED',
            buyerName: 'Пугачев Алексей ',
            trackingHistory: [
              {
                opTime: '2021-06-18 11:17:31',
                timeZone: 'UTC',
                opLocation: 'MSK',
                trackingDescription: 'Post final delivery',
                status: 'EMI'
              },
              {
                opTime: '2021-06-18 05:59:38',
                timeZone: 'UTC',
                opLocation: 'MSK',
                trackingDescription: 'Post office arrival',
                status: 'EMG'
              },
              {
                opTime: '2021-06-18 04:32:14',
                timeZone: 'UTC',
                opLocation: 'MSK',
                trackingDescription: 'Post office of exchange out',
                status: 'EMF'
              },
              {
                opTime: '2021-06-14 14:35:40',
                timeZone: 'UTC',
                opLocation: 'https://cfapi.sberlogistics.ru',
                trackingDescription: 'Order created',
                status: 'NEW'
              },
              {
                opTime: '2021-06-14 14:35:39',
                timeZone: 'UTC',
                opLocation: 'https://cfapi.sberlogistics.ru',
                trackingDescription: 'Validation pending',
                status: 'PENDING'
              }
            ]
        }],
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