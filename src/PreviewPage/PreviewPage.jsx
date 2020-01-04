import React from 'react'
import NetworkList from '../CommonComponents/components/NetworkList'
import MainMenu from '../CommonComponents/components/MainMenu'
import BottomMenuUnregist from '../CommonComponents/components/BottomMenuUnregist'
import MainContent from './components/MainContent'
import Modal from '../CommonComponents/components/Modal/Modal'
import Footer from '../CommonComponents/components/FooterMenu'

function PreviewPage(){
  return(
    <div className="previewPage">
      {true?<Modal/>:null}
      <NetworkList/>
      <MainMenu/>
      <BottomMenuUnregist isMain="bottom-menu-text-choose"/>
      <MainContent/>
      <Footer/>
    </div>
  )
}

export default PreviewPage