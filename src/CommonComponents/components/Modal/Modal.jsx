import React from 'react'
import '../../css/modal.css'
import {Col, Container,Row} from 'react-bootstrap';
import Close from '../../res/close.png'
import FormIn from './Form'
import TrueIcon from '../../res/true.png'
import { connect } from 'react-redux';

class ModalSign extends React.Component {
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
                 <img src={TrueIcon} width="20px" alt="true"/> Вот то, чего Вы себя лишаете! <br/>
                 <img src={TrueIcon} width="20px" alt="true"/> Вот то, чего Вы себя лишаете! <br/>
                 <img src={TrueIcon} width="20px" alt="true"/> Вот то, чего Вы себя лишаете! <br/>
                 <img src={TrueIcon} width="20px" alt="true"/> Вот то, чего Вы себя лишаете! <br/>
                 </p>
               <p>И многое другое!</p>
               <button className='modal-btn-up'>Регистрация</button>
               </Col>
             </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
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