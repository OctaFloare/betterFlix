import axios from "axios";

export const useDeleteMovieMutation = () => {
    const deleteMovie = async (id: number) => {
        try {
            const response = await axios.delete(`/api/movies/${id}`);
            return response.data;
        } catch (error) {
            console.error("Error deleting movie:", error);
            throw error;
        }
    }

    return {
        deleteMovie
    }
}