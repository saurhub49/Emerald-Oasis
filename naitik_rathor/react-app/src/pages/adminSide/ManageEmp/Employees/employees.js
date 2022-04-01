import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { URL } from "../../../../config"
import './employees.css'

const Employees = () => {
    const [employees, setEmployees] = useState([])
    const navigate = useNavigate()

    const getEmployees = () => {

        const url = `${URL}/admin/employees`

        axios.get(url).then((response) => {
            const result = response.data
            // console.log(result.data)
            if (result.status === 'success') {
                setEmployees(result.data)
            } else {
                console.log(result.error)
                toast.error(result['error'])
            }
        })
    }

    useEffect(() => {
        getEmployees()
    }, [])

    return <div className="container">
        <AdminHeader></AdminHeader>
        <div className="main-div">
            <label className="emp-details">Employees Detail</label>
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <td>Employee Id</td>
                        <td>Employee Name</td>
                        <td>Gender</td>
                        <td>Email</td>
                        <td>Phone No</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        employees.map((employee) => {
                            return (
                                <tr onClick={() => {
                                    navigate('/empDetails', { state: { id: employee.userId } })
                                }}>
                                    <td>{employee.userId}</td>
                                    <td>{employee.firstName}</td>
                                    <td>{employee.gender}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.phoneNo}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
}

export default Employees