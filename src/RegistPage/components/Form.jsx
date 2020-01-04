import React from 'react'
import '../css/mainComponent.css'
import {Form} from 'react-bootstrap';

function FormReg(){
  return(
    <Form className="regist-main-form">
      <Form.Control placeholder="Имя:" bsPrefix="regist-main-input" />
      <Form.Control placeholder="Пароль:" bsPrefix="regist-main-input" />
      <Form.Control placeholder="Повторите пароль:" bsPrefix="regist-main-input" />
      <button className="regist-main-form-btn-up">Зарегистрируйтесь!</button> 
      <span> Или </span>
      <a href="/#" className="regist-main-form-btn-in">Вход</a>
    </Form>
  )
}

export default FormReg