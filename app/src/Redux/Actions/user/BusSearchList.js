import { BusSearchListApi } from "../../Apis/user/ApiConfig";
import { BUS_SEARCH_LIST_SUCCESS, BUS_SEARCH_LIST_ERROR, BUS_SEARCH_LIST_REQUEST } from "../../Types/user/Types";

export const BusSearchListSuccess = (res) => {
    return {
        type: BUS_SEARCH_LIST_SUCCESS,
        payload: res,
    };
};
export const BusSearchListError = (error) => {
    return {
        type: BUS_SEARCH_LIST_ERROR,
        error: error,
    };
};
export const BusSearchListRequest = (res) => {
    return {
        type: BUS_SEARCH_LIST_REQUEST,
        payload: res,
    };
};

export const BusSearchListActionHandler = (from, to) => {
    return (dispatch) => {
        dispatch(BusSearchListRequest());
        try {
            BusSearchListApi(from, to)
                .then((res) => {
                    const errorMessage = res?.data?.message;
                    if (res) {
                        if (res && res.data && res.data.status === 'success') {
                            dispatch(BusSearchListSuccess(res.data.data));
                        } else {
                            dispatch(BusSearchListError(errorMessage));
                        }
                    } else {
                        dispatch(BusSearchListError(errorMessage));
                    }
                })
                .catch((err) => {
                    dispatch(BusSearchListError("Something Went Wrong!!!"));
                });
        } catch (err) {
            dispatch(BusSearchListError(err));
        }
    };
};