export type DiscoverTv = {
  id: number;
  name: string;
  original_name: string;
  overview: string;
  poster_path: string | undefined;
  backdrop_path: string | undefined;
  origin_country: string[];
  original_langua: string;
  popularity: number;
  vote_average: number;
  first_air_date: string;
  genre_ids: number[];
  vote_count: number;
  total_results: number;
  total_pages: number;
};
