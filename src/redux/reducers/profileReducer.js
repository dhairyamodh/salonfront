import { appTypes } from "../types"

const initState = {
    data: {
        id: 'asdasd',
        name: 'asdasd',
        email: 'asdasd',
        contact: 'asdasd',
        card: [
            {
                id: 'sds',
                type: 'sds',
                cardType: 'visa',
                name: 'sds',
                lastFourDigit: 'sds',
            }
        ]
    },
    error: '',
    loading: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case appTypes.SET_SEARCH_TERM: {
            return {
                ...state,
                searchTerm: action.payload,
            }
        }

        case appTypes.SET_STICKY: {
            return {
                ...state,
                isSticky: true,
            }
        }

        case appTypes.REMOVE_STICKY: {
            return {
                ...state,
                isSticky: false,
            }
        }
        case appTypes.SET_SIDEBAR_STICKY: {
            return {
                ...state,
                isSidebarSticky: true,
            }
        }
        case appTypes.REMOVE_SIDEBAR_STICKY: {
            return {
                ...state,
                isSidebarSticky: false,
            }
        }
        case appTypes.TOGGLE_DRAWER: {
            return {
                ...state,
                isDrawerOpen: !state.isDrawerOpen,
            }
        }
        case appTypes.TOGGLE_MODAL: {
            return {
                ...state,
                isModalOpen: !state.isModalOpen,
            }
        }


        default:
            return state
    }
}

export default authReducer