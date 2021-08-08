export const salonId = '60b5fe559b440625447b7b47'

export const languageTypes = {
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE"
}

export const authTypes = {
    SIGNIN: 'SIGNIN',
    SIGNIN_SUCCESS: 'SIGNIN_SUCCESS',
    SIGN_OUT: 'SIGN_OUT',
    SIGNUP: 'SIGNUP',
    LOGIN: 'LOGIN',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAIL: 'LOGIN_FAIL',
    REGISTER: 'REGISTER',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
    REGISTER_FAIL: 'REGISTER_FAIL',
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    GET_USER_DETAILS: 'GET_USER_DETAILS',
    GET_USER_DETAILS_SUCCESS: 'GET_USER_DETAILS_SUCCESS',
    GET_USER_DETAILS_FAIL: 'GET_USER_DETAILS_FAIL',
    FORGOTPASS: 'FORGOTPASS',

    UPDATE_USER_DETAILS: 'UPDATE_USER_DETAILS',
    UPDATE_USER_DETAILS_SUCCESS: 'UPDATE_USER_DETAILS_SUCCESS',
    UPDATE_USER_DETAILS_FAIL: 'UPDATE_USER_DETAILS_FAIL',

    GET_BOOKINGS: 'GET_BOOKINGS',
    GET_BOOKINGS_SUCCESS: 'GET_BOOKINGS_SUCCESS',
    GET_BOOKINGS_FAIL: 'GET_BOOKINGS_FAIL',
}

export const appTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM',
    SET_STICKY: 'SET_STICKY',
    REMOVE_STICKY: 'REMOVE_STICKY',
    SET_SIDEBAR_STICKY: 'SET_SIDEBAR_STICKY',
    REMOVE_SIDEBAR_STICKY: 'REMOVE_SIDEBAR_STICKY',
    TOGGLE_DRAWER: 'TOGGLE_DRAWER',
    TOGGLE_MODAL: 'TOGGLE_MODAL',
    NEWSLETTER_MODAL: 'NEWSLETTER_MODAL'
}

export const cartTypes = {
    REHYDRATE: 'REHYDRATE',
    TOGGLE_CART: 'TOGGLE_CART',
    UPDATE_CART_LOCALLY: 'UPDATE_CART_LOCALLY',
    ADD_ITEM: 'ADD_ITEM',
    ADD_ITEM_SUCCESS: 'ADD_ITEM_SUCCESS',
    ADD_ITEM_FAIL: 'ADD_ITEM_FAIL',
    REMOVE_ITEM: 'REMOVE_ITEM',
    REMOVE_ITEM_SUCCESS: 'REMOVE_ITEM_SUCCESS',
    REMOVE_ITEM_FAIL: 'REMOVE_ITEM_FAIL',
    CLEAR_ITEM_FROM_CART: 'CLEAR_ITEM_FROM_CART',
    TRANSFER_CART: 'TRANSFER_CART',
    TRANSFER_CART_SUCCESS: 'TRANSFER_CART_SUCCESS',
    TRANSFER_CART_FAIL: 'TRANSFER_CART_FAIL',
    CLEAR_CART: 'CLEAR_CART',
    GET_CART: 'GET_CART',
    GET_CART_SUCCESS: 'GET_CART_SUCCESS',
    GET_CART_FAIL: 'GET_CART_FAIL',
    APPLY_COUPON: 'APPLY_COUPON',
    APPLY_COUPON_SUCCESS: 'APPLY_COUPON_SUCCESS',
    APPLY_COUPON_FAIL: 'APPLY_COUPON_FAIL',
    REMOVE_COUPON: 'REMOVE_COUPON',
    TOGGLE_RESTAURANT: 'TOGGLE_RESTAURANT',
    SELECT_APPOINTMENT_TIME: 'SELECT_APPOINTMENT_TIME',
    SELECT_APPOINTMENT_DATE: 'SELECT_APPOINTMENT_DATE',
    SELECT_APPOINTMENT_ARTIST: 'SELECT_APPOINTMENT_ARTIST',

}

