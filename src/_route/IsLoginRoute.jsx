import React  from 'react';
import { Route, Redirect } from 'react-router-dom';


export const IsLoginRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        checkSignIn()
            ? <Component {...props} />
            : <Redirect to={{ pathname: '/preview', state: { from: props.location } }} />
    )} />
)

function checkSignIn(){
  return true
}