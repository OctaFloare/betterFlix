'use client'

import { useFormik } from "formik"
import { Inputs } from "./inputs"
import * as yup from 'yup'

export const CreateMovie = () => {
    const createMovieValidationSchema = yup.object().shape({
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
        initialValues: {
            title: '',
            imageUrl: '',
            releaseDate: '',
            description: '',
            videoSource: '',
        },
        onSubmit: async (values) => {
            try {
                const response = await fetch('/api/movies', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(values),
                });
                if (!response.ok) {
                    throw new Error('Failed to create movie');
                }
                formik.resetForm();
                alert('Succes');
            } catch (error) {
                alert('Error creating movie');
                console.error(error);
            }
        },
        validationSchema: createMovieValidationSchema
    })

        return <form onSubmit={formik.handleSubmit} className="form flex gap-12">
                <div className="text-7xl">Create Movie Form</div>
                <Inputs formik={formik} /> 
                <button type="submit" 
                        className="text-3xl bg-blue-400 flex self-center rounded-4xl p-4"
                    >
                    Create Movie
                    </button>
            </form>

}