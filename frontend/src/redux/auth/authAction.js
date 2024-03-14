import {
  loginWithGoogleAPI,
  logoutAPI,
  refreshAPI,
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
} from "./authSlice";

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
