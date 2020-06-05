import React, { Component } from 'react';
import './App.css';
import Sidedrawer from './Components/Sidedraw'
import Home from './Components/Home'
import Login from './Components/Login'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Category from './Components/Category';
import SearchBar from './Components/Searchbar';
import SearchResult from './Components/searchResult';
import Trending from './Components/Trending';
import VideoPlayer from './Components/VideoPlayer';
import Feedback from './Components/feedback'


class App extends Component{

    state={
      sidedrawer:false,
      loginpage:true,
    }

  sidedrawerHandler=()=>{
    this.setState({
      sidedrawer:!this.state.sidedrawer
    })
  }

  loadLoginPage=()=>{
    this.setState({
      loginpage:true
    })
  }

  render() {
    let loadLoginPage
    if(this.state.loginpage){
      loadLoginPage=<Login/>
    }

    // let sidedrawer
    // if(this.state.sidedrawer){
    //   sidedrawer=<Sidedrawer show={this.state.sidedrawer}/>
    // }
    return (
      <div className='App'>
        {/* <SearchBar/> */}
        <SearchResult/>
        {/* {loadLoginPage} */}
        {/* <Feedback/> */}
        <Router>
              <Route path='/'  component={SearchBar}/>
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
