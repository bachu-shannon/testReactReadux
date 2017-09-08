import { ADD_USER_ERROR } from '../constants/actionTypes';

const initialState = '';

export default function errorStatus(state= initialState, action) {
	switch(action.type) {
		case ADD_USER_ERROR:
			return action.payload;
		default:
			return state;
	}
}