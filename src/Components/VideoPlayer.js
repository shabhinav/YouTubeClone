import React, { Component } from "react";
import { connect } from "react-redux";
import "./VideoPlayer.scss";
import axios from "axios";
import * as actionCreators from "../store/action/index";
import Comment from "./Comment";
import { NavLink } from "react-router-dom";

class VideoPlayer extends Component {
  state = {
    recomendvideo: [],
  };

  async componentDidMount() {
    let sideOption = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=dance&key=${process.env.REACT_APP_NOT_SECRET_CODE}`
    );
    this.setState({
      recomendvideo: sideOption.data.items,
    });
  }

  render() {
    console.log(this.props.videohistory);
    return (
      <div className="videoplayer container">
        <div className="row">
          <div className="col-md-6 mainscreen">
            <iframe
              title="video"
              src={"http://youtube.com/embed/" + this.props.videoId}
              className="mainvideo"
            />
            <h5 style={{ textAlign: "left", marginTop: "10px" }}>
              {this.props.videoTitle}
            </h5>
            <Comment />
          </div>
          <div className="col-md-4 vidrecomend">
            <div>
              <h6
                style={{ fontWeight: "700", textAlign: "left", marginLeft: "15px" }}
              >
                UP Next
              </h6>
            </div>
            <div>
              {this.state.recomendvideo.map((recomendvideo) => (
                <div key={Math.random()}>
                  <NavLink
                    to="/videoplayer"
                    onClick={() =>
                      this.props.onVideoPlayer(
                        recomendvideo.id.videoId,
                        recomendvideo.snippet.title
                      )
                    }
                  >
                    <img
                      className="HomeVideos"
                      src={recomendvideo.snippet.thumbnails.medium.url}
                    />
                  </NavLink>
                  {/* <iframe title='video' src={'http://youtube.com/embed/'+recomendvideo.id.videoId} className='recomendvideo'/> */}
                  <div>
                    <p
                      className="videotitle"
                      style={{ textAlign: "left", fontSize: "15px" }}
                      onClick={() =>
                        this.props.onVideoPlayer(
                          recomendvideo.id.videoId,
                          recomendvideo.snippet.title
                        )
                      }
                    >
                      <strong>{recomendvideo.snippet.title}</strong>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.videoId);
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);
