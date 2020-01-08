import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import {modal} from '../_reducers/modal'
import {weather} from '../_reducers/weather'
import {login} from '../_reducers/login'
import {getPoints} from '../_reducers/getPoints'
import {regist} from '../_reducers/regist'
import {rCoor} from '../_reducers/rCoor'
import {sendPoint} from '../_reducers/sendPoint'

const reducers = combineReducers ({modal, weather, login, getPoints,regist, rCoor, sendPoint})
const logger = createLogger();
export const store = createStore(
  reducers,
   applyMiddleware(
     thunkMiddleware,
     logger
   )
 )