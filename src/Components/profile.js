import React, { Component } from 'react';
import './profile.scss';
import {connect} from 'react-redux'

class Profile extends Component{
    render() {
        return (
            <div className='Profile'>
                {/* <div className='Form'>
                    <div></div>
                    <div>
                        <p></p>
                        <p onClick={this.props}></p>
                    </div>
                </div> */}
                
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    return{
    }
}

export default connect(mapStateToProps)(Profile)