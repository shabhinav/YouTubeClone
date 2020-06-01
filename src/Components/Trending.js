import React,{Component} from 'react';
import axios from 'axios';
import './Trending.scss';
import done from '../Assests/done.svg';

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
            {/* {this.state.trendingVideosdata.map(videoId=>
            <div className='videos'>
                <iframe src={'http://youtube.com/embed/'+videoId.id} title='video'/>
                <p>{videoId.snippet.title}</p>
            </div>
            )} */}
            {this.state.trendingVideosdata.map(videoId=>
                <div className='row'>
                    <div className='col-4'>
                        <iframe src={'http://youtube.com/embed/'+videoId.id} title='video'/>
                    </div>
                    <div className='col-6'>
                       <a href={'http://youtube.com/embed/'+videoId.id}><h6><strong>{videoId.snippet.title}</strong></h6></a> 
                        <p >{videoId.snippet.channelTitle} <img src={done} alt=''/></p>
                        <p className='description' style={{textOverflow:'ellipsis'}}>{videoId.snippet.description}</p>
                    </div>
                </div>    
            )}
            </div>
        )
    }
}

export default Trending;