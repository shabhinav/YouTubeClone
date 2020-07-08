import React, { Component } from "react";
import { connect } from "react-redux";
import "./channelInfo.scss";
import { NavLink } from "react-router-dom";
import * as actionCreators from "../store/action/index";
import done from "../Assests/done.svg";

class ChannelInfo extends Component {
  render() {
    console.log(this.props.channelName);
    return (
      <div className="ChannelInfo container">
        <div className=" headingSection container">
          <h1 className="heading ">{this.props.channelName}</h1>
        </div>
        <div>
          {this.props.channeldetails.map((channelvideo) => (
            <div key={Math.random()}>
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
                    <img alt="" src={channelvideo.snippet.thumbnails.medium.url} />
                  </NavLink>
                </div>
                <div className="col-6 videotitle">
                  <NavLink to="/videoplayer" className="title">
                    {channelvideo.snippet.title}
                  </NavLink>
                  <p>
                    {channelvideo.snippet.channelTitle} <img src={done} alt="" />
                  </p>
                  <p className="description">{channelvideo.snippet.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoPlayer: (videoId, videotitle) =>
      dispatch(actionCreators.playVideo(videoId, videotitle)),
  };
};

const mapStateToProps = (state) => {
  return {
    channeldetails: state.channelInfo,
    channelName: state.channelName,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChannelInfo);
