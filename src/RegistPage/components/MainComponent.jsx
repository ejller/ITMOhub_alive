import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import '../css/mainComponent.css'
import Back from '../res/back.png'
import FormReg from './Form'
import Logo from '../../CommonComponents/res/logo.png'

function MainComponent(){
  return(
    <div className="regist-main-block">
      <Container className="regist-main-back" fluid={true} style={{backgroundImage: `url(${Back})`}}>
        <Row>
          <Col lg={{span: 4 , offset: 1}} className="regist-main-tittle">
            <img src={Logo} width="260px" alt="logo"/> <br/>
            НА ITMOHUB ЗНАЧИТЕЛЬНО БОЛЬШЕ, ЧЕМ ВЫ ДУМАЕТЕ!
          </Col>
          <Col lg={{span: 4 , offset: 2}} className="refist-form-container">
            <h2>Бесплатная регистрация</h2>
            <span>и расширьте свой опыт</span>
            <br/><br/>
            <FormReg/>
            <p className="regist-options">
            Подписываясь, вы соглашаетесь с нашими 
            <a href="/#"> Положениями и условиями</a>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MainComponent