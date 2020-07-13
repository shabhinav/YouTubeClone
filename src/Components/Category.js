import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./Category.scss";
import done from "../Assests/done.svg";
import * as actionCreators from "../store/action/index";

class Category extends Component {
  render() {
    return (
      <div className="category container">
        {this.props.category.map((category) => (
          <div className="row ">
            <div className="col-lg-4 col-sm-12 videothumbnail">
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
                <NavLink
                  key={Math.random()}
                  className="channelTitle"
                  to="channelinfo"
                  onClick={() =>
                    this.props.channelInfo(
                      category.snippet.channelId,
                      category.snippet.channelTitle
                    )
                  }
                >
                  {category.snippet.channelTitle}
                  <img style={{ marginLeft: "5px" }} src={done} alt="" />
                </NavLink>
                {/* {category.snippet.channelTitle} <img src={done} alt="" /> */}
              </p>
              <p className="description">{category.snippet.description}</p>
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
    channelInfo: (channeldata, channelName) =>
      dispatch(actionCreators.channelInfo(channeldata, channelName)),
  };
};

export default connect(mapStateToProps, mapDispatchToprops)(Category);
