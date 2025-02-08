export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface BoardMember {
  name: string;
  image: string;
  bio: string;
}

export interface CarouselItem {
  image: string;
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
