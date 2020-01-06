import React from 'react'
import PreviewPage from '../PreviewPage/PreviewPage'
import RegistPage from '../RegistPage/RegistPage'
import {history} from '../_helpers/history'
import {IsLoginRoute} from '../_route/IsLoginRoute'
import {PreviewRoute} from '../_route/PreviewRoute'
import { Router, Switch, Redirect } from 'react-router-dom';

function App(){
  return (
    <div>
      <Router history={history}>
        <Switch>
          <IsLoginRoute exact path='/'/>
          <PreviewRoute path="/preview" component={PreviewPage}/>
          <PreviewRoute path='/regist' component={RegistPage}/>
          <Redirect from='*' to='/'/>
        </Switch>
      </Router>
    </div>
  )
}

export default App