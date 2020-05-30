import React,{Component} from 'react';
import './Searchbar.scss';
import {categoryList} from './categoryList';
import {BrowserRouter as Router,NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../store/action/index'


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

        this.props.searchValue(this.state.inputValue)
    }

    reloadHandler=(e)=>{
        e.preventDefault()
    }

    render() {
        // console.log(this.state.inputValue)
        console.log(this.props.val)
        return (
            <div className='Searchbar'>
                <div className='Navbar'>
                   <nav className="navbar navbar-fixed-top">
                        <a href='/' className="navbar-brand">Navbar</a>
                        <form className="form-inline" onClick={this.reloadHandler}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" ref={this.search} onChange={this.onChangeHandler}/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>this.props.searchValue(this.state.inputValue)}>Search</button>
                        </form>
                    </nav>
                    <hr className='container' style={{marginTop:'0px'}}/>
                </div>
                <div className='chooseCat container'> 
                    <Router>
                    {categoryList.map(category=>
                        <NavLink key={Math.random()} className='link' to={'/category/'+category.id}>{category.name}</NavLink>
                    )}
                    </Router>
                </div>
                    <h1>hello</h1>
                    <p>{this.props.val}</p>
            </div>
        )
    }
}


const mapDispatchToProps=(dispatch)=>{
    return{
        searchValue:(srchval)=>dispatch(actionCreators.searchedValue(srchval))
    }
}
// const mapStateToProps=(state)=>{
//     return{
//         val:state.searchResult
//     }
// }

export default connect(null,mapDispatchToProps)(Searchbar)