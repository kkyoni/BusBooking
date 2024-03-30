import {
    USER_ADD_CARD_ERROR, USER_ADD_CARD_SUCCESS, USER_ADD_CARD_REQUEST
} from "../../Types/user/Types";

const initialState = {
    error: "",
    user_add_card_data: "",
    loader: false,
};
const UserAddCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_ADD_CARD_SUCCESS:
            return {
                ...initialState.user_add_card_data,
                error: "",
                user_add_card_data: action.payload,
                loader: false,
            };
        case USER_ADD_CARD_ERROR:
            return {
                ...initialState.user_add_card_data,
                error: action.error,
                user_add_card_data: "",
                loader: false,
            };
        case USER_ADD_CARD_REQUEST:
            return {
                ...initialState.user_add_card_data,
                error: null,
                user_add_card_data: "",
                loader: true,
            };
        default:
            return state;
    }
};
export default UserAddCardReducer;
