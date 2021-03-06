import { createStore, applyMiddleware, combineReducers } from "redux";

import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";

import { authReducer } from "./reducers/auth.reducer";
import {
  homeVideosReducer,
  selectVideoReducer,
  relatedVideoReducer,
} from "./reducers/videos.reducer";
import { channelDetailsReducer } from "./reducers/channel.reducer";
import { commentListReducer } from "./reducers/comment.reducer";
const rootReducer = combineReducers({
  auth: authReducer,
  homeVideos: homeVideosReducer,
  selectVideo: selectVideoReducer,
  channelDetails: channelDetailsReducer,
  commentList: commentListReducer,
  relatedVideos: relatedVideoReducer,
});

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
