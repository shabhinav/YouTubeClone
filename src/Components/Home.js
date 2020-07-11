import React, { Component } from "react";
import { categoryList } from "./categoryList";
import "./Home.scss";
import axios from "axios";
import Shellapp from "./shellapp";
// import Spinner from "./spinner";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/action/index";
import done from "../Assests/done.svg";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vidcat: [],
      array: [1, 2, 3, 4],
      loadVideoplayer: false,
      redirect: false,
      newCategoryArray: [],
      categoriesDataArray: [],
    };
  }

  async componentDidMount() {
    var categoryArray = [...categoryList];

    await this.setState({
      newCategoryArray: categoryArray.splice(0, 3),
    });
    let categoryPromises = this.state.newCategoryArray.map((category) => {
      return axios.get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&type=video&videoCategoryId=${category.id}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`
      );
    });
    Promise.all(categoryPromises)
      .then((res) => {
        this.setState({
          categoriesDataArray: res,
        });
      })
      .catch((err) => console.log(err));
  }

  loadVideoHandler = () => {
    this.setState({
      loadVideoplayer: true,
    });
  };

  sortAccToCat = (catId) => {
    this.setState({
      redirect: true,
    });
  };

  render() {
    return (
      //main component
      <div className="home">
        {this.state.categoriesDataArray.length === 0 ? (
          <div className="">
            <Shellapp />
          </div>
        ) : (
          <div>
            <div>
              <div style={{ margin: "30px 0px 30px 60px" }}>
                <h5
                  style={{
                    marginTop: "25px",
                    textAlign: "left",
                    marginLeft: "20px",
                    fontWeight: "700",
                  }}
                >
                  {this.state.newCategoryArray[0].name}
                </h5>
              </div>
              <div className="videoThumbnail">
                <div>
                  {this.state.categoriesDataArray[0].data.items.map((data) => (
                    <div key={Math.random()}>
                      <NavLink
                        to="/videoplayer"
                        onClick={() =>
                          this.props.onVideoPlayer(
                            data.id.videoId,
                            data.snippet.title
                          )
                        }
                      >
                        <img
                          alt=""
                          className="HomeVideos"
                          src={data.snippet.thumbnails.medium.url}
                        />
                      </NavLink>
                    </div>
                  ))}
                </div>
                <div className="videotitlesec">
                  {this.state.categoriesDataArray[0].data.items.map((data) => (
                    <p className="title">
                      <NavLink
                        className="homevideotitle"
                        key={Math.random()}
                        to="/videoplayer"
                        onClick={() =>
                          this.props.onVideoPlayer(
                            data.id.videoId,
                            data.snippet.title
                          )
                        }
                      >
                        {data.snippet.title}
                      </NavLink>
                    </p>
                  ))}
                </div>
                <div className="channelTitleSection">
                  {this.state.categoriesDataArray[0].data.items.map((data) => (
                    <NavLink
                      key={Math.random()}
                      className="channelTitle"
                      to="channelinfo"
                      onClick={() =>
                        this.props.channelInfo(
                          data.snippet.channelId,
                          data.snippet.channelTitle
                        )
                      }
                    >
                      {data.snippet.channelTitle}
                      <img style={{ marginLeft: "5px" }} src={done} alt="" />
                    </NavLink>
                  ))}
                </div>
              </div>
              <hr
                style={{
                  width: "89%",
                  height: "3px",
                  marginTop: "25px",
                  marginBottom: "0px",
                  backgroundColor: "#DEDEDE",
                }}
              />
              {/* second category */}
              <div>
                <div>
                  <div style={{ margin: "30px 0px 30px 60px" }}>
                    <h4
                      style={{
                        textAlign: "left",
                        marginLeft: "20px",
                        marginTop: "35px",
                        fontWeight: "700",
                      }}
                    >
                      {this.state.newCategoryArray[1].name}
                    </h4>
                  </div>
                </div>
                <div className="videoThumbnail">
                  <div>
                    {this.state.categoriesDataArray[1].data.items.map((data) => (
                      <div key={Math.random()}>
                        <NavLink
                          to="/videoplayer"
                          onClick={() =>
                            this.props.onVideoPlayer(
                              data.id.videoId,
                              data.snippet.title
                            )
                          }
                        >
                          <img
                            alt=""
                            className="HomeVideos"
                            src={data.snippet.thumbnails.medium.url}
                          />
                        </NavLink>
                      </div>
                    ))}
                  </div>
                  <div className="videotitlesec">
                    {this.state.categoriesDataArray[1].data.items.map((data) => (
                      <p className="title">
                        <NavLink
                          className="homevideotitle"
                          key={Math.random()}
                          to="/videoplayer"
                          onClick={() =>
                            this.props.onVideoPlayer(
                              data.id.videoId,
                              data.snippet.title
                            )
                          }
                        >
                          {data.snippet.title}
                        </NavLink>
                      </p>
                    ))}
                  </div>
                  <div className="channelTitleSection">
                    {this.state.categoriesDataArray[1].data.items.map((data) => (
                      <NavLink
                        key={Math.random()}
                        className="channelTitle"
                        to="channelinfo"
                        onClick={() =>
                          this.props.channelInfo(
                            data.snippet.channelId,
                            data.snippet.channelTitle
                          )
                        }
                      >
                        {data.snippet.channelTitle}
                        <img style={{ marginLeft: "5px" }} src={done} alt="" />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
              <hr
                style={{
                  width: "89%",
                  height: "3px",
                  marginTop: "35px",
                  marginBottom: "0px",
                  backgroundColor: "#DEDEDE",
                }}
              />{" "}
              {/* Third category */}
              <div>
                <div>
                  <div style={{ margin: "30px 0px 30px 60px" }}>
                    <h4
                      style={{
                        textAlign: "left",
                        marginLeft: "20px",
                        marginTop: "35px",
                        fontWeight: "700",
                      }}
                    >
                      {this.state.newCategoryArray[2].name}
                    </h4>
                  </div>
                </div>
                <div className="videoThumbnail">
                  <div>
                    {this.state.categoriesDataArray[2].data.items.map((data) => (
                      <div key={Math.random()}>
                        <NavLink
                          to="/videoplayer"
                          onClick={() =>
                            this.props.onVideoPlayer(
                              data.id.videoId,
                              data.snippet.title
                            )
                          }
                        >
                          <img
                            alt=""
                            className="HomeVideos"
                            src={data.snippet.thumbnails.medium.url}
                          />
                        </NavLink>
                      </div>
                    ))}
                  </div>
                  <div className="videotitlesec">
                    {this.state.categoriesDataArray[2].data.items.map((data) => (
                      <p className="title">
                        <NavLink
                          className="homevideotitle"
                          key={Math.random()}
                          to="/videoplayer"
                          onClick={() =>
                            this.props.onVideoPlayer(
                              data.id.videoId,
                              data.snippet.title
                            )
                          }
                        >
                          {data.snippet.title}
                        </NavLink>
                      </p>
                    ))}
                  </div>
                  <div
                    className="channelTitleSection"
                    style={{ paddingBottom: "20px" }}
                  >
                    {this.state.categoriesDataArray[2].data.items.map((data) => (
                      <NavLink
                        key={Math.random()}
                        className="channelTitle"
                        to="channelinfo"
                        onClick={() =>
                          this.props.channelInfo(
                            data.snippet.channelId,
                            data.snippet.channelTitle
                          )
                        }
                      >
                        {data.snippet.channelTitle}
                        <img style={{ marginLeft: "5px" }} src={done} alt="" />
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onVideoPlayer: (videoId, videotitle) =>
      dispatch(actionCreators.playVideo(videoId, videotitle)),
    channelInfo: (channeldata, channelName) =>
      dispatch(actionCreators.channelInfo(channeldata, channelName)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
