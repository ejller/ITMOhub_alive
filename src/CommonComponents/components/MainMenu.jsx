import React from 'react'
import '../css/MainMenu.css'
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../res/logo.png'

class MainMenu extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return(
      <Container fluid={true} className="mainMenu">
        <Row className="main-menu-row">
          <Col lg={{span: 2, offset: 1}}>
            <img src={logo} alt='logo' width='200px'/>
          </Col>
          <Col lg={{span:6}}>
          </Col>
          <Col lg={{span:2}} className="main-menu-btn-container">
            <button className="main-menu-btn-sign">Вход</button>
            <button className="main-menu-btn-sign">Регистрация</button>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainMenu