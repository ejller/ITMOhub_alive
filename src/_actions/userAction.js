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
  function request(user) { return { type: userConstants.loginConstants.LOGIN_REQUEST, user } }
  function success(data) { return { type: userConstants.loginConstants.LOGIN_SUCCESS, data } }
  function failure(error) { return { type: userConstants.loginConstants.LOGIN_FAILURE, error } }
  function crush(){return { type: userConstants.SERVER_DIE }}
}

function signUp(data){
  return dispatch =>{
    console.log(data)
  }

  function logInSucsess(){return {type:'LOGIN_SUCSESS'}}
}

function logOut(data){
  return dispatch =>{
    dispatch(success())
    localStorage.removeItem('user')
    localStorage.removeItem('hash')
    history.push('/preview')
  }
  function success() { return { type: userConstants.logOutConstants.LOGOUT_SUCCESS } }
}
