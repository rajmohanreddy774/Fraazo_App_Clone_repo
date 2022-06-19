import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { productReducer } from "./products/reducer";

import { cartReducer } from "./cart/reducer";


const rootReducer = combineReducers({
  product: productReducer,
  cart: cartReducer,

 
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk)
  )
);


