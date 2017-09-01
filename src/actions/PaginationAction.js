import { SET_CURRENT_PAGE } from '../constants/actionTypes';

export function setCurrentPage(pageNumber) {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: pageNumber
        }
    }
}