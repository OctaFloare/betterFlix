'use client'

import { useEffect, useState } from 'react'
import { Carousel } from './carousel'
import axios, { AxiosResponse } from 'axios'
import { Movie } from '../types';

export const Movies = () => {
    const [movies, setMovies] = useState<Movie[]>([]);

    useEffect(() => {
      axios.get<Movie[]>('/api/movies').then((response: AxiosResponse<Movie[]>) => {
        setMovies(response.data)
      })
    }, [setMovies])

    return <div className='movies-container mt-8'>
        <Carousel movies={movies} />
    </div>
}