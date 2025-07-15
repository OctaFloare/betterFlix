import { promises as fs } from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'
import { Movie } from '@/app/components/types'

const filePath = path.join(process.cwd(), 'data', 'mockMovies.json')

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { params } = context; // ✅ await here

  const data = await fs.readFile(filePath, 'utf-8')
  const movies = JSON.parse(data)

  const movie = movies.find((m: Movie) => {return String(m.id) === params.id})

  if (!movie) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 })
  }

  return NextResponse.json(movie)
}


export async function PUT(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;
  const updatedFields: Partial<Movie> = await request.json();
  const data = await fs.readFile(filePath, 'utf-8');
  const movies = JSON.parse(data);

  const index = movies.findIndex((movie: Movie) => {return String(movie.id) === id});
  if (index === -1) {
    return NextResponse.json({ error: 'Movie not found' }, { status: 404 });
  }

  // Merge updated fields with existing movie
  const updatedMovie = { ...movies[index], ...updatedFields, id };
  movies[index] = updatedMovie;

  await fs.writeFile(filePath, JSON.stringify(movies, null, 2));
  return NextResponse.json(updatedMovie);
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const data = await fs.readFile(filePath, 'utf-8');
  const movies = JSON.parse(data);

  const newMovies = movies.filter((movie: Movie) => {return String(movie.id) !== params.id});
  await fs.writeFile(filePath, JSON.stringify(newMovies, null, 2));

  return NextResponse.json({ success: true });
}

