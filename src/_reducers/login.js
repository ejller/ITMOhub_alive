import {userConstants} from '../_constants/user'

export function login (state={isLogin:false}, action) {
  switch (action.type){
    case userConstants.loginConstants.LOGIN_SUCCESS:
      return {...state, isLogin:true, serverDie:false};
    case userConstants.loginConstants.LOGIN_FAILURE:
      return {...state, isLogin:false, serverDie:false}
      case userConstants.SERVER_DIE:
        return {...state, serverDie:true}
    default: return {...state}
  }
}