import React, {Component} from 'react';
import {categoryList} from './categoryList';
import './Home.scss'
import VideoPlayer from './VideoPlayer';


class Home extends Component{
    state={
        vidcat:null,
        array:[1,2,3,4],
        loadVideoplayer:false,
        redirect:false
    }
    async componentDidMount(){
        // categoryList.map(async(category)=>
        //         this.setState({
        //             vidcat:await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&videoCategoryId=${category.id}&key=AIzaSyAZvQKKPmseuVb8IIw6CgeZhIIn42UM7t4`)
        //         })
        //         ) 
                // Promise.all([this.state.vidcat])
                // .then((res)=>{
                //     console.log(res)
                // })
        //         console.log(vidcat.data)
        // }
        // loadVideoHandler=()=>{
        //     this.setState({
        //         loadVideoplayer:true
        //     })
        }

        sortAccToCat=(catId)=>{
            console.log(catId)
            this.setState({
                redirect:true
            })
        }


    render() {

        return (
            //main component
            <div className="home"> 

                {/* category*/}                
                 

                {/*Printing thumbnail*/}
                <div className='videoThumbnail'>
                {categoryList.map(category=>
                    <section className='container'>
                     <h5 key={category.id} style={{textAlign:'left',marginLeft:'30px'}}>{category.name}</h5>
                        <div className='style'>
                            {
                                this.state.array.map(array=>
                                    <div>
                                        <img key={category.id} src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg' alt='' onClick={this.loadVideoHandler}/>
                                        {/* <iframe title='video' src='' onClick={this.loadVideoHandler}/> */}
                                        <span><p key={category.id}>description</p></span>
                                    </div>
                                )
                            }
                            <hr />
                        </div>
                    </section>
                    )}
                </div>
                {this.state.loadVideoplayer?<VideoPlayer/>:null}
            </div>
        )
    }
}


export default Home;

