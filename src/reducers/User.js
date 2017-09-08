import { GET_USER, GET_USER_FAILURE } from '../constants/actionTypes';

const initialState = {
    user: {},
    failure: false
};

export default function getUser(state = initialState, action) {
    switch(action.type) {
        case GET_USER:
            return {
                ...state,
                ...action.payload
            };
        case GET_USER_FAILURE:
            return {
                failure: action.payload.failure
            };
        default:
            return state;
    }
}