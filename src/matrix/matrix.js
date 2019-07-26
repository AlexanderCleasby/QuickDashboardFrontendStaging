import React, { Component } from "react";
import Cell from "./cell";
import { DecimalToPercent } from "../helpers.js";

import "./matrix.scss";

export default class Matrix extends Component {
  constructor(props) {
    super(props);
  }

  cellStyle = {
    width: DecimalToPercent(100 / this.props.width)
  };

  rowStyle = {
    height: DecimalToPercent(100 / this.props.height)
  };

  isCellHighlighted = (x, y) => {
    
    if (this.props.pickedUpWidget.state.x != null
    &&
     (x >= this.props.pickedUpWidget.state.x && x < this.props.pickedUpWidget.state.x + this.props.pickedUpWidget.state.width)
    &&
    (y >= this.props.pickedUpWidget.state.y && y < this.props.pickedUpWidget.state.y + this.props.pickedUpWidget.state.height)){
      
      return this.props.pickedUpWidget.props.color
    }
    
  };

  render() {
    return (
      <div className="matrix">
        {Array.from(new Array(this.props.height), (x, i) => (
          <div key={i} className="row" style={this.rowStyle}>
            {Array.from(new Array(this.props.width), (x, j) => (
              <Cell
                handleDragOver={this.props.handleDragOver}
                coords={{ x: i, y: j }}
                style={this.cellStyle}
                highlighted={this.isCellHighlighted(i, j)}
              />
            ))}
          </div>
        ))}
      </div>
    );
  }
}
