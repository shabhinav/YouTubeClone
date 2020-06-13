import React,{Component} from 'react';
import {connect} from 'react-redux';
import {NavLink,BrowserRouter as Router} from 'react-router-dom'
import * as actionCreators from '../store/action/index'

class SearchResult extends Component{
    
    state={
        data:[]
    }

    render() {
        console.log('searchres',this.props.value)
        return (
            <div className='searchResult'>
                
                {this.props.value.map(val=>
                    <div className='row'>
                        <div className='col-4'>
                            <iframe title='video' src={'http://youtube.com/embed/'+val.id.videoId} />
                         </div>
                         <div className='col-6'>
                            <NavLink  to='/videoplayer' onClick={()=>this.props.onVideoPlayer(val.id.videoId,val.snippet.title)}><h5><strong>{val.snippet.title}</strong></h5></NavLink>                                                
                         </div>
                    </div>    
                )}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
        value:state.searchedData
    }
}

const mapDispatchToProps=(dispatch)=>{
    console.log(dispatch)
    return{
        onVideoPlayer:(videoId,videotitle)=>dispatch(actionCreators.playVideo(videoId,videotitle))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SearchResult)