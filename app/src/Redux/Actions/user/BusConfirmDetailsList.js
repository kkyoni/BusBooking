import { BusConfirmDetailsListApi } from "../../Apis/user/ApiConfig";
import { BUS_CONFIRM_DETAILS_LIST_ERROR, BUS_CONFIRM_DETAILS_LIST_SUCCESS, BUS_CONFIRM_DETAILS_LIST_REQUEST } from "../../Types/user/Types";

export const BusConfirmDetailsListSuccess = (res) => {
  return {
    type: BUS_CONFIRM_DETAILS_LIST_SUCCESS,
    payload: res,
  };
};
export const BusConfirmDetailsListError = (error) => {
  return {
    type: BUS_CONFIRM_DETAILS_LIST_ERROR,
    error: error,
  };
};
export const BusConfirmDetailsListRequest = (res) => {
  return {
    type: BUS_CONFIRM_DETAILS_LIST_REQUEST,
    payload: res,
  };
};

export const BusConfirmDetailsListActionHandler = (busId) => {
  return (dispatch) => {
    dispatch(BusConfirmDetailsListRequest());
    try {
      BusConfirmDetailsListApi(busId)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(BusConfirmDetailsListSuccess(res.data));
            } else {
              dispatch(BusConfirmDetailsListError(errorMessage));
            }
          } else {
            dispatch(BusConfirmDetailsListError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(BusConfirmDetailsListError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(BusConfirmDetailsListError(err));
    }
  };
};