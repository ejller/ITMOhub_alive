import React from 'react'
import NetworkList from '../CommonComponents/components/NetworkList'
import MainMenu from '../CommonComponents/components/MainMenu'
import BottomMenuUnregist from '../CommonComponents/components/BottomMenuUnregist'
import MainContent from './components/MainContent'
import Modal from '../CommonComponents/components/Modal/Modal'
import Footer from '../CommonComponents/components/FooterMenu'
import { connect } from 'react-redux';

class PreviewPage extends React.Component{
  render() {
    return(
      <div className="previewPage">
        {this.props.isOpen?<Modal/>:null}
        <NetworkList/>
        <MainMenu/>
        <BottomMenuUnregist isMain="bottom-menu-text-choose"/>
        <MainContent/>
        <Footer/>
      </div>
    )
  }
}

function mapState(state) {
  return {
      isOpen: state.modal.isOpen
  }
}

export default connect(mapState)(PreviewPage)