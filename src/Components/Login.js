import React, { Component } from "react";
import "./Login.scss";
import axios from "axios";
import { connect } from "react-redux";
import * as actionCreators from "../store/action/index";
import { NavLink } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      signInData: "",
      SignInError: "",
    };
  }

  onSignIn = async () => {
    try {
      let signIndetails = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdss6K1vedOCzGxDvN2E5W4EVIP9XY-c0`,
        {
          email: this.email.current.value,
          password: this.password.current.value,
        }
      );
      this.setState({
        signInData: signIndetails,
      });
      localStorage.setItem("LoginEmail", this.state.signInData.data.email);
      this.props.getUserDetail(this.state.signInData.data);
      this.props.history.push("/");
      this.props.onProfile();
    } catch (err) {
      this.setState({
        SignInError: err.response.data.error.message,
      });
    }
  };

  render() {
    console.log("", this.state.SignInError);
    return (
      <div className="Login">
        <div className="Form">
          <span className="close" onClick={() => this.props.history.push("/")}>
            &times;
          </span>
          <h1 className="loginheading">SIGN IN</h1>
          <div className="loginform container">
            <div className="row">
              <div className="col-12">
                <input
                  className="input1 input-group-text"
                  type="email"
                  placeholder="Email"
                  ref={this.email}
                />
              </div>
              <div className="col-12">
                <input
                  className="input2 input-group-text"
                  type="password"
                  placeholder="Password"
                  ref={this.password}
                />
              </div>
            </div>
            <div>
              <p style={{ marginBottom: "0px", fontSize: "13px", color: "red" }}>
                {this.state.SignInError}
              </p>
              <button
                style={{ marginTop: "20px" }}
                className="btn btn-danger loginbtn"
                onClick={this.onSignIn}
              >
                SIGN IN
              </button>
            </div>
          </div>
          <p style={{ marginTop: "30px" }}>
            New To Website?
            <NavLink to="/signup"> Sign Up Now</NavLink>
          </p>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetail: (userdata) => dispatch(actionCreators.loginDetails(userdata)),
    onProfile: () => dispatch(actionCreators.profile()),
  };
};

export default connect(null, mapDispatchToProps)(Login);
