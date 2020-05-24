import React, { Component } from 'react';
import './App.css';
// import YouTube from './youtube';
import Sidedrawer from './Components/Sidedraw'
import Home from './Components/Home'
import Login from './Components/Login'
// import Yourac from './Components/YourAc'
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
    let loadLoginPage
    if(this.state.loginpage){
      loadLoginPage=<Login/>
    }

    let sidedrawer
    if(this.state.sidedrawer){
      sidedrawer=<Sidedrawer show={this.state.sidedrawer}/>
    }

    console.log(this.state.VideoPlayer)
    return (
      <div className='App'>
        <Home/>
      </div>
    )
  }
}

export default App;
