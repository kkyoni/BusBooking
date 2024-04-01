import { BusBookingOrderDetailsListApi } from "../../Apis/user/ApiConfig";
import { BUS_BOOKING_ORDER_LIST_ERROR, BUS_BOOKING_ORDER_LIST_SUCCESS, BUS_BOOKING_ORDER_LIST_REQUEST } from "../../Types/user/Types";

export const BusBookingOrderDetailsListSuccess = (res) => {
    return {
        type: BUS_BOOKING_ORDER_LIST_SUCCESS,
        payload: res,
    };
};
export const BusBookingOrderDetailsListError = (error) => {
    return {
        type: BUS_BOOKING_ORDER_LIST_ERROR,
        error: error,
    };
};
export const BusBookingOrderDetailsListRequest = (res) => {
    return {
        type: BUS_BOOKING_ORDER_LIST_REQUEST,
        payload: res,
    };
};

export const BusBookingOrderDetailsListActionHandler = (type, count) => {
    return (dispatch) => {
        dispatch(BusBookingOrderDetailsListRequest());
        try {
            BusBookingOrderDetailsListApi(type, count)
                .then((res) => {
                    const errorMessage = res?.data?.message;
                    if (res) {
                        if (res && res.data && res.data.status === 'success') {
                            dispatch(BusBookingOrderDetailsListSuccess(res.data));
                        } else {
                            dispatch(BusBookingOrderDetailsListError(errorMessage));
                        }
                    } else {
                        dispatch(BusBookingOrderDetailsListError(errorMessage));
                    }
                })
                .catch((err) => {
                    dispatch(BusBookingOrderDetailsListError("Something Went Wrong!!!"));
                });
        } catch (err) {
            dispatch(BusBookingOrderDetailsListError(err));
        }
    };
};