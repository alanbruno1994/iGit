import { applyMiddleware,createStore, combineReducers } from 'redux'
import userReducer from './reducers/userReducer';
import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';

const reducers=combineReducers({//register functions reducers
    users:userReducer
});

function reduxConfig()
{
    return applyMiddleware(promise,multi,thunk)(createStore)(reducers);
}

export default reduxConfig;