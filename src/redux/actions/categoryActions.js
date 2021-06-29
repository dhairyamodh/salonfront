import categoryApi from "../api/categoryApi";
import { categoryTypes } from '../types'

export const getCategory = (salonId, branchId, status) => {
    return {
        type: categoryTypes.GET_CATEGORIES,
        payload: {
            request: {
                url: categoryApi.GET_CATEGORIES,
                method: "get",
                params: {
                    salonId: salonId,
                    branchId: branchId,
                    status: status,
                },
            },
        },
    };
};