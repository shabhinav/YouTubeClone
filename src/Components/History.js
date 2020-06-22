import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
// import * as actionCreators from "../store/action/index";
import "./History.scss";

class History extends Component {
  state = {
    keys: [],
  };

  async componentDidMount() {
    // const videodata = {
    //   videoid: this.props.videohistory,
    //   videohistory: this.props.titlehistory,
    // };

    let video = await axios.post(`https://clone-1d9c2.firebaseio.com/VideoId.json`, {
      videoid: this.props.videohistory,
      videohistory: this.props.titlehistory,
    });

    console.log("hisvid", video.data.name);

    let data = await axios.get(`https://clone-1d9c2.firebaseio.com/VideoId.json`);

    await this.setState({
      keys: Object.values(data.data).reverse(),
    });
  }

  render() {
    console.log(this.state.keys);
    return (
      <div className="history mt-3 container">
        <div className="row">
          <div className="col-4">
            {this.state.keys.map((videos) =>
              videos.videoid.map((id) => (
                <iframe
                  title="video"
                  src={"http://youtube.com/embed/" + id}
                  className="videothumbnail"
                />
              ))
            )}
          </div>
          <div className="col-6 title">
            {this.state.keys.map((title) =>
              title.videohistory.map((title) => (
                <h5>
                  <strong>{title}</strong>
                </h5>
              ))
            )}
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

// const mapDispatchToProps = (dispatch) => {
//   console.log(dispatch);
//   return {
//     onVideoPlayer: (videoId, videotitle) =>
//       dispatch(actionCreators.playVideo(videoId, videotitle)),
//   };
// };

export default connect(mapStateToProps)(History);
