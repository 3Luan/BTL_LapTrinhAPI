import { toast } from "react-toastify";
import { getUserByIdAPI } from "../../services/userService";
import {
  GET_USER_BY_ID,
  GET_USER_BY_ID_ERROR,
  GET_USER_BY_ID_SUCCESS,
} from "./userSlice";

export const handleGetUserById = (userId) => {
  return async (dispatch, getState) => {
    dispatch(GET_USER_BY_ID());

    let res = await getUserByIdAPI(userId);

    console.log("res: ");

    if (res) {
      if (res.code === 0) {
        dispatch(GET_USER_BY_ID_SUCCESS(res.user));
      } else {
        dispatch(GET_USER_BY_ID_ERROR());
      }
    } else {
      toast.error("Error handleGetUserById");
      dispatch(GET_USER_BY_ID_ERROR());
    }
  };
};
