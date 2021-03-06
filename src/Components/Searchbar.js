import React, { Component } from "react";
import "./Searchbar.scss";
import { categoryList } from "./categoryList";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/action/index";
import openMenu from "../Assests/open-menu.svg";
import Sidedrawer from "./Sidedraw";
import signout from "../Assests/login.svg";
import Backdrop from "./backdrop";
import Search from "../Assests/search.svg";
import youtube from "../Assests/youtube.svg";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.search = React.createRef();
    this.state = {
      inputValue: "",
      sidedrawer: false,
      loadloginpage: false,
      signIn: false,
      loadsignin: false,
      profile: false,
      loadSearchresult: false,
    };
  }

  onChangeHandler = () => {
    this.setState({
      inputValue: this.search.current.value,
    });

    this.props.searchValue(this.state.inputValue);
  };

  reloadHandler = (e) => {
    e.preventDefault();
    this.props.history.push("/searchresult");
    this.setState({
      loadSearchresult: true,
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sidedrawer: false,
    });
  };

  sidedrawerHandler = () => {
    this.setState({
      sidedrawer: !this.state.sidedrawer,
    });
  };

  signoutHandler = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  render() {
    let profile;

    if (localStorage.getItem("LoginEmail") || localStorage.getItem("SignUpEmail")) {
      profile = (
        <div className="dropdown">
          <img
            className="profilepic"
            data-toggle="dropdown"
            src="//lh5.googleusercontent.com/-ymtPego061Q/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnrJE5mUmn4Drd_RtcR_YyZ3Rxdww/s88/photo.jpg"
            alt=""
          />
          <ul className="dropdown-menu">
            <li>
              <a href="/">
                <img
                  className="profilepic"
                  src="//lh5.googleusercontent.com/-ymtPego061Q/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnrJE5mUmn4Drd_RtcR_YyZ3Rxdww/s88/photo.jpg"
                  alt=""
                />
              </a>
            </li>
            <li>
              {localStorage.getItem("LoginEmail") ||
                localStorage.getItem("SignUpEmail")}
            </li>
            <hr />
            <li>
              <NavLink to="/Yourac" className="youraclink">
                Your Account
              </NavLink>
            </li>
            <hr />
            <li>
              <a href="/" onClick={this.signoutHandler}>
                <img style={{ marginRight: "5px" }} src={signout} alt="" />
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      );
    } else {
      profile = (
        <NavLink to="/login" className="loginlink">
          Login / Sign In
        </NavLink>
      );
    }

    let backDrop;
    if (this.state.sidedrawer) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }

    let sidedrawer;
    if (this.state.sidedrawer) {
      sidedrawer = (
        <Sidedrawer
          show={this.state.sidedrawer}
          sidedrawerHandler={this.sidedrawerHandler}
        />
      );
    }
    return (
      <div className="Searchbar ">
        <div className="Navbar">
          <nav className="navbar ">
            <img
              src={openMenu}
              alt="openmenu"
              className="sidedrawer"
              onClick={this.sidedrawerHandler}
            />
            {sidedrawer}
            {backDrop}
            <a href="/" className="navbar-brand navbrand">
              <img src={youtube} alt="" />
              <span className="logoText">
                <strong>YouTube</strong>
              </span>
            </a>
            <form className="form-inline searchbox" onSubmit={this.reloadHandler}>
              <input
                className="form-control inputbox"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={this.search}
                onChange={this.onChangeHandler}
              />
              <button
                className="searchbtn"
                type="submit"
                onClick={() => this.props.searchValue(this.state.inputValue)}
              >
                <img
                  src={Search}
                  style={{ width: "25px", height: "25px", padding: "0px" }}
                  alt=""
                />
              </button>
            </form>
            {profile}
          </nav>
          {/* <div style={{ paddingTop: "40px" }}> */}
          <hr
            style={{
              marginTop: "0px",
              width: "95%",
              height: "1.5px",
              backgroundColor: "#DEDEDE",
            }}
          />
          {/* </div> */}
        </div>
        <div className="chooseCat">
          {categoryList.map((category) => (
            <NavLink
              key={Math.random()}
              className="link"
              to={"/category/" + category.name}
              onClick={() => {
                this.props.categoryId(category.id);
              }}
            >
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    searchValue: (srchval) => dispatch(actionCreators.searchedValue(srchval)),
    categoryId: (categoryId) =>
      dispatch(actionCreators.selectedCategpory(categoryId)),
  };
};

const mapStateToProps = (state) => {
  return {
    userData: state.logindata,
    profile: state.profile,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
