import React from 'react'
import { connect } from 'react-redux';
import '../css/Table.css'
import BackImg from '../res/back_graph.png'
import ImgGraph from '../res/graph.png'
import '../css/Canvas.css'
import {task} from '../../_actions/taskAction'

class Canvas extends React.Component{
    constructor(props){
      super(props)
      this.handleClick = this.handleClick.bind(this)
    }

  render() { 
    return(
      <div>
        <canvas id="graph" className="canvas" 
        onClick={this.handleClick}
        width="400px" height="400px" style={{backgroundImage: `url(${BackImg})`}}/>
        <img id ="graph-img" className="img-canvas" src={ImgGraph} alt="graph_img"/>
      </div>
    )
  }

  componentDidMount(){
    drawGraph(2)
  }

  handleClick(e){
    let rect = e.target.getBoundingClientRect(); 
    let x = e.clientX - rect.left; 
    let y = e.clientY - rect.top; 

    if (x >= 200) {
      x = x - 200
    } else {
      x = -(200 - x);
    }

    if (y <= 200) {
      y = 200 - y;
    } else {
      y = -(y - 200);
    }
    x=x/45/2;
    y=y/45/2;
    if(this.props.r>0)
    this.props.sendPoint({x:x, y:y, r: this.props.r})

  }

}

function drawGraph(r) {
  const canvas = document.getElementById('graph');
  let context = canvas.getContext('2d');
  context.clearRect(0,0,400,400);
  let kof = (4 - r*2)*0.25*400;
  let graphImg = document.getElementById("graph-img")
  context.drawImage(graphImg, kof/2, kof/2, 400-kof, 400-kof);
}

function drawPoint(x,y,r,isIn){
  const canvas = document.getElementById('graph');
  if (canvas.getContext) {

    let ord = 45*2;
    let xCanvas = 200 + x*ord;
    let yCanvas = 200 - y*ord;
    let ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.beginPath()
    drawGraph(r)

    if (!isIn){
        ctx.fillStyle = "#470005";}
    else {
        ctx.fillStyle = "rgba(91,234,65,0.68)";
    }
    ctx.moveTo(125, 35);
    ctx.arc(xCanvas, yCanvas, 4, 0, 2 * Math.PI);
    ctx.fill();
  }
}

let lastR = 2
let idLast = 0
function mapState(state) {
  if((lastR!==state.rCoor.r)&&(state.rCoor.r>0)&&state.rCoor.r!=='')
  drawGraph(state.rCoor.r)
  if(idLast!==state.sendPoint.lastPoint.id)
   if(state.sendPoint.lastPoint.correct){
    drawPoint(state.sendPoint.lastPoint.x,state.sendPoint.lastPoint.y,state.sendPoint.lastPoint.r,state.sendPoint.lastPoint.hit)}
  idLast = state.sendPoint.lastPoint.id

  console.log(state.rCoor.r)
  lastR = state.rCoor.r
  return {
  r: state.rCoor.r
  }
  }


  const actionCreators = {
    sendPoint: task.sendPoint
  }


export default connect(mapState,actionCreators)(Canvas)