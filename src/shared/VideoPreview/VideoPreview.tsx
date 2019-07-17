import React, {PropsWithChildren} from 'react';
import './VideoPreview.css';

interface VideoPreviewProps {
  title: string;
  views: number;
  preview?: string;
}

const VideoPreview: React.FC<VideoPreviewProps> = (props: PropsWithChildren<VideoPreviewProps>) => {
  return (
    <div className="video-preview">
      <div className="video-preview__preview">
        {/* img */}
      </div>
      <h3>{props.title}</h3>
      <span>{props.views} views</span>
    </div>
  )
};

export default VideoPreview;
