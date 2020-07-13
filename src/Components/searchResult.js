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
      <div className="searchResult">
        <div style={{ textAlign: "left", marginLeft: "30px" }}>
          <strong>
            <h5>Searched Result</h5>
          </strong>
        </div>
        {/* <Searchbar/> */}
        <div>
          {this.props.value.map((val) => (
            <div className="row">
              <div className="col-lg-4 col-sm-12 videothumbnail">
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
                  className="videoTitle"
                  to="/videoplayer"
                  onClick={() =>
                    this.props.onVideoPlayer(val.id.videoId, val.snippet.title)
                  }
                >
                  <h6 style={{ color: "black" }}>
                    <strong>{val.snippet.title}</strong>
                  </h6>
                </NavLink>
                <p>
                  <NavLink
                    key={Math.random()}
                    className="channelTitle"
                    to="channelinfo"
                    onClick={() =>
                      this.props.channelInfo(
                        val.snippet.channelId,
                        val.snippet.channelTitle
                      )
                    }
                  >
                    {val.snippet.channelTitle}
                    <img style={{ marginLeft: "5px" }} src={done} alt="" />
                  </NavLink>
                  {/* {val.snippet.channelTitle}
                  <img src={done} style={{ marginLeft: "3px" }} alt="" /> */}
                </p>
                <p className="description" style={{ textOverflow: "ellipsis" }}>
                  {val.snippet.description}
                </p>
              </div>
            </div>
          ))}
        </div>
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
    channelInfo: (channeldata, channelName) =>
      dispatch(actionCreators.channelInfo(channeldata, channelName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
