import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import capitalizeReducer from './capitalizeReducer';

export default combineReducers({
	counter: counterReducer,
	capitalize: capitalizeReducer,
});
