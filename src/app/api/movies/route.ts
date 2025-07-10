import { promises as fs } from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const filePath = path.join(process.cwd(), 'data', 'mockMovies.json');

export async function GET() {
  const data = await fs.readFile(filePath, 'utf-8');
  return NextResponse.json(JSON.parse(data));
}

export async function POST(req: Request) {
  const newMovie = await req.json();
  const data = await fs.readFile(filePath, 'utf-8');
  const movies = JSON.parse(data);
  movies.push(newMovie);
  await fs.writeFile(filePath, JSON.stringify(movies, null, 2));
  return NextResponse.json({ success: true });
}
