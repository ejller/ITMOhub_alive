import '../css/bottomMenu.css'
import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

class BottomMenu extends React.Component{
  render() {
    return (
      <Container fluid={true} className="bottom-menu">
      <Row className="main-menu-row">
        <Col className={"bottom-menu-container " + this.props.isMain} lg={{span: 1 , offset: 1}}>
          <div className="bottom-menu-text">Главная</div>
        </Col>
      </Row>
    </Container>
    )
  }
}

export default BottomMenu