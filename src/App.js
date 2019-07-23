import React, {
  Component
} from 'react';
//import Widget from './widgets/widget'
import TickerWidget from './widgets/ticker'
import MapWidget from './widgets/map'
import Matrix from './matrix/matrix'
import './index.scss';


export default class App extends Component {
  constructor(){
    super()
    this.state={
      placedWidgets:[],
      pickedUpWidget:{x:null,y:null,width:2,height:1}
    }
  }

  placeWidget=()=>{
    console.log('dropped')
  }
  
  handleMatrixDragOver = (e,coords)=>{
    console.log(e,coords)
    this.setState((prevState)=>{
      let newState = prevState.pickedUpWidget
      newState.x = coords.x
      newState.y = coords.y
      return {pickedUpWidget:newState}
    })
  }

  handleDragStart = (e,widget) => {
    console.log(widget);
  };

  hadnleDragEnd=()=>{
    this.setState({pickedUpWidget:{width:2,height:1}})
  }

  render() {
    return ( 
      
        <div className = "App container " >
          <Matrix placeWidget={this.placeWidget} pickedUpWidget={this.state.pickedUpWidget} handleDragOver={this.handleMatrixDragOver} widgets={this.state.placedWidgets} width={4} height={4} / >
          <div className='sidebar'>
            <TickerWidget handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
            <TickerWidget handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
            <MapWidget handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
          </div>
        </div>
      
    )
  };
}