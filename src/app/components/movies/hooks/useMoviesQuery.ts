import axios from "axios";
import { Movie } from "../../types";
import { useQuery } from "@tanstack/react-query";

const getMovies = async () => {
  const response = await axios.get<Movie[]>('/api/movies')

  return response.data
}

export const useMoviesQuery = () => {
    const { data: movies, error, isLoading} = useQuery({
      queryKey: ["get-movies"],
      queryFn: getMovies,
      staleTime: 5000
    });

    return {
        movies, 
        error,
        isLoading
    }
}