import axios from "axios"
import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router"
import { toast } from "react-toastify"
import { URL } from "../../../../config"
import AdminHeader from "../../../../components/AdminHeader/adminHeader"
import { formatDate } from "../../../../utils"



const OrderDetails = () => {
    const { state } = useLocation()
    
    const [orderDetailsByOrderId, setOrderDetailsByOrderId] = useState([])
    const navigate = useNavigate()

    const { id } = state
    

    const getOrderDetailsByOrderId = () => {
        // /user/order/history/{userId}
            const url = `${URL}/admin/order/${id}`
            axios.get(url).then((response) => {
                const result = response.data
                if (result['status'] == 'success') {
                    setOrderDetailsByOrderId(result['data'])
                    console.log(result)
                } else {
                    toast.error(result['error'])
                }
            })
            }

    const deleteOrder = () => {
        const url2 = `${URL}/admin/deleteorder/${id}`

        axios.delete(url2).then((response) => {
            const result = response.data
            if(result['status'] == 'success') {
                toast.success('Order deleted successfully')
            } else {
                toast.error(result['error'])
            }
            navigate('/allOrders')
        })
    }

            useEffect(() => {
                getOrderDetailsByOrderId()
            }, [])

                
            
    
  
    return(
        <div className="container">
            <AdminHeader></AdminHeader>
            <div className="main-div">
            <label className="cust-details">Order Details</label>

                <form>
                    <div className="row">
                        <div className="form-group col-md-5">
                            <label for="inputOrderId">Order Id</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputOrderId"
                                value={orderDetailsByOrderId.orderId}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>

                        <div className="form-group col-md-5">
                            <label for="inputUserId">Customer Id</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputUserId"
                                value={orderDetailsByOrderId.userId}
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
                                value={formatDate(orderDetailsByOrderId.orderedTimeStamp)}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputDeliveredOn">Delivered On</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputDeliveredOn"
                                value={formatDate(orderDetailsByOrderId.deliveredTimeStamp)}
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
                                value={orderDetailsByOrderId.totalAmount}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                        <div className="form-group col-md-5">
                            <label for="inputStatus"> Order Status</label>
                            <input
                                class="form-control"
                                type="text"
                                id="inputStatus"
                                value={orderDetailsByOrderId.orderStatus}
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
                                value={orderDetailsByOrderId.address}
                                aria-label="Disabled input example" disabled readOnly
                            />
                        </div>
                    </div>
                    <br />
                    <button class="btn btn-danger" type="button" id="button-addon2" onClick={deleteOrder}>Delete Order</button>
                </form>
            </div>
        </div>
    )
}
export default OrderDetails