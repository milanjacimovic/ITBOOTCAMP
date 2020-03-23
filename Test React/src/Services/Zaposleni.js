import axios from 'axios'

const getAllEmployees = async () => {
    return await axios.get('http://dummy.restapiexample.com/api/v1/employees').then(response => response.data.data )
}

const addNewEmployee = async (name, salary, age) => {
    return await axios.post('http://dummy.restapiexample.com/api/v1/create', {name:name, salary:salary, age:age})
}
export {getAllEmployees, addNewEmployee}





