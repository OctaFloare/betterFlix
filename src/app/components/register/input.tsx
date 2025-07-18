import React from 'react';
import './index.css'

type Props = {
    labelText: string;
    inputName: string;
    type: string;
    onChange: (e: React.ChangeEvent) => void;
    onBlur?: (e: React.ChangeEvent) => void;
    placeholder: string;
    value: string;
    touched?: boolean;
    errors?: string;
}

export const Input = ({
    labelText,
    inputName,
    type,
    onChange,
    placeholder,
    value,
    touched,
    errors
} :Props) => {
    console.log(inputName, touched)

    return <div className="form-input">
        <label>{labelText}</label>
        <input 
            id={inputName}
            name={inputName}
            type={type}
            onChange={onChange}
            placeholder={placeholder}
            value={value}
        />
        {(touched && errors) && <div className='text-red-500'>{errors}</div>}
    </div>
}