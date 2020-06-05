import React,{Component} from 'react';
import axios from 'axios';
import './Trending.scss';
import done from '../Assests/done.svg';
import {connect} from 'react-redux'
import * as actionCreators from '../store/action/index'
import {NavLink} from 'react-router-dom'

class Trending extends Component{

    constructor(props){
        super(props)
        this.state={
            trendingVideosdata:[]
        }
    }

    async componentDidMount(){
        let Trendinglist=await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&maxResults=15&chart=mostPopular&key=${process.env.REACT_APP_NOT_SECRET_CODE}`)
        console.log(Trendinglist.data.items)
        this.setState({
            trendingVideosdata:Trendinglist.data.items
        })
    }



    render() {               
            return (
                <div className='Trending container'>
                    {this.state.trendingVideosdata.map(videoId=>
                        <div className='row'>
                            <div className='col-4'>
                                <iframe src={'http://youtube.com/embed/'+videoId.id} title='video' onClick={()=>this.props.onVideoPlayer(videoId.id)}/>
                            </div>
                            <div className='col-6'>
                                <NavLink  to='/videoplayer' onClick={()=>this.props.onVideoPlayer(videoId.id,videoId.snippet.title)}><h6><strong>{videoId.snippet.title}</strong></h6></NavLink> 
                                <p >{videoId.snippet.channelTitle} <img src={done} alt=''/></p>
                                <p className='description' style={{textOverflow:'ellipsis'}}>{videoId.snippet.description}</p>
                            </div>
                        </div>    
                    )}
                </div>
            )
        }
    }

const mapDispatchToProps=(dispatch)=>{
    console.log(dispatch)
    return{
        onVideoPlayer:(videoId,videotitle)=>dispatch(actionCreators.playVideo(videoId,videotitle))
    }
}

export default connect(null,mapDispatchToProps)(Trending);