import axios from "axios"
import { useEffect, useState } from "react"
import Header1 from "../../../components/Header1/header1"
import PlacedOrder from "../../../components/PlacedOrders/placedOrders"
import { URL } from "../../../config"
import '../../employeeSide/HomePage/EmployeeHome.css'


const EmployeeHome = () => {

    const { userId } = sessionStorage
    const [orders, setOrders] = useState([])
    const [order, setOrder] = useState()

    useEffect(() => {
        getPlacedOrders()
    }, [])

    const getAcceptedOrder = () => {
        const url = `${URL}/employee/acceptedorder/${userId}`

        axios.get(url).then((response) => {
            const result = response.data
            if(result.status === 'success') {
                setOrder(result.data)
                console.log(result.data)
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

    return(
        <div className="container">
            <Header1></Header1>
            {!order && <div className="row orders">
                <h1>Placed Orders</h1>
                <hr />
                <div className="col">
                    {orders.map((order) => {
                        return <PlacedOrder order={order} ></PlacedOrder>
                    })}
                </div>
            </div>}

            
        </div>
    )
}

export default EmployeeHome