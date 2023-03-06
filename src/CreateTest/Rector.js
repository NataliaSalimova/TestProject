
import React from 'react';
import "./Picture.css";
//Главный файл с canvas. Здесь появляется выделенный прямоугольник
export default class Rector extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.my_src = this.props.SRC;
  }
  static defaultProps = {
    width: 320,
    height: 200,
    strokeStyle: 'blue', 
    lineWidth: 1,
    onSelected: () => {},
  };
      
  canvas = null;
  ctx = null;
  isDirty = false;
  isDrag = false;
  startX = -1;
  startY = -1;
  curX = -1;
  curY = -1;
  image = null;
   
  componentDidMount(props) {
    this.ctx = this.canvas.getContext('2d')
    this.ctx.canvas.width  = 800;//this.props.width
    this.ctx.canvas.height  = 450;//this.props.height
  
  
    this.image = new Image();
    this.image.onload = () => {
  //this.ctx.imageSmoothingEnabled = true
 this.ctx.canvas.imageSmoothingQuality = "high"
     
      
 this.ctx.drawImage(this.image, 0, 0, this.props.width, this.props.height);
    
    
 
      
    }
    this.image.src = this.my_src
    this.ctx.strokeStyle = this.props.strokeStyle
    this.ctx.lineWidth = this.props.lineWidth
    this.addMouseEvents()
  }; 
    
 
  updateCanvas = () => {
 
    if (this.isDrag) {
      requestAnimationFrame(this.updateCanvas);
    }
    if (! this.isDirty) {
      return
    }
      
    this.ctx.clearRect(0, 0, this.ctx.canvas.width,  this.ctx.canvas.height)
    //this.ctx.imageSmoothingEnabled = true;
 // this.ctx.imageSmoothingEnabled = true
  
 this.ctx.drawImage(this.image, 0, 0, this.props.width, this.props.height);




   

          
    if (this.isDrag) {    
      const rect = {
        x: this.startX,
        y: this.startY,
        w: this.curX - this.startX,
        h: this.curY - this.startY,
      }
      this.ctx.strokeRect(rect.x, rect.y, rect.w, rect.h);
      this.ctx.save();
      this.ctx.globalAlpha=.20;
      this.ctx.fillStyle= 'black';
      this.ctx.fillRect(rect.x, rect.y, rect.w, rect.h);
      this.ctx.restore();
    }  
      this.isDirty = false;
  };
  
  componentWillUnmount() {
    this.removeMouseEvents()
  }
  
    addMouseEvents() {
      document.addEventListener('mousedown', this.onMouseDown, false);
      document.addEventListener('mousemove', this.onMouseMove, false);
      document.addEventListener('mouseup', this.onMouseUp, false);
    }
    removeMouseEvents() {
      document.removeEventListener('mousedown', this.onMouseDown, false);
      document.removeEventListener('mousemove', this.onMouseMove, false);
      document.removeEventListener('mouseup', this.onMouseUp, false);
    }
  
    onMouseDown = (e) => {
      this.isDrag = true;
      this.curX = this.startX = e.offsetX;//offsetX
      this.curY = this.startY = e.offsetY;
      requestAnimationFrame(this.updateCanvas);
    };
  
    onMouseMove = (e) => {
      if (! this.isDrag) return
      this.curX = e.offsetX;//offset
      this.curY = e.offsetY;//
      this.isDirty = true;
    };
    
    onMouseUp = (e) => {
      this.isDrag = false;
      this.isDirty = true;
      
      const rect = {
        x: Math.min(this.startX, this.curX),
        y: Math.min(this.startY, this.curY),
        w: Math.abs(e.offsetX - this.startX),//offset
        h: Math.abs(e.offsetY - this.startY),
      }
    
     this.props.onSelected(rect);
    };
   
   
    render() {
     
      return (
      <div>
       <canvas  ref={(c)=>this.canvas = c }   className="Rector"/>
      </div>)
    }
  }
