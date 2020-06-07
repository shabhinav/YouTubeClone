import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {NavLink,BrowserRouter as Router} from 'react-router-dom'
class SearchResult extends Component{
    
    state={
        data:[]
    }

    
    

    render() {
        // console.log('state',this.state.data)
        // console.log('state',this.state.data)
        // console.log('ab')
        console.log('searchres',this.props.value)
        // console.log('array',Array.isArray(this.props.value))
        // console.log(Object.keys(this.props.value))
        return (
            <div className='searchResult'>
                
                {this.props.value.map(val=>
                    <div className='row'>
                        <div className='col-4'>
                            <iframe title='video' src={'http://youtube.com/embed/'+val.id.videoId} />
                         </div>
                         <div className='col-6'>
                            <h5>{val.snippet.title}</h5>
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


export default connect(mapStateToProps)(SearchResult)