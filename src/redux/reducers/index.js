import { combineReducers } from "redux";
import changeCategoryReducer from "./changeCategoryReducer"
import categoryListReducer from './categoryListReducer'
import productListReducer from "./productListReducer"
import cartReducer from "./cartReducer"
//fonksiyonun içinde bi obje yerleştiriyorum

const rootReducer = combineReducers({
    changeCategoryReducer,
    categoryListReducer,
    productListReducer,
    cartReducer

})

export default rootReducer;