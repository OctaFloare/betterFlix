'use client'

import { useFormik } from "formik"
import { Inputs } from "./inputs"
import { RegisterFormValues } from "../types"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { useRouter } from 'next/navigation'

const registerUser = async (values: RegisterFormValues) =>{
    const response = await axios.post('/api/register', values)
    return response.data;
}

export const Register = () => {
    const [message, setMessage] = useState("");

    const router = useRouter();

    const {mutate: registerMutattion} = useMutation({
        mutationKey: ['register'],
        mutationFn: registerUser,
        onSuccess: () => {
            localStorage.setItem("registered", "true");
            router.push("/login");
        },
        onError: (error: any) =>{
            setMessage("Registration failed.");
        }
    });

    const formik = useFormik<RegisterFormValues>({
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
        onSubmit: (values) =>{
            setMessage("");
            registerMutattion(values)
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form flex gap-12">
            <div className="text-7xl">Register</div>
            <Inputs formik={formik} /> 
                <button type="submit" 
                        className="text-3xl bg-blue-400 flex self-center rounded-4xl p-4">
                    Sign up
                </button>
                {message &&
                    <div className="mt-4 text-center text-lg text-red-600">{message}</div>
                }
        </form>
    )

}