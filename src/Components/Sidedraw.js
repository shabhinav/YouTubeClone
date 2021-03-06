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
import youtube from "../Assests/youtube.svg";

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
          <a href="/" style={{ textDecoration: "none" }}>
            <img style={{ marginLeft: "15px" }} src={youtube} alt="" />
            <span className="logoText">
              <strong>YouTube</strong>
            </span>
          </a>
          {/* <h5 >YouTube</h5> */}
        </div>
        <div className="link">
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
          <div className="trending">
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
          <div className="feedBack">
            <img className="sidedrawicons" src={Message} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/feedback"
              onClick={this.props.sidedrawerHandler}
            >
              FeedBack
            </NavLink>
          </div>
          {localStorage.getItem("LoginEmail") ||
          localStorage.getItem("SignUpEmail") ? (
            <div className="yourAccount">
              <img className="sidedrawicons" src={Person} alt="" />
              <NavLink
                className="sidedrawlink"
                to="/Yourac"
                onClick={this.props.sidedrawerHandler}
              >
                Your Account
              </NavLink>
            </div>
          ) : null}
          {localStorage.getItem("LoginEmail") ||
          localStorage.getItem("SignUpEmail") ? (
            <section>
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
            </section>
          ) : null}
          <section> {userLogin}</section>
        </div>
      </div>
    );
  }
}

export default Sidedraw;
