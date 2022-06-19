
import *as types from './actionTypes'


export const setProdLoading = (payload) => {
  return {
    type:types.PRODUCT_LOADING,
    payload: payload,
  };
};

export const setProdError = (err) => {
  return {
    type: types.PRODUCT_ERROR,
    payload: err,
  };
};

export const setAllProducts = (data) => {
  return {
    type:types.ADD_ALL_PRODUCTS,
    payload: data,
  };
};



export const getProducts = () => (dispatch) => {
  dispatch(setProdLoading(true));

  fetch("https://fraazo-clone.herokuapp.com/fraazo")
    .then((res) => res.json())
    .then((res) => dispatch(setAllProducts(res)))
    .catch((error) => dispatch(setProdError(error)));
};
