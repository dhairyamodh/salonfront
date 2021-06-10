import { appTypes } from "../types";

export const setSearchTerm = (value) => {
  return {
    type: appTypes.SET_SEARCH_TERM,
    payload: value
  }
};

export const setSticky = () => {
  return {
    type: appTypes.SET_STICKY,
  }
};

export const setSideBarSticky = () => {
  return {
    type: appTypes.SET_SIDEBAR_STICKY,
  }
};

export const removeSidebarSticky = () => {
  return {
    type: appTypes.REMOVE_SIDEBAR_STICKY,
  }
};

export const toggleDrawer = () => {
  return {
    type: appTypes.TOGGLE_DRAWER,
  }
};

export const toggleModal = () => {
  return {
    type: appTypes.TOGGLE_MODAL,
  }
};
