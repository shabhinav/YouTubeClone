// import React, { Component } from "react";
// import axios from "axios";
// import { connect } from "react-redux";
// import * as actionCreators from "../store/action/index";
// import { NavLink } from "react-router-dom";

// class Category extends Component {
//   state = {
//     videoData: [],
//   };

//   async componentDidMount() {
//     console.log(window.location);
//     const categoryId = this.props.match.params.category;
//     console.log("data", this.props.match.params);
//     console.log("caytegory", categoryId);

//     let vidcat = await axios.get(
//       `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoCategoryId=${categoryId}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`
//     );
//     this.setState({
//       videoData: vidcat.data.items,
//     });

//     console.log(this.state.videoData);
//   }

//   // categoryhandler = async () => {
//   //   const categoryId = this.props.match.params.category;
//   //   console.log(categoryId);
//   //   let vidcat = await axios.get(
//   //     `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoCategoryId=${categoryId}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`
//   //   );
//   //   this.setState({
//   //     videoData: vidcat.data.items,
//   //   });
//   // };

//   render() {
//     console.log(this.props.match.params.category);
//     return (
//       <div className="category">
//         {this.state.videoData.length == 0 ? (
//           <Shellapp />
//         ) : (
//           <form>
//             <div>
//               {this.state.videoData.map((category) => (
//                 <div key={Math.random()} className="container row">
//                   <div className="col-4">
//                     <iframe
//                       src={"https://www.youtube.com/embed/" + category.id.videoId}
//                       title="video"
//                     />
//                   </div>
//                   <div className="col-6">
//                     <NavLink
//                       to="/videoplayer"
//                       onClick={() =>
//                         this.props.onVideoPlayer(
//                           category.id.videoId,
//                           category.snippet.title
//                         )
//                       }
//                     >
//                       <h6>
//                         <strong>{category.snippet.title}</strong>
//                       </h6>
//                     </NavLink>{" "}
//                     <p className="description" style={{ textOverflow: "ellipsis" }}>
//                       {category.snippet.description}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </form>
//         )}
//       </div>
//     );
//   }
// }

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onVideoPlayer: (videoId, videotitle) =>
//       dispatch(actionCreators.playVideo(videoId, videotitle)),
//   };
// };

// export default connect(null, mapDispatchToProps)(Category);

// export default Category

import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, NavLink } from "react-router-dom";
import "./Category.scss";
import Shellapp from "./shellapp";

const Category = (props) => {
  const [count, setCount] = useState([]);
  const { category } = useParams();
  console.log(category);

  useEffect(() => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoCategoryId=${category}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`
      )
      .then((res) => setCount(res));
  });
  // console.log(count);

  return (
    <div className="category">
      {count.length == 0 ? (
        <Shellapp />
      ) : (
        <form>
          {/* <div>
            {count.map((category) => (
              <div key={Math.random()} className="container row">
                <div className="col-4">
                  <iframe
                    src={"https://www.youtube.com/embed/" + category.id.videoId}
                    title="video"
                  />
                </div>
                <div className="col-6">
                  <NavLink
                    to="/videoplayer"
                    onClick={() =>
                      this.props.onVideoPlayer(
                        category.id.videoId,
                        category.snippet.title
                      )
                    }
                  >
                    <h6>
                      <strong>{category.snippet.title}</strong>
                    </h6>
                  </NavLink>{" "}
                  <p className="description" style={{ textOverflow: "ellipsis" }}>
                    {category.snippet.description}
                  </p>
                </div>
              </div>
            ))}
          </div> */}
        </form>
      )}
    </div>
  );
};

export default Category;
