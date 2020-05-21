import React, {Component} from 'react';
import axios from 'axios';
import {categoryList} from './categoryList';
import './Home.scss'
// import Card from 'react-bootstrap/Card';
import VideoPlayer from './VideoPlayer'

class Home extends Component{
    state={
        vidcat:null,
        array:[1,2,3,4],
        loadVideoplayer:false
    }
    async componentDidMount(){
       let vidcat=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoCategoryId=1&key=AIzaSyAZvQKKPmseuVb8IIw6CgeZhIIn42UM7t4`)
        // categoryList.map(async(category)=>
        //         this.setState({
        //             vidcat:await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoCategoryId=${category.id}&key=AIzaSyAZvQKKPmseuVb8IIw6CgeZhIIn42UM7t4`)
        //         })
        //         ) 
                // Promise.all([this.state.vidcat])
                // .then((res)=>{
                //     console.log(res)
                // })
                console.log(vidcat.data)
        }
        loadVideoHandler=()=>{
            this.setState({
                loadVideoplayer:true
            })
        }


    render() {
        let loadvideo
        if(this.state.loadVideoplayer){
            loadvideo=<VideoPlayer/>
        }

        console.log(this.state.loadVideoplayer)
        // console.log(this.state.vidcat)
        return (
            <div className="home"> 
                {categoryList.map(category=>
                    <section>
                     <h5 style={{textAlign:'left',marginLeft:'30px'}}>{category.name}</h5>

                        <div className='style'>
                            {/* <Card className="cardstyling" style={{width:'22rem'}} key={category.id}>
                                <Card.Img variant="top" src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' />
                                <span><p className="cardtitle"><b>Description : </b></p></span>
                            </Card> */}
                            {
                                this.state.array.map(array=>
                                    <div>
                                        <iframe title='video' src='' onClick={this.loadVideoHandler}/>
                                        <span><p>descroption</p></span>
                                    </div>
                                )
                            }
                            <hr />
                        </div>
                    </section>
                    )}
                    {loadvideo}
            </div>
        )
    }
}


export default Home


