import checkoutApi from '../api/checkoutApi'
import { checkoutTypes } from '../types'


export const getAvailableTime = (salonId, branchId, date) => {
  return {
    type: checkoutTypes.GET_AVAILABLE_TIME,
    payload: {
      request: {
        url: checkoutApi.GET_AVAILABLE_TIME,
        method: "get",
        params: {
          salonId: salonId,
          branchId: branchId,
          date: date,
        },
      }
    }
  }
};


export const createOrder = (data) => {
  return {
    type: checkoutTypes.CREATE_ORDER,
    payload: {
      request: {
        url: checkoutApi.CREATE_ORDER,
        method: "post",
        data: data
      },
    },
  };
};

export const getOrderById = (salonId, data) => {
  return {
    type: checkoutTypes.GET_ORDER_BY_ID,
    payload: {
      request: {
        url: checkoutApi.GET_ORDER_BY_ID,
        method: "get",
        params: {
          salonId: salonId,
          data: data,
        },
      },
    },
  };
};