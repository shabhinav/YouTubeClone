import React, { Component }  from 'react'
import {connect} from 'react-redux'
import axios from 'axios'

class History extends Component{
    

    async componentDidMount(){

        let video=await axios.post(`https://clone-1d9c2.firebaseio.com/VideoId.json`,
        {
            name:this.props.videohistory
        })

        console.log('hisvid',video.data.name);

        let data=await axios.get(`https://clone-1d9c2.firebaseio.com/VideoId.json`)

        console.log('data',data.data)

        // let title=axios.post(`https://clone-1d9c2.firebaseio.com/videoTitle.json`,this.props.videoTitle)

        // console.log('histitle',title)

        // console.log('data',this.props.vidhistory)
    }

    render() {
        console.log('data',this.props.vidhistory)
        return (
            <div className='history'>
                <div className='col-4'>
                    {/* <iframe src={'https://www.youtube.com/embed/'+this.props.videoHistory[0]} title='video'/> */}
                </div>
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return{
        videoId:state.videoId,
        videoTitle:state.videotitle,
        videohistory:state.videohistory
    }
}

export default connect(mapStateToProps)(History);