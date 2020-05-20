import React, {Component} from 'react';
import axios from 'axios';


class Home extends Component{

    async componentDidMount(){
            let vidcat=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoCategoryId=10&key=AIzaSyAZvQKKPmseuVb8IIw6CgeZhIIn42UM7t4`)
            console.log(vidcat.data.items)
        }
    render() {
        return (
            <div className="home"> 
                
            </div>
        )
    }
}


export default Home


