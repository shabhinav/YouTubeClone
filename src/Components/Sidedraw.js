import React, { Component } from "react";
import "./Sidedraw.scss";
import openMenu from "../Assests/open-menu.svg";
import { NavLink } from "react-router-dom";
import Trending from "../Assests/trending.png";
import Person from "../Assests/person.png";
import Message from "../Assests/message.png";
import History from "../Assests/history.png";
import Home from "../Assests/home.svg";

class Sidedraw extends Component {
  render() {
    let drawerClasses = "side-drawer";
    if (this.props.show) {
      drawerClasses = "side-drawer open";
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
          <p>
            <img className="sidedrawicons" src={Home} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/"
              onClick={this.props.sidedrawerHandler}
            >
              Home
            </NavLink>
          </p>
          <p>
            <img className="sidedrawicons" src={Trending} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/trending"
              onClick={this.props.sidedrawerHandler}
            >
              Trending
            </NavLink>
          </p>
          <hr />
          <p>
            <img className="sidedrawicons" src={Message} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/feedback"
              onClick={this.props.sidedrawerHandler}
            >
              FeedBack
            </NavLink>
          </p>
          <p>
            <img className="sidedrawicons" src={Person} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/Yourac"
              onClick={this.props.sidedrawerHandler}
            >
              Your Account
            </NavLink>
          </p>
          <p>
            <img className="sidedrawicons" src={History} alt="" />
            <NavLink
              className="sidedrawlink"
              to="/history"
              onClick={this.props.sidedrawerHandler}
            >
              History
            </NavLink>
          </p>
          {/* <p><NavLink className='sidedrawlink' to='/login' onClick={this.props.sidedrawerHandler}>Login</NavLink></p> */}
          <hr />
        </div>
      </div>
    );
  }
}

export default Sidedraw;
