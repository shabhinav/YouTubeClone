import React, { Component }  from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import * as actionCreators from '../store/action/index';
import './History.scss'


class History extends Component{
    
    state={
        keys:[]
    }
    

    async componentDidMount(){
        const videodata={
            videoid:this.props.videohistory,
            videohistory:this.props.titlehistory
        }
        
        let video=await axios.post(`https://clone-1d9c2.firebaseio.com/VideoId.json`,{
        videoid:this.props.videohistory,
        videotitle:this.props.titlehistory
        })

        console.log('hisvid',video.data.name);

        let data=await axios.get(`https://clone-1d9c2.firebaseio.com/VideoId.json`)

        console.log('data',data.data)

       await this.setState({
            keys:Object.values(data.data)
        })

        // console.log('keys',keys)

        console.log('videohis',this.props.videohistory)
        console.log('vidtitle',this.props.titlehistory)
    }

    render() {
        console.log('data',this.props.vidhistory)
        return (
            <div className='history mt-3'>
                {/* <div className='row'>
                <div className='col-4'>
                    {this.state.keys.map(videos=>
                        videos.videoid.map(id=>
                        <iframe title='video' src={'http://youtube.com/embed/'+id}/>
                    ))}
                </div>
                <div className='col-6 '>
                    {this.state.keys.map(title=>
                        title.videotitle.map(title=>
                        <h6>{title}</h6>
                    ))}
                </div>
                </div> */}
                {this.state.keys.map(videos=>
                    <div className='row' key={Math.random()}>
                            <div className='col-4' >
                                {videos.videoid.map(id=>
                                <iframe key={Math.random()} className='videothumbnail' title='video' src={'http://youtube.com/embed/'+id}/>)}
                            </div>
                            <div className='col-6 title' >
                                {videos.videotitle.map(title=>
                                    <h6 key={Math.random()}><strong>{title}</strong></h6>
                                )}
                            </div>
                    </div>
                )}
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        videoId:state.videoId,
        videoTitle:state.videotitle,
        videohistory:state.videohistory,
        titlehistory:state.titlehistory
    }
}

const mapDispatchToProps=(dispatch)=>{
    console.log(dispatch)
    return{
        onVideoPlayer:(videoId,videotitle)=>dispatch(actionCreators.playVideo(videoId,videotitle))
    }
}

export default connect(mapStateToProps)(History);