import React, { Component } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./widget.scss";

export default class Widget extends Component {
  constructor() {
    super();
    this.state = {
        color:this.props.color,
        width:4,
        height:2
    };
  }


  handleDragEnd = () => {
    console.log("down");
  };

  render() {
    //React throws out the drag
    
      return (
        <div className="widget">
          <div
            className="widgetHeader"
          >
            <div className="logo"
                          draggable
                          onDragStart={e=>this.props.handleDragStart(e,this)}
                          onDragEnd={this.handleDragEnd}
                          onDragEnd={this.props.hadnleDragEnd}> 
            <FontAwesomeIcon
              
              icon={this.icon}

            />
            </div>
          </div>
          {this.renderBody()}
        </div>
      );

  }
}
