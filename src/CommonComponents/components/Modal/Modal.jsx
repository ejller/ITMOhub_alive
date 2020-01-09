import React from 'react'
import '../../css/modal.css'
import {Col, Container,Row} from 'react-bootstrap';
import Close from '../../res/close.png'
import FormIn from './Form'
import TrueIcon from '../../res/true.png'
import { connect } from 'react-redux';
import {history} from '../../../_helpers/history'

class ModalSign extends React.Component {
  constructor(props){
    super(props);
    this.isRegistPage=this.isRegistPage.bind(this)
  }
  render() {
    return(
      <div id="modal-dialog">
        <Container fluid={true}>
          <Row>
            <Col lg={{span: 10 , offset: 1}}  className="modal-inner">
              <img src={Close} width="25px" alt="close" className='btn-modal-close' onClick={this.props.closeModal}/>
              <span>Войти или зарегистрироваться</span>
             <Row className="modal-inner-main">
               <Col lg={{span: 6}} className="modal-block-sign-in">
               <FormIn/>
               </Col>
               <Col lg={{span: 6}}>
               <span className="modal-tittle-up">Пока еще не являетесь пользователем по бесплатной подписке?</span>
               <br/>
               <p>Вот то, чего Вы себя лишаете!</p>
               <p>
                 <img src={TrueIcon} width="20px" alt="true"/> Проверка Вашей меткости <br/>
                 <img src={TrueIcon} width="20px" alt="true"/> Проверка умственных способностей <br/>
                 <img src={TrueIcon} width="20px" alt="true"/> Приятный музыкальный сюрприз <br/>
                 </p>
               <p>И многое другое!</p>
               <button className='modal-btn-up' onClick={this.isRegistPage}>Регистрация</button>
               </Col>
             </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  isRegistPage(){
    this.props.closeModal();
    if(history.location.pathname!=='/regist')
      history.push('/regist')
  }
}

function mapState(state) {
  return {
      isOpen: state.modal.isOpen
  }
}

const actionCreators = {
  closeModal: function(){
    return {type: 'MODAL_CLOSE'}
  }
}

export default connect(mapState,actionCreators)(ModalSign)