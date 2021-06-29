import { categoryTypes, serviceTypes } from '../types'

const initState = {
    allCategories: [],
    allServices: []
}

const categoryReducer = (state = initState, action) => {
    switch (action.type) {

        case categoryTypes.GET_CATEGORIES_SUCCESS:
            return {
                ...state,
                allCategories: action.payload.data.data,
            };

        default:
            return state
    }
}

export default categoryReducer