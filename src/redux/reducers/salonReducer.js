import { salonTypes } from '../types'

const initState = {
    salonData: {},
}

const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case salonTypes.GET_SALON_DATA_SUCCESS:
            return {
                ...state,
                salonData: action.payload.data.data
            }
        default:
            return state
    }
}

export default shopReducer