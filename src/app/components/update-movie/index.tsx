'use client'

import { useFormik } from "formik"
import { Inputs } from "./inputs"
import * as yup from 'yup'
import { useMutation } from "@tanstack/react-query"
import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { CreateMovie as CreateMovieType, Movie } from "../types"
import { useParams } from "next/navigation"

const updateMovie = async (values: CreateMovieType, id: string) => {
    const response = await axios.put(`/api/movies/${id}`, {...values})
    return response.data
}
const fetchMovie = async (id: string) => {
    const response = await axios.get<Movie>(`/api/movies/${id}`)
    return response.data
}

export const UpdateMovie = () => {
    const { id } = useParams();

    const { data: movie, isLoading } = useQuery({
        queryKey: ['movie', id],
        queryFn: () => {return fetchMovie(String(id ?? ''))},
        enabled: !!id
    });

    const { mutate: updateMovieMutation } = useMutation({
        mutationKey: ['update-movie'],
        mutationFn: ({ values, id }: { values: CreateMovieType; id: string }) => {return updateMovie(values, id)}
    })

    const updateMovieValidationSchema = yup.object().shape({
        title: yup.string().required("Must fill in the title").max(25),
        imageUrl: yup.string().required("Must fill in the imageUrl")
            .test('not a valid url', "The image has an invalid url", (imageUrl) => {
                return imageUrl.includes("https://")
            }),
        releaseDate: yup.string().required("Must fill in the releaseDate"),
        description: yup.string().required(),
        videoSource: yup.string().required()
    })

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: movie?.title || '',
            imageUrl: movie?.imageUrl || '',
            releaseDate: movie?.releaseDate || '',
            description: movie?.description || '',
            videoSource: movie?.videoSource || '',
        },
        onSubmit: (values) => {
            updateMovieMutation({ values, id: String(id ?? '') });
        },
        validationSchema: updateMovieValidationSchema
    })

    if (isLoading) return <div>Loading...</div>;

    return (
        <form onSubmit={formik.handleSubmit} className="form flex gap-12">
            <div className="text-7xl">Update Movie Form</div>
            <Inputs formik={formik} /> 
            <button type="submit" 
                    className="text-3xl bg-blue-400 flex self-center rounded-4xl p-4"
                >
                Update Movie
            </button>
        </form>
    )
}