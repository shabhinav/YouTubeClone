// import * as actionTypes from './actionTypes'

// export const searchValue=(searchValue)=>{
//     return{
//         type:actionTypes.SEARCHVALUE,
//         searchValue:searchValue
//     }
// }

import * as actionTypes from './actionTypes'

export const searchedValue=(srchval)=>{
    return{
        type:actionTypes.SEARCHEDVALUE,
        searchedval:srchval
    }
}