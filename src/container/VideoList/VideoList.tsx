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
  public static getDateMinusDays(days?: number): string {
    if (!days) {
      return new Date('1/1/1970').toISOString();
    }

    const date = new Date();
    date.setDate(date.getDate() - days);
    return date.toISOString();
  }

  constructor(props: any) {
    super(props);
    this.state = {videos: []};

    appStore.subscribe(() => {
      this.setState({
        videos: appStore.getState().videos,
      });
    });
  }

  PERIODS: any = {
    all: {label: 'All time', publishedAfter: VideoList.getDateMinusDays()},
    week: {label: 'Last week', publishedAfter: VideoList.getDateMinusDays(7)},
    month: {label: 'Last Month', publishedAfter: VideoList.getDateMinusDays(30)},
    year: {label: 'Last Year', publishedAfter: VideoList.getDateMinusDays(365)},
  };

  public componentDidMount(): void {
    this.dispatchLoadVideo();
  }

  public dispatchLoadVideo() {
    appStore.dispatch(loadVideos({
      publishedAfter: this.PERIODS[this.props.match.params.id].publishedAfter
    }));
  }

  componentDidUpdate(prevProps: any) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.dispatchLoadVideo();
    }
  }

  public render() {
    return (
      <div className="video-list">
        <h3>{this.PERIODS[this.props.match.params.id].label}</h3>
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
