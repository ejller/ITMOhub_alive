import React from 'react'
import TableComponent from './Table'
import CanvasComponent from './Canvas'
import FormComponent from './Form'
import LoveMusic from '../../_service/music'

class MainContent extends React.Component{
  render() { 
    return(
      <div className="mainContent">
        <CanvasComponent/>
        <FormComponent/>
        <LoveMusic/>
        <TableComponent/>
      </div>
    )
  }
}


export default MainContent