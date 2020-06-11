import React, {Component} from 'react';
import {categoryList} from './categoryList';
import './Home.scss'
// import VideoPlayer from './VideoPlayer';
import axios from 'axios';


class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            vidcat:[],
            array:[1,2,3,4],
            loadVideoplayer:false,
            redirect:false,
            newCategoryArray:[],
            categoriesDataArray:[]
        }
    }

    
    async componentWillMount(){
        var categoryArray=[...categoryList]
            
       await this.setState({
            newCategoryArray:categoryArray.splice(0,5)
        })
            let categoryPromises=this.state.newCategoryArray.map((category)=>{
              return  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&type=video&videoCategoryId=${category.id}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`)
            }
            )
            Promise.all(categoryPromises)
            .then((res)=>{
                   this.setState({
                        categoriesDataArray:res
                    })
            })
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
        console.log(this.state.categoriesDataArray)
        let a=this.state.categoriesDataArray[0]
        console.log('category',a)
        return (
            //main component
            <div className="home">                  

                {/*Printing thumbnail*/}
                <div className='videoThumbnail'>
                {this.state.newCategoryArray.map(category=>
                    <section key={Math.random()} className='container'>
                     <h5  style={{textAlign:'left',marginLeft:'30px'}}>{category.name}</h5>
                        <div className='style'>
                            {/* {
                                this.state.categoriesDataArray[0].data.items.map(category=>
                                <li>{category.id.videoId}</li>
                                    )
                            } */}
                            <hr />
                        </div>
                    </section>
                    )}
                </div>
                {/* {this.state.loadVideoplayer?<VideoPlayer/>:null} */}
            </div>
        )
    }
}


export default Home;


