import {
    USER_CARD_DELETE_ERROR, USER_CARD_DELETE_SUCCESS, USER_CARD_DELETE_REQUEST
} from "../../Types/user/Types";

const initialState = {
    error: "",
    user_card_delete_data: "",
    loader: false,
};
const UserCardDeleteReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_CARD_DELETE_SUCCESS:
            return {
                ...initialState.user_card_delete_data,
                error: "",
                user_card_delete_data: action.payload,
                loader: false,
            };
        case USER_CARD_DELETE_ERROR:
            return {
                ...initialState.user_card_delete_data,
                error: action.error,
                user_card_delete_data: "",
                loader: false,
            };
        case USER_CARD_DELETE_REQUEST:
            return {
                ...initialState.user_card_delete_data,
                error: null,
                user_card_delete_data: "",
                loader: true,
            };
        default:
            return state;
    }
};
export default UserCardDeleteReducer;
