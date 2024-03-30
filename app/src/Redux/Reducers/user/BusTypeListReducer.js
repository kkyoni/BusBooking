import {
    BUS_TYPE_LIST_ERROR,
    BUS_TYPE_LIST_SUCCESS,
    BUS_TYPE_LIST_REQUEST,
} from "../../Types/user/Types";

const initialState = {
    error: "",
    bus_type_list_data: "",
    loader: false,
};
const BusTypeListReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUS_TYPE_LIST_SUCCESS:
            return {
                ...initialState.bus_type_list_data,
                error: "",
                bus_type_list_data: action.payload,
                loader: false,
            };
        case BUS_TYPE_LIST_ERROR:
            return {
                ...initialState.bus_type_list_data,
                error: action.error,
                bus_type_list_data: "",
                loader: false,
            };
        case BUS_TYPE_LIST_REQUEST:
            return {
                ...initialState.bus_type_list_data,
                error: null,
                bus_type_list_data: "",
                loader: true,
            };
        default:
            return state;
    }
};
export default BusTypeListReducer;
