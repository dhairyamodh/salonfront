import { checkoutTypes } from '../types'

const initState = {
    availableTime: [],
}

const checkoutReducer = (state = initState, action) => {
    switch (action.type) {
        case checkoutTypes.GET_AVAILABLE_TIME_SUCCESS:
            return {
                ...state,
                availableTime: action.payload.data.data
            }
        default:
            return state
    }
}

export default checkoutReducer