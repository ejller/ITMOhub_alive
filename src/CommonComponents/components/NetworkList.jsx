import React from 'react'
import '../css/networkList.css'
import {Container, Row, Col} from 'react-bootstrap';

class NetworkList extends React.Component{
  constructor(props){
    super(props)
    this.state={
      onHover:false
    }
    this.onEnter = this.onEnter.bind(this)
    this.onLeave = this.onLeave.bind(this)
  }


  onClick(link){
    switch(link){
      case 'PREMIUM':
       window.open('/')
       break;
      case 'SHOP':
        window.open('http://www.itmostore.ru/');
        break
      case 'ABIT':
        window.open('https://abit.ifmo.ru/');
        break;
      case 'ALL':
        window.open('http://www.ifmo.ru/ru/');
        break
      case 'MAG':
        window.open('https://abit.ifmo.ru/master/');
        break
      default:
        ;
    }
  }

  onEnter(e){
    this.setState({onHover:true});
  }

  onLeave(e){
    this.setState({onHover:false});
  }

  menu(){
    return(
      <div id="hoverSites" onMouseEnter={this.onEnter}>
        <div className="btn_networkList_menu" onClick={()=>this.onClick('ABIT')}>
          Fast Start
        </div>
        <div className="btn_networkList_menu" onClick={()=>this.onClick('ALL')}>
          For All
        </div>
        <div className="btn_networkList_menu" onClick={()=>this.onClick('MAG')}>
          Hardcore
        </div>
      </div>
    )
  }

  render() {
    return(
      <Container fluid={true} className="networkList">
        <Row>
          <Col  lg={{span: 10, offset: 1}}> 
            <Row>
              <Col className="btn_networkList home" lg={{span:1}}>
                HOME
              </Col>
              <Col className="btn_networkList" onClick={()=>this.onClick('PREMIUM')} lg={{span:1}}>
                PREMIUM
              </Col>
              <Col className="btn_networkList" onClick={()=>this.onClick('SHOP')} lg={{span:1}}>
                SHOP
              </Col>
              <Col className="btn_networkList sites" onMouseEnter={this.onEnter} onMouseLeave={this.onLeave} lg={{span:1}}>
                SITES<br></br>
                {this.state.onHover?this.menu():''}
              </Col>
            </Row>
          </Col>
          
        </Row>
      </Container>
    )
  }
}

export default NetworkList