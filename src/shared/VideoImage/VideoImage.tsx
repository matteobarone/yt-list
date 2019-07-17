import * as React from 'react';
import './VideoImage.css';

interface VideoImageProps {
  url: string;
  alt: string;
}

interface VideoImageState {
  didLoad: boolean;
}

export class VideoImage extends React.Component<VideoImageProps, VideoImageState> {
  constructor(props: VideoImageProps) {
    super(props);
    this.state = {
      didLoad: false,
    }
  }

  render() {
    return (
      <img
        className={this.state.didLoad ? 'video-image video-image--loaded' : 'video-image'}
        src={this.props.url}
        onLoad={() => this.setState({didLoad: true})}
        alt={this.props.alt}/>
    );
  }
}
