import axios from "axios"
import { useEffect, useState } from "react"
import { Navigate } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { URL } from "../../../../config"

const AllOrders = () => {
    const [orders, setOrders] = useState([])

    const getAllOrders = () => {
        const url = `${URL}/admin/getallorders`

        axios.get(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setOrders(result.data)
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
            <label className="emp-details">All Order Details</label>
            { orders.length < 1 &&
                <div className="text-center fs-3 fw-light">There is no Order to show</div>
            }
            { orders.length > 0 &&
                <table class="table">
                <thead class="table-dark">
                    <tr>
                        <td>Order Id</td>
                        <td>Customer Name</td>
                        <td>Ordered On</td>
                        <td>Delivery Person</td>
                        <td>Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => {
                            return (
                                <tr onClick={() => {
                                    Navigate('/orderDetails', { state: { id: order.orderId } })
                                }}>
                                    <td>{order.orderId}</td>
                                    <td>Aman</td>
                                    <td>{order.orderedTimeStamp}</td>
                                    <td>{order.deliveredTimeStamp}</td>
                                    <td>{order.orderStatus}</td>
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

export default AllOrders