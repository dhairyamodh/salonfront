import offerDealApi from "../api/offerDealApi";
import { offerDealTypes } from '../types'

export const getDeals = (salonId, branchId, status) => {
    return {
        type: offerDealTypes.GET_DEALS,
        payload: {
            request: {
                url: offerDealApi.GET_DEALS,
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

export const getOffers = (salonId, branchId, status) => {
    return {
        type: offerDealTypes.GET_OFFERS,
        payload: {
            request: {
                url: offerDealApi.GET_OFFERS,
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