import*as types from'./action.Types';

const initstate = {
  cartItems: [],
  loading: false,
};

export const cartReducer = (state = initstate, action) => {
  const{type,payload}=action;
  switch (type) {
    case types.CART_LOADING:
      return { ...state,
         loading: true
         };
    case types.ADD_ITEM_TO_CART:
      let flag = false;
      let arr = state.cartItems.map((el) => {
        if (el._id === payload._id) {
          el.cart = el.cart + 1;
          flag = true;
          return el;
        } else {
          return el;
        }
      });
      if (flag) {
        return { ...state,
          cartItems: arr };
      }
      return { ...state,
         cartItems: [...state.cartItems,
          payload] 
        };
      case types.REMOVE_ITEM_FROM_CART :
        return {...state,
        cartItems:state.cartItems.filter(el=>el._id!==payload._id)}
    case types.INCREMENT_CART_PROD:
      let data = state.cartItems.map((el) => {
        if (el._id === payload._id) {
          if(el.cart===5){
            return el;
          }
          el.cart = el.cart + 1;
          return el;
        } else {
          return el;
        }
      });
      return { ...state, cartItems: data };
    case types.DECREMENT_CART_PROD:
      let new_data = state.cartItems.map((el) => {
        if (el._id === payload._id) {
          el.cart = el.cart - 1;
          return el;
        } else {
          return el;
        }
      });
      data = new_data.filter((el) => el.cart !== 0);
      return { ...state, 
        cartItems: data };
      case types.CART_EMPTY:return {...state,
        cartItems:[]}
    default:
      return state;
  }
};
