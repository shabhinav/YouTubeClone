import React,{Component} from 'react';
import './Searchbar.scss';
import {categoryList} from './categoryList';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';


class Searchbar extends Component{
    constructor(props){
        super(props)
        this.search=React.createRef();
        this.state={
            inputValue:''
        }
    }

    onChangeHandler=()=>{
        this.setState({
            inputValue:this.search.current.value
        })
    }

    render() {
        console.log(this.state.inputValue)
        return (
            <div className='Searchbar'>
                <div className='Navbar'>
                   <nav className="navbar navbar-fixed-top">
                        <a href='/' className="navbar-brand">Navbar</a>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={this.search} onChange={this.onChangeHandler}/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </nav>
                    <hr className='container' style={{marginTop:'0px'}}/>
                </div>
                <div className='chooseCat container'> 
                    <Router>
                    {categoryList.map(category=>
                        <NavLink className='link' to={'/category/'+category.id}>{category.name}</NavLink>
                    )}
                    </Router>
                </div>
            </div>
        )
    }
}


export default Searchbar