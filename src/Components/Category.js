import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Category.scss";
import done from "../Assests/done.svg";
import * as actionCreators from "../store/action/index";

class Category extends Component {
  render() {
    console.log("category", this.props.category);
    return (
      <div className="category container">
        {this.props.category.map((category) => (
          <div className="row">
            <div className="col-4 videothumbnail">
              {/* <iframe
                title="video"
                src={"https://www.youtube.com/embed/" + category.id.videoId}
              /> */}
              <NavLink
                to="/videoplayer"
                onClick={() =>
                  this.props.onVideoPlayer(
                    category.id.videoId,
                    category.snippet.title
                  )
                }
              >
                <img
                  className="video"
                  src={category.snippet.thumbnails.medium.url}
                  alt=""
                />
              </NavLink>
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
