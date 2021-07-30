import { offerDealTypes } from '../types'

const initState = {
    deals: [],
    offers: []
}

const offerDealReducer = (state = initState, action) => {
    switch (action.type) {

        case offerDealTypes.GET_DEALS_SUCCESS:
            return {
                ...state,
                deals: action.payload.data.data,
            };

        case offerDealTypes.GET_OFFERS_SUCCESS:
            return {
                ...state,
                offers: action.payload.data.data,
            };

        default:
            return state
    }
}

export default offerDealReducer