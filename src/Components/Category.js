import React, {Component } from 'react';
import axios from 'axios';
import './Category.scss';
import {connect} from 'react-redux'

class Category extends Component{

        state={
            videoData:[]
        }

        async componentDidMount(){ 

            
            const categoryId =this.props.match.params.category

            let vidcat=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&type=video&videoCategoryId=${categoryId}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`)
            this.setState({
                videoData:vidcat.data.items
            })

            // console.log(this.state.videoData)
        }
        
        render() {
            // let url=`https://www.youtube.com/`

            // this.state.videoData.map(category=>{
            //     return(
            //         url=`https://www.youtube.com/${category.id.videoId}`
            //     )
            // }
            //     )
        return (
            <div className='category'>
                {this.state.videoData.map(category=>
                    <div key={Math.random()} className=''>
                        {/* <iframe src={url} title='video'/> */}
                    {/* <p>    {category.id.videoId}</p> */}
                    </div>
                    )}
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return {
        val:state.searchResult
    }
}



export default connect(mapStateToProps)(Category)

// export default Category