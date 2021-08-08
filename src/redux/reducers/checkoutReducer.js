import { checkoutTypes } from '../types'

const initState = {
    availableTime: [],
    availableArtist: [],
    orderData: undefined
}

const checkoutReducer = (state = initState, action) => {
    switch (action.type) {
        case checkoutTypes.GET_AVAILABLE_TIME_SUCCESS:
            return {
                ...state,
                availableTime: action.payload.data.data
            }

        case checkoutTypes.GET_AVAILABLE_ARTIST_SUCCESS:
            return {
                ...state,
                availableArtist: action.payload.data.data
            }

        case checkoutTypes.CREATE_ORDER_SUCCESS:
            return {
                ...state,
                orderData: action.payload.data.data,
            };

        case checkoutTypes.UPDATE_ORDER_SUCCESS:
            return {
                ...state,
                orderData: action.payload.data.data,
            };


        case checkoutTypes.GET_ORDER_BY_ID_SUCCESS:
            return {
                ...state,
                orderData: action.payload.data.data,
            };
        default:
            return state
    }
}

export default checkoutReducer