import axios from 'axios'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import { URL } from '../../config'
import './cartComp.css'



const CartItem = (props) => {
    const { userId } = sessionStorage
    const { fooditem } = props

    const navigate = useNavigate()

    const removeItem = (id) => {
        const url = `${URL}/user/${userId}/order/deleteitem/${id}`
        axios.delete(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                toast.success("Item removed from cart")
                window.location.reload(false)
            } else {
                toast.error(result['error'])
                window.location.reload(false)
                navigate('/foodItems')
            }
        })
    }

    return (
        <div>
            <div className='row'>
                <div className='col'>
                    <img className='cartimage' src={fooditem.image}></img>
                </div>
                <div className='col itemname'>
                    {fooditem.name}
                </div>
                <div className='col itemprice'>
                    {fooditem.price}
                </div>
                <div className='col'>
                    <button onClick={() => {
                    removeItem(fooditem.foodItemId)
                  }} className='btn btn-danger'>Remove</button>
                </div>
            </div>
            <hr/>
        </div>
    )
}

export default CartItem