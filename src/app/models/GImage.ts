import { ImageMetadata } from "./ImageMetaData";

export interface GImage {
    original: ImageMetadata;
    downsized: ImageMetadata;
    downsized_large: ImageMetadata;
    downsized_medium: ImageMetadata;
    downsized_small: ImageMetadata;
    downsized_still: ImageMetadata;
}