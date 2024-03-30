import { UserCardDeleteApi } from "../../Apis/user/ApiConfig";
import { USER_CARD_DELETE_ERROR, USER_CARD_DELETE_SUCCESS, USER_CARD_DELETE_REQUEST } from "../../Types/user/Types";

export const UserCardDeleteSuccess = (res) => {
  return {
    type: USER_CARD_DELETE_SUCCESS,
    payload: res,
  };
};
export const UserCardDeleteError = (error) => {
  return {
    type: USER_CARD_DELETE_ERROR,
    error: error,
  };
};
export const UserCardDeleteRequest = (res) => {
  return {
    type: USER_CARD_DELETE_REQUEST,
    payload: res,
  };
};

export const UserCardDeleteActionHandler = (cardId) => {
  return (dispatch) => {
    dispatch(UserCardDeleteRequest());
    try {
      UserCardDeleteApi(cardId)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(UserCardDeleteSuccess(res.data));
            } else {
              dispatch(UserCardDeleteError(errorMessage));
            }
          } else {
            dispatch(UserCardDeleteError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(UserCardDeleteError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(UserCardDeleteError(err));
    }
  };
};