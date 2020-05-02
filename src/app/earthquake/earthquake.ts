export interface Earthquake {
  location: string;
  magnitude: number;
  date: string;
  url: string;
  info: string;
}

export interface EarthquakeResolved {
  earthquakes: Earthquake[];
  error?: any;
}
