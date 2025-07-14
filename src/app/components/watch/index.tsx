'use client'

import { useParams } from "next/navigation"
import { useMovieQuery } from "../movie/hooks/useMovieQuery";

export const Watch = () => {
    const { id } = useParams<{ id: string }>();
    const { movie } = useMovieQuery(+id)

    return !!movie && <div className="flex justify-center items-center w-full h-full mt-30">
        <video width={600} height={400} controls>
            <source src={movie.videoSource} type='video/mp4' />
            Your browser does not support the video tag.
        </video>
    </div>
}