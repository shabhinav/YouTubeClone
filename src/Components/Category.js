import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Category.scss";
import done from "../Assests/done.svg";
import * as actionCreators from "../store/action/index";
import axios from "axios";

class Category extends Component {
  state = {
    data: [],
  };

  async componentDidMount() {
    let categoryid = this.props.match.params.category;
    console.log("catid", categoryid);

    let catdetails = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${categoryid}`
    );
    await this.setState({
      data: catdetails,
    });
    console.log("data", this.state.data);
  }

  async componentDidUpdate(prevState) {
    let categoryid = this.props.match.params.category;
    console.log("catid", categoryid);
    if (prevState.data !== this.state.data) {
      let catdetails = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${categoryid}`
      );
      // this.setState({});
      console.log("dtatatatatt", catdetails);
    }

    // this.setState({
    //   data: categoryid,
    // });
  }

  render() {
    console.log(this.props.match.params.category);
    return <div className="category"></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.categoryData,
  };
};

export default connect(mapStateToProps)(Category);
