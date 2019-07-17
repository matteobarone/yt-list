import {addVideos, AddVideosAction, updateVideoWithViews} from './addVideos';
import {createVideo, createVideoStatistics, Video, VideoStatistics} from '../model/video.model';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

export function loadVideos(): any {
  return (dispatch: any) =>
    fetchVideos()
      .then((videos) => dispatch(addVideos(videos)))
      .then((res: AddVideosAction) => {
        const ids = res.payload.map(v => v.id).join(',');
        return fetchVideoStatisticsByIds(ids);
      })
      .then((stats) => {
        // todo fare unico dispatch
        stats.forEach((s) => {
          dispatch(updateVideoWithViews({id: s.id, views: s.viewCount}))
        });
      })
      .catch((error: any) => {
        if (!API_KEY) {
          throw new Error('USE A VALID YOUTUBE API KEY');
        }
        console.log(error);
      })
}

function fetchVideos(): Promise<Video[]> {
  const api = `https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&maxResults=20&type=video&key=${API_KEY}`;
  return fetch(api)
    .then(res => res.json())
    .then((data: any) => data.items.map((el: any) => createVideo(el)))
}

function fetchVideoStatisticsByIds(ids: string): Promise<VideoStatistics[]> {
  const api = `https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${ids}&key=${API_KEY}`;
  return fetch(api)
    .then(res => res.json())
    .then((data: any) => data.items.map((el: any) => createVideoStatistics(el)));
}
