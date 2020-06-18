import React, { Component } from "react";
import { categoryList } from "./categoryList";
import "./Home.scss";
// import VideoPlayer from './VideoPlayer';
import axios from "axios";
import Shellapp from "./shellapp";
// import Spinner from "./spinner";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/action/index";

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
        console.log("res", res);
        this.setState({
          categoriesDataArray: res,
        });
      })
      .catch((err) => console.log(err));

    //   let data = await axios.get(
    //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&type=video&videoCategoryId=1&key=${process.env.REACT_APP_NOT_SECRET_CODE}`
    //   );
    //   this.setState({
    //     categoriesDataArray: data.data,
    //   });
  }

  loadVideoHandler = () => {
    this.setState({
      loadVideoplayer: true,
    });
  };

  sortAccToCat = (catId) => {
    // console.log(catId)
    this.setState({
      redirect: true,
    });
  };

  render() {
    console.log("render", this.state.categoriesDataArray.items);
    // console.log('ren',this.state.categoriesDataArray[0])
    // let a=this.state.categoriesDataArray[0]
    // console.log('category',a)
    // console.log()
    // if (this.state.categoriesDataArray.length){
    // }
    return (
      //main component
      <div className="home">
        {this.state.categoriesDataArray.length == 0 ? (
          <div className="">
            <Shellapp />
          </div>
        ) : (
          <div>
            <div className="style">
              <div className="container">
                <h4 style={{ textAlign: "left", marginLeft: "20px" }}>
                  {this.state.newCategoryArray[0].name}
                </h4>
              </div>
              <div className="videoThumbnail">
                <div>
                  {this.state.categoriesDataArray[0].data.items.map((data) => (
                    <div>
                      <iframe
                        className="HomeVideos"
                        src={"https://www.youtube.com/embed/" + data.id.videoId}
                      />
                    </div>
                  ))}
                </div>
                <div className="videotitlesec">
                  {this.state.categoriesDataArray[0].data.items.map((data) => (
                    <NavLink
                      to="/videoplayer"
                      onClick={() =>
                        this.props.onVideoPlayer(data.id.videoId, data.snippet.title)
                      }
                    >
                      <p className="homevideotitle">{data.snippet.title}</p>
                    </NavLink>
                  ))}
                </div>
              </div>

              <hr style={{ width: "90%" }} />
              {/* second category */}
              <div>
                <div className="container">
                  <h4 style={{ textAlign: "left", marginLeft: "20px" }}>
                    {this.state.newCategoryArray[1].name}
                  </h4>
                </div>
                <div className="videoThumbnail">
                  <div>
                    {this.state.categoriesDataArray[1].data.items.map((data) => (
                      <div>
                        <iframe
                          className="HomeVideos"
                          src={"https://www.youtube.com/embed/" + data.id.videoId}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="videotitlesec">
                    {this.state.categoriesDataArray[1].data.items.map((data) => (
                      <NavLink
                        to="/videoplayer"
                        onClick={() =>
                          this.props.onVideoPlayer(
                            data.id.videoId,
                            data.snippet.title
                          )
                        }
                      >
                        <p className="homevideotitle">{data.snippet.title}</p>
                      </NavLink>
                    ))}
                  </div>
                </div>
              </div>

              <hr style={{ width: "90%" }} />
              {/* Third category */}
              <div>
                <div className="container">
                  <h4 style={{ textAlign: "left", marginLeft: "20px" }}>
                    {this.state.newCategoryArray[2].name}
                  </h4>
                </div>
                <div className="videoThumbnail">
                  <div>
                    {this.state.categoriesDataArray[2].data.items.map((data) => (
                      <div>
                        <iframe
                          className="HomeVideos"
                          src={"https://www.youtube.com/embed/" + data.id.videoId}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="videotitlesec">
                    {this.state.categoriesDataArray[2].data.items.map((data) => (
                      <NavLink
                        to="/videoplayer"
                        onClick={() =>
                          this.props.onVideoPlayer(
                            data.id.videoId,
                            data.snippet.title
                          )
                        }
                      >
                        <p className="homevideotitle">{data.snippet.title}</p>
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
  console.log(dispatch);
  return {
    onVideoPlayer: (videoId, videotitle) =>
      dispatch(actionCreators.playVideo(videoId, videotitle)),
  };
};

export default connect(null, mapDispatchToProps)(Home);
