import { combineReducers } from 'redux';

import places from './places';
import auth from './auth';

export const reducers = combineReducers({ places, auth });
