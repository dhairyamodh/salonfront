import { salonTypes } from '../types'

const initState = {
    salonId: undefined,
    salonData: {},
}

const shopReducer = (state = initState, action) => {
    switch (action.type) {
        case salonTypes.GET_SALON_DATA_SUCCESS:
            return {
                ...state,
                salonData: action.payload.data.data,
                salonId: action.payload.data.data._id
            }
        default:
            return state
    }
}

export default shopReducer