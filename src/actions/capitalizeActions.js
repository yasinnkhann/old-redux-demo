import { CAPITALIZE_LETTERS } from './actionTypes';

export const capitalizeLetters = letters => dispatch => {
	dispatch({
		type: CAPITALIZE_LETTERS,
		payload: letters,
	});
};
