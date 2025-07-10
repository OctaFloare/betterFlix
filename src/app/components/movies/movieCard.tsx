import Link from "next/link"
import Image from "next/image"
import { Movie } from "../types"
import './carousel.css'

type Props = {
    movie: Movie
}

export const MovieCard = ({ movie }: Props) => {
    return <Link href={`/movie-page/${movie.id}`} className="movies-card">
                <Image
                    width={250}
                    height={250}
                    src={movie.imageUrl}
                    alt={movie.title}
                    className='rounded-2xl carousel-image'
                />
            </Link>
};
