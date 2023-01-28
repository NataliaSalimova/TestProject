import React from'react';
import "./Picture.css";
import Rector from './Rector';
//Здесь высвечиваются координаты выделенного прямоугольника
export default class Picture extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        selected: false,
        x: -1,
        y: -1,
        w: -1,
        h: -1
      }
    }
    
    onSelected = (rect) => {
      this.setState({
        selected: true,
        ...rect
      })
    };
    
    getSelectionStr() {
      if (this.state.selected) {
        const state = this.state
        return ( <p>x: {state.x}, y: {state.y}, w: {state.w}, h: {state.h}</p>)
      }
      return 'No Selection';
    }
    
    render() {
      return (
        <div>
          <Rector width="1000" height = "700"  onSelected={this.onSelected}/>
          <div>
            {this.getSelectionStr()}
           
          </div>
        </div>
      )
    }
  }
  
 