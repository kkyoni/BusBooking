import { UserChangePasswordApi } from "../../Apis/user/ApiConfig";
import { USER_CHANGE_PASSWORD_ERROR, USER_CHANGE_PASSWORD_SUCCESS, USER_CHANGE_PASSWORD_REQUEST } from "../../Types/user/Types";

export const UserChangePasswordSuccess = (res) => {
  return {
    type: USER_CHANGE_PASSWORD_SUCCESS,
    payload: res,
  };
};
export const UserChangePasswordError = (error) => {
  return {
    type: USER_CHANGE_PASSWORD_ERROR,
    error: error,
  };
};
export const UserChangePasswordRequest = (res) => {
  return {
    type: USER_CHANGE_PASSWORD_REQUEST,
    payload: res,
  };
};

export const UserChangePasswordActionHandler = (data) => {
  return (dispatch) => {
    dispatch(UserChangePasswordRequest());
    try {
      UserChangePasswordApi(data)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(UserChangePasswordSuccess(res.data));
            } else {
              dispatch(UserChangePasswordError(errorMessage));
            }
          } else {
            dispatch(UserChangePasswordError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(UserChangePasswordError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(UserChangePasswordError(err));
    }
  };
};