export const profileTypes = {
    HANDLE_ON_INPUT_CHANGE: 'HANDLE_ON_INPUT_CHANGE',
    ADD_OR_UPDATE_ADDRESS: 'ADD_OR_UPDATE_ADDRESS',
    DELETE_ADDRESS: 'DELETE_ADDRESS',
    ADD_CARD: 'ADD_CARD',
    DELETE_CARD: 'DELETE_CARD',
    SET_PRIMARY_CONTACT: 'SET_PRIMARY_CONTACT',
    SET_PRIMARY_ADDRESS: 'SET_PRIMARY_ADDRESS',
    SET_PRIMARY_SCHEDULE: 'SET_PRIMARY_SCHEDULE',
    SET_PRIMARY_CARD: 'SET_PRIMARY_CARD',
}

export const salonTypes = {
    GET_SALON_DATA: 'GET_SALON_DATA',
    GET_SALON_DATA_SUCCESS: 'GET_SALON_DATA_SUCCESS',
    GET_SALON_DATA_FAIL: 'GET_SALON_DATA_FAIL',
}

export const checkoutTypes = {
    GET_AVAILABLE_TIME: 'GET_AVAILABLE_TIME',
    GET_AVAILABLE_TIME_SUCCESS: 'GET_AVAILABLE_TIME_SUCCESS',
    GET_AVAILABLE_TIME_FAIL: 'GET_AVAILABLE_TIME_FAIL',

    GET_AVAILABLE_ARTIST: 'GET_AVAILABLE_ARTIST',
    GET_AVAILABLE_ARTIST_SUCCESS: 'GET_AVAILABLE_ARTIST_SUCCESS',
    GET_AVAILABLE_ARTIST_FAIL: 'GET_AVAILABLE_ARTIST_FAIL',

    CREATE_ORDER: "CREATE_ORDER",
    CREATE_ORDER_SUCCESS: "CREATE_ORDER_SUCCESS",
    CREATE_ORDER_FAIL: "CREATE_ORDER_FAIL",

    UPDATE_ORDER: "UPDATE_ORDER",
    UPDATE_ORDER_SUCCESS: "UPDATE_ORDER_SUCCESS",
    UPDATE_ORDER_FAIL: "UPDATE_ORDER_FAIL",


    GET_ORDER_BY_ID: 'GET_ORDER_BY_ID',
    GET_ORDER_BY_ID_SUCCESS: 'GET_ORDER_BY_ID_SUCCESS',
    GET_ORDER_BY_ID_FAIL: 'GET_ORDER_BY_ID_FAIL',
}

export const categoryTypes = {
    GET_CATEGORIES: "GET_CATEGORIES",
    GET_CATEGORIES_SUCCESS: "GET_CATEGORIES_SUCCESS",
    GET_CATEGORIES_FAIL: "GET_CATEGORIES_FAIL",
};

export const serviceTypes = {
    GET_SERVICES: "GET_SERVICES",
    GET_SERVICES_SUCCESS: "GET_SERVICES_SUCCESS",
    GET_SERVICES_FAIL: "GET_SERVICES_FAIL",

    GET_TRENDING_SERVICES: "GET_TRENDING_SERVICES",
    GET_TRENDING_SERVICES_SUCCESS: "GET_TRENDING_SERVICES_SUCCESS",
    GET_TRENDING_SERVICES_FAIL: "GET_TRENDING_SERVICES_FAIL",

    GET_CATEGORY_SERVICES: "GET_CATEGORY_SERVICES",
    GET_CATEGORY_SERVICES_SUCCESS: "GET_CATEGORY_SERVICES_SUCCESS",
    GET_CATEGORY_SERVICES_FAIL: "GET_CATEGORY_SERVICES_FAIL",

    GET_SERVICE_BY_ID: 'GET_SERVICE_BY_ID',
    GET_SERVICE_BY_ID_SUCCESS: 'GET_SERVICE_BY_ID_SUCCESS',
    GET_SERVICE_BY_ID_FAIL: 'GET_SERVICE_BY_ID_FAIL',

    SEARCH_SERVICE: 'SEARCH_SERVICE',
    SEARCH_SERVICE_SUCCESS: 'SEARCH_SERVICE_SUCCESS',
    SEARCH_SERVICE_FAIL: 'SEARCH_SERVICE_FAIL'
};

export const offerDealTypes = {
    GET_DEALS: 'GET_DEALS',
    GET_DEALS_SUCCESS: 'GET_DEALS_SUCCESS',
    GET_DEALS_FAIL: 'GET_DEALS_FAIL',

    GET_OFFERS: 'GET_OFFERS',
    GET_OFFERS_SUCCESS: 'GET_OFFERS_SUCCESS',
    GET_OFFERS_FAIL: 'GET_OFFERS_FAIL',
}
