import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import '../css/mainContent.css'
import Back from '../res/back.jpg'
import Table from './Table'



class MainContent extends React.Component {
 render(){
   return (
     <div>
     <div className="main-content-preview-line"></div>
     <Container fluid={true} className="main-content-preview" style={{backgroundImage: `url(${Back})`}}>
       <Row>
         <Col lg={{span: 7 , offset: 1}} className="main-content-preview-text">
           <h2>ВЫБЕРИТЕ ВАШ ОПЫТ <br/> ITMOHUB</h2>
           <br/>
           <span> Регистрируйся бесплатно и наслаждайся всеми преимуществами аккаунта ITMOhub.
            А еще лучше прокачать свой аккаунт и присоединиться к ITMOhub Premium для еще большего удовольствия!
            </span>
            <br/>
            <button className="btn-regist">Зарегистрироваться бесплатно</button>
            <br/>
            <button className="btn-premium">Получить ITMOhub Премиум</button>
         </Col>
       </Row>
       <Table/>
      </Container>  
      </div>      

   )
 }
}

export default MainContent