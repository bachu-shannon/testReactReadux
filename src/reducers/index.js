import { combineReducers } from 'redux';
import users from './Users';
import user from './User';
import filterUser from './Filter';
import pagination from './Pagination';
import addUser from './Add';
import status from './Status';
import { routerReducer } from 'react-router-redux';

let reducers = combineReducers({
    users,
    user,
    filterUser,
    pagination,
    addUser,
    status,
    router: routerReducer
});

export default reducers;