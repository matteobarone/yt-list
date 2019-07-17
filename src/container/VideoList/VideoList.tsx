import * as React from 'react';
import VideoPreview from '../../shared/VideoPreview/VideoPreview';
import appStore from '../../store/reducers';
import './VideoList.css'
import {loadVideos} from '../../store/actions/loadVideos';
import {Video} from '../../store/model/video.model';

interface VideoListState {
  videos: Video[];
}

export class VideoList extends React.Component<any, VideoListState> {
  constructor(props: any) {
    super(props);
    this.state = {videos: []};

    appStore.subscribe(() => {
      this.setState({
        videos: appStore.getState().videos,
      });
    });
  }

  public componentDidMount(): void {
    appStore.dispatch(loadVideos())
  }

  public render() {
    return (
      <div className="video-list">
        {this.state.videos.map((value) => {
          return <VideoPreview
            id={value.id}
            title={value.title}
            preview={value.preview.url}
            views={value.views}
            key={value.id}/>
        })}
      </div>
    );
  }
}
