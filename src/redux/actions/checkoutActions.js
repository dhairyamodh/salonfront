import checkoutApi from '../api/checkoutApi'
import { checkoutTypes } from '../types'


export const getAvailableArtist = (salonId, branchId, date) => {
  return {
    type: checkoutTypes.GET_AVAILABLE_ARTIST,
    payload: {
      request: {
        url: checkoutApi.GET_AVAILABLE_ARTIST,
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

export const getAvailableTime = (data) => {
  return {
    type: checkoutTypes.GET_AVAILABLE_TIME,
    payload: {
      request: {
        url: checkoutApi.GET_AVAILABLE_TIME,
        method: "post",
        data: data,

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

export const updateOrder = (data) => {
  return {
    type: checkoutTypes.UPDATE_ORDER,
    payload: {
      request: {
        url: checkoutApi.UPDATE_ORDER,
        method: "put",
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