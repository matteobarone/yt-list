export const ADD_VIDEOS = 'ADD_VIDEOS';

export interface AddVideosAction {
  type: typeof ADD_VIDEOS;
  payload: any[]; // todo
}

export function addVideos(payload: any[]): AddVideosAction {
  return {
    type: 'ADD_VIDEOS',
    payload,
  }
}
