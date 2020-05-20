import React, { Component } from 'react'
import axios from 'axios';

class Youtube extends Component{

        async componentDidMount(){
            let data =await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=AIzaSyAZvQKKPmseuVb8IIw6CgeZhIIn42UM7t4
            `)
            console.log('mostpop',data.data)
        }
    // async componentDidMount(){
    //    let data=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyAZvQKKPmseuVb8IIw6CgeZhIIn42UM7t4&q=youtube`)
    //     console.log(data)

    //     let channel=await axios.get(`GET https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forUsername=GoogleDevelopers&key=

    //     `)

    //     console.log('channel',channel)
    //     console.log(data.data.items[0].id.videoId)

    //     let video= `https://www.youtube.com/embed/${data.data.items[0].id.videoId}`
    //     console.log(video)
    //     this.setState({
    //         video:`https://www.youtube.com/embed/${data.data.items[0].id.videoId}`
    //     })
    // }
    
    render() {
        return (
            <div className='Youtube container' style={{height:'500px'}}>
                {/* <iframe height="100%" width="100%" title='video' src={this.state.video}/> */}
            </div>
        )
    }
}

export default Youtube