import axios from "axios"
import { useEffect, useState } from "react"
import {useNavigate } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import UserName from "../../../../components/UserName/userName"
import { URL } from "../../../../config"
import { formatDate } from "../../../../utils"

const AllOrders = () => {
    const [orders, setOrders] = useState([])
    const navigate = useNavigate()

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
                        <td>Employee Name</td>
                        <td>Ordered On</td>
                        <td>Delivered On</td>
                        <td>Total Amount</td>
                        <td>Order Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order) => {
                            return (
                                <tr onClick={() => {
                                    // console.log("onclick")
                                    navigate('/userOrderDetails', { state: { custId: order.userId, orderId: order.orderId } })
                                }}>
                                    <td>{order.orderId}</td>
                                    <td><UserName order={order} role={1}></UserName></td>
                                    <td><UserName order={order} role={0}></UserName></td>
                                    <td>{formatDate(order.orderedTimeStamp)}</td>
                                    <td>{formatDate(order.deliveredTimeStamp)}</td>
                                    <td>{order.totalAmount}</td>
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