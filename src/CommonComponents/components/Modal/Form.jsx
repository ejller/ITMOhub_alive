import React from 'react'
import {Form} from 'react-bootstrap'

class FormIn extends React.Component{
  render(){
    return(
      <div>
        <Form>
        <Form.Control bsPrefix="input-modal-in" type="text" placeholder="Имя пользователя (свыше 6 знаков)"/>
        <br/>
        <Form.Control bsPrefix="input-modal-in" type="password" placeholder="Пароль (свыше 6 знаков)"/>
        <br/>
        <div className="checkbox-modal-in">
        <Form.Check
            type="switch"
            id="custom-switch"
            label="Запомнить меня на этом компьютере
             (не рекомендуется при использовании общедоступных компьютеров)"
          />
        </div>
        <button className="btn-modal-in"> Войти </button>
        </Form>
      </div>
    )
  }
}
export default FormIn