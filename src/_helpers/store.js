import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {modal} from '../_reducers/modal'
import {weather} from '../_reducers/weather'
import {login} from '../_reducers/login'

const reducers = combineReducers ({modal, weather, login})
const logger = createLogger();
export const store = createStore(
  reducers,
   applyMiddleware(
     thunkMiddleware,
     logger
   )
 )