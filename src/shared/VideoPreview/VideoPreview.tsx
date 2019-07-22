import React, {PropsWithChildren} from 'react';
import './VideoPreview.css';
import {VideoImage} from '../VideoImage/VideoImage';

interface VideoPreviewProps {
  id: string
  title: string;
  views: string;
  preview?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = (props: PropsWithChildren<VideoPreviewProps>) => {
  return (
    <div className="video-preview">
      <div className="video-preview__preview">
        {props.preview && <VideoImage url={props.preview} alt={props.title}/>}
      </div>
      <h5>{props.title}</h5>
      <span>{props.views} views</span>
    </div>
  )
};

export default VideoPreview;
