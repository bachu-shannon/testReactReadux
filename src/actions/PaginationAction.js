import { SET_CURRENT_PAGE } from '../constants/action_types';

export function setCurrentPage(pageNumber) {
    return {
        type: SET_CURRENT_PAGE,
        payload: {
            currentPage: pageNumber
        }
    }
}