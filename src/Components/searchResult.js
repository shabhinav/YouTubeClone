import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as actionCreators from "../store/action/index";
import "./searchResult.scss";
import done from "../Assests/done.svg";

class SearchResult extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div className="searchResult container">
        {/* <Searchbar/> */}
        {this.props.value.map((val) => (
          <div className="row">
            <div className="col-4 videothumbnail">
              <NavLink
                to="/videoplayer"
                onClick={() =>
                  this.props.onVideoPlayer(val.id.videoId, val.snippet.title)
                }
              >
                <img
                  alt=""
                  className="HomeVideos"
                  src={val.snippet.thumbnails.medium.url}
                />
              </NavLink>
            </div>
            <div className="col-6 title">
              <NavLink
                to="/videoplayer"
                onClick={() =>
                  this.props.onVideoPlayer(val.id.videoId, val.snippet.title)
                }
              >
                <h6 style={{ color: "black", textDecoration: "none" }}>
                  <strong>{val.snippet.title}</strong>
                </h6>
              </NavLink>
              <p>
                {val.snippet.channelTitle}
                <img src={done} style={{ marginLeft: "3px" }} alt="" />
              </p>
              <p className="description" style={{ textOverflow: "ellipsis" }}>
                {val.snippet.description}
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
    value: state.searchedData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoPlayer: (videoId, videotitle) =>
      dispatch(actionCreators.playVideo(videoId, videotitle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
