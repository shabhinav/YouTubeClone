import React, { Component } from "react";
import axios from "axios";

class Category extends Component {
  state = {
    data: [],
  };

  async componentDidUpdate(prevState) {
    let id = this.props.match.params.category;
    console.log(this.state.data);
    console.log(id);
    if (prevState !== this.state.data) {
      let catData = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      console.log("api", catData);
      this.setState({
        data: catData,
      });
    }
  }

  render() {
    console.log(this.state.catData);
    return <div className="category"></div>;
  }
}

export default Category;
