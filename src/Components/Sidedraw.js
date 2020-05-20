import React, {Component } from 'react'
import './Sidedraw.scss'

class Sidedraw extends Component{
    render() {
        let drawerClasses = 'side-drawer'
       if(this.props.show) {
          drawerClasses = 'side-drawer open'
       }
        return (
            <div className={drawerClasses}>
                <h1>hello</h1>
            </div>
        )
    }
}

export default Sidedraw
