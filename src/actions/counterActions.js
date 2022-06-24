import { INCREMENT, DECREMENT, RESET } from './actionTypes';

export const incrementCount = () => dispatch => {
	dispatch({
		type: INCREMENT,
	});
};

export const decrementCount = () => dispatch => {
	dispatch({
		type: DECREMENT,
	});
};

export const resetCount = () => dispatch => {
	dispatch({
		type: RESET,
	});
};
