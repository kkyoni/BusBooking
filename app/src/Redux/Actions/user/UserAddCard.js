import { UserAddCardApi } from "../../Apis/user/ApiConfig";
import { USER_ADD_CARD_ERROR, USER_ADD_CARD_SUCCESS, USER_ADD_CARD_REQUEST } from "../../Types/user/Types";

export const UserAddCardSuccess = (res) => {
  return {
    type: USER_ADD_CARD_SUCCESS,
    payload: res,
  };
};
export const UserAddCardError = (error) => {
  return {
    type: USER_ADD_CARD_ERROR,
    error: error,
  };
};
export const UserAddCardRequest = (res) => {
  return {
    type: USER_ADD_CARD_REQUEST,
    payload: res,
  };
};

export const UserAddCardActionHandler = (data) => {
  return (dispatch) => {
    dispatch(UserAddCardRequest());
    try {
      UserAddCardApi(data)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(UserAddCardSuccess(res.data.data));
            } else {
              dispatch(UserAddCardError(errorMessage));
            }
          } else {
            dispatch(UserAddCardError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(UserAddCardError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(UserAddCardError(err));
    }
  };
};