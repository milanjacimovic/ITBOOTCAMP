import React, { useState, useEffect } from 'react'
import Employee from './Employee'
import { getAllEmployees } from '../Services/Zaposleni'


const EmployeeList = () => {
    const [employee, setEmployee] = useState([])
  
    useEffect(() => {
      getAllEmployees().then(data => setEmployee(data))
    }, [])
  
    const PrikaziZaposlene = (broj)=>{
      return  <div>
          {employee.slice(0, broj).map(em => <Employee em={em} key={em} />)}
          </div>
    }
  
    return (
      <>
          <h1 className="naslov">Svi zaposleni:</h1>
        <div>
          {employee.slice(0, 20).map(em => <Employee em={em} key={em} />)}
          <div>
              <hr></hr>
              <button onClick={()=> PrikaziZaposlene(5)}>SLEDECI ZAPOSLENI</button></div>
        </div>
      </>
    )
  }

  export default EmployeeList