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
    return this.props.pickedUpWidget.x != null
    &&
     (x >= this.props.pickedUpWidget.x && x < this.props.pickedUpWidget.x + this.props.pickedUpWidget.width)
    &&
    (y >= this.props.pickedUpWidget.y && y < this.props.pickedUpWidget.y + this.props.pickedUpWidget.height)
    
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
