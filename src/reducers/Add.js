import { ADD_USER } from '../constants/actionTypes';

const initialState = {
    newUser: {}
};

export default function addUser(state= initialState, action) {
    switch(action.type) {
        case ADD_USER:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}