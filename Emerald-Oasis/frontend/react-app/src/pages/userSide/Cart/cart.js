import axios from "axios"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import { URL } from "../../../config"
import './cart.css'
import UserHeader from "../../../components/UserHeader/userHeader"
import CartItem from '../../../components/Cart/cartComp'



const Cart = () => {
    const { userId } = sessionStorage
    const [fooditems, setFoodItems] = useState([])
    const [cart, setCart] = useState('')
    const [employee, setEmployee] = useState('')
    const [address, setAddress] = useState('')

    
    useEffect(() => {
        getCart()
        getOrder()
        getEmployeeDetails()
    }, [])

    

    const getEmployeeDetails = () => {
        const url = `${URL}/user/order/getemployee/${userId}`
        
        axios.get(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setEmployee(result.data)
                // console.log(employee)
            } else {
                console.log(result.error)
            }
        })
    }

    const placeOrder = () => {
        const url = `${URL}/user/order/placeorder/${userId}`

        axios.put(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setCart(result.data)
                // console.log(cart)
            } else {
                // console.log(result.error)
                toast.error(result['error'])
            }
            // console.log(cart)
        })
    }

    const getOrder = () => {
        const url = `${URL}/user/order/cart/${userId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setCart(result.data)
                // console.log(cart)
            } else {
                // console.log(result.error)
                toast.error(result['error'])
            }
            // console.log(cart)
        })
    }


    const getCart = () => {
        // console.log(userId)

        const url = `${URL}/user/cart/${userId}`

        axios.get(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                setFoodItems(result.data)
                // console.log(fooditems)
            } else {
                // console.log(result.error)
            }
        })
    }

    const addAddress = () => {
        if (address.length == 0) {
            toast.warning('Address cannot be empty')
        }
        else {
            const body = {
                addressLine : address
            }
            const url = `${URL}/user/profile/address/${userId}`

            axios.put(url, body).then((response) => {
                const result = response.data

                // console.log(result)

                if (result['status'] === 'success') {
                    toast.success('Address added')
                    setCart(result.data)
                }
            })
        }
        
    }

    return (
        <div className="container">
            <UserHeader></UserHeader>
            <div className="row cartposition">
                <div className="col">
                    <div className="row">
                        <div className="col tablehead">
                            <h3>Photo</h3>
                        </div>
                        <div className="col">
                            <h3>Item Name</h3>
                        </div>
                        <div className="col">
                            <h3>Price</h3>
                        </div>
                        <div className="col">
                            <h3>Action</h3>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="col">
                    <h2>Cart details</h2>
                    <hr />
                </div>
            </div>
            {cart.orderStatus != 'CONFIRMED' && cart.orderStatus != 'REPORTED' &&
            <div className="row">
                <div className="col">
                    {fooditems.map((fooditem) => {
                        return <CartItem fooditem={fooditem} />
                    })}
                </div>
                {cart && <div className="col">
                        <div className="row">
                            <div className="col"><h5>Total amount : </h5>Rs. {cart.totalAmount}</div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col"><h5>Delivery Address : </h5>{cart.address}</div>
                        </div>
                        {!cart.address && 
                        <div>
                            <div className="row">
                            <div className="mb-3">
                                                <input
                                                    onChange={(e) => {
                                                        setAddress(e.target.value)
                                                    }}
                                                    type="text" class="form-control" />
                                            </div>
                            </div>
                            <div className="col">
                                    <button onClick={addAddress} className="btn btn-primary">Add address</button>
                            </div>
                        </div>}
                        <br /> 
                        <div className="row">
                            <div className="col"><h5>Order Status : </h5>{cart.orderStatus}</div>
                        </div>
                        <br />
                        <br />
                        {cart.orderStatus == 'CART' &&
                            <div className="col">
                                <button onClick={placeOrder} className="btn btn-success">Place order</button>
                            </div>
                        }
                        {cart.orderStatus == 'PLACED' &&
                            <div className="col">
                                Order placed successfully. Waiting for a delivery person to be assigned.
                            </div>
                        }
                        {employee && cart.orderStatus == 'ONTHEWAY' &&
                            <div className="col">
                                <div className="row"><h4>Order on the way...</h4></div>
                                <hr />
                                <div className="row"><div className="col">{employee.firstName} is your valet today.</div></div>
                                <div className="row"><div className="col">Contact details :-</div></div>
                                <div className="row"><div className="col">Mobile no. : {employee.phoneNo}</div></div>
                                <div className="row"><div className="col">Email id : {employee.email}</div></div>
                                
                            </div>
                        }
                </div>}

            </div>}
        </div>
    )
}

export default Cart