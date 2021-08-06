import { cartTypes } from "../types"

const initState = {
    isOpen: false,
    items: [],
    isSalon: false,
    coupon: null,
    selectedTime: localStorage.getItem('selectedTime'),
    selectedDate: new Date() || localStorage.getItem('selectedDate'),
    retryCount: 0
}

export const cartItemsTotalPrice = (items, coupon = null) => {
    if (items === null || items.length === 0) return 0;
    const itemCost = items.reduce((total, item) => {
        if (item.salePrice) {
            return total + item.salePrice * item.quantity;
        }
        return total + item.price * item.quantity;
    }, 0);
    // const discountRate = 1 - discountInPercent;
    const discount = coupon
        ? (itemCost * Number(coupon.discountInPercent)) / 100
        : 0;
    // itemCost * discountRate * TAX_RATE + shipping;
    // return itemCost * discountRate;
    return itemCost - discount;
};

// cartItems, cartItemToAdd
const addItemToCart = (state, action) => {
    const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
    );

    if (existingCartItemIndex > -1) {
        const newState = [...state.items];
        newState[existingCartItemIndex].quantity += action.payload.quantity;
        return newState;
    }
    return [...state.items, action.payload];
};

// cartItems, cartItemToRemove
const removeItemFromCart = (state, action) => {
    return state.items.reduce((acc, item) => {
        if (item.id === action.payload.id) {
            const newQuantity = item.quantity - action.payload.quantity;

            return newQuantity > 0
                ? [...acc, { ...item, quantity: newQuantity }]
                : [...acc];
        }
        return [...acc, item];
    }, []);
};

const clearItemFromCart = (state, action) => {
    return state.items.filter((item) => item.id !== action.payload.id);
};

const cartReducer = (state = initState, action) => {


    const getDiscount = () => {
        const total = cartItemsTotalPrice(state.items);
        const discount = state.coupon
            ? (total * Number(state.coupon?.discountInPercent)) / 100
            : 0;
        return discount.toFixed(2);
    };
    switch (action.type) {
        case cartTypes.REHYDRATE: {
            return {
                ...state,
                ...action.payload
            }
        }

        case cartTypes.TOGGLE_CART: {
            return {
                ...state,
                isOpen: !state.isOpen
            }
        }

        case cartTypes.ADD_ITEM:
            return {
                ...state,
                items: action.payload.isNetworkApi ? action.payload.request.data.items : action.payload.data.items
            }

        case cartTypes.SELECT_APPOINTMENT_TIME:
            return {
                ...state,
                selectedTime: action.payload
            }

        case cartTypes.SELECT_APPOINTMENT_DATE:
            return {
                ...state,
                selectedDate: action.payload
            }


        // case cartTypes.ADD_ITEM_SUCCESS: {

        //     return {
        //         ...state,
        //         items: action.payload.data.data.items
        //     }
        // }
        // case cartTypes.ADD_ITEM_FAIL: {
        //     console.log('action', action.payload);

        //     return {
        //         ...state,
        //         items: action.payload.request.data.items
        //     }
        // }

        case cartTypes.UPDATE_CART_LOCALLY:
            return {
                ...state,
                items: action.payload.items
            }


        case cartTypes.GET_CART_SUCCESS:
            return {
                ...state,
                items: action.payload.data.data
            }


        // case cartTypes.ADD_ITEM_SUCCESS: {
        //     return {
        //         ...state,
        //         items: addItemToCart(state, action)
        //     }
        // }
        case cartTypes.REMOVE_ITEM:
            return {
                ...state,
                items: action.payload.isNetworkApi ? action.payload.request.data.items : action.payload.data.items
            }

        case cartTypes.TRANSFER_CART_SUCCESS:
            return {
                ...state,
                items: action.payload.data.data
            }

        // case cartTypes.REMOVE_ITEM_SUCCESS: {
        //     return {
        //         ...state,
        //         items: action.payload.data.data.items
        //     }
        // }
        case cartTypes.CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                items: action.payload.isNetworkApi ? action.payload.request.data.items : action.payload.data.items
            }
        }
        case cartTypes.CLEAR_CART: {
            return {
                ...state,
                items: []
            }
        }
        // case cartTypes.APPLY_COUPON: {
        //     return {
        //         ...state,
        //         coupon: action.payload
        //     }
        // }
        case cartTypes.APPLY_COUPON_SUCCESS:
            return {
                ...state,
                coupon: action.payload.data.data
            }

        case cartTypes.REMOVE_COUPON:
            return {
                ...state,
                coupon: null
            }

        case cartTypes.TOGGLE_RESTAURANT: {
            return {
                ...state,
                isRestaurant: !state.isRestaurant
            }
        }

        default:
            return state
    }
}

export default cartReducer