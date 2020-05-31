import React,{Component} from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
class SearchResult extends Component{
    constructor(props){
        super(props)
        this.state={
            data:this.props.value
        }
    }


    render() {

        console.log(this.props.value)
        return (
            <div className='searchResult'>
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