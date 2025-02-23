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
  imagePath: string;
  description?: string;
}

export interface Partner {
  name: string;
}

export interface Topic {
  name: string;
}

export interface GlobalPartner {
  logo: string;
  name: string;
}

export interface Statistic {
  imageSrc: string;
  value: string;
  description: string;
}

export type FinancialData = {
  year: number;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
};

export type TransparencyBadge = {
  year: number;
  type: string;
  imageSrc: string;
};

export type Quote = {
  text: string;
  author: string;
  title: string;
};
