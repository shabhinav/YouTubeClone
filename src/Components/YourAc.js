import React,{Component} from 'react';
import './YourAc.scss';

class Yourac extends Component{
    render() {
        return (
            <div className='Yourac'>
                <div className='header container'>
                    <div className='row'>
                        <div className='col-6 profileimg'>
                           <img className='profilepic' src="https://yt3.ggpht.com/a/AATXAJwCimOsQsrWTViagfgTQTtas7T5B0YrNxHEEw=s100-c-k-c0xffffffff-no-rj-mo" alt='' />
                            <h5 className='username'>Abhinav Sharma</h5>
                        </div>
                        <div className='col-6'>
                            <button  className='btn btn-primary customizbtn'>Customize CHANNEL</button>
                            <button className='btn btn-primary videobtn'>VIDEO STUDIO</button>
                        </div>
                    </div>  
                </div>
            </div>
        )
    }
}

export default Yourac