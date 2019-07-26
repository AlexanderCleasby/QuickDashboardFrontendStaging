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
      pickedUpWidget:{state:{x:null,y:null,width:2,height:1}}
    }
  }

  dropWidget=(e,v)=>{
    this.setState({placedWidgets:[...this.state.placedWidgets,this.state.pickedUpWidget]})
  }
  
  handleMatrixDragOver = (e,coords)=>{
    this.setState((prevState)=>{
      let newState = prevState.pickedUpWidget
      newState.state.x = coords.x
      newState.state.y = coords.y
      return {pickedUpWidget:newState}
      
    })
  }

  handleDragStart = (e,widget) => {
    this.setState({pickedUpWidget:widget})
  };

  hadnleDragEnd=(e)=>{
    e.preventDefault()
    console.log('dragEnd')
    this.setState({pickedUpWidget:{state:{x:null,y:null,width:2,height:1}}})
  }

  render() {
    return ( 
      
        <div className = "App container " >
          <Matrix dropWidget={this.dropWidget}  pickedUpWidget={this.state.pickedUpWidget} handleDragOver={this.handleMatrixDragOver} widgets={this.state.placedWidgets} width={5} height={4} / >
          <div className='sidebar'>
            <TickerWidget color={"#FFCC22"} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
            <TickerWidget color={"#FFACAA"} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
            <MapWidget color={"#99cc22"} handleDragStart={this.handleDragStart} hadnleDragEnd={this.hadnleDragEnd} name = 'wooh' / >
          </div>
        </div>
      
    )
  };
}