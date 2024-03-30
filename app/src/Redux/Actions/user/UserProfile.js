import { UserProfileApi } from "../../Apis/user/ApiConfig";
import { USER_PROFILE_ERROR, USER_PROFILE_SUCCESS, USER_PROFILE_REQUEST } from "../../Types/user/Types";

export const UserProfileSuccess = (res) => {
  return {
    type: USER_PROFILE_SUCCESS,
    payload: res,
  };
};
export const UserProfileError = (error) => {
  return {
    type: USER_PROFILE_ERROR,
    error: error,
  };
};
export const UserProfileRequest = (res) => {
  return {
    type: USER_PROFILE_REQUEST,
    payload: res,
  };
};

export const UserProfileActionHandler = () => {
  return (dispatch) => {
    dispatch(UserProfileRequest());
    try {
      UserProfileApi()
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(UserProfileSuccess(res.data.data));
            } else {
              dispatch(UserProfileError(errorMessage));
            }
          } else {
            dispatch(UserProfileError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(UserProfileError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(UserProfileError(err));
    }
  };
};