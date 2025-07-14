'use client'

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie as MovieType } from "../types";
import { useParams } from "next/navigation";
import BottomButtons from "./bottom-buttons";

const getMovie = async (id: number) => {
    const url = `/api/movies/${id}`;
    const res = await axios.get(url);

    if (!res.data) return null;
    return res.data;
};

export const Movie = () => {
    const [movie, setMovie] = useState<MovieType | undefined>();
    const [error, setError] = useState();
    const { id } = useParams<{ id: string}>();

    useEffect(() => {
        getMovie(+id)
        .then((response: MovieType) => {
            return setMovie(response);
        })
        .catch(setError)
    },[])
   
    console.log(error, movie)

    if (!movie || error) {
        return (
            <div className="flex flex-col items-center justify-center h-full">
                <h1 className="text-3xl font-bold">Movie Not Found</h1>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center py-10">
            <h1 className="text-5xl font-bold mb-6">{movie.title}</h1>
            <Image 
                src={movie.imageUrl}
                alt={movie.title}
                className="w-80 rounded-lg shadow-lg mb-6"
                width={250}
                height={250}
                />
            <p className="text-lg mb-2"><span className="font-semibold">Release Date:</span> {movie.releaseDate}</p>
            <p className="text-md mb-6">{movie.description}</p>
            <p className="text-md mb-6"><span className="font-semibold">Movie Source: </span>{movie.videoSource}</p>
            <BottomButtons></BottomButtons>
        </div>
    );
}