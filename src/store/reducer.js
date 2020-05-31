import * as actionTypes from './action/actionTypes'

const initialState={
    searchedData:[],
    error:''
}

const reducer=(state=initialState,action)=>{
    console.log('serdata',action.getData)
    // if(action.type===actionTypes.SEARCHEDVALUE){
    //     return{
    //         ...state,
    //         searchResult:action.searchedval
    //     }
    // }
    // switch(action.type){
    //     case actionTypes.SUCCESSCONDITION:
    //         return{
    //             ...state,
    //             searchedData:[...state.searchedData,action.success]
    //         }
    //     case actionTypes.FAILURECONDITION:
    //         return{
    //             ...state,
    //             error:action.fail
    //         }
    //     default:
    //         return state
    // }
        if(action.type===actionTypes.SUCCESSCONDITION){
            return{
                ...state,
                searchedData:[...state.searchedData,action.getData]
            }
        }
        return state

}

export default reducer