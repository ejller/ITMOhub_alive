import {userConstants} from '../_constants/user'

export function regist (state={isRegist:true}, action) {
  switch (action.type){
    case userConstants.registConstants.REGIST_SUCCESS:
      return {...state, isRegist:true, serverDie:false};
    case userConstants.registConstants.REGIST_FAILURE:
      return {...state, isRegist:false, serverDie:false}
      case userConstants.SERVER_DIE:
        return {...state, serverDie:true}
    default: return {...state}
  }
}