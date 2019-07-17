import {Reducer} from 'redux';
import {AddVideosAction} from '../actions/addVideos';

const videos: Reducer<any, AddVideosAction> = (state = [], action: AddVideosAction) => {
  switch (action.type) {
    case 'ADD_VIDEOS':
      return [
        ...state,
        ...action.payload,
      ];
    default:
      return state;
  }
};

export default videos;
