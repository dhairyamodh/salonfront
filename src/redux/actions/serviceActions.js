import serviceApi from "../api/serviceApi";
import { serviceTypes } from '../types'

export const getTrendingSerivces = (salonId, branchId, status) => {
    return {
        type: serviceTypes.GET_TRENDING_SERVICES,
        payload: {
            request: {
                url: serviceApi.GET_TRENDING_SERVICES,
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

export const searchService = (salonId, branchId, term) => {
    return {
        type: serviceTypes.SEARCH_SERVICE,
        payload: {
            request: {
                url: serviceApi.SEARCH_SERVICE,
                method: "get",
                params: {
                    salonId: salonId,
                    branchId: branchId,
                    data: term,
                },
            },
        },
    };
};