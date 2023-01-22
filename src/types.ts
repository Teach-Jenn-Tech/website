export interface CompatibilityItem {
  icon: string;
  title: string;
  url: string;
}

export interface FeatureItem {
  description: string;
  icon: string;
  title: string;
}

export interface FooterLink {
  description: string;
  icon: string;
  url: string;
}

export interface NavItem {
  title: string;
  url: string;
}

export interface CodeSite {
  title: string;
  image: ImageMetadata;
  url: string;
}

export interface StreamSite {
  title: string;
  image: ImageMetadata;
  url: string;
  date: string;
}