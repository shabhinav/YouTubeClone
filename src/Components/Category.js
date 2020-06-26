import React, { Component } from "react";
import { connect } from "react-redux";

class Category extends Component {
  render() {
    console.log("category", this.props.category);
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.categoryData,
  };
};

export default connect(mapStateToProps)(Category);
