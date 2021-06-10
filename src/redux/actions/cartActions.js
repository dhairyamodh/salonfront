import { appTypes } from "../types";


const addItemHandler = (item, quantity = 1) => {
  return { type: 'ADD_ITEM', payload: { ...item, quantity } }
};

const removeItemHandler = (item, quantity = 1) => {
  return { type: 'REMOVE_ITEM', payload: { ...item, quantity } }
};

const clearItemFromCartHandler = (item) => {
  return { type: 'CLEAR_ITEM_FROM_CART', payload: item }
};

const clearCartHandler = () => {
  return { type: 'CLEAR_CART' }
};
const toggleCartHandler = () => {
  return { type: 'TOGGLE_CART' }
};
const couponHandler = (coupon) => {
  return { type: 'APPLY_COUPON', payload: coupon }
};
const removeCouponHandler = () => {
  return { type: 'REMOVE_COUPON' }
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



export const cartItemsTotalPrice = (items) => {
  if (items === null || items.length === 0) return 0;
  const itemCost = items.reduce((total, item) => {
    if (item.salePrice) {
      return total + item.salePrice * item.quantity;
    }
    return total + item.price * item.quantity;
  }, 0);
  // const discountRate = 1 - discountInPercent;
  const discount = 0
  // const discount = coupon
  //   ? (itemCost * Number(coupon.discountInPercent)) / 100
  //   : 0;
  // itemCost * discountRate * TAX_RATE + shipping;
  // return itemCost * discountRate;
  return itemCost - discount;
};



export const addItem = addItemHandler
export const removeItem = removeItemHandler
export const removeItemFromCart = clearItemFromCartHandler
export const clearCart = clearCartHandler
export const isInCart = isInCartHandler
export const getItem = getItemHandler
export const toggleCart = toggleCartHandler
export const calculatePrice = getCartItemsTotalPrice
export const calculateSubTotalPrice = getCartItemsPrice
export const applyCoupon = couponHandler
export const removeCoupon = removeCouponHandler
export const calculateDiscount = getDiscount
// export default getItemsCount
