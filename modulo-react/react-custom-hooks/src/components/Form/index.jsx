import { useState } from "react"
import { useFormInput } from "../hooks/useFormInput"


export const Form = () => {
    const firstNameProps = useFormInput('Cledeocir')
    const lastNameProps = useFormInput('Marafão')

    return (
        <>
        <label>
            First Name: 
            <input {...firstNameProps}/>
        </label>

        <label>
            Last Name: 
            <input {...lastNameProps}/>
        </label>
        <p>Bom dia {firstNameProps.value} {lastNameProps.value}!</p>
        </>
    )
}