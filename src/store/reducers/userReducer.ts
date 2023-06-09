import { userStore } from "./../../types/storeType";
import { Reducer } from "redux";
import { userAction } from "../../types/actionTypes";

const initialState: userStore = {
  user: {},
  loading: false,
  error: "",
};

const userReducer: Reducer<userStore> = (
  state = initialState,
  action: userAction
) => {
  switch (action.type) {
    case "GOT_USER":
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: "",
      };
    case "USER_PENDING":
      return {
        ...state,
        loading: true,
        error: "",
      };

    case "USER_ERROR":
      return {
        user: {},
        loading: false,
        error: action.payload,
      };
    default:
      return { ...state };
  }
};

export default userReducer;
