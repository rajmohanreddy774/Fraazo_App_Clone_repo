import*as types from'./action.Types';

export const addItemToCart = (payload) => {
  return {
    type: types.ADD_ITEM_TO_CART,
    payload: { ...payload, cart: 1 },
  };
};

export const removeItemFromCart = (payload) => {
  return {
    type: types.REMOVE_ITEM_FROM_CART,
    payload:payload
  }
}

export const incrementCartProd = (payload) => {
  return {
    type:types.INCREMENT_CART_PROD,
    payload: payload,
  };
};

export const decrementCartProd = (payload) => {
  return {
    type: types.DECREMENT_CART_PROD,
    payload: payload,
  };
};

export const cartLoading = (payload) => {
  return {
    type: types.CART_LOADING,
    payload: payload,
  };
};

export const cartEmpty = () => {
  return {
    type: types.CART_EMPTY,
  }
}

