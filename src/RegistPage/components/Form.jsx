import React from 'react'
import '../css/mainComponent.css'
import {Form} from 'react-bootstrap';
import { connect } from 'react-redux';

class FormReg extends React.Component{
  render(){
    return(
    <Form className="regist-main-form">
      <Form.Control placeholder="Имя:" bsPrefix="regist-main-input" />
      <Form.Control placeholder="Пароль:" bsPrefix="regist-main-input" />
      <Form.Control placeholder="Повторите пароль:" bsPrefix="regist-main-input" />
      <button className="regist-main-form-btn-up">Зарегистрируйтесь!</button> 
      <span> Или </span>
      <span href="/#" onClick={this.props.openModal} className="regist-main-form-btn-in">Вход</span>
    </Form>
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
  }
}


export default connect(mapState, actionCreators)(FormReg)