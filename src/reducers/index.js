import {combineReducers} from 'redux';

import items from "./itemsReducer";
import selectedItem from "./itemReducer";
// import filters from "./filtersReducer";

export default combineReducers({
  items,
  selectedItem,
})
