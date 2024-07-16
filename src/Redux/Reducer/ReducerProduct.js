import { FETCH_DATA_PRODUCT, SEARCH_PRODUCT } from "../Action/ProductAction";

const initialState = {
  data_product: [],
};

const InventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_PRODUCT:
      return {
        ...state,
        data_product: action.payload,
      };
    case SEARCH_PRODUCT:
      return {
        ...state,
        data_product: action.payload,
      };
    default:
      return state;
  }
};

export default InventoryReducer;
