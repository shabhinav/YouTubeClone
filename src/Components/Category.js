import React, {Component } from 'react';
import axios from 'axios';
import './Category.scss';
import {connect} from 'react-redux';
import * as actionCreators from '../store/action/index';
import {NavLink} from 'react-router-dom'

class Category extends Component{

        state={
            videoData:[]
        }

        async componentDidMount(){ 
   
            const categoryId =this.props.match.params.category

            let vidcat=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&type=video&videoCategoryId=${categoryId}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`)
            this.setState({
                videoData:vidcat.data.items
            })

            console.log(this.state.videoData)
        }
        
        render() {
        return (
            <div className='category'>
                {this.state.videoData.map(category=>
                    <div key={Math.random()} className='container row'>
                        <div className='col-4'>
                            <iframe src={'https://www.youtube.com/embed/'+category.id.videoId} title='video'/>
                        </div>
                        <div className='col-6'>
                        <NavLink  to='/videoplayer' onClick={()=>this.props.onVideoPlayer(category.id.videoId,category.snippet.title)}><h6><strong>{category.snippet.title}</strong></h6></NavLink>                            <p className='description' style={{textOverflow:'ellipsis'}}>{category.snippet.description}</p>
                        </div>
                    </div>
                    )}
            </div>
        )
    }
}


const mapDispatchToProps=dispatch=>{
    return{
        onVideoPlayer:(videoId,videotitle)=>dispatch(actionCreators.playVideo(videoId,videotitle))
    }
}


export default connect(null,mapDispatchToProps)(Category)

// export default Category