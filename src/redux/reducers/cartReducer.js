import { cartTypes } from "../types"

const initState = {
    isOpen: false,
    items: [],
    isRestaurant: false,
    coupon: null,
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
    const isInCartHandler = (id) => {
        return state.items?.some((item) => item.id === id);
    };
    const getItemHandler = (id) => {
        return state.items?.find((item) => item.id === id);
    };
    const getCartItemsPrice = () => cartItemsTotalPrice(state.items).toFixed(2);
    const getCartItemsTotalPrice = () =>
        cartItemsTotalPrice(state.items, state.coupon).toFixed(2);

    const getDiscount = () => {
        const total = cartItemsTotalPrice(state.items);
        const discount = state.coupon
            ? (total * Number(state.coupon?.discountInPercent)) / 100
            : 0;
        return discount.toFixed(2);
    };
    const getItemsCount = state.items?.reduce(
        (acc, item) => acc + item.quantity,
        0
    );
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

        case cartTypes.ADD_ITEM: {
            return {
                ...state,
                items: addItemToCart(state, action)
            }
        }
        case cartTypes.REMOVE_ITEM: {
            return {
                ...state,
                items: removeItemFromCart(state, action)
            }
        }
        case cartTypes.CLEAR_ITEM_FROM_CART: {
            return {
                ...state,
                items: clearItemFromCart(state, action)
            }
        }
        case cartTypes.CLEAR_CART: {
            return {
                ...state,
                items: []
            }
        }
        case cartTypes.APPLY_COUPON: {
            return {
                ...state,
                coupon: action.payload
            }
        }
        case cartTypes.REMOVE_COUPON: {
            return {
                ...state,
                coupon: null
            }
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