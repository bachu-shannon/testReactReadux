import { combineReducers } from 'redux';
import users from './Users';
import filterUser from './Filter';
import pagination from './Pagination';
import addUser from './Add';
import { routerReducer } from 'react-router-redux'

let reducers = combineReducers({
    users,
    filterUser,
    pagination,
    addUser,
    router: routerReducer
});

export default reducers;