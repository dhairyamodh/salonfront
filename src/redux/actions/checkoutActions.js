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