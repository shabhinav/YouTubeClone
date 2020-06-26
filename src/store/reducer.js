import * as actionTypes from "./action/actionTypes";

const initialState = {
  searchedData: [],
  error: "",
  videoId: "",
  videotitle: "",
  logindata: [],
  videohistory: {},
  titlehistory: {},
};

const reducer = (state = initialState, action) => {
  console.log("serdata", action.getData);
  if (action.type === actionTypes.SUCCESSCONDITION) {
    return {
      ...state,
      searchedData: action.getData.items,
    };
  }

  if (action.type === actionTypes.CATEGORYSUCCESS) {
    return {
      ...state,
      categoryData: action.categoryDetails.items,
    };
  }

  if (action.type === actionTypes.VIDEOPLAYER) {
    console.log("videoId", action.videoId);
    console.log(action.videoTitle);
    return {
      ...state,
      videoId: action.videoId,
      videotitle: action.videoTitle,
      videohistory: action.videoId,
      titlehistory: action.videoTitle,
    };
  }

  if (action.type === actionTypes.LOGINDETAILS) {
    console.log("loginData", action.loginData);
    return {
      ...state,
      logindata: action.loginData,
    };
  }

  return state;
};

export default reducer;
