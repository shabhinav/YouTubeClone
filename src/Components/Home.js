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

    
    async componentDidMount(){
        var categoryArray=[...categoryList]
            
       await this.setState({
            newCategoryArray:categoryArray.splice(0,5)
        })
            // console.log(this.state.newCategoryArray)

            let categoryPromises=this.state.newCategoryArray.map((category)=>{
              return  axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&type=video&videoCategoryId=${category.id}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`)
            }
            )
            Promise.all(categoryPromises)
            .then((res)=>{
                console.log('res',res)
                   this.setState({
                        categoriesDataArray:[...res]
                    })
            })

            // let data=await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&type=video&videoCategoryId=1&key=${process.env.REACT_APP_NOT_SECRET_CODE}`)
            // console.log(data.data.items)        

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
        // console.log('render',this.state.categoriesDataArray)
        // console.log('ren',this.state.categoriesDataArray[0])
        // let a=this.state.categoriesDataArray[0]
        // console.log('category',a)
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
                            {
                                this.state.categoriesDataArray.map(category=>
                                    console.log(category.data)
                                    )
                            }
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


