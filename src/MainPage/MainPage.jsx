import React from 'react'
import NetworkList from '../CommonComponents/components/NetworkList'
import MainMenu from '../CommonComponents/components/MainMenu'
import BottomMenuUnregist from '../CommonComponents/components/BottomMenuUnregist'
import Footer from '../CommonComponents/components/FooterMenu'
import { connect } from 'react-redux';
import {weatherAction} from '../_actions/weather'
import {task} from '../_actions/taskAction'

class MainPage extends React.Component{
  render() { 
    return(
      <div className="mainPage">
        <NetworkList/>
        <MainMenu isLogin={true}/>
        <BottomMenuUnregist/>
        <Footer/>
      </div>
    )
  }

  componentDidMount(){
    this.props.getWeather()
    this.props.getPoints()
  }
}

function mapState(state) {
  return {
      isOpen: state.modal.isOpen,
      imgWeather: state.weather.imgWeather,
      isNight: state.weather.isNight
  }
}
const actionCreators = {
  getWeather: weatherAction.weather,
  getPoints: task.getPoints
}

export default connect(mapState, actionCreators)(MainPage)