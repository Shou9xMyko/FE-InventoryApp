import { LOGIN } from "../Action/LoginAction";

const initialState = {
  login_data: {},
};

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login_data: action.payload,
      };
    default:
      return state;
  }
};

export default LoginReducer;
