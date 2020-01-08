import React from 'react'
import { connect } from 'react-redux';
import {Form, Button, Alert} from 'react-bootstrap';
import {task} from '../../_actions/taskAction'
import LoveMusic from '../../_service/music'
class FormComponent extends React.Component{
    constructor(props){
      super(props)
      this.state={
        x:'',
        y:'',
        r:2,
      }
      this.valid = {
        r:true,
        x:true,
        y:true,
        validBtn:false,
      }
    this.handleValid = this.handleValid.bind(this)
    }

  render() { 
    return(
      <Form>

      <Form.Group controlId="exampleForm.ControlSelect1">
      <Form.Label>CHOOSE R:</Form.Label>
      <Form.Control as="select" onChange={this.handleChange.bind(this)}>
        <option>2</option>
        <option>1.5</option>
        <option>1</option>
        <option>0.5</option>
        <option>0</option>
        <option>-0.5</option>
        <option>-1</option>
        <option>-1.5</option>
        <option>-2</option>
      </Form.Control>
    </Form.Group>
    {this.valid.r?'':<Alert variant='secondary'>
          Это все обман... Корректные значения R: [2..0.5]
    </Alert>}

    <Form.Group controlId="formBasicPassword">
    <Form.Label> CHOOSE X:</Form.Label>
    <Form.Control onChange={e => {this.setState({x:e.target.value}); this.handleValid(e.target.value, this.state.y, this.state.r )}} type="text" placeholder="[-2...2]" />
  </Form.Group>
  {this.valid.x?'':<Alert variant='secondary'>
         Введите, пожалуста, корректные значения Х: [-2...2]
    </Alert>}

  <Form.Group controlId="formBasicPassword">
    <Form.Label>CHOOSE Y:</Form.Label>
    <Form.Control onChange={e => {this.setState({y:e.target.value}); this.handleValid(this.state.x, e.target.value, this.state.r )}} type="text" placeholder="(-5...3)" />
  </Form.Group>
  {this.valid.y?'':<Alert variant='secondary'>
        Введите, пожалуста, корректные значения Y: (-5...3)
    </Alert>}

  <Button  variant="primary" bsPrefix="btn-main-sbmt"  disabled={!this.valid.validBtn} onClick={this.handleSubmit.bind(this)} type="submit">
    Submit
  </Button>
  <LoveMusic/>
    </Form>
    )
  }

  handleValid(x,y,r){
    let emptyX = true
    let emptyY = true
    if (x!=='') 
      emptyX = false
    if (y!=='') 
      emptyY = false

      console.log("valid "+r)
    if(r>0) {
      this.valid.r =true 
    } else {
      this.valid.r=false
    }

    if((x>=-2 && x<=2 )|| emptyX) {
      this.valid.x=true
    } else {
      this.valid.x=false
    }

    if((y>-5 && y<3 )|| emptyY) {
      this.valid.y=true
    } else {
      this.valid.y=false
    }


    if(this.valid.r&&this.valid.x&&this.valid.y&&!emptyX&&!emptyY) {
      this.valid.validBtn =true} else {this.valid.validBtn =false}
  }


  handleChange(e){
    console.log(e.target.value)
    this.props.updateR(e.target.value)
    this.setState({r:e.target.value})
    this.handleValid(this.state.x, this.state.y, e.target.value )
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.sendPoint(this.state)
  }

}
function mapState(state) {
  return{
    r: state.rCoor.r
    }
  }

  const actionCreators = {
    updateR: function (data) {
      return {type: 'UPDATE_R', data}
      
    },
    sendPoint: task.sendPoint
  }

export default connect(mapState, actionCreators)(FormComponent)