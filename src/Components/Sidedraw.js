import React, { Component } from "react";
import "./Sidedraw.scss";
import openMenu from "../Assests/open-menu.svg";
import { NavLink } from "react-router-dom";
import Trending from "../Assests/trending.png";
import Person from "../Assests/person.png";
import Message from "../Assests/message.png";
import History from "../Assests/history.png";
import Home from "../Assests/home.svg";
import SignOut from "../Assests/login.svg";
import { loginDetails } from "../store/action";

class Sidedraw extends Component {
  signoutHandler = () => {
    localStorage.clear();
    this.props.sidedrawerHandler();
  };
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
    }
    let userLogin;
    if (localStorage.getItem("LoginEmail") || localStorage.getItem("SignUpEmail")) {
      userLogin = (
        <div className="loginLink">
          <img className="sidedrawicons" src={SignOut} alt="" />
          <NavLink className="sidedrawlink" to="/" onClick={this.signoutHandler}>
            Logout
          </NavLink>
        </div>
      );
    } else {
      userLogin = (
        <div className="loginLink">
          <img className="sidedrawicons" src={SignOut} alt="" />
          <NavLink
            className="sidedrawlink"
            to="/login"
            onClick={this.props.sidedrawerHandler}
          >
            Login / Sign Up
          </NavLink>
        </div>
      );
    }
    return (
      <div className={drawerClasses}>
        <div className="sidedrawicon">
          <img
            src={openMenu}
            alt=""
            className="sidedraw"
            onClick={this.props.sidedrawerHandler}
          />
          {/* <h5 >YouTube</h5> */}
        </div>
        <div className="link">
          <hr />
          <div className="Home">
            <img className="sidedrawicons" src={Home} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/"
              onClick={this.props.sidedrawerHandler}
            >
              Home
            </NavLink>
          </div>
          <div className="Trending">
            <img className="sidedrawicons" src={Trending} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/trending"
              onClick={this.props.sidedrawerHandler}
            >
              Trending
            </NavLink>
          </div>
          <hr />
          <div className="FeedBack">
            <img className="sidedrawicons" src={Message} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/feedback"
              onClick={this.props.sidedrawerHandler}
            >
              FeedBack
            </NavLink>
          </div>
          <div className="Your Account">
            <img className="sidedrawicons" src={Person} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/Yourac"
              onClick={this.props.sidedrawerHandler}
            >
              Your Account
            </NavLink>
          </div>
          <div className="History">
            <img className="sidedrawicons" src={History} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/history"
              onClick={this.props.sidedrawerHandler}
            >
              History
            </NavLink>
          </div>
          <hr />
          <p>{userLogin}</p>
        </div>
      </div>
    );
  }
}

export default Sidedraw;
