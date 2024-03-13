import { toast } from "react-toastify";
import {
  loginAPI,
  loginWithGoogleAPI,
  logoutAPI,
  refreshAPI,
  registerAPI,
} from "../../services/authService";
import {
  login,
  loginError,
  loginSuccess,
  logout,
  logoutError,
  logoutSuccess,
  refresh,
  refreshError,
  refreshSuccess,
  register,
  registerError,
  registerSuccess,
} from "./authSlice";

export const handleRegister = (name, email, password) => {
  return async (dispatch, getState) => {
    dispatch(register());

    let res = await registerAPI(name, email, password);

    if (res && res.data) {
      if (res.data.errCode === 0) {
        // Đăng ký thành công
        toast.success(res.data.message);
        dispatch(registerSuccess(res.data));
      } else if (res.data.errCode === 1) {
        // Đăng ký thất bại
        toast.error(res.data.message);
        dispatch(registerError());
      }
    } else {
      // Đăng ký thất bại
      toast.error("Error handeRegister");
      dispatch(registerError());
    }
  };
};

export const handleLoginWithGoogle = () => {
  return async (dispatch, getState) => {
    dispatch(login());

    let res = await loginWithGoogleAPI();

    // if (res) {
    //   if (res.code === 0) {
    //     // Đăng nhập thành công
    //     toast.success(res.message);
    //     dispatch(loginSuccess(res.user));
    //   } else if (res.code === 1) {
    //     // Đăng nhập thất bại
    //     toast.error(res.message);
    //     dispatch(loginError(res.message));
    //   }
    // } else {
    //   // Đăng nhập thất bại
    //   toast.error("Lỗi server: (handleLogin)");
    //   dispatch(loginError());
    // }
  };
};

export const handleRefresh = () => {
  return async (dispatch, getState) => {
    dispatch(refresh());

    let res = await refreshAPI();

    if (res) {
      if (res.code === 0) {
        // Lấy dữ liệu user login khi refresh thành công
        dispatch(refreshSuccess(res.user));
      } else {
        // Lấy dữ liệu user login khi refresh thất bại
        dispatch(refreshError());
      }
    } else {
      // Lấy dữ liệu user login khi refresh thất bại
      dispatch(refreshError());
    }
  };
};

export const handleLogout = () => {
  return async (dispatch, getState) => {
    dispatch(logout());

    let res = await logoutAPI();

    if (res && res.data) {
      if (res.data.errCode === 0) {
        dispatch(logoutSuccess());
      } else if (res.data.errCode === 1) {
        dispatch(logoutError());
      }
    } else {
      dispatch(logoutError());
    }
  };
};
