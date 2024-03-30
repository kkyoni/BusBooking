import { BusOperatorsListApi } from "../../Apis/user/ApiConfig";
import { BUS_OPERATORS_LIST_ERROR, BUS_OPERATORS_LIST_SUCCESS, BUS_OPERATORS_LIST_REQUEST } from "../../Types/user/Types";

export const BusOperatorsListSuccess = (res) => {
    return {
        type: BUS_OPERATORS_LIST_SUCCESS,
        payload: res,
    };
};
export const BusOperatorsListError = (error) => {
    return {
        type: BUS_OPERATORS_LIST_ERROR,
        error: error,
    };
};
export const BusOperatorsListRequest = (res) => {
    return {
        type: BUS_OPERATORS_LIST_REQUEST,
        payload: res,
    };
};

export const BusOperatorsListActionHandler = () => {
    return (dispatch) => {
        dispatch(BusOperatorsListRequest());
        try {
            BusOperatorsListApi()
                .then((res) => {
                    const errorMessage = res?.data?.message;
                    if (res) {
                        if (res && res.data && res.data.status === 'success') {
                            dispatch(BusOperatorsListSuccess(res.data.data));
                        } else {
                            dispatch(BusOperatorsListError(errorMessage));
                        }
                    } else {
                        dispatch(BusOperatorsListError(errorMessage));
                    }
                })
                .catch((err) => {
                    dispatch(BusOperatorsListError("Something Went Wrong!!!"));
                });
        } catch (err) {
            dispatch(BusOperatorsListError(err));
        }
    };
};