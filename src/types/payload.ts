export interface Media {
  id: string;
  alt: string;
  filename: string;
  mimeType: string;
  filesize: number;
  width: number;
  height: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  focalX?: number;
  focalY?: number;
  thumbnailURL: string | null;
}

export interface Author {
  id: string;
  username: string;
  name: string;
  bio?: string;
  role: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  profileImage?: Media;
  loginAttempts: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategoryResponse {
  docs: Category[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
}

export interface Post {
  id: string;
  title: string;
  featuredImage: Media;
  author: Author;
  publishedDate: string;
  category: Category;
  estimatedReadTime: number;
  status: "draft" | "published";
  content: {
    root: {
      children: Array<{
        children: Array<{
          detail: number;
          format: number;
          mode: string;
          style: string;
          text: string;
          type: string;
          version: number;
        }>;
      }>;
    };
  };
}

export interface TextNode {
  detail: number;
  format: number;
  mode: string;
  style: string;
  text: string;
  type: string;
  version: number;
}

export interface ContentNode {
  children: Array<{
    children: Array<TextNode>;
  }>;
}

export interface ApiResponse {
  docs: Post[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: number | null;
  nextPage: number | null;
}
