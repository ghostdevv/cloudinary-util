export interface CloudinaryVideoPlayer {
  on: Function;
}

export interface CloudinaryVideoPlayerOptionsLogo {
  logoImageUrl?: string;
  logoOnclickUrl?: string;
  showLogo?: boolean;
}
export interface CloudinaryVideoPlayerOptions
  extends CloudinaryVideoPlayerOptionsLogo {
  width?: string | number;
  height?: string | number;
  aspectRatio?: string;

  // ------------ Player visuals Props ------------
  aiHighlightsGraph?: boolean;
  bigPlayButton?: boolean | string;
  colors?: CloudinaryVideoPlayerOptionsColors;
  /**
   * @deprecated use top level options instead
   */
  controlBar?: {
    /**
     * @deprecated use {@link `pictureInPictureToggle`} instead
     */
    pictureInPictureToggle?: boolean;
  };
  controls?: boolean;
  floatingWhenNotVisible?: string;
  fluid?: boolean;
  fontFace?: string;
  hideContextMenu?: boolean;
  interactionAreas?: unknown;
  playbackRates?: Array<unknown>;
  playlistWidget?: {
    direction?: string;
    total?: string;
  };
  posterOptions?: CloudinaryVideoPlayerOptionPosterOptions;
  showJumpControls?: boolean;
  seekThumbnails?: boolean;
  videoJS?: object;

  // ------------ Player Behavior Props ------------
  autoPlay?: string | boolean | undefined; // Left behind for backward compactibility.
  autoplay?: string | boolean | undefined;
  autoplayMode?: string;
  autoShowRecommendations?: boolean;
  loop?: boolean;
  maxTries?: number;
  muted?: boolean;
  pictureInPictureToggle?: boolean;
  playedEventPercents?: number[];
  playedEventTimes?: null | Array<unknown>;
  playsinline?: boolean;
  videoTimeout?: number;
  withCredentials?: boolean;

  // ------------ Video Config Props ------------
  chapters?: object;
  chaptersButton?: boolean;
  preload?: string;
  publicId: string;
  sourceTransformation?: object;
  sourceTypes?: Array<string>;
  transformation?: Array<object> | object;

  // ------------ Ads And Analytics Props ------------
  ads?: {
    adTagUrl?: string;
    adsInPlaylist?: string;
    showCountdown?: boolean;
    adLabel?: string;
    locale?: string;
    prerollTimeout?: number;
    postrollTimeout?: number;
  };
  analytics?: boolean;
  allowUsageReport?: boolean;

  // ------------ Delivery ------------
  cloud_name?: string;
  cname?: string;
  privateCdn?: boolean;
  queryParams?: Record<string, string | number | boolean> | string;
  secure?: boolean;
  secureDistribution?: string;

  // Misc

  language?: string;
  languages?: Record<string, object>;
}

export interface CloudinaryVideoPlayerOptionsColors {
  accent?: string;
  base?: string;
  text?: string;
}

export interface CloudinaryVideoPlayerOptionPosterOptions {
  publicId: string;
}
