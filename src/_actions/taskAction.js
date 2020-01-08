import {service} from '../_service/userService'
import {taskConstants} from '../_constants/task'
import {history} from '../_helpers/history'

export const task = {
  getPoints,
  sendPoint
}

function getPoints(){
  return dispatch =>{ 
    dispatch(request())
    service.getPointsRequest().then(
      data => {
        dispatch(success(data))
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

function sendPoint(coor){
  return dispatch =>{ 
    service.sendPointRequest(coor).then(
      data => {
        dispatch(success(data))
        dispatch(getPoints())
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
  function success(data) { return { type: 'SEND_POINT_SUCCESS', data } }
  function failure(error) { return { type: 'SEND_POINT_FAILED', error } }
  function crush(){return { type: taskConstants.SERVER_DIE }}
}