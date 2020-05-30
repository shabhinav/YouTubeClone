import React, { Component } from 'react';
import './App.css';
import Sidedrawer from './Components/Sidedraw'
import Home from './Components/Home'
import Login from './Components/Login'
import {BrowserRouter as Router,Route} from 'react-router-dom';
import Category from './Components/Category';
import SearchBar from './Components/Searchbar'

class App extends Component{

    state={
      sidedrawer:false,
      loginpage:false,
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
    // let loadLoginPage
    // if(this.state.loginpage){
    //   loadLoginPage=<Login/>
    // }

    // let sidedrawer
    // if(this.state.sidedrawer){
    //   sidedrawer=<Sidedrawer show={this.state.sidedrawer}/>
    // }
    return (
      <div className='App'>
        <SearchBar/>
        <Router>
              <Route path='/' exact component={Home}/>
              <Route path='/category/:category' component={Category}/>            
        </Router>
      </div>
    )
  }
}

export default App;
