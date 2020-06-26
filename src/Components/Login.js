import React, { Component } from "react";
import "./Login.scss";
import axios from "axios";
import { connect } from "react-redux";
import * as actionCreators from "../store/action/index";

class Login extends Component {
  constructor(props) {
    super(props);
    this.email = React.createRef();
    this.password = React.createRef();
    this.state = {
      signInData: "",
      signUpData: "",
      SignInError: "",
      SignUpError: "",
      loadsignup: true,
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
      this.props.signIn();
      this.props.closeloginmodel();
      this.props.getUserDetail(this.state.signInData.data);
      console.log(signIndetails);
    } catch (err) {
      this.setState({
        SignInError: err.response.data.error.message,
      });
    }
  };

  onSignUp = async () => {
    try {
      let logindetails = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdss6K1vedOCzGxDvN2E5W4EVIP9XY-c0`,
        {
          email: this.email.current.value,
          password: this.password.current.value,
        }
      );
      this.setState({
        signUpData: logindetails,
      });
      this.props.getUserDetail(this.state.signUpData.data);
      this.props.signIn();
      this.props.closeloginmodel();
    } catch (err) {
      this.setState({
        SignUpError: err.response.data.error.message,
      });
    }
  };

  loadsignup = (e) => {
    e.preventDefault();
    this.setState({
      loadsignup: !this.state.loadsignup,
    });
  };

  render() {
    console.log(this.state.SignInError);

    return (
      <div className="Login">
        <div className="Form">
          <span className="close" onClick={this.props.closeloginmodel}>
            &times;
          </span>
          <h1 className="loginheading">
            {this.state.loadsignup ? "SIGN IN" : "SIGN UP"}
          </h1>
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
            {this.state.loadsignup ? (
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
            ) : (
              <div>
                <p style={{ marginBottom: "0px", fontSize: "13px", color: "red" }}>
                  {this.state.SignUpError}
                </p>
                <button
                  style={{ marginTop: "20px" }}
                  className="btn btn-danger loginbtn"
                  onClick={this.onSignUp}
                >
                  SIGN UP
                </button>
              </div>
            )}
          </div>
          {this.state.loadsignup ? (
            <p style={{ marginTop: "30px" }}>
              New To Website?
              <a href="/" onClick={this.loadsignup}>
                Sign Up Now
              </a>
            </p>
          ) : (
            <p style={{ marginTop: "30px" }}>
              Already Have an Account?
              <a href="/" onClick={this.loadsignup}>
                Sign In
              </a>
            </p>
          )}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getUserDetail: (userdata) => dispatch(actionCreators.loginDetails(userdata)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
