import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component{
  async componentDidMount(){
    let data = await axios.get("https://api.spotify.com/v1/tracks/{6are001c9z5muhk60v1ch05jr}", {
      headers: {
        Accept: "application/json",
        Authorization: "Bearer BQDx7tRKinbXc_dG330Ahh6O6dkGevbpjBFxo2pNypRJ93ZDGf-FZf7bKQ9MhyUo2UncafY06S2K-q-sRTL_cdZERdQsuUFH1ZoxWpN9GFkudfpv8buzE7qXvYoV1lUDsGzB5p-XTy25YNa_snrRnGLvpDXBeFWsILyRV7txtw",
        "Content-Type": "application/json"
      }
    })
    console.log(data.data)
  }


  render() {
    return (
      <div className='App'>
        
      </div>
    )
  }
}

export default App;
