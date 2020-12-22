//with help of reducers a store can be created which
//holds the entire state of the application it is
//recommended to use a single store for the entire
//application than having multiple stores which
//will violate the use of redux which only has a single store

'use strict';

import rootReducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //middleware can be used for a variety of things, including asynchronous API calls.

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
