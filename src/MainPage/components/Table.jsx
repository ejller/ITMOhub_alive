import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { connect } from 'react-redux';
import '../css/Table.css'

class Table extends React.Component{
  constructor(props){
    super(props)
    this.renderTable = this.renderTable.bind(this)
  }
  render() { 
    return(
      <Container className="main-table" fluid={true}>
        <Row className="main-table-first-row">
         <Col lg={{span: 2 , offset: 1}} className="main-table-col main-table-bottom-first">
           X:
         </Col>
         <Col lg={{span: 2 }} className="main-table-col main-table-bottom-first">
           Y:
         </Col>
         <Col lg={{span: 2 }} className="main-table-col main-table-bottom-first">
           R:
         </Col>
         <Col lg={{span: 2 }} className="main-table-col main-table-bottom-first">
           Попадание:
         </Col>
         <Col lg={{span: 2 }} className="main-table-bottom-first">
           Корректность:
         </Col>
         </Row>
         {this.renderTable()}
      </Container>
    )
  }

  renderTable(){
    if(this.props.points!==undefined){
      return this.props.points.map((points, index) => {
        const { x, y, r, hit, correct } = points
        return (
        <Row key={index}>
         <Col lg={{span: 2 , offset: 1}} className="main-table-col"> {x}</Col>
         <Col lg={{span: 2 }} className="main-table-col"> {y}</Col>
         <Col lg={{span: 2 }} className="main-table-col"> {r}</Col>
         <Col lg={{span: 2 }} className="main-table-col"> {hit?'YES':'Not'}</Col>
         <Col lg={{span: 2 }}> {correct?'YES':'Not'}</Col>
        </Row>
       )
      })
    }
  }

}

function mapState(state) {
  return {
  points: state.getPoints.arrPoints
  }
  }


export default connect(mapState)(Table)