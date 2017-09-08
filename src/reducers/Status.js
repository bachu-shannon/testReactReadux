import { ADD_USER_STATUS_FAILURE, ADD_USER_STATUS_SUCCESS } from '../constants/actionTypes';

const initialState = {
	error: '',
	success: ''
};

export default function addStatus(state= initialState, action) {
	switch(action.type) {
		case ADD_USER_STATUS_SUCCESS:
		case ADD_USER_STATUS_FAILURE:
            return {
				...state,
				...action.payload
			};
		default:
			return state;
	}
}