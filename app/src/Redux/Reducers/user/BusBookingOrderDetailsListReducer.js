import {
    BUS_BOOKING_ORDER_LIST_ERROR, BUS_BOOKING_ORDER_LIST_SUCCESS, BUS_BOOKING_ORDER_LIST_REQUEST
} from "../../Types/user/Types";

const initialState = {
    error: "",
    bus_booking_order_list_data: "",
    loader: false,
};
const BusBookingOrderDetailsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUS_BOOKING_ORDER_LIST_SUCCESS:
            return {
                ...initialState.bus_booking_order_list_data,
                error: "",
                bus_booking_order_list_data: action.payload,
                loader: false,
            };
        case BUS_BOOKING_ORDER_LIST_ERROR:
            return {
                ...initialState.bus_booking_order_list_data,
                error: action.error,
                bus_booking_order_list_data: "",
                loader: false,
            };
        case BUS_BOOKING_ORDER_LIST_REQUEST:
            return {
                ...initialState.bus_booking_order_list_data,
                error: null,
                bus_booking_order_list_data: "",
                loader: true,
            };
        default:
            return state;
    }
};
export default BusBookingOrderDetailsListReducer;
