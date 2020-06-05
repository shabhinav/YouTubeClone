import React,{Component} from 'react';
import './Searchbar.scss';
import {categoryList} from './categoryList';
import {BrowserRouter as Router,NavLink,Route} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actionCreators from '../store/action/index';
import Login from './Login'


class Searchbar extends Component{
    constructor(props){
        super(props)
        this.search=React.createRef();
        this.state={
            inputValue:'',
            loadloginpage:false
        }
    }

    loadLoadLogin=(e)=>{
        e.preventDefault()
        this.setState({
            loadloginpage:true
        })
    }

    closeloginmodel=()=>{
        this.setState({
            loadloginpage:false
        })
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
        if(this.state.loadloginpage){
            return(<Login closeloginmodel={this.closeloginmodel}/>)
        }
        return (
            <div className='Searchbar'>
                <div className='Navbar'>
                   <nav className="navbar navbar-fixed-top">
                        <a href='/' className="navbar-brand">Navbar</a>
                        <form className="form-inline searchbox" onClick={this.reloadHandler}>
                            <input className="form-control inputbox" type="search" placeholder="Search" aria-label="Search" ref={this.search} onChange={this.onChangeHandler}/>
                            <button style={{marginLeft:'15px'}} className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>this.props.searchValue(this.state.inputValue)}>Search</button>
                        </form>
                            <div className='loginlink'><a href='/' onClick={this.loadLoadLogin}>Login / Sign In</a></div>
                    </nav>
                    <hr className='container' style={{marginTop:'0px'}}/>
                </div>
                <div className='chooseCat container'> 
                    {categoryList.map(category=>
                        <NavLink key={Math.random()} className='link' to={'/category/'+category.id} onClick={()=>this.props.history.push('/category/'+category.id)}>{category.name}</NavLink>
                    )}
                </div>
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
