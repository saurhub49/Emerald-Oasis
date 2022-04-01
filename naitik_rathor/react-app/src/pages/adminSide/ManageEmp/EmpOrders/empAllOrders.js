import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { URL } from "../../../../config"

const EmpAllOrders = () => {
    const [allOrders, setAllorders] = useState([])
    const { state } = useLocation()

    const { empId, empName } = state
    const getAllOrders = () => {
        const url = `${URL}/employee/order/history/${empId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setAllorders(result.data)
                console.log(result.data)
            } else {
                console.log(result.error)
                toast.error(result['error'])
            }
        })
    }

    useEffect(() => {
        getAllOrders()
    }, [])

    return <div className="container">
        <AdminHeader></AdminHeader>
        <div className="main-div">
        <label className="emp-details">Orders of {empName}</label>
            {allOrders.length < 1 &&
                <div className="text-center fs-3 fw-light">There is no Order for {empName}</div>
            }
            {allOrders.length > 0 &&
                <table class="table">
                    <thead class="table-success">
                        <tr>
                            <td>Order Id</td>
                            <td>Ordered On</td>
                            <td>Delivered On</td>
                            <td>Amount</td>
                            <td>Address</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOrders.map((allOrder) => {
                                return (
                                    <tr>
                                        <td>{allOrder.orderId}</td>
                                        <td>{allOrder.orderedTimeStamp}</td>
                                        <td>{allOrder.deliveredTimeStamp}</td>
                                        <td>{allOrder.totalAmount}</td>
                                        <td>{allOrder.address}</td>
                                        <td>{allOrder.orderStatus}</td>
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

export default EmpAllOrders