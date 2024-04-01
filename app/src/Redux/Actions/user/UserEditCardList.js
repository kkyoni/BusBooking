import { UserEditCardListApi } from "../../Apis/user/ApiConfig";
import { USER_EDIT_CARD_LIST_ERROR, USER_EDIT_CARD_LIST_SUCCESS, USER_EDIT_CARD_LIST_REQUEST } from "../../Types/user/Types";

export const UserEditCardListSuccess = (res) => {
  return {
    type: USER_EDIT_CARD_LIST_SUCCESS,
    payload: res,
  };
};
export const UserEditCardListError = (error) => {
  return {
    type: USER_EDIT_CARD_LIST_ERROR,
    error: error,
  };
};
export const UserEditCardListRequest = (res) => {
  return {
    type: USER_EDIT_CARD_LIST_REQUEST,
    payload: res,
  };
};

export const UserEditCardListActionHandler = (cardId) => {
  return (dispatch) => {
    dispatch(UserEditCardListRequest());
    try {
      UserEditCardListApi(cardId)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(UserEditCardListSuccess(res.data.data));
            } else {
              dispatch(UserEditCardListError(errorMessage));
            }
          } else {
            dispatch(UserEditCardListError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(UserEditCardListError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(UserEditCardListError(err));
    }
  };
};