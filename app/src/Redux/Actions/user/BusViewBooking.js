import { BusViewBookingApi } from "../../Apis/user/ApiConfig";
import { BUS_VIEW_BOOKING_ERROR, BUS_VIEW_BOOKING_SUCCESS, BUS_VIEW_BOOKING_REQUEST } from "../../Types/user/Types";

export const BusViewBookingSuccess = (res) => {
  return {
    type: BUS_VIEW_BOOKING_SUCCESS,
    payload: res,
  };
};
export const BusViewBookingError = (error) => {
  return {
    type: BUS_VIEW_BOOKING_ERROR,
    error: error,
  };
};
export const BusViewBookingRequest = (res) => {
  return {
    type: BUS_VIEW_BOOKING_REQUEST,
    payload: res,
  };
};

export const BusViewBookingActionHandler = (BusId) => {
  return (dispatch) => {
    dispatch(BusViewBookingRequest());
    try {
      BusViewBookingApi(BusId)
        .then((res) => {
          const errorMessage = res?.data?.message;
          if (res) {
            if (res && res.data && res.data.status === 'success') {
              dispatch(BusViewBookingSuccess(res.data.data));
            } else {
              dispatch(BusViewBookingError(errorMessage));
            }
          } else {
            dispatch(BusViewBookingError(errorMessage));
          }
        })
        .catch((err) => {
          dispatch(BusViewBookingError("Something Went Wrong!!!"));
        });
    } catch (err) {
      dispatch(BusViewBookingError(err));
    }
  };
};