import { combineReducers } from 'redux';
import userSlice from './slices/userSlice';
import timerSlice from './slices/timerSlice';
import IpSlices from './slices/ipSlice';


const rootReducer = combineReducers({
 user: userSlice,
 timer: timerSlice,
 Ip: IpSlices,
});

export default rootReducer;
