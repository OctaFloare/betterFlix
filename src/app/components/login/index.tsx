'use client'

import { useFormik } from "formik"
import { Inputs } from "./inputs"
import { LoginFormValues } from "../types"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/navigation"

const loginUser = async (values: LoginFormValues) =>{
    const response = await axios.post('/api/login', values)
    return response.data;
}

export const Login = () => {
    const router = useRouter();
    const [message, setMessage] = useState("");

    const {mutate: loginMutattion} = useMutation({
        mutationKey: ['login'],
        mutationFn: loginUser,
        onSuccess: (data) =>{
            localStorage.setItem("user", JSON.stringify(data));
            router.push('/')
            setMessage(`Welcome back, ${data.name || data.email}!`);
        },
        onError: () => {
            setMessage("Login failed, please try again.");
        }
    })

    const formik = useFormik<LoginFormValues>({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) =>{
            setMessage("");
            loginMutattion(values);
        },
    });

    return (
        <form onSubmit={formik.handleSubmit} className="form flex gap-12">
            <div className="text-7xl">Login</div>
            <Inputs formik={formik} /> 
                <button type="submit" 
                        className="text-3xl bg-blue-400 flex self-center rounded-4xl p-4">
                    Sign in
                </button>
                {message && <div className="mt-4 text-red-600">{message}</div>}
        </form>
    )

}