import React from 'react'
import '../css/mainComponent.css'
import {Form, Alert} from 'react-bootstrap';
import { connect } from 'react-redux';
import {user} from '../../_actions/userAction'

class FormReg extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      login: '',
      password: '',
      retPassword:'',
      isValidPass:true,
      isValid: false
    }
    this.valid ={
      isValidPass:true,
      isValid: false,
      onClick: false
    }
    this.submitHandle = this.submitHandle.bind(this)
    this.checkHandle = this.checkHandle.bind(this)
  }
  render(){
    return(
    <Form className="regist-main-form">
      <Form.Control placeholder="Имя:" bsPrefix="regist-main-input" 
      onChange={e => {this.setState({login:e.target.value}); this.valid.onClick=false; this.checkHandle(e.target.value, this.state.password, this.state.retPassword)}}/>
      <Form.Control type='password' placeholder="Пароль:" bsPrefix="regist-main-input" 
      onChange={e => {this.setState({password:e.target.value}); this.valid.onClick=false;this.checkHandle(this.state.login, e.target.value, this.state.retPassword)}}/>
      <Form.Control type='password' placeholder="Повторите пароль:" bsPrefix="regist-main-input" 
      onChange={e => {this.setState({retPassword:e.target.value}); this.valid.onClick=false; this.checkHandle(this.state.login, this.state.password, e.target.value)}}/>
      {this.props.isRegist&&this.valid.onClick?<Alert variant='success'>
        Вы успешно зарегистрированы
      </Alert>:''}
      {this.props.isRegist?'':<Alert variant='dark'>
        Данное имя уже занято
      </Alert>}
      {this.valid.isValidPass?'':<Alert variant='dark'>
        Пароли не совпадают
      </Alert>}
      <button className="regist-main-form-btn-up" disabled={!this.valid.isValid} onClick={this.submitHandle}>Зарегистрируйтесь!</button> 
      <span> Или </span>
      <span onClick={this.props.openModal} className="regist-main-form-btn-in">Вход</span>
    </Form>
  )
  }
  checkHandle(log, pass, retPass){
    let emptyLog = true
    let emptyPass = true
    let emptyRetPass = true
    if (log!=='') 
      emptyLog = false
    if (pass!=='') 
    emptyPass = false
    if (retPass!=='') 
    emptyRetPass = false
    console.log(emptyRetPass)
    if((pass===retPass)) {
      this.valid.isValidPass = true
    } else {
      this.valid.isValidPass=false
    }


    if(this.valid.isValidPass&&!emptyLog&&!emptyPass&&!emptyRetPass){
      this.valid.isValid=true} else {
        this.valid.isValid=false
      }
  }

  submitHandle(e){
    e.preventDefault();
    this.props.signUp({login: this.state.login, password: this.state.password})
    this.valid.onClick=true
  }
}

function mapState(state) {
  return {
      isOpen: state.modal.isOpen,
      isRegist: state.regist.isRegist
  }
}

const actionCreators = {
  openModal: function(){
    return {type: 'MODAL_OPEN'}
  },
  signUp: user.signUp
}


export default connect(mapState, actionCreators)(FormReg)