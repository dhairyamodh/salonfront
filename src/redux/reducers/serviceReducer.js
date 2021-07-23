import { serviceTypes } from '../types'

const initState = {
    allServices: [],
    serviceDetails: undefined,
}

const serviceReducer = (state = initState, action) => {
    switch (action.type) {

        case serviceTypes.GET_TRENDING_SERVICES_SUCCESS:
            return {
                ...state,
                allServices: action.payload.data.data,

            };

        case serviceTypes.GET_CATEGORY_SERVICES_SUCCESS:
            return {
                ...state,
                allServices: action.payload.data.data,

            };

        case serviceTypes.GET_SERVICE_BY_ID_SUCCESS:
            return {
                ...state,
                serviceDetails: action.payload.data.data,
            };
        default:
            return state
    }
}

export default serviceReducer