import {service} from '../_service/userService'
import {taskConstants} from '../_constants/task'
import {history} from '../_helpers/history'

export const task = {
  getPoints
}

function getPoints(){
  return dispatch =>{ 
    dispatch(request())
    service.getPointsRequest().then(
      data => {
        success(data)
      },
      error => {
        if(error.toString()==='TypeError: Failed to fetch'){
          dispatch(crush()) } else {
          localStorage.removeItem('user')
          localStorage.removeItem('hash')
          history.push('/preview')
          dispatch(failure(error.toString()))
        }
      }
    )
  }
  function request() { return { type: taskConstants.getPointsConstants.GET_POINTS_REQUEST } }
  function success(data) { return { type: taskConstants.getPointsConstants.GET_POINTS_SUCCESS, data } }
  function failure(error) { return { type: taskConstants.getPointsConstants.GET_POINTS_FAILURE, error } }
  function crush(){return { type: taskConstants.SERVER_DIE }}
}