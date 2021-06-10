import { profileTypes } from "../types";

export const handleOnInputChange = (value) => {
  return {
    type: profileTypes.HANDLE_ON_INPUT_CHANGE,
    payload: value
  }
};

export const addCard = () => {
  return {
    type: profileTypes.ADD_CARD,
  }
};

export const deleteCard = () => {
  return {
    type: profileTypes.DELETE_CARD,
  }
};

export const setPrimaryContact = () => {
  return {
    type: profileTypes.SET_PRIMARY_CONTACT,
  }
};

export const setPrimaryContact = () => {
  return {
    type: profileTypes.SET_PRIMARY_CONTACT,
  }
};

export const setPrimaryCard = () => {
  return {
    type: profileTypes.SET_PRIMARY_CARD,
  }
};
