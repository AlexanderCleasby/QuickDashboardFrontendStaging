import React, {Component} from 'react';



export default class Cell extends Component{
    constructor(props){
        super()
        
    }
    

    render(){
        return (
            <div
              style={this.props.highlighted ? {...this.props.style,backgroundColor:'red'} : this.props.style}
              className="cell"
              onDragEnter={(e)=>{
                this.props.handleDragOver(e,this.props.coords)
              }}
              
            />
          );
    }
}