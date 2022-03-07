type BelongsToColleactionType = {
  backdrop_path: string,
  id: number,
  name: string,
  poster_path: string
}

type GenresType = {
  id: number,
  name: string
}

type ProductionCompaniesType = {
  id: number,
  logo_path: string,
  name: string,
  origin_country: string
}

type ProductionCountriesType = {
  iso_3166_1: string,
  name: string
}

type SpokenLanguagesType = {
  english_name: string,
  iso_639_1: string,
  name: string
}

export type MovieType = {
  adult: boolean,
  backdrop_path: string,
  genre_ids: number[],
  id: number,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  release_date: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number,
}

export type MovieDetailType = {
  adult: boolean,
  backdrop_path: string,
  belongs_to_collection: BelongsToColleactionType,
  budget: number,
  genres: GenresType,
  homepage: string,
  id: number,
  imdb_id: string,
  original_language: string,
  original_title: string,
  overview: string,
  popularity: number,
  poster_path: string,
  production_companies: ProductionCompaniesType[],
  production_countries: ProductionCountriesType[],
  release_date: string,
  revenue: number,
  runtime: number,
  spoken_languages: SpokenLanguagesType[],
  status: string,
  tagline: string,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}