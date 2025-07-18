import { FormikProps } from "formik"
import { Input } from "./input"
import { LoginFormValues } from "../types"

type Props = {
    formik: FormikProps<LoginFormValues>
}

export const Inputs = ({ formik } : Props) => {
    return (
        <div className="input-grid">
            <Input 
                labelText="Email"
                inputName="email"
                type="text"
                onChange={formik.handleChange}
                placeholder="Please fill the email"
                value={formik.values.email}
                touched={formik.touched.email}
                errors={formik.errors.email}
            />

            <Input 
                labelText="Password"
                inputName="password"
                type="password"
                onChange={formik.handleChange}
                placeholder="Please fill the password"
                value={formik.values.password}
                touched={formik.touched.password}
                errors={formik.errors.password}
            />
        </div>
    )
}
