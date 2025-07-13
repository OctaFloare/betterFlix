import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Movie as MovieType} from "../../types";

const getMovie = async (id: number) => {
    try {
        const response = await axios.get<MovieType>(`/api/movies/${id}`)
    
        return response.data;
    } catch (error) {
        console.error("Error fetching movie:", error);
        throw error;
    }
}

export const useMovieQuery = (id: number) => {
    const {data: movie, error, isLoading} = useQuery({
        queryKey: ["get-movie", id],
        queryFn: () => getMovie(id),
        staleTime: 5000
    });

    return {
        movie,
        error,
        isLoading
    }
}