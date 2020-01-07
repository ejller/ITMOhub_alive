import React from 'react'
import NetworkList from '../CommonComponents/components/NetworkList'
import MainMenu from '../CommonComponents/components/MainMenu'
import BottomMenuUnregist from '../CommonComponents/components/BottomMenuUnregist'
import Modal from '../CommonComponents/components/Modal/Modal'
import MainContent from './components/MainComponent'
import Footer from '../CommonComponents/components/FooterMenu'
import { connect } from 'react-redux';
import {weatherAction} from '../_actions/weather'


class RegistPage extends React.Component{
  render(){
    return(
    <div className="previewPage">
      {this.props.isOpen?<Modal/>:null}
      <NetworkList/>
      <MainMenu isRegist={true}/>
      <BottomMenuUnregist/>
      <MainContent/>
      <Footer/>
    </div>
  )
  }
  componentDidMount(){
    this.props.getWeather()
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
  getWeather: weatherAction.weather
}

export default connect(mapState,actionCreators)(RegistPage)