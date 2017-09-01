import { FILTER_USER } from '../constants/action_types';

export function filterUser(name) {
    return {
        type: FILTER_USER,
        payload: name
    }
}
