import '../css/bottomMenu.css'
import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap';

class BottomMenu extends React.Component{
  render() {
    return (
      <Container fluid={true} className="bottom-menu">
      <Row className="main-menu-row">
        <Col className={"bottom-menu-container " + this.props.isMain} lg={{span: 1 , offset: 1}}>
            {this.props.isMain?<div className="bottom-menu-text">Главная</div>:<Link to='/preview'> <div className="bottom-menu-text">Главная</div> </Link>}
        </Col>
      </Row>
    </Container>
    )
  }
}

export default BottomMenu