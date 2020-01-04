import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import '../css/footerMenu.css'

function FooterMenu(){
  return(
    <div>
      <Container fluid={true} className="fotter-menu-container">
        <Row>
          <Col lg={{span: 3}} >
            <span>Информация</span>
            <a href="/#">Раздел в разработке</a>
            <a href="/#">Раздел в разработке</a>
          </Col>
          <Col lg={{span: 3}} >
            <span>Сотрудничайте с нами</span>
            <a href="/#">Раздел в разработке</a>
            <a href="/#">Раздел в разработке</a>
          </Col>
          <Col lg={{span: 3}} >
          <span>Поддержка и помощь</span>
          <a href="/#">Раздел в разработке</a>
          </Col>
          <Col lg={{span: 3}} >
          <span>Находите новое</span>
          <a href="/#">Раздел в разработке</a>
          </Col>
        </Row>
      </Container>
      <div className="footer">
      © ITMOhub.com, 2020
      </div>
      </div>
  )
}

export default FooterMenu