import * as actionTypes from "./action/actionTypes";

const initialState = {
  searchedData: [],
  error: "",
  videoId: "",
  videotitle: "",
  logindata: [],
  videohistory: {},
  titlehistory: {},
  categoryData: [],
  profile: false,
  channelInfo: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === actionTypes.CHANNELSUCCESS) {
    return {
      ...state,
      channelInfo: action.channnelDetails,
    };
  }

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

  if (action.type === actionTypes.PROFILE) {
    return {
      ...state,
      profile: !state.profile,
    };
  }

  return state;
};

export default reducer;
