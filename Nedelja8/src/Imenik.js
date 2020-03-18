import React from 'react'

const Imenik = ({kontakt})=>{
    let {ime, broj} = kontakt;
    return (
        <>
        <p>Ime: {ime}</p>
        <p>Broj: {broj}</p>
        <hr></hr>
        </>
    )
}

export default Imenik