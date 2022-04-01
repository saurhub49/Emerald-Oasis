import axios from "axios"
import { useEffect, useState } from "react"
import Header1 from "../../../components/Header1/header1"
import PlacedOrder from "../../../components/PlacedOrders/placedOrders"
import { URL } from "../../../config"
import '../../employeeSide/HomePage/EmployeeHome.css'
import { formatDate } from "../../../utils"
import { toast } from "react-toastify"


const EmployeeHome = () => {

    const { userId } = sessionStorage
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState()
    const [customer, setCustomer] = useState()

    useEffect(() => {
        getPlacedOrders()
        getAcceptedOrder()
    }, [])

    const getAcceptedOrder = () => {
        const url = `${URL}/employee/acceptedorder/${userId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setOrder(result.data)
                console.log(result.data)
                axios.get(`${URL}/employee/customer/${userId}`).then((res) => {
                    const resu = res.data
                    if(resu.status === 'success') {
                        setCustomer(resu.data)
                        console.log(resu.data)
                    }
                })
            }
        })

        
    }

    const getPlacedOrders = () => {
        const url = `${URL}/employee/getorders`

        axios.get(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setOrders(result.data)
                console.log(result.data)
            } else {
                console.log(result.error)
            }
        })
    }

    const confirmOrder = (id) => {
        console.log(id)
        const url = `${URL}/employee/confirmdelivery/${id}`
        axios.put(url).then((response) => {
            const result = response.data
            if(result.status == 'success') {
                toast.success("Order delivered")
                window.location.reload(false)
            } else {
                toast.error(result.error)
            }
        })
    }

    const reportOrder = (id) => {
        console.log(id)
        const url = `${URL}/employee/reportorder/${id}`
        axios.put(url).then((response) => {
            const result = response.data
            if(result.status == 'success') {
                toast.success("Order reported")
                window.location.reload(false)
            } else {
                toast.error(result.error)
            }
        })
    }

    return (
        <div className="container">
            <Header1></Header1>
            {!order && <div className="row orders">
                <h1>Available Orders</h1>
                <hr />
                <div className="col">
                    {orders.map((order) => {
                        return <PlacedOrder order={order} ></PlacedOrder>
                    })}
                </div>
            </div>}
            {customer && order && order.orderStatus == 'ONTHEWAY' && 
            <div className="row orders">
                <h1>Accepted Order</h1>
                <hr />
                <div className="col">
                    <h6>Ordered timestamp :-</h6>{formatDate(order.orderedTimeStamp)} <br /><br />
                    <h6>Delivery Address :-</h6>{order.address} <br /><br />
                    <h6>Order total :-</h6>Rs. {order.totalAmount} <br /><br />
                    <button onClick={() => {
                        confirmOrder(order.orderId)
                    }} type="button" className="btn btn-success">Confirm</button> <br /> <br />
                    <button onClick={() => {
                        reportOrder(order.orderId)
                    }} type="button" className="btn btn-danger">Report</button>
                </div>
                <div className="col">
                    <h6>Customer name :-</h6>{customer.firstName} <br /> <br />
                    <h6>Customer phone :-</h6>{customer.phoneNo} <br /> <br />
                    <h6>Customer email :-</h6>{customer.email} 
                </div>
                <div className="col"></div>
            </div>}

            {orders.length == 0 && !order &&
            <div className="row orders">
                No orders available right now.
            </div>}


        </div>
    )
}

export default EmployeeHome