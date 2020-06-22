import React, { Component } from "react";
import { categoryList } from "./categoryList";
import "./shellapp.scss";

class Shellapp extends Component {
  state = {
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
  };
  render() {
    return (
      <div className="ShellApp">
        {this.state.array.map((id) => (
          <div key={Math.random()}>
            <div className="thumbnail"></div>
            <div className="title"></div>
          </div>
        ))}
      </div>
    );
  }
}

export default Shellapp;
