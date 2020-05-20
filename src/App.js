import React, { Component } from 'react';
import './App.css';
import YouTube from './youtube';
import Sidedrawer from './Components/Sidedraw'
import Home from './Components/Home'

class App extends Component{

    state={
      sidedrawer:false
    }

  sidedrawerHandler=()=>{
    this.setState({
      sidedrawer:!this.state.sidedrawer
    })
  }



  render() {
    let sidedrawer
    if(this.state.sidedrawer){
      sidedrawer=<Sidedrawer show={this.state.sidedrawer}/>
    }
    return (
      <div className='App'>
        <p onClick={this.sidedrawerHandler}>|||</p>
        {sidedrawer}
        <Home/>
        <YouTube/>
      </div>
    )
  }
}

export default App;
