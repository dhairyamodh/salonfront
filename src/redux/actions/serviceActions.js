import serviceApi from "../api/serviceApi";
import { serviceTypes } from '../types'

export const getCategorySerivces = (salonId, branchId, categoryId, status, fetchLimit, page) => {
    return {
        type: serviceTypes.GET_CATEGORY_SERVICES,
        payload: {
            request: {
                url: serviceApi.GET_CATEGORY_SERVICES,
                method: "get",
                params: {
                    salonId: salonId,
                    branchId: branchId,
                    categoryId: categoryId,
                    status: status,
                    fetchLimit: fetchLimit,
                    page: page
                },
            },
        },
    };
};

export const getSerivceById = (salonId, branchId, id) => {
    return {
        type: serviceTypes.GET_SERVICE_BY_ID,
        payload: {
            request: {
                url: serviceApi.GET_SERVICE_BY_ID,
                method: "get",
                params: {
                    salonId: salonId,
                    branchId: branchId,
                    id: id,
                },
            },
        },
    };
};