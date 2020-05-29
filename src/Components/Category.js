import React, {Component } from 'react';
import axios from 'axios';

class Category extends Component{

        async componentDidMount(){
            
           let vidcat=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoCategoryId=1&key=AIzaSyAZvQKKPmseuVb8IIw6CgeZhIIn42UM7t4`)
            console.log(vidcat)
        }

    render() {


        return (
            <div className='category'>
                <h1>Category</h1>
            </div>
        )
    }
}

export default Category