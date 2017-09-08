import { GET_USER, GET_USER_FAILURE } from '../constants/actionTypes';

const initialState = {
    user: {},
    failure: null
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
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}