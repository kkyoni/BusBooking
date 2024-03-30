import { BusBookingListApi } from "../../Apis/user/ApiConfig";
import { BUS_BOOKING_LIST_ERROR, BUS_BOOKING_LIST_SUCCESS, BUS_BOOKING_LIST_REQUEST } from "../../Types/user/Types";

export const BusBookingListSuccess = (res) => {
  return {
    type: BUS_BOOKING_LIST_SUCCESS,
    payload: res,
  };
};
export const BusBookingListError = (error) => {
  return {
    type: BUS_BOOKING_LIST_ERROR,
    error: error,
  };
};
export const BusBookingListRequest = (res) => {
  return {
    type: BUS_BOOKING_LIST_REQUEST,
    payload: res,
  };
};

export const BusBookingListActionHandler = (from, to, newPage, price, busType, busOperators) => {
  return (dispatch) => {
    dispatch(BusBookingListRequest());
    try {
      BusBookingListApi(from, to, newPage, price, busType, busOperators)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(BusBookingListSuccess(res.data.data));
            } else {
              dispatch(BusBookingListError(errorMessage));
            }
          } else {
            dispatch(BusBookingListError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(BusBookingListError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(BusBookingListError(err));
    }
  };
};