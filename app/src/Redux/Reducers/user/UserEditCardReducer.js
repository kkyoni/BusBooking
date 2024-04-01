import {
    USER_EDIT_CARD_LIST_ERROR, USER_EDIT_CARD_LIST_SUCCESS, USER_EDIT_CARD_LIST_REQUEST
} from "../../Types/user/Types";

const initialState = {
    error: "",
    user_edit_card_list_data: "",
    loader: false,
};
const UserEditCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_EDIT_CARD_LIST_SUCCESS:
            return {
                ...initialState.user_edit_card_list_data,
                error: "",
                user_edit_card_list_data: action.payload,
                loader: false,
            };
        case USER_EDIT_CARD_LIST_ERROR:
            return {
                ...initialState.user_edit_card_list_data,
                error: action.error,
                user_edit_card_list_data: "",
                loader: false,
            };
        case USER_EDIT_CARD_LIST_REQUEST:
            return {
                ...initialState.user_edit_card_list_data,
                error: null,
                user_edit_card_list_data: "",
                loader: true,
            };
        default:
            return state;
    }
};
export default UserEditCardReducer;
