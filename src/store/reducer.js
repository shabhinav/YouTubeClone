import * as actionTypes from './action/actionTypes'

const initialState={
    searchedData:[],
    error:'',
    videoId:'',
    videotitle:'',
    logindata:[]
}

const reducer=(state=initialState,action)=>{
    console.log('serdata',action.getData)
        let array=action.getData
        if(action.type===actionTypes.SUCCESSCONDITION){
            return{
                ...state,
                // searchedData:state.searchedData.concat(array)
                searchedData:action.getData.items
            }
        }

        if(action.type===actionTypes.VIDEOPLAYER){
            console.log('videoId',action.videoId)
            console.log(action.videoTitle)
            return{
                ...state,
                videoId:action.videoId,
                videotitle:action.videoTitle
            }
        }

        if(action.type===actionTypes.LOGINDETAILS){
            console.log('loginData',action.loginData)
            return{
                ...state,
                logindata:action.loginData
            }
        }

        return state

}

export default reducer