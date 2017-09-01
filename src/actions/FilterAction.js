import { FILTER_USER } from '../constants/actionTypes';

export function filterUser(name) {
    return {
        type: FILTER_USER,
        payload: name
    }
}
