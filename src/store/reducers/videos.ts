import {Reducer} from 'redux';
import {ADD_VIDEOS, UPDATE_VIDEO_WITH_VIEWS, VideoActions} from '../actions/addVideos';
import {Video} from '../model/video.model';

const initialState: Video[] = [];

const videos: Reducer<Video[], VideoActions> = (state = initialState, action: VideoActions) => {
  switch (action.type) {
    case ADD_VIDEOS:
      return [
        ...action.payload,
      ];
    case UPDATE_VIDEO_WITH_VIEWS:
      // todo rifattorizzare con oggetto e non array in store
      const indexVideoToUpdate = state.findIndex(v => v.id === action.payload.id);
      const videoToUpdate: Video = JSON.parse(JSON.stringify(state[indexVideoToUpdate]));
      videoToUpdate.views = action.payload.views;
      const clonedState = JSON.parse(JSON.stringify(state));
      clonedState[indexVideoToUpdate] = videoToUpdate;
      return clonedState;
    default:
      return state;
  }
};

export default videos;
