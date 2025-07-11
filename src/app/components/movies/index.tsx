'use client'

import { Carousel } from './carousel'
import { useMoviesQuery } from './hooks/useMoviesQuery';

export const Movies = () => {
  const { movies, error, isLoading } = useMoviesQuery()

  return <div className='movies-container mt-8 flex-col'>
      {error && <div>Something went wrong</div>}
      {isLoading && <div>Loading...</div>}
      {movies && <>
          <Carousel />
      </>}

    </div>
}