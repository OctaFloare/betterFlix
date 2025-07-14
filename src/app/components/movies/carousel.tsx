import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { MovieCard } from "./movieCard"
import { useEffect } from "react"
import { useMoviesQuery } from './hooks/useMoviesQuery'

import './carousel.css'

export const Carousel = () => {
    const { movies } = useMoviesQuery();

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: { perView: 5, spacing: 8 },
    });

      useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [movies, instanceRef]);

    return <div ref={sliderRef} className="keen-slider overflow-visible!">
        {!!movies && movies.map((movie, index) => {
            return <div key={`${movie.title}-${index}`}
                        className={`keen-slider__slide number-slide${index + 1} slide`}>
                <MovieCard movie={movie}/>
            </div>
        })}
    </div>
}