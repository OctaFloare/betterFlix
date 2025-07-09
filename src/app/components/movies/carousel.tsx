'use client'

import { Movie } from "../types"
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { MovieCard } from "./movieCard"

type Props = {
    movies?: Movie[]
}

export const Carousel = ({ movies }: Props) => {
    const [sliderRef] = useKeenSlider({
        slides: {
            perView: 5,
            spacing: 8
        },
    })

    return !!movies && <div ref={sliderRef} className="keen-slider">
        {movies.map((movie, index) => {
            return <div key={`${movie.title}-${index}`}
                        className={`keen-slider__slide number-slide${index + 1}`}
                    >
                <MovieCard movie={movie}/>
            </div>
        })}
    </div>
}