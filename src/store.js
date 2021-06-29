import { createStore, combineReducers, applyMiddleware } from 'redux';
import { authReducer } from './reducers/authReducer';
import { userReducer } from './reducers/userReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const reducer = combineReducers({ auth: authReducer, users: userReducer });
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

