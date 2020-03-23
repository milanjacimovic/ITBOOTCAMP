import React, {useState, useEffect} from 'react';
import './App.css';
import { getAllEmployees, addNewEmployee } from './Services/Zaposleni';
import EmployeeList from './Components/Employees';
// import { NewEmployee } from './Components/NewEmployee';
import Select from './Components/Select';


function App() {
  const [employee, setEmployee]=useState ('')
  const [employeeName, setEmployeeName]=useState ('')
  const [employeeSalary, setEmployeeSalary]=useState ('')
  const [employeeAge, setEmployeeAge]=useState ('')

  useEffect(() => {
    getAllEmployees().then(data => setEmployee(data))
  }, [])

  
  const handleEmployeeName = (e) => {
    setEmployeeName(e.target.value)
  }
  
  const handleEmployeeSalary = (e) => {
    setEmployeeSalary(e.target.value)
  }
  
  const handleEmployeeAge = (e) => {
    setEmployeeAge(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if (employeeName === '' || employeeSalary === '' || employeeAge === '') {
      alert("Morate popuniti sva polja")
    } else {
      addNewEmployee(employeeName,employeeSalary,employeeAge).then(response => console.log(response))
    }
  }



  
  return (
    <div>
      <h3>Dodaj novog zaposlenog:</h3>
       <form onSubmit={e => (handleSubmit(e))}>
              <input type='text' placeholder='Unesite ime' onChange={e => (handleEmployeeName(e)) }></input>
              <input type='number' placeholder='Unesite platu' onChange={e => (handleEmployeeSalary(e))}></input>
              <input type='number' placeholder='Unesite godine' onChange={e => (handleEmployeeAge(e))}></input>
              <input type='submit' value='Add'></input>
            </form>
      {/* <NewEmployee set={setEmployee}></NewEmployee> */}
      <Select></Select>
      <EmployeeList></EmployeeList>

    </div>
  )
}

export default App;
