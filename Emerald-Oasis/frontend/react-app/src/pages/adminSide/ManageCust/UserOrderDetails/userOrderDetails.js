import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { toast } from "react-toastify"
import { URL } from "../../../../config"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { formatDate } from "../../../../utils"



const UserOrderDetails = () => {
    const { state } = useLocation()

    const [orderDetails, setOrderDetails] = useState([])
    const navigate = useNavigate()

    const { orderId } = state


    const getOrderDetailsByUserId = () => {
        // /user/order/history/{userId}
        const url = `${URL}/admin/order/${orderId}`
        axios.get(url).then((response) => {
            const result = response.data
            if (result['status'] == 'success') {
                setOrderDetails(result['data'])
                console.log(result)
            } else {
                toast.error(result['error'])
            }
        })
    }

    const deleteOrder = () => {
        if (window.confirm("This Customer Order will be Deleted\nAre You Sure?")) {
            const url2 = `${URL}/admin/deleteorder/${orderId}`

            axios.delete(url2).then((response) => {
                const result = response.data
                if (result['status'] == 'success') {
                    toast.success('Order deleted successfully')
                } else {
                    toast.error(result['error'])
                }
                navigate('/customers')
            })
        }
    }

    useEffect(() => {
        getOrderDetailsByUserId()
    }, [])





    return (
        <div className="container">
            <AdminHeader></AdminHeader>
            <div className="main-div">
                <label className="emp-details">Order Details</label>

                <form>
                    <div className="row">
                        <div className="form-group col-md-10">
                            <label for="inputOrderId">Order Id</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputOrderId"
                                value={orderDetails.orderId}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputOrderedOn">Ordered On</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputOrderedOn"
                                value={formatDate(orderDetails.orderedTimeStamp)}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputDeliveredOn">Delivered On</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputDeliveredOn"
                                value={formatDate(orderDetails.deliveredTimeStamp)}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputTotalAmount">Total Amount</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputTotalAmount"
                                value={orderDetails.totalAmount}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputStatus"> Order Status</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputStatus"
                                value={orderDetails.orderStatus}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputAddress">Address</label>
                            <input
                                class="form-control"
                                type="textarea"
                                id="inputAddress"
                                value={orderDetails.address}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                    </div>
                    <br />
                    <br />
                    <button class="btn btn-danger" type="button" id="button-addon2" onClick={deleteOrder}>Delete Order</button>
                </form>
            </div>
        </div>
    )
}
export default UserOrderDetails