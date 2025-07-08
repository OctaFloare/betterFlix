import Image from 'next/image'
import Link from 'next/link'

const mockMovies = [
  {
    title: 'Poor Things',
    imageUrl: 'https://image.tmdb.org/t/p/w500/5qHoazZiaLe7oFBok7XlUhg96f2.jpg',
    releaseDate: '2023-12-08',
  },
  {
    title: 'The Batman',
    imageUrl: 'https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    releaseDate: '2022-03-04',
  },
  {
    title: 'Spider-Man: Across the Spider-Verse',
    imageUrl: 'https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    releaseDate: '2023-06-02',
  }
]

export const Movies = () => {
    return <div className='movies-container'>{mockMovies.map(movie => {
            return <div key={movie.title} className='flex flex-col items-center'>
            <div className='mb-5'>Title: {movie.title}</div>
            <Link href={`/movie/${movie.title}`} className="movies-card">
                <Image
                    width={300}
                    height={300}
                    src={movie.imageUrl}
                    alt={movie.title}
                    className='rounded-2xl'
                />
                </Link>
                </div>
        })}
    </div>
}