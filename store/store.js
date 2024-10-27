// store/store.js
import Loginreducer from './reducers/loginReducer';
import { configureStore } from '@reduxjs/toolkit';
import { formReducer } from './reducers/registerReducer';
import MyProfile from './reducers/MyProfile';
import allUsersReducer from './reducers/GetingAlluser';
import userByIdReducer from './reducers/GetingUserByIdReducer';
import GetShortlistList from './reducers/GetShortlistList';
import NotificationReducer from './reducers/NotificationReducer';
import userReducer from './reducers/UserReducers';
import { imageReducer } from './reducers/UploadImagereducer';
import { searchformReducer } from './reducers/SearchUsersReducer';
import Userseting from './reducers/UserSettingReducer';
import SafetyConsentReducer from './reducers/safetyConsentReducer';
import AuthReducer from './reducers/Authreducer';
import SpamuserSlice from './reducers/SpamReportReducer'
import UserStoryView from './reducers/UserStoryView';
import UpgradePlansReducer from './reducers/UpgradeReducer';
import SignupReducer from './reducers/SignUpReducer';
import UserSentRequestGetSlice from './matrimoney-services/slices/UserSentRequestPagination'
import getShortlistUsersSlice from './matrimoney-services/slices/getShortlistUsersSlice';
import { DatingformReducer } from './dating-services/Redux-reducer/register/datingRegisterReducer';
import GetDatingUsersReducer from './dating-services/Redux-reducer/home/DatingUsersReducer';
import datinguserReducer from './dating-services/Redux-reducer/home/MyprofileReducer'
import datinguserSlice from './dating-services/Redux-reducer/home/datinguserSlice';
import Datingcategoryreducer from './dating-services/Redux-reducer/home/DatingcategoryReducer';
import GetProfileCounts from './matrimoney-services/reducers/GetProfileCountsReducer';
import Kycdocumentsreducer from './reducers/KycDocumentsReducer';
// import { datinguserSlice } from './dating-services/Redux-reducer/home/datinguserSlice';
// import { datinguserSlice } fro./dating-services/Redux-reducer/home/datinguserSlicecer';
// import FetchDatingUsersReducer from './dating-services/Redux-reducer/home/FetchDatingUsersReducer';


const datingReducers = {
  user: datinguserReducer,
  rangeuser: datinguserSlice,
  category: Datingcategoryreducer
};

const store = configureStore({
  reducer: {
    auth: AuthReducer,
    storyviews: UserStoryView,
    login: Loginreducer,
    uploadreducer: imageReducer,
    form: formReducer,
    Spamuser: SpamuserSlice,
    searchform: searchformReducer,
    myprofile: MyProfile,
    alluser: allUsersReducer,
    userById: userByIdReducer,
    shortlistdata: GetShortlistList,
    notificatin: NotificationReducer,
    userseting: Userseting,
    usersact: userReducer,
    upgradeplans: UpgradePlansReducer,
    chatSafetyConsent: SafetyConsentReducer,
    signUp: SignupReducer,
    getsentrequestdata: UserSentRequestGetSlice,
    shortlistusers: getShortlistUsersSlice,
    profilecount: GetProfileCounts,
    datingregister: DatingformReducer,
    datingusers: GetDatingUsersReducer,
    kyc: Kycdocumentsreducer,
    ...datingReducers
  },
});


export default store;


