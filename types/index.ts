export interface Beer {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image_url: string;
  abv: number;
  ibu: number;
  ingredients: {
    hops: {
      name: string;
    }[];
  };
  method: {
    mash_temp: {
      duration: number;
    }[];
  };
}
