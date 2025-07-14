"use client";

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { useParams } from "next/navigation";
import { Movie } from "@/app/components/types";
import Image from "next/image";

const MoviePage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie>();
  useEffect(() => {
    console.log(id);
    axios.get<Movie>("/api/movies/" + id).then((res: AxiosResponse<Movie>) => {
      setMovie(res.data);
      console.log(res.data);
    });
  }, [setMovie]);
  return (
    <>
    <div className="flex flex-col justify-center items-center">

      {movie && (
        <Image width={500} height={500} className="mt-0 h-[90vh]" src={movie.imageUrl} alt="img" />
      )}
      <div>{movie ? movie.title : "Loading..."}</div>
      <div>{movie ? movie.releaseDate : "Loading..."}</div>
    </div>
    </>
  );
};
export default MoviePage;
