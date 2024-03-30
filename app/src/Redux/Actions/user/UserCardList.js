import { UserCardListApi } from "../../Apis/user/ApiConfig";
import { USER_CARD_LIST_ERROR, USER_CARD_LIST_SUCCESS, USER_CARD_LIST_REQUEST } from "../../Types/user/Types";

export const UserCardListSuccess = (res) => {
  return {
    type: USER_CARD_LIST_SUCCESS,
    payload: res,
  };
};
export const UserCardListError = (error) => {
  return {
    type: USER_CARD_LIST_ERROR,
    error: error,
  };
};
export const UserCardListRequest = (res) => {
  return {
    type: USER_CARD_LIST_REQUEST,
    payload: res,
  };
};

export const UserCardListActionHandler = () => {
  return (dispatch) => {
    dispatch(UserCardListRequest());
    try {
      UserCardListApi()
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(UserCardListSuccess(res.data.data));
            } else {
              dispatch(UserCardListError(errorMessage));
            }
          } else {
            dispatch(UserCardListError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(UserCardListError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(UserCardListError(err));
    }
  };
};