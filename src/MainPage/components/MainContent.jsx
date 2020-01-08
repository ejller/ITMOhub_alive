import React from 'react'
import TableComponent from './Table'
import CanvasComponent from './Canvas'
import FormComponent from './Form'
import {Container, Row, Col} from 'react-bootstrap';
import '../css/MainContent.css'


class MainContent extends React.Component{
  render() { 
    return(
      <div className="mainContent">
        
        <Container fluid={true}>
          <Row className="form-main-row">
            <Col lg={{span: 4, offset:1}}><CanvasComponent/></Col>
            <Col lg={{span: 5, offset:1}}><FormComponent/></Col>
          </Row>
          <Row><Col lg={{span: 10, offset:1}} className="form-main-row table-history">
          <TableComponent/>
          </Col></Row>
        </Container>
      </div>
    )
  }
}


export default MainContent