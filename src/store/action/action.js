import * as actionTypes from "./actionTypes";
import axios from "axios";

export const searchedValue = (srchval) => {
  return (dispatch) => {
    if (srchval.length > 1) {
      axios
        .get(
          `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=${srchval}&key=${process.env.REACT_APP_NOT_SECRET_CODE}
        `
        )
        .then((res) => {
          dispatch(successData(res.data));
        })
        .catch((err) => {
          dispatch(failData(err));
        });
    }
  };
};

export const selectedCategpory = (categoryid) => {
  return (dispatch) => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&type=video&videoCategoryId=${categoryid}&key=${process.env.REACT_APP_NOT_SECRET_CODE}`
      )
      .then((res) => {
        dispatch(categorySuccess(res.data));
      })
      .catch((err) => {
        dispatch(categoryFail(err));
      });
  };
};

export const channelInfo = (channelId, channelName) => {
  return (dispatch) => {
    axios
      .get(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=5&key=${process.env.REACT_APP_NOT_SECRET_CODE}`
      )
      .then((res) => {
        dispatch(channelIdSuccess(res.data, channelName));
      })
      .catch((err) => {
        dispatch(channelIdFail(err));
      });
  };
};

const channelIdSuccess = (success, channelName) => {
  return {
    type: actionTypes.CHANNELSUCCESS,
    channnelDetails: {
      ...success,
    },
    channelName: channelName,
  };
};

const channelIdFail = (fail) => {
  return {
    type: actionTypes.CHANNELFAIL,
    channnelDetails: {
      ...fail,
    },
  };
};

export const profile = () => {
  return {
    type: actionTypes.PROFILE,
  };
};

export const playVideo = (videoId, videoTitle) => {
  return {
    type: actionTypes.VIDEOPLAYER,
    videoId: videoId,
    videoTitle: videoTitle,
  };
};

export const loginDetails = (loginData) => {
  return {
    type: actionTypes.LOGINDETAILS,
    loginData: loginData,
  };
};

const categorySuccess = (catsuccess) => {
  return {
    type: actionTypes.CATEGORYSUCCESS,
    categoryDetails: {
      ...catsuccess,
    },
  };
};

const categoryFail = (catFailure) => {
  return {
    type: actionTypes.CATEGORYFAILURE,
    failed: {
      ...catFailure,
    },
  };
};

const successData = (success) => {
  return {
    type: actionTypes.SUCCESSCONDITION,
    getData: {
      ...success,
    },
  };
};

const failData = (fail) => {
  return {
    type: actionTypes.FAILURECONDITION,
    fail: {
      ...fail,
    },
  };
};
