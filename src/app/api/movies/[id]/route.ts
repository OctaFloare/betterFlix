import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import { Movie } from '@/app/components/types'

const filePath = path.join(process.cwd(), 'data', 'mockMovies.json')

// GET a single movie by id
export async function GET(request: Request, { params }: { params: { id: string } }) {
  const data = await fs.readFile(filePath, 'utf-8')
  const movies = JSON.parse(data)
  const movie = movies.find((m: Movie) => String(m.id) === params.id)

  if (!movie) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 })
  }

  return NextResponse.json(movie)
}

export async function PUT(req: Request) {
  const updatedMovie: Movie = await req.json()
  const data = await fs.readFile(filePath, 'utf-8')
  const movies = JSON.parse(data)

  const index = movies.findIndex((movie: Movie) => {return movie.id === updatedMovie.id})
  if (index === -1) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 })
  }

  movies[index] = updatedMovie
  await fs.writeFile(filePath, JSON.stringify(movies, null, 2))
  return NextResponse.json(updatedMovie)
}

export async function DELETE(req: Request) {
  const { id }: Movie = await req.json()
  const data = await fs.readFile(filePath, 'utf-8')
  const movies = JSON.parse(data)

  const newMovies = movies.filter((movie: Movie) => {return movie.id !== id})
  await fs.writeFile(filePath, JSON.stringify(newMovies, null, 2))
  return NextResponse.json({ success: true })
}
