import React from 'react'
import {Form, Alert} from 'react-bootstrap'
import { connect } from 'react-redux';
import {user} from '../../../_actions/userAction'

class FormIn extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      login: '',
      password: '',
      remeber: false,
    }
    this.valid = false
    this.onHandleChangeCheck = this.onHandleChangeCheck.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
    this.checkHandle = this.checkHandle.bind(this)
  }

  onHandleChangeCheck(){
    this.setState({remeber:!this.state.remeber})
  }
  submitHandle(e){
    e.preventDefault();
    if(this.state.remeber)
    localStorage.setItem('save', this.state.remeber)
    this.props.logIn({login:this.state.login, password:this.state.password})
  }
  checkHandle(log, pas){
    let emptyLog = true
    let emptyPas = true
    if (log!=='')
    emptyLog = false
    if (pas!=='')
    emptyPas = false
    if(!emptyLog&&!emptyPas) {
    this.valid = true } else {this.valid = false}
  }

  render(){
    return(
      <div>
        <Form>
        <Form.Control bsPrefix="input-modal-in"  onChange={e => {this.setState({login:e.target.value}); this.checkHandle(e.target.value, this.state.password)}} type="text" placeholder="Имя пользователя (свыше 6 знаков)"/>
        <br/>
        <Form.Control bsPrefix="input-modal-in" onChange={e => {this.setState({password:e.target.value}); this.checkHandle(this.state.login, e.target.value)}} type="password" placeholder="Пароль (свыше 6 знаков)"/>
        <br/>
        <div className="checkbox-modal-in">
        <Form.Check
            onChange={this.onHandleChangeCheck}
            type="switch"
            id="custom-switch"
            label="Запомнить меня на этом компьютере
             (не рекомендуется при использовании общедоступных компьютеров)"
          />
        </div>
        {this.props.isLogin?'':<Alert  variant='danger'>
          Неправильный логин или пароль
         </Alert>}
        <button disabled={!this.valid} onClick={this.submitHandle} className="btn-modal-in"> Войти </button>
        </Form>
      </div>
    )
  }
}

function mapState(state) {
  return {
      isOpen: state.modal.isOpen,
      isLogin: state.login.isLogin
  }
}
const actionCreators = {
  logIn: user.signIn
}


export default connect(mapState, actionCreators)(FormIn)