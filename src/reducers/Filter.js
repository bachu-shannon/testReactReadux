import { FILTER_USER } from '../constants/actionTypes';

const initialState = '';

export default function filterUsers(state = initialState, action) {
    switch(action.type) {
        case FILTER_USER:
            return action.payload;
        default:
            return state;
    }
}