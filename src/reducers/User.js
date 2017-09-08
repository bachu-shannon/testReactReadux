import { GET_USER } from '../constants/actionTypes';

const initialState = {};

export default function getUser(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return action.payload.user;
        default:
            return state;
    }
}