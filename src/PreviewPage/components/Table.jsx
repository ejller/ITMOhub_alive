import React from 'react';
import { Row, Col} from 'react-bootstrap';
import '../css/table.css'
import iconeTrue from '../res/true.png'
import iconeFalse from '../res/false.png'
import {history} from '../../_helpers/history'


class MainContent extends React.Component {
 render(){
   return (
     <div>
       <Row className="main-content-preview-table-container header">
         <Col lg={{span: 3, offset: 1} } className="main-content-preview-table header">
         ЧТО ВЫ ПОЛУЧАЕТЕ:
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table header">
         БЕЗ АККАУНТА
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table header">
         БЕСПЛАТНОЕ УЧАСТИЕ
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table header">
         ПРЕМИУМ-УЧАСТИЕ
         </Col>
       </Row>
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         Доступ к проверке меткости
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
           <img src={iconeFalse} alt="No" width="30px"/>
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
         <img src={iconeTrue} alt="yes" width="30px"/>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
         <img src={iconeTrue} alt="yes" width="30px"/>
         </Col>
       </Row>  
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         Доступ к общим мемам
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
           <img src={iconeFalse} alt="No" width="30px"/>
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
         <img src={iconeTrue} alt="yes" width="30px"/>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
         <img src={iconeTrue} alt="yes" width="30px"/>
         </Col>
       </Row>  
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         Доступ к ITMOhub сообществу
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
           <img src={iconeFalse} alt="No" width="30px"/>
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
         <img src={iconeTrue} alt="yes" width="30px"/>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
         <img src={iconeTrue} alt="yes" width="30px"/>
         </Col>
       </Row>  
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         Подписаться на ИТМОзвезд
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
           <img src={iconeFalse} alt="No" width="30px"/>
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
         <img src={iconeTrue} alt="yes" width="30px"/>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
         <img src={iconeTrue} alt="yes" width="30px"/>
         </Col>
       </Row>  
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         Доступ к эксклюзивному контенту
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
           <img src={iconeFalse} alt="No" width="30px"/>
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
         <img src={iconeTrue} alt="yes" width="30px"/>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
         <img src={iconeTrue} alt="yes" width="30px"/>
         </Col>
       </Row>  
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         Без рекламы
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
           <img src={iconeFalse} alt="No" width="30px"/>
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
         <img src={iconeTrue} alt="yes" width="30px"/>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
         <img src={iconeTrue} alt="yes" width="30px"/>
         </Col>
       </Row>  
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         Доступ к видео-контенту
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
           <img src={iconeFalse} alt="No" width="30px"/>
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
         <img src={iconeTrue} alt="yes" width="30px"/>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
         <img src={iconeTrue} alt="yes" width="30px"/>
         </Col>
       </Row> 
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         Отменить в любое время
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
           <img src={iconeFalse} alt="No" width="30px"/>
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
         <img src={iconeTrue} alt="yes" width="30px"/>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
         <img src={iconeTrue} alt="yes" width="30px"/>
         </Col>
       </Row> 
       <Row className="main-content-preview-table-container">
         <Col lg={{span: 3, offset: 1}} className="main-content-preview-table">
         </Col>
         <Col lg={{span: 3}} className="main-content-preview-table">
          
         </Col>
         <Col lg={{span: 2}} className="main-content-preview-table ">
            <button className="btn-table free" onClick={function(){history.push('/regist')}}>Зарегистрироваться</button>
           </Col>
         <Col lg={{span: 2}} className="main-content-preview-table">
            <button className="btn-table premium" disabled>Получить премиум</button>
         </Col>
       </Row>     
       </div>   

   )
 }
}

export default MainContent