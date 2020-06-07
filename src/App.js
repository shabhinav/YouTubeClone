import React, { Component } from 'react';
import './App.css';
import Home from './Components/Home'
import Login from './Components/Login'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Category from './Components/Category';
import SearchBar from './Components/Searchbar';
import SearchResult from './Components/searchResult';
import Trending from './Components/Trending';
import VideoPlayer from './Components/VideoPlayer';
import Feedback from './Components/feedback';
import Profile from './Components/profile';



class App extends Component{

    state={
      loginpage:true,
      loadprofile:false
    }

  loadprofile=()=>{
    this.setState({
      loadprofile:true
    })
  }

  loadLoginPage=(e)=>{
    e.prevenDefault()
    this.setState({
      loginpage:true
    })
  }

  render() {
    // let loadLoginPage
    // if(this.state.loginpage){
    //   loadLoginPage=<Login/>
    // }

    if(this.state.loadprofile){
      return(<Profile/>)
    }


    return (
      <div className='App'>
        {/* <SearchBar/> */}
        <SearchResult/>
        {/* {loadLoginPage} */}
        {/* <Feedback/> */}
        <Router>
              <Route path='/'  component={SearchBar}/>
              <Route path='/feedback' component={Feedback}/>
              <Route path='/' exact component={Home}/>
              <Route path='/category/:category' component={Category}/>
              <Route path='/trending' component={Trending}/>  
              <Route path='/videoplayer' component={VideoPlayer}/>
              <Route path='/login' component={Login}/>
        </Router>
      </div>
    )
  }
}

export default App;
