import { combineReducers } from "redux";
import LoginReducer from "./common/LoginReducer";
import UserProfileReducer from "./user/UserProfileReducer";
import BusViewBookingReducer from "./user/BusViewBookingReducer";
import BusBookingListReducer from "./user/BusBookingListReducer";
import BusTypeListReducer from "./user/BusTypeListReducer";
import BusOperatorsListReducer from "./user/BusOperatorsListReducer";
import BusConfirmDetailsListReducer from "./user/BusConfirmDetailsListReducer";
import UserProfileUpdateReducer from "./user/UserProfileUpdateReducer";
import UserAddCardReducer from "./user/UserAddCardReducer";
import UserCardListReducer from "./user/UserCardListReducer";
import UserCardDeleteReducer from "./user/UserCardDeleteReducer";

const rootReducer = combineReducers({
    LoginData: LoginReducer,
    UserProfileData: UserProfileReducer,
    BusBookingListData: BusBookingListReducer,
    BusTypeListData: BusTypeListReducer,
    BusViewBookingData: BusViewBookingReducer,
    BusOperatorsListData: BusOperatorsListReducer,
    UserProfileUpdateData: UserProfileUpdateReducer,
    BusConfirmDetailsListData: BusConfirmDetailsListReducer,
    UserAddCardData: UserAddCardReducer,
    UserCardListData: UserCardListReducer,
    UserCardDeleteData: UserCardDeleteReducer,
});
export default rootReducer;
