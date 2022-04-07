import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { URL } from "../../../../config"
import './customers.css'

const Customers = () => {
    const [customers, setCustomers] = useState([])

    const navigate = useNavigate()

    const getCustomers = () => {

        const url = `${URL}/admin/customers`

        axios.get(url).then((response) => {
            const result = response.data
            // console.log(result.data)
            if (result.status === 'success') {
                setCustomers(result.data)
            } else {
                console.log(result.error)
                toast.error(result['error'])
            }
        })
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return <div className="container">
        <AdminHeader></AdminHeader>
        <div className="main-div">
            <label className="emp-details">Customers Detail</label>
            {customers.length < 1 &&
                <div className="text-center fs-3 fw-light">There is no Customer to show</div>
            }
            {customers.length > 0 &&
                <table class="table">
                    <thead class="table-dark">
                        <tr>
                            <td>Customer Id</td>
                            <td>Customer Name</td>
                            <td>Gender</td>
                            <td>Phone No</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            customers.map((customer) => {
                                return (
                                    <tr onClick={() => {
                                        navigate('/custDetails', { state: { custId: customer.userId } })
                                    }}>
                                        <td>{customer.userId}</td>
                                        <td>{customer.firstName}</td>
                                        <td>{customer.gender}</td>
                                        <td>{customer.phoneNo}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            }
        </div>
    </div>
}

export default Customers