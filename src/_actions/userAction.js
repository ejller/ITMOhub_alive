import {service} from '../_service/userService'
import {userConstants} from '../_constants/user'
import {history} from '../_helpers/history'

export const user = {
  signIn,
  signUp,
  logOut
}

function signIn(data){
  return dispatch =>{
    dispatch(request(data));
    service.signInRequest(data).then(
      data => {
        dispatch(success(data))
        localStorage.setItem('user', data.login)
        localStorage.setItem('hash', data.token)
        history.push('/main')
      },
      error => {
        if(error.toString()==='TypeError: Failed to fetch'){
          dispatch(crush()) } else {
          dispatch(failure(error.toString()))
        }
      }
    )
  }
  function request() { return { type: userConstants.loginConstants.LOGIN_REQUEST } }
  function success(data) { return { type: userConstants.loginConstants.LOGIN_SUCCESS, data } }
  function failure(error) { return { type: userConstants.loginConstants.LOGIN_FAILURE, error } }
  function crush(){return { type: userConstants.SERVER_DIE }}
}

function signUp(data){
  return dispatch =>{
    dispatch(request(data));
    service.signUpRequest(data).then(
      data => {
        dispatch(success(data))
      },
      error => {
        if(error.toString()==='TypeError: Failed to fetch'){
          dispatch(crush()) } else {
          dispatch(failure(error.toString()))
        }
      }
    )
  }
  function request() { return { type: userConstants.registConstants.REGIST_REQUEST } }
  function success(data) { return { type: userConstants.registConstants.REGIST_SUCCESS, data } }
  function failure(error) { return { type: userConstants.registConstants.REGIST_FAILURE, error } }
  function crush(){return { type: userConstants.SERVER_DIE }}
}

function logOut(data){
  return dispatch =>{
    dispatch(success())
    localStorage.removeItem('user')
    localStorage.removeItem('hash')
    if(localStorage.removeItem('save'))
    localStorage.removeItem('save')
    history.push('/preview')
  }
  function success() { return { type: userConstants.logOutConstants.LOGOUT_SUCCESS } }
}
