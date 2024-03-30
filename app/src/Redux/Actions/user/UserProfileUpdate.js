import { UserProfileUpdateApi } from "../../Apis/user/ApiConfig";
import { USER_PROFILE_UPDATE_ERROR, USER_PROFILE_UPDATE_SUCCESS, USER_PROFILE_UPDATE_REQUEST } from "../../Types/user/Types";

export const UserProfileUpdateSuccess = (res) => {
  return {
    type: USER_PROFILE_UPDATE_SUCCESS,
    payload: res,
  };
};
export const UserProfileUpdateError = (error) => {
  return {
    type: USER_PROFILE_UPDATE_ERROR,
    error: error,
  };
};
export const UserProfileUpdateRequest = (res) => {
  return {
    type: USER_PROFILE_UPDATE_REQUEST,
    payload: res,
  };
};

export const UserProfileUpdateActionHandler = (data) => {
  return (dispatch) => {
    dispatch(UserProfileUpdateRequest());
    try {
      UserProfileUpdateApi(data)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(UserProfileUpdateSuccess(res.data.data));
            } else {
              dispatch(UserProfileUpdateError(errorMessage));
            }
          } else {
            dispatch(UserProfileUpdateError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(UserProfileUpdateError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(UserProfileUpdateError(err));
    }
  };
};