import React, { Component } from "react";
<<<<<<< HEAD
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Category.scss";
import done from "../Assests/done.svg";
import * as actionCreators from "../store/action/index";
=======
import axios from "axios";
>>>>>>> parent of a452d1e... categorypages

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
<<<<<<< HEAD
    console.log("category", this.props.category);
    return (
      <div className="category container">
        {this.props.category.map((category) => (
          <div className="row">
            <div className="col-4 video">
              <iframe src={"https://www.youtube.com/embed/" + category.id.videoId} />
            </div>
            <div className="col-6 title">
              <NavLink
                to="/videoplayer"
                onClick={() =>
                  this.props.onVideoPlayer(
                    category.id.videoId,
                    category.snippet.title
                  )
                }
              >
                <h6 className="videoTitle">
                  <strong>{category.snippet.title}</strong>
                </h6>
              </NavLink>
              <p>
                {category.snippet.channelTitle} <img src={done} alt="" />
              </p>
              <p className="description" style={{ textOverflow: "ellipsis" }}>
                {category.snippet.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    category: state.categoryData,
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    onVideoPlayer: (videoId, videotitle) =>
      dispatch(actionCreators.playVideo(videoId, videotitle)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Category);
=======
    console.log(this.props.match.params.category);
    return <div className="category"></div>;
  }
}

export default Category;
>>>>>>> parent of a452d1e... categorypages
