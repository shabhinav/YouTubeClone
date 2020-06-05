import * as actionTypes from './action/actionTypes'

const initialState={
    searchedData:[],
    error:'',
    videoId:'',
    videotitle:''
}

const reducer=(state=initialState,action)=>{
    // console.log('serdata',action.getData)
        if(action.type===actionTypes.SUCCESSCONDITION){
            return{
                ...state,
                searchedData:[...state.searchedData,action.getData]
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

        // if(action.type===actionTypes.VIDEOTITLE){
        //     console.log('VideoTitle',action.videoTitle)
        // }

        return state

}

export default reducer