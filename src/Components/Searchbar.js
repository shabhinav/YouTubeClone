import React, { Component } from "react";
import "./Searchbar.scss";
import { categoryList } from "./categoryList";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import * as actionCreators from "../store/action/index";
import Login from "./Login";
import openMenu from "../Assests/open-menu.svg";
import Sidedrawer from "./Sidedraw";
import signout from "../Assests/login.svg";
import Backdrop from "./backdrop";
import Search from "../Assests/search.svg";

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

  loadsignin = () => {
    this.setState({
      loadsignin: true,
    });
  };

  loadLogin = (e) => {
    e.preventDefault();
    this.setState({
      loadloginpage: true,
    });
  };

  closeloginmodel = () => {
    this.setState({
      loadloginpage: false,
    });
  };

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
    console.log(this.state.sidedrawer);
  };

  SignedIn = () => {
    this.setState({
      signIn: true,
    });
  };

  SignedOut = () => {
    this.setState({
      signIn: false,
    });
  };

  loadprofile = (e) => {
    e.preventDefault();
    this.setState({
      profile: true,
    });
  };

  render() {
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

    if (this.state.loadloginpage) {
      return <Login closeloginmodel={this.closeloginmodel} signIn={this.SignedIn} />;
    }

    return (
      <div className="Searchbar">
        <div className="Navbar">
          <nav className="navbar navbar-fixed-top">
            <img
              src={openMenu}
              alt="openmenu"
              className="sidedrawer"
              onClick={this.sidedrawerHandler}
            />
            {sidedrawer}
            {backDrop}
            <a href="/" className="navbar-brand navbrand">
              Navbar
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
            {this.state.signIn ? (
              <div className="dropdown">
                <img
                  className="profilepic"
                  data-toggle="dropdown"
                  src="//lh5.googleusercontent.com/-ymtPego061Q/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnrJE5mUmn4Drd_RtcR_YyZ3Rxdww/s88/photo.jpg"
                  alt=""
                />
                <ul class="dropdown-menu">
                  <li>
                    <a href="/">
                      <img
                        className="profilepic"
                        src="//lh5.googleusercontent.com/-ymtPego061Q/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnrJE5mUmn4Drd_RtcR_YyZ3Rxdww/s88/photo.jpg"
                        alt=""
                      />
                    </a>
                  </li>
                  <li>{this.props.userData.email}</li>
                  <hr />
                  <li>
                    <a href="/" onClick={this.SignedOut}>
                      <img style={{ marginRight: "5px" }} src={signout} alt="" />
                      Sign Out
                    </a>
                  </li>
                </ul>
              </div>
            ) : (
              <div className="loginlink">
                {/* <a
                  href="/"
                  style={{ textDecoration: "none" }}
                  onClick={this.loadLogin}
                >
                  Login / Sign In
                </a> */}
                <NavLink
                  to="/login"
                  style={{ textDecoration: "none" }}
                  onClick={this.loadLogin}
                >
                  Login / Sign In
                </NavLink>
              </div>
            )}
          </nav>
          <hr style={{ marginTop: "0px" }} />
        </div>
        <div className="chooseCat">
          {categoryList.map((category) => (
            <NavLink
              key={Math.random()}
              className="link"
              to={"/category/" + category.id}
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
