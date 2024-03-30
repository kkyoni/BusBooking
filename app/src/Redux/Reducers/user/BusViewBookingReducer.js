import {
    BUS_VIEW_BOOKING_ERROR,
    BUS_VIEW_BOOKING_SUCCESS,
    BUS_VIEW_BOOKING_REQUEST,
} from "../../Types/user/Types";

const initialState = {
    error: "",
    bus_view_booking_data: "",
    loader: false,
};
const BusViewBookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUS_VIEW_BOOKING_SUCCESS:
            return {
                ...initialState.bus_view_booking_data,
                error: "",
                bus_view_booking_data: action.payload,
                loader: false,
            };
        case BUS_VIEW_BOOKING_ERROR:
            return {
                ...initialState.bus_view_booking_data,
                error: action.error,
                bus_view_booking_data: "",
                loader: false,
            };
        case BUS_VIEW_BOOKING_REQUEST:
            return {
                ...initialState.bus_view_booking_data,
                error: null,
                bus_view_booking_data: "",
                loader: true,
            };
        default:
            return state;
    }
};
export default BusViewBookingReducer;
