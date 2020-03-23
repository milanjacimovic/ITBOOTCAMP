import React from 'react'

const Select = ({handleChange}) => {
    return(
        <div>
            <h3>Izaberi koliko zaposlenih da prikazem:</h3>
         <select onChange={(e) => handleChange(e)}>
            <option value={'All'}>All employees</option>
            <option value={'5'}>5</option>
            <option value={'10'}>10</option>
            <option value={'20'}>20</option>
            
         </select>   
        </div>
    )
}

export default Select