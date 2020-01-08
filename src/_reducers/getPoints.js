import {taskConstants} from '../_constants/task'

export function getPoints (state={isLogin:false}, action) {
  switch (action.type){
    case taskConstants.getPointsConstants.GET_POINTS_SUCCESS:
      return {...state, isLogin:true, serverDie:false, arrPoints:action.data};
    case taskConstants.getPointsConstants.GET_POINTS_FAILURE:
      return {...state, isLogin:false, serverDie:false}
      case taskConstants.SERVER_DIE:
        return {...state, serverDie:true}
    default: return {...state}
  }
}