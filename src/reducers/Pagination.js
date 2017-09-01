import { SET_CURRENT_PAGE } from '../constants/actionTypes';

const initialState = {
    currentPage: 0,
    limit: 25
};

export default function pagination(state= initialState, action) {
    switch(action.type) {
        case SET_CURRENT_PAGE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}