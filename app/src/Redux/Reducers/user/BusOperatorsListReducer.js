import {
    BUS_OPERATORS_LIST_ERROR, BUS_OPERATORS_LIST_SUCCESS, BUS_OPERATORS_LIST_REQUEST
} from "../../Types/user/Types";

const initialState = {
    error: "",
    bus_operators_list_data: "",
    loader: false,
};
const BusOperatorsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUS_OPERATORS_LIST_SUCCESS:
            return {
                ...initialState.bus_operators_list_data,
                error: "",
                bus_operators_list_data: action.payload,
                loader: false,
            };
        case BUS_OPERATORS_LIST_ERROR:
            return {
                ...initialState.bus_operators_list_data,
                error: action.error,
                bus_operators_list_data: "",
                loader: false,
            };
        case BUS_OPERATORS_LIST_REQUEST:
            return {
                ...initialState.bus_operators_list_data,
                error: null,
                bus_operators_list_data: "",
                loader: true,
            };
        default:
            return state;
    }
};
export default BusOperatorsListReducer;
