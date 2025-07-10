import { FormikProps } from "formik"
import { Input } from "./input"
import { CreateMovie } from "../types"

type Props = {
    formik: FormikProps<CreateMovie>
}

export const Inputs = ({ formik } : Props) => {
    return (
        <div className="input-grid">
            <Input 
                labelText="Title"
                inputName="title"
                type="text"
                onChange={formik.handleChange}
                placeholder="Please fill the title"
                value={formik.values.title}
                touched={formik.touched.title}
                errors={formik.errors.title}
            />

            <Input 
                labelText="Description"
                inputName="description"
                type="text"
                onChange={formik.handleChange}
                placeholder="Please fill the description"
                value={formik.values.description}
                touched={formik.touched.description}
                errors={formik.errors.description}
            />

            <Input 
                labelText="Video Source URL"
                inputName="videoSource"
                type="text"
                onChange={formik.handleChange}
                placeholder="Please fill the video source URL"
                value={formik.values.videoSource}
                touched={formik.touched.videoSource}
                errors={formik.errors.videoSource}
            />

            <Input 
                labelText="Image URL"
                inputName="imageUrl"
                type="text"
                onChange={formik.handleChange}
                placeholder="Please fill the image URL"
                value={formik.values.imageUrl}
                touched={formik.touched.imageUrl}
                errors={formik.errors.imageUrl}
            />

            <Input 
                labelText="Release Date"
                inputName="releaseDate"
                type="text"
                onChange={formik.handleChange}
                placeholder="Please fill the release date"
                value={formik.values.releaseDate}
                touched={formik.touched.releaseDate}
                errors={formik.errors.releaseDate}
            />
        </div>
    )
}
