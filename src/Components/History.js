import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { NavLink } from "react-router-dom";
import * as actionCreators from "../store/action/index";
import "./History.scss";

class History extends Component {
  state = {
    keys: [],
  };

  async componentDidMount() {
    let video = await axios.post(`https://clone-1d9c2.firebaseio.com/VideoId.json`, {
      videoid: this.props.videohistory,
      videohistory: this.props.titlehistory,
    });
    console.log(video);
    let data = await axios.get(`https://clone-1d9c2.firebaseio.com/VideoId.json`);

    await this.setState({
      keys: Object.values(data.data).reverse(),
    });
  }

  render() {
    return (
      <div className="history mt-3 container">
        <div>
          <h5 style={{ textAlign: "left", fontWeight: "700" }}>History</h5>
        </div>
        <div className="historysection">
          <div className="video">
            {this.state.keys.map((video) => (
              <iframe
                className="mr-3"
                title="video"
                key={Math.random()}
                src={"http://youtube.com/embed/" + video.videoid}
              />
            ))}
          </div>
          <div className="title">
            {this.state.keys.map((title) => (
              <div key={Math.random()} className="videotitle">
                <NavLink
                  className="mr-2"
                  to="/videoplayer"
                  onClick={() =>
                    this.props.onVideoPlayer(title.videoid, title.videohistory)
                  }
                >
                  <h6 className="videolink">
                    <strong>{title.videohistory}</strong>
                  </h6>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    videoId: state.videoId,
    videoTitle: state.videotitle,
    videohistory: state.videohistory,
    titlehistory: state.titlehistory,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoPlayer: (videoId, videotitle) =>
      dispatch(actionCreators.playVideo(videoId, videotitle)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(History);
