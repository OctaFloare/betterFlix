import { Carousel } from './carousel'

const mockMovies = [
  {
    title: 'Dune: Part Two',
    imageUrl: 'https://image.tmdb.org/t/p/w500/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    releaseDate: '2024-03-01',
  },
  {
    title: 'Oppenheimer',
    imageUrl: 'https://image.tmdb.org/t/p/w500/ptpr0kGAckfQkJeJIt8st5dglvd.jpg',
    releaseDate: '2023-07-21',
  },
  {
    title: 'Barbie',
    imageUrl: 'https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg',
    releaseDate: '2023-07-21',
  },
  {
    title: 'Inside Out 2',
    imageUrl: 'https://image.tmdb.org/t/p/w500/1m1rX43FveY4klzXbHms5vFmt7A.jpg',
    releaseDate: '2024-06-14',
  },
  {
    title: 'The Flash',
    imageUrl: 'https://image.tmdb.org/t/p/w500/rktDFPbfHfUbArZ6OOOKsXcv0Bm.jpg',
    releaseDate: '2023-06-16',
  },
  {
    title: 'John Wick: Chapter 4',
    imageUrl: 'https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg',
    releaseDate: '2023-03-24',
  },
  {
    title: 'Wonka',
    imageUrl: 'https://image.tmdb.org/t/p/w500/qhb1qOilapbapxWQn9jtRCMwXJF.jpg',
    releaseDate: '2023-12-15',
  },
  {
    title: 'Guardians of the Galaxy Vol. 3',
    imageUrl: 'https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg',
    releaseDate: '2023-05-05',
  },
  {
    title: 'The Super Mario Bros. Movie',
    imageUrl: 'https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    releaseDate: '2023-04-05',
  },
  {
    title: 'Mission: Impossible – Dead Reckoning Part One',
    imageUrl: 'https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg',
    releaseDate: '2023-07-12',
  },
]

export const Movies = () => {
    return <div className='movies-container'>
        <Carousel movies={mockMovies} />
    </div>
}