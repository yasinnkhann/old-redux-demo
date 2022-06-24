import { CAPITALIZE_LETTERS } from '../actions/actionTypes';

const initialState = {
	value: '',
};

const capitalizeReducer = function (state = initialState, action) {
	switch (action.type) {
		case CAPITALIZE_LETTERS:
			return {
				...state,
				value: action.payload.toUpperCase(),
			};
		default:
			return state;
	}
};

export default capitalizeReducer;
