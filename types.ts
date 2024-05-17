export interface ImageFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface ImageData {
  id: number;
  data: {
    attributes: {
      name: string;
      alternativeText: string | null;
      caption: string | null;
      width: number;
      height: number;
      formats: {
        large: ImageFormat;
        small: ImageFormat;
        medium: ImageFormat;
        thumbnail: ImageFormat;
      };
      hash: string;
      ext: string;
      mime: string;
      size: number;
      url: string;
      previewUrl: string | null;
      provider: string;
      provider_metadata: any | null;
      createdAt: string;
      updatedAt: string;
    };
  };
}
interface Page {
  data: {
    id: number;
    attributes: {
      Title: string;
      Offline: boolean;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
      locale: string;
      slug: string;
    };
  }[];
}

export interface Article {
  id: number;
  attributes: {
    Title: string;
    Description: string;
    IsFeatured: boolean;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    locale: string;
    slug: string;
    Image: ImageData;
    pages: Page;
  };
}
