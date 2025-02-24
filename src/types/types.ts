import type { ImageMetadata } from "astro";

export interface TeamMember {
  name: string;
  role: string;
  image: ImageMetadata;
  bio: string;
}

export interface BoardMember {
  name: string;
  image: ImageMetadata;
  bio: string;
}

export interface CarouselItem {
  image: ImageMetadata;
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
}

export interface Service {
  title: string;
  imagePath: ImageMetadata;
  description?: string;
}

export interface Partner {
  name: string;
}

export interface Topic {
  name: string;
}

export interface GlobalPartner {
  logo: ImageMetadata;
  name: string;
}

export interface Statistic {
  imageSrc: ImageMetadata;
  value: string;
  description: string;
}

export type FinancialData = {
  year: number;
  description: string;
  imageSrc: ImageMetadata;
  buttonText: string;
  buttonLink: string;
};

export type TransparencyBadge = {
  year: number;
  type: string;
  imageSrc: ImageMetadata;
};

export type Quote = {
  text: string;
  author: string;
  title: string;
};
