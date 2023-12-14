import type { AssetOptions, AssetOptionsResize } from "./asset";

export interface ImageOptionsFillBackground {
  crop?: string;
  gravity?: string;
  prompt?: string;
}

export interface ImageOptionsResize extends AssetOptionsResize {}

export interface ImageOptionsGenerativeReplace {
  to: string;
  from: string;
  preserveGeometry?: boolean;
}

export type ImageOptionsRecolorPrompt = string | Array<string>;

export interface ImageOptionsRecolor {
  prompt?: ImageOptionsRecolorPrompt;
  to?: string;
  multiple?: boolean,
}

export type ImageOptionsRemovePrompt = string | Array<string>;
export type ImageOptionsRemoveRegion = Array<number> | Array<Array<number>>;

export interface ImageOptionsRemove {
  prompt?: ImageOptionsRemovePrompt;
  region?: [300, 200, 1900, 3500], // x,y,w,h
  multiple?: boolean,
  removeShadow?: boolean
}

export interface ImageOptionsZoomPan {
  loop: string | boolean;
  options: string;
}

export interface ImageOptions extends AssetOptions {
  defaultImage?: string;
  fillBackground?: boolean | ImageOptionsFillBackground;
  recolor?: ImageOptionsRecolorPrompt | ImageOptionsRecolor;
  remove?: ImageOptionsRemovePrompt | ImageOptionsRemove;
  replace?: Array<string | boolean> | ImageOptionsGenerativeReplace;
  restore?: boolean;
  zoompan?: string | boolean | ImageOptionsZoomPan;
}
