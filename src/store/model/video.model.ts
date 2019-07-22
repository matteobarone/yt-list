interface VideoPreview {
  url: string;
  width: number;
  height: number;
}

export interface Video {
  id: string;
  title: string;
  views: string;
  publishedAt: string;
  preview: VideoPreview;
}

export interface VideoStatistics {
  id: string;
  commentCount: string;
  dislikeCount: string;
  favoriteCount: string;
  likeCount: string;
  viewCount: string;
}

const formatNumber = (n: number) => n ? new Intl.NumberFormat('it-IT').format(n) : 'Unknown';

export function createVideo(data: any = {}): Video {
  return {
    id: data.id.videoId,
    title: data.snippet.title,
    views: data.statistics,
    publishedAt: data.snippet.publishedAt,
    preview: data.snippet.thumbnails.high,
  }
}

export function createVideoStatistics(data: any = {}): VideoStatistics {
  return {
    id: data.id,
    commentCount: formatNumber(+data.statistics.commentCount),
    dislikeCount: formatNumber(+data.statistics.dislikeCount),
    favoriteCount: formatNumber(+data.statistics.favoriteCount),
    likeCount: formatNumber(+data.statistics.likeCount),
    viewCount: formatNumber(+data.statistics.viewCount),
  }
}
