import React, { Component } from 'react';
import './Comment.scss'

class Comment extends Component{
    constructor(props){
        super(props)
        this.state={
            comment:'',
            showbutton:false,
            blankinput:''
        }
        this.comment=React.createRef();
    }

    showButtonHandler=()=>{
        this.setState({
            showbutton:true
        })
    }

    removeButtonHandler=()=>{
        this.setState({
            showbutton:false
        })
    }

    addcomment=()=>{
        this.setState({
            comment:this.comment.current.value,
        })
    }

    onSubmit=()=>{
        this.setState({
            comment:''
        })
        console.log(this.state.comment)
    }

    render() {
        let showbutton
        if(this.state.showbutton){
            showbutton=<div>
                <button className='btn btn-primary addbtn' onClick={this.addcomment}>Comment</button>
                <button className='btn btn-light cancelbtn' onClick={this.removeButtonHandler}>Cancel</button>
            </div>
        }
        return (
            <div className='comment'>
                <hr/>
                {/* <form onSubmit={this.onSubmit}> */}
                    <img src='//lh5.googleusercontent.com/-ymtPego061Q/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnrJE5mUmn4Drd_RtcR_YyZ3Rxdww/s88/photo.jpg' alt=''/>
                    <input type='text' placeholder='Add a public comment...' ref={this.comment} onClick={this.showButtonHandler} />
                    <div className='commentsection'>
                        {showbutton}
                        <h6 style={{fontSize:'12px'}}><strong>USERNAME</strong></h6>
                        <p>{this.state.comment}</p>
                    </div>
                {/* </form> */}
            </div>
        )
    }
}

export default Comment