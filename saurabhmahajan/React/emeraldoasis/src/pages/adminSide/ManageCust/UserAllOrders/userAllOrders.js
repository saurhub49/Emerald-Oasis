import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { toast } from "react-toastify"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { URL } from "../../../../config"
import '../Customers/customers.css'
import { formatDate } from "../../../../utils"

const UserAllOrders = () => {
    const { state } = useLocation()
    const [userOrders, setUserOrders] = useState([])
    const { userId } = state
    const navigate = useNavigate()


    const getUserAllOrders = () => {
    // /user/order/history/{userId}
        const url = `${URL}/user/order/history/${userId}`
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setUserOrders(result['data'])
            } else {
                toast.error(result['error'])
            }
        })
        }



        useEffect(() => {
            getUserAllOrders()
        }, [])
        
    

    return(
        <div className="container">
        <AdminHeader></AdminHeader>
        <div className="main-div">
            <label className="cust-details">All Orders</label>
            <table class="table">
                <thead class="table-dark">
                    <tr>
                        <td>Order Id</td>
                        <td>Ordered On</td>
                        <td>Delivered On</td>
                        <td>Total Amount</td>
                        <td>Order Status</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        userOrders.map((userOrder) => {
                            return (
                                <tr onClick={() => {
                                    // console.log("onclick")
                                    navigate('/userOrderDetails', { state: { custId : userOrder.userId, orderId : userOrder.orderId}})
                                }}>
            
                                    <td>{userOrder.orderId}</td>
                                    <td>{formatDate(userOrder.orderedTimeStamp)}</td>
                                    <td>{formatDate(userOrder.deliveredTimeStamp)}</td>
                                    <td>{userOrder.totalAmount}</td>
                                    <td>{userOrder.orderStatus}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
    )
}
export default UserAllOrders