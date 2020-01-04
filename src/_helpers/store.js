import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducers = combineReducers ({  })
const logger = createLogger();
export const store = createStore(
  reducers,
   applyMiddleware(
     thunkMiddleware,
     logger
   )
 )