import *as types from './actionTypes'

const initstate = {
  loading: false,
  error: false,
  data: [],
};
export const productReducer = (state = initstate, action) => {
  const {type,payload}=action;
  switch (type) {
    case types.PRODUCT_LOADING:
      return { ...state,
         loading: payload
         };
    case types.PRODUCT_ERROR:
      return { ...state,
        loading: false,
        error: payload
         };
    case types.ADD_ALL_PRODUCTS:
      return { ...state,
        loading: false,
        error: false, 
        data: payload };
    default:
      return state;
  }
};
