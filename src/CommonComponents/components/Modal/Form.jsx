import React from 'react'
import {Form} from 'react-bootstrap'
import { connect } from 'react-redux';
import {user} from '../../../_actions/userAction'

class FormIn extends React.Component{
  constructor(props){
    super(props)
    this.state ={
      login: '',
      password: ''
    }
    this.onHandleChangeCheck = this.onHandleChangeCheck.bind(this)
    this.submitHandle = this.submitHandle.bind(this)
  }

  onHandleChangeCheck(){
    //this.setState({remeber: !this.state.remeber})
  }
  submitHandle(e){
    e.preventDefault();
    this.props.logIn(this.state)
  }

  render(){
    return(
      <div>
        <Form>
        <Form.Control bsPrefix="input-modal-in"  onChange={e => this.setState({login:e.target.value})} type="text" placeholder="Имя пользователя (свыше 6 знаков)"/>
        <br/>
        <Form.Control bsPrefix="input-modal-in" onChange={e => this.setState({password:e.target.value})} type="password" placeholder="Пароль (свыше 6 знаков)"/>
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
        <button onClick={this.submitHandle} className="btn-modal-in"> Войти </button>
        </Form>
      </div>
    )
  }
}

function mapState(state) {
  return {
      isOpen: state.modal.isOpen,
  }
}
const actionCreators = {
  logIn: user.signIn
}


export default connect(mapState, actionCreators)(FormIn)