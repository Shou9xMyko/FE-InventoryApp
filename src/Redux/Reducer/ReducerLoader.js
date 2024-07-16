import { LOADING } from "../Action/LoaderAction";

const initialState = {
  isLoading: false,
};

const Loader = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

export default Loader;
