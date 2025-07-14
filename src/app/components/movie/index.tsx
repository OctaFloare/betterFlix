'use client'

import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Movie as MovieType } from "../types";
import { useParams } from "next/navigation";
import MovieCard from "./movieCard";
import { useMovieQuery } from "./hooks/useMovieQuery";

export const Movie = () => {
    
    const { id } = useParams<{ id: string}>();
    const {movie, error, isLoading} = useMovieQuery(+id);
   
    console.log(error, movie, "movie");

    return (
        <>
            {error && <h2 className="flex justify-center items-center h-screen text-2xl font-bold">An error ocurred while loading the movie...</h2>}
            {isLoading && <h2 className="flex justify-center items-center h-screen text-2xl font-bold">Loading...</h2>}
            {movie && 
                <MovieCard
                    movie={movie}
                    id={+id}
                />
            }
        </>  
    );
}