import {
    BUS_CONFIRM_DETAILS_LIST_ERROR, BUS_CONFIRM_DETAILS_LIST_SUCCESS, BUS_CONFIRM_DETAILS_LIST_REQUEST
} from "../../Types/user/Types";

const initialState = {
    error: "",
    bus_confirm_details_list_data: "",
    loader: false,
};
const BusConfirmDetailsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUS_CONFIRM_DETAILS_LIST_SUCCESS:
            return {
                ...initialState.bus_confirm_details_list_data,
                error: "",
                bus_confirm_details_list_data: action.payload,
                loader: false,
            };
        case BUS_CONFIRM_DETAILS_LIST_ERROR:
            return {
                ...initialState.bus_confirm_details_list_data,
                error: action.error,
                bus_confirm_details_list_data: "",
                loader: false,
            };
        case BUS_CONFIRM_DETAILS_LIST_REQUEST:
            return {
                ...initialState.bus_confirm_details_list_data,
                error: null,
                bus_confirm_details_list_data: "",
                loader: true,
            };
        default:
            return state;
    }
};
export default BusConfirmDetailsListReducer;
