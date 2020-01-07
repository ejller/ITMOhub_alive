import React from 'react'
import PreviewPage from '../PreviewPage/PreviewPage'
import RegistPage from '../RegistPage/RegistPage'
import {history} from '../_helpers/history'
import {IsLoginRoute} from '../_route/IsLoginRoute'
import {PreviewRoute} from '../_route/PreviewRoute'
import { Router, Switch, Redirect } from 'react-router-dom';
import './css/weather.css'
import backNightImg from '../CommonComponents/res/back_night.png'
import { ReactSVG } from 'react-svg'
import { connect } from 'react-redux';
import {weatherAction} from '../_actions/weather'

class App extends React.Component{
  render(){
    return (
    <div>
      {this.props.isNight?<div className="time_img" style={{backgroundImage: `url(${backNightImg})`}}></div>:null}
      <ReactSVG src={this.props.imgWeather} className="weather_img"></ReactSVG>
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
}

function mapState(state) {
  return {
      imgWeather: state.weather.imgWeather,
      isNight: state.weather.isNight
  }
}

const actionCreators = {
  getWeather: weatherAction.weather
}


export default connect(mapState, actionCreators)(App)