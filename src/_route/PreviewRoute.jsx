import React  from 'react';
import { Route, Redirect } from 'react-router-dom';
export const PreviewRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        !checkSignIn()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/main', state: { from: props.location } }} />
    )} />
)

function checkSignIn(){
  if(localStorage.getItem('hash'))
    return true
  return false
}