import salonApi from '../api/salonApi'
import { salonTypes } from '../types'


export const getSalonData = (salonId) => {
  return {
    type: salonTypes.GET_SALON_DATA,
    payload: {
      request: {
        url: salonApi.GET_SALON_DATA,
        method: "get",
        params: {
          salonId: salonId,
        },
      }
    }
  }
};