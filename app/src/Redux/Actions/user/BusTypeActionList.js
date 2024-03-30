import { BusTypeListApi } from "../../Apis/user/ApiConfig";
import { BUS_TYPE_LIST_ERROR, BUS_TYPE_LIST_SUCCESS, BUS_TYPE_LIST_REQUEST } from "../../Types/user/Types";

export const BusTypeListSuccess = (res) => {
    return {
        type: BUS_TYPE_LIST_SUCCESS,
        payload: res,
    };
};
export const BusTypeListError = (error) => {
    return {
        type: BUS_TYPE_LIST_ERROR,
        error: error,
    };
};
export const BusTypeListRequest = (res) => {
    return {
        type: BUS_TYPE_LIST_REQUEST,
        payload: res,
    };
};

export const BusTypeListActionHandler = () => {
    return (dispatch) => {
        dispatch(BusTypeListRequest());
        try {
            BusTypeListApi()
                .then((res) => {
                    const errorMessage = res?.data?.message;
                    if (res) {
                        if (res && res.data && res.data.status === 'success') {
                            dispatch(BusTypeListSuccess(res.data.data));
                        } else {
                            dispatch(BusTypeListError(errorMessage));
                        }
                    } else {
                        dispatch(BusTypeListError(errorMessage));
                    }
                })
                .catch((err) => {
                    dispatch(BusTypeListError("Something Went Wrong!!!"));
                });
        } catch (err) {
            dispatch(BusTypeListError(err));
        }
    };
};