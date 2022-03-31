
import '../../components/PlacedOrders/placedOrders.css'
import { URL } from '../../config'
import {formatDate} from '../../utils'

const PlacedOrder = (props) => {
    const { userId } = sessionStorage
    const { order } = props

    const acceptOrder = (id) => {
        console.log(id)
        console.log(userId)
        const url = `${URL}/employee/${userId}/acceptorder/${id}`
    } 


    return(
        <div>
            <div className='row'>
                <div className='col'>
                    <h6>Ordered timestamp :-</h6>{formatDate(order.orderedTimeStamp)} <br /><br />
                    <h6>Delivery Address :-</h6>{order.address} <br /><br />
                    <h6>Order total :-</h6>Rs. {order.totalAmount}
                </div>
                <div className='col'>
                    <br />
                    <br />
                    <br />
                    <button onClick={() => {
                    acceptOrder(order.orderId)
                  }} className='btn btn-success'>Accept Order</button>
                </div>
                <div className='col'></div>
            </div>

            <hr />
        </div>
    )
}

export default PlacedOrder