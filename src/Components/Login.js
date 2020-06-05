import React, {Component} from 'react'
import './Login.scss';
import axios from 'axios';
import {connect} from 'react-redux'
import * as actionCreators from '../store/action/index';

class Login extends Component{
    constructor(props){
        super(props)
        this.email=React.createRef()
        this.password=React.createRef()
        this.state={
            signInData:'',
            signUpData:'',
            SignInError:'',
            SignUpError:'',
            loadsignup:true
        }
    }

    onSignIn=async(e)=>{
        try{
            let signIndetails=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDdss6K1vedOCzGxDvN2E5W4EVIP9XY-c0`,{
            email:this.email.current.value,
            password:this.password.current.value
        })
        this.setState({
            signInData:signIndetails
        })
        this.props.closeloginmodel()
        this.props.getUserDetail(this.state.signInData.data)
        console.log(signIndetails)
        }
        catch(err){
            this.setState({
                SignInError:err
            })
        }
        
    }


    onSignUp=async(e)=>{
        let logindetails=await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDdss6K1vedOCzGxDvN2E5W4EVIP9XY-c0`,{
            email:this.email.current.value,
            password:this.password.current.value
        })
        this.setState({
            signUpData:logindetails
        })
        this.props.getUserDetail(this.state.signUpData.data)
        console.log(logindetails)
        this.props.closeloginmodel()
    }

    loadsignup=(e)=>{
        e.preventDefault()
        this.setState({
            loadsignup:!this.state.loadsignup
        })
    }

    render() {
        return (
            <div className='Login'>
                <div className='Form'>
                    <span className="close" onClick={this.props.closeloginmodel}>&times;</span>
                    <h1>{this.state.loadsignup?'SIGN IN':'SIGN UP'}</h1>
                    <div className='loginform container'>
                        <div className='row'>
                             <div className='col-12'>
                                <input className='input1 input-group-text p-2' type='email' placeholder='Email' ref={this.email}/>  
                             </div>
                             <div className='col-12'>
                                <input className='input2 input-group-text p-2' type='password' placeholder='Password' ref={this.password}/>
                             </div>
                        </div>
                        {/*  */}
                        {this.state.loadsignup?<button style={{marginTop:'20px'}} className='btn btn-primary' onClick={this.onSignIn}>SIGN IN</button>:<button style={{marginTop:'20px'}} className='btn btn-primary' onClick={this.onSignUp}>SIGN UP</button>}
                    </div>
                    {this.state.loadsignup?<p style={{marginTop:'30px'}}>New To Website?<a  href='/' onClick={this.loadsignup}>Sign Up Now</a></p>:<p style={{marginTop:'30px'}}>Already Have an Account?<a  href='/' onClick={this.loadsignup}>Sign In</a></p>}
                </div>
            </div>
        )
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        getUserDetail:(userdata)=>dispatch(actionCreators.loginDetails(userdata))
    }
}

export default connect(null,mapDispatchToProps)(Login)
