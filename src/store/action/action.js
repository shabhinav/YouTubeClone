import * as actionTypes from './actionTypes'
import axios from 'axios'


export const searchedValue=(srchval)=>{
    return dispatch=>{
        // dispatch(addData())
        axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${srchval}&key=${process.env.REACT_APP_NOT_SECRET_CODE}
        `)
        .then(res=>{
            console.log('res',res)
            dispatch(successData(res.data.items))
        })
        .catch((err)=>{
            dispatch(failData(err))
        })
    }
    
    
}

export const playVideo=(videoId,videoTitle)=>{
    console.log(videoTitle)
    return{
        type:actionTypes.VIDEOPLAYER,
        videoId:videoId,
        videoTitle:videoTitle
    }
}

export const loginDetails=(loginData)=>{
    return{
        type:actionTypes.LOGINDETAILS,
        loginData:loginData
    }
}

const successData=(success)=>{
    console.log('success',success)
    return{
        type:actionTypes.SUCCESSCONDITION,
        getData:{
            ...success
        }
    }
}

const failData=(fail)=>{
    return{
        type:actionTypes.FAILURECONDITION,
        fail:{
            ...fail
        }
    }
}

