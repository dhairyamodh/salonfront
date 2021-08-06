import cartApi from '../api/cartApi'
import { addItemLocalToCart, removeItemLocalFromCart, clearItemLocalFromCart } from '../../helpers/cartHelpers'
import { cartTypes } from "../types"

const addItemHandler = (item, quantity = 1) => {
  return (dispatch, getState) => {
    const stateItems = getState().cart.items
    const { id: userId, isAuthenticated } = getState().auth
    const { _id: salonId } = getState().salon.salonData
    const updatedItems = addItemLocalToCart(stateItems, { ...item, quantity: quantity }, isAuthenticated)
    return dispatch({
      type: cartTypes.ADD_ITEM,
      payload: {
        ...(isAuthenticated ? {
          request: {
            url: cartApi.ADD_TO_CART,
            method: "post",
            data: { items: updatedItems, userId: userId, salonId: salonId }
          },
        } : {
          data: { items: updatedItems, message: `${item.name} added into cart` }
        }),
        isNetworkApi: isAuthenticated ? true : false,
      },
    })
  }
}

const transferItemHandler = (item, quantity = 1) => {
  return (dispatch, getState) => {
    const stateItems = getState().cart.items
    const { id: userId } = getState().auth
    const { _id: salonId } = getState().salon.salonData
    localStorage.setItem('localCart', JSON.stringify([]))
    return dispatch({
      type: cartTypes.TRANSFER_CART,
      payload: {
        request: {
          url: cartApi.TRANSFER_CART,
          method: "post",
          data: { items: stateItems, userId: userId, salonId: salonId }
        },

      },
    })
  }
}

export const getItemCart = () => {
  return (dispatch, getState) => {
    const state = getState()
    const { id: userId } = state.auth
    const { _id: salonId } = state.salon.salonData
    console.log('cartsalonId', salonId);
    return dispatch({
      type: cartTypes.GET_CART,
      payload: {
        request: {
          url: cartApi.GET_CART,
          method: "get",
          params: { userId: userId, salonId: salonId }
        },
      },
    })
  }
}

export const updateCartLocally = (items) => {
  return {
    type: cartTypes.UPDATE_CART_LOCALLY,
    payload: {
      items: items
    },
  }
}

const removeItemHandler = (item, quantity = 1) => {

  return (dispatch, getState) => {
    const stateItems = getState().cart.items
    const { id: userId, isAuthenticated } = getState().auth
    const { _id: salonId } = getState().salon.salonData
    const updatedItems = removeItemLocalFromCart(stateItems, { ...item, quantity: quantity }, isAuthenticated)
    return dispatch({
      type: cartTypes.REMOVE_ITEM,
      payload: {
        ...(isAuthenticated ? {
          request: {
            url: cartApi.REMOVE_TO_CART,
            method: "post",
            data: { items: updatedItems, userId: userId, salonId: salonId }
          },
        } : {
          data: { items: updatedItems, message: `${item.name} removed` }
        }),
        isNetworkApi: isAuthenticated ? true : false,

      },
    })
  }

};

const clearItemFromCartHandler = (item) => {
  return (dispatch, getState) => {
    const state = getState()
    const stateItems = state.cart.items
    const { id: userId, isAuthenticated } = state.auth
    const updatedItems = clearItemLocalFromCart(stateItems, item._id, isAuthenticated)
    const { _id: salonId } = state.salon.salonData
    return dispatch({
      type: cartTypes.CLEAR_ITEM_FROM_CART,
      payload: {
        ...(isAuthenticated ? {
          request: {
            url: cartApi.REMOVE_TO_CART,
            method: "post",
            data: { items: updatedItems, userId: userId, salonId: salonId }
          },
        } : {
          data: { items: updatedItems, message: `${item.name} removed` }
        }),
        isNetworkApi: isAuthenticated ? true : false,
      },
    })
  }
};

const applyCouponHandler = (coupon) => {
  return (dispatch, getState) => {
    const stateItems = getState().cart.items
    const { _id: salonId } = getState().salon.salonData
    return dispatch({
      type: cartTypes.APPLY_COUPON,
      payload: {
        request: {
          url: cartApi.APPLY_COUPON,
          method: "post",
          data: { coupon: coupon, salonId: salonId }
        },
      },
    })
  }
}

const clearCartHandler = () => {
  return { type: 'CLEAR_CART' }
};
const toggleCartHandler = () => {
  return { type: 'TOGGLE_CART' }
};
const couponHandler = (coupon) => {
  return { type: cartTypes.APPLY_COUPON, payload: coupon }
};
const removeCouponHandler = () => {
  return { type: cartTypes.REMOVE_COUPON }
};
const rehydrateLocalState = (payload) => {
  return { type: 'REHYDRATE', payload }
};
const toggleRestaurant = () => {
  return { type: 'TOGGLE_RESTAURANT' }
};
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
// const getItemsCount = state.items?.reduce(
//   (acc, item) => acc + item.quantity,
//   0
// );
export const selectAppointmentTime = (data) => {
  localStorage.setItem('selectedTime', data)
  return { type: cartTypes.SELECT_APPOINTMENT_TIME, payload: data }
}

export const selectAppointmentDate = (data) => {
  localStorage.setItem('selectedDate', data)

  return { type: cartTypes.SELECT_APPOINTMENT_DATE, payload: data }
}


export const cartItemsTotalPrice = (items, coupon) => {
  if (items === null || items.length === 0) return 0;
  const itemCost = items.reduce((total, item) => {

    return total + item.salePrice * item.quantity;

  }, 0);
  // const discountRate = 1 - discountInPercent;
  // const discount = 0
  const discount = coupon != null
    ? (itemCost * Number(coupon.dealDiscount)) / 100
    : 0;
  // itemCost * discountRate * TAX_RATE + shipping;
  // return itemCost * discountRate;
  return itemCost - discount;

};

export const addItem = addItemHandler
export const transferItem = transferItemHandler
export const removeItem = removeItemHandler
export const removeItemFromCart = clearItemFromCartHandler
export const clearCart = clearCartHandler
export const isInCart = isInCartHandler
export const getItem = getItemHandler
export const toggleCart = toggleCartHandler
export const calculatePrice = getCartItemsTotalPrice
export const calculateSubTotalPrice = getCartItemsPrice
export const applyCoupon = applyCouponHandler
export const removeCoupon = removeCouponHandler
export const calculateDiscount = getDiscount
// export default getItemsCount
