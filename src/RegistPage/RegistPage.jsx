import React from 'react'
import NetworkList from '../CommonComponents/components/NetworkList'
import MainMenu from '../CommonComponents/components/MainMenu'
import BottomMenuUnregist from '../CommonComponents/components/BottomMenuUnregist'
import Modal from '../CommonComponents/components/Modal/Modal'
import MainContent from './components/MainComponent'
import Footer from '../CommonComponents/components/FooterMenu'

function RegistPage(){
  return(
    <div className="previewPage">
      {false?<Modal/>:null}
      <NetworkList/>
      <MainMenu/>
      <BottomMenuUnregist/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default RegistPage