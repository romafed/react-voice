import { combineReducers } from 'redux';
import dataReducer from './dataReducer';


const rootReduser = combineReducers({
    data: dataReducer
});
export default rootReduser;