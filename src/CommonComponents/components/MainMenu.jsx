import React from 'react'
import '../css/MainMenu.css'
import {Container, Row, Col} from 'react-bootstrap';
import logo from '../res/logo.png'
import { connect } from 'react-redux';
import {history} from '../../_helpers/history'
import {user} from '../../_actions/userAction'

class MainMenu extends React.Component {
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
            {this.props.isLogin?<button className="main-menu-btn-sign" onClick={this.props.logOut} >Выход</button>:
            <button className="main-menu-btn-sign" onClick={this.props.openModal} >Вход</button>}
            {this.props.isLogin?'':<button disabled={this.props.isRegist} onClick={function(){history.push('/regist')}} className="main-menu-btn-sign">Регистрация</button>}
          </Col>
        </Row>
      </Container>
    )
  }
}

function mapState(state) {
  return {
      isOpen: state.modal.isOpen
  }
}

const actionCreators = {
  openModal: function(){
    return {type: 'MODAL_OPEN'}
  },
  logOut: user.logOut
}

export default connect(mapState, actionCreators)(MainMenu)