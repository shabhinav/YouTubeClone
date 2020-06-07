import React, {Component } from 'react';
import './Sidedraw.scss';
import openMenu from '../Assests/open-menu.svg';
import {NavLink} from 'react-router-dom'

class Sidedraw extends Component{
    render() {
        let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }
        return (
            <div className={drawerClasses}>
                <div className='sidedrawicon'>
                    <img src={openMenu} alt='' className='sidedraw' onClick={this.props.sidedrawerHandler}/>
                    {/* <h5 >YouTube</h5> */}
                </div>
                <div>
                    <p><NavLink to='/feedback' onClick={this.props.sidedrawerHandler}>FeedBack</NavLink></p>
                    <p><NavLink to='/trending' onClick={this.props.sidedrawerHandler}>Trending</NavLink></p>
                </div>
            </div>
        )
    }
}

export default Sidedraw
