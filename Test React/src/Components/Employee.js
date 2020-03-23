import React from 'react'

 const Employee = ({em}) => {

    return (
        <>
        <p>ID: {em.id}</p>
        <p>IME: {em.employee_name}</p>
        <p>PLATA: {em.employee_salary}</p>
        <p>GODINE: {em.employee_age}</p>
        <img src={em.profile_image} alt="Ovo vidite ako ne postoji slika"/>

        </>
    )
}

export default Employee