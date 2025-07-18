export type CreateMovie = {
  title: string;
  imageUrl: string;
  releaseDate: string;
  description: string;
  videoSource: string;
}

export type Movie = {
  id: number;
  title: string;
  imageUrl: string;
  releaseDate: string;
  description: string;
  videoSource: string;
  genres: Genre[];
  cast: Cast[];
}

export type Cast = {
  id: number;
  name: string;
  role: string;
  movieId: number;
  createdAt: string;
  updatedAt: string;
}

export type Genre = {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  movies: Movie[];
}

export type LoginFormValues ={
  email:string;
  password:string;
}

export type RegisterFormValues ={
  name:string;
  email:string;
  password:string;
}
