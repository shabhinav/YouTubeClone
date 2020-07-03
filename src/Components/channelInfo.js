import React, { Component } from "react";
import { connect } from "react-redux";
import "./channelInfo.scss";
import { NavLink } from "react-router-dom";
import * as actionCreators from "../store/action/index";

class ChannelInfo extends Component {
  render() {
    console.log("channeldetails", this.props.channeldetails);
    return (
      <div className="ChannelInfo container">
        <div>
          <h1>{this.props.channeldetails[0].snippet.channelTitle}</h1>
        </div>
        {this.props.channeldetails.map((channelvideo) => (
          <div
            className="row"
            onClick={() =>
              this.props.onVideoPlayer(
                channelvideo.id.videoId,
                channelvideo.snippet.title
              )
            }
          >
            <div className="col-4 videothumbnail">
              <NavLink to="/videoplayer">
                <img src={channelvideo.snippet.thumbnails.medium.url} />
              </NavLink>
            </div>
            <div className="col-6 videotitle">
              <NavLink to="/videoplayer" className="title">
                {channelvideo.snippet.title}
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoPlayer: (videoId, videotitle) =>
      dispatch(actionCreators.playVideo(videoId, videotitle)),
    // channelInfo: (channeldata) => dispatch(actionCreators.channelInfo(channeldata)),
  };
};

const mapStateToProps = (state) => {
  return {
    channeldetails: state.channelInfo,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelInfo);
