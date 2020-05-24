import React, {Component} from 'react';
import axios from 'axios';
import {categoryList} from './categoryList';
import './Home.scss'
// import Card from 'react-bootstrap/Card';
import VideoPlayer from './VideoPlayer';
import {Redirect,BrowserRouter as Router} from 'react-router-dom';


class Home extends Component{
    state={
        vidcat:null,
        array:[1,2,3,4],
        loadVideoplayer:false,
        redirect:false
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

        sortAccToCat=(catId)=>{
            console.log(catId)
            this.setState({
                redirect:true
            })
        }


    render() {
        if(this.state.redirect){

            return (
                <Router>
                    <Redirect  to="/category" />
                </Router>
            ) 
        }

        return (
            //main component
            <div className="home"> 

            {/*NavBar*/}
                <div className='Navbar'>
                   <nav className="navbar navbar-fixed-top">
                        <a href='/' className="navbar-brand">Navbar</a>
                        <form class="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                    <hr className='container' style={{marginTop:'0px'}}/>
                </div>

                {/* category*/}    
            
                <div className='chooseCat container'>
                     {categoryList.map(category=>
                        <p key={category.id} onClick={()=>this.sortAccToCat(category.id)}>{category.name}</p>
                        )}
                </div> 



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


export default Home


