import React, { Component } from "react";
import "./Comment.scss";
import { connect } from "react-redux";

class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: "",
      showbutton: false,
      blankinput: "",
      displayName: false,
    };
    this.comment = React.createRef();
  }

  showButtonHandler = () => {
    this.setState({
      showbutton: true,
    });
  };

  removeButtonHandler = () => {
    this.setState({
      showbutton: false,
    });
  };

  addcomment = () => {
    this.setState({
      comment: this.comment.current.value,
      displayName: true,
    });
  };

  onSubmit = () => {
    this.setState({
      comment: "",
    });
  };

  redirectLogin = () => {
    this.props.history.push("/login");
  };

  render() {
    let showbutton;
    if (this.state.showbutton) {
      showbutton = (
        <div className="displaybtn">
          <button className="btn btn-primary addbtn" onClick={this.addcomment}>
            Comment
          </button>
          <button
            className="btn btn-light cancelbtn"
            onClick={this.removeButtonHandler}
          >
            Cancel
          </button>
        </div>
      );
    }

    return (
      <div className="comment">
        <hr />
        <h3>ADD COMMENT</h3>
        {localStorage.getItem("LoginEmail") ||
        localStorage.getItem("SignUpEmail") ? (
          <div>
            <img
              className="profileimage"
              src="//lh5.googleusercontent.com/-ymtPego061Q/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnrJE5mUmn4Drd_RtcR_YyZ3Rxdww/s88/photo.jpg"
              alt=""
            />
            <input
              type="text"
              placeholder="Add a public comment..."
              ref={this.comment}
              onClick={this.showButtonHandler}
            />
            <div className="commentsection">
              {showbutton}
              <h6
                style={{
                  fontSize: "14px",
                  display: "inline-block",
                  marginLeft: "5px",
                }}
              >
                <strong>
                  {localStorage.getItem("LoginEmail") ||
                    localStorage.getItem("SignUpEmail")}
                  :
                </strong>
              </h6>
              <p style={{ display: "inline-block" }}>{this.state.comment}</p>
            </div>
          </div>
        ) : (
          <div>
            <input
              type="text"
              placeholder="Add a public comment..."
              ref={this.comment}
              onClick={this.redirectLogin}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.logindata,
  };
};

export default connect(mapStateToProps)(Comment);
