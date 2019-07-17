import {Video} from '../model/video.model';

export const ADD_VIDEOS = 'ADD_VIDEOS';
export const UPDATE_VIDEO_WITH_VIEWS = 'UPDATE_VIDEO_WITH_VIEWS';

export interface AddVideosAction {
  type: typeof ADD_VIDEOS;
  payload: Video[];
}

export interface UpdateVideoWithViewsAction {
  type: typeof UPDATE_VIDEO_WITH_VIEWS;
  payload: {id: string; views: string};
}

export type VideoActions = AddVideosAction | UpdateVideoWithViewsAction;

export function addVideos(payload: Video[]): AddVideosAction {
  return {
    type: ADD_VIDEOS,
    payload,
  }
}

export function updateVideoWithViews(payload: {id: string; views: string}): UpdateVideoWithViewsAction {
  return {
    type: UPDATE_VIDEO_WITH_VIEWS,
    payload,
  }
}
