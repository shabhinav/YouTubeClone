import * as actionTypes from './action/actionTypes'

const initialState={
    searchResult:''
}


const reducer=(state=initialState,action)=>{
    console.log(action.searchedval)
    if(action.type===actionTypes.SEARCHEDVALUE){
        return{
            searchResult:action.searchedval
        }
    }
    return state
}

export default reducer