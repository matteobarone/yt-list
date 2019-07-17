import * as React from 'react';
import VideoPreview from '../../shared/VideoPreview/VideoPreview';
import './VideoList.css'
import {createStore} from 'redux';
import videos from '../../store/reducers/videos';
import {addVideos} from '../../store/actions/addVideos';

const store = createStore(videos);

const videoStub = [
  {id: 1, title: 'Video 1', views: 12345},
  {id: 2, title: 'Video 2', views: 67890},
  {id: 3, title: 'Video 3', views: 97541},
];

interface VideoListState {
  videos: any[];
}

export class VideoList extends React.Component<any, VideoListState> {
  constructor(props: any) {
    super(props);
    this.state = {videos: []};
    store.subscribe(() => {
      this.setState({videos: store.getState()});
    });
  }

  public componentDidMount(): void {
    store.dispatch(addVideos(videoStub));
  }

  public render() {
    return (
      <div className="video-list">
        {this.state.videos.map((value: any) => {
          return <VideoPreview title={value.title} views={value.views} key={value.id}/>
        })}
      </div>
    );
  }
}
