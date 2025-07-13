import Link from "next/link"
import Image from "next/image"
import { Movie } from "../types"
import '../movies/carousel.css'
import {    useMovie } from "./hooks/useMovie";

type Props = {
    movie: Movie
    id: number
}

export const MovieCard = ({ movie, id }: Props) => {
    const { deleteMovie } = useMovie();

    return (
        <>
            <div className="flex justify-center items-center h-screen gap-10">
                <div>
                    {movie?.imageUrl && movie?.title && (
                        <img src={movie.imageUrl} alt={movie.title} className="w-79 h-auto object-cover rounded-lg shadow-lg" />
                    )}
                </div>
                <div className="text-2xl font-bold">
                    <h2>{movie.title}</h2>
                    <br />
                    <div>Release date: {movie.releaseDate}</div>
                    <br />
                    <div className="text-lg">{movie.description}</div>
                    <br />
                    <div>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={() => console.log("Watch movie clicked")}>
                            {/* <a href={filmData.videoSource} rel="noopener noreferrer">Watch Movie</a> */}
                            <p>Watch Movie</p>
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-lg ml-4" onClick={() => console.log("Edit movie clicked")}>
                            <Link href={`/update-movie/${id}`} rel="noopener noreferrer">
                                <p>Edit Movie</p>
                            </Link>
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2 rounded-lg ml-4" onClick={() => deleteMovie(+id)}>
                            <p>Delete Movie</p>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
};

export default MovieCard;
