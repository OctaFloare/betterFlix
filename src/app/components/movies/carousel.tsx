import { Movie } from "../types"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { MovieCard } from "./movieCard"
import { useEffect } from "react"

type Props = {
    movies?: Movie[]
}

export const Carousel = ({ movies }: Props) => {

    const [sliderRef, instanceRef] = useKeenSlider({
        slides: { perView: 5, spacing: 8 },
    });

      useEffect(() => {
    if (instanceRef.current) {
      instanceRef.current.update();
    }
  }, [movies]);

    return <div ref={sliderRef} className="keen-slider">
        {!!movies && movies.map((movie, index) => {
            return <div key={`${movie.title}-${index}`}
                        className={`keen-slider__slide number-slide${index + 1} z-1`}>
                <MovieCard movie={movie}/>
            </div>
        })}
    </div>
}