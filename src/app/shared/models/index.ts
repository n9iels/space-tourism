export interface Destination {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

export interface Crew {
  name: string;
  image: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

export interface Technology {
  name: string;
  image: {
    portrait: string;
    landscape: string;
  };
  description: string;
}

export interface Content {
  destinations: Destination[];
  crew: Crew[];
  technology: Technology[];
}

export interface Tab {
  name: string;
}
