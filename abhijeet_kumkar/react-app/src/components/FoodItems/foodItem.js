import axios from 'axios'
import { toast } from 'react-toastify'
import { URL } from '../../config'
import './foodItem.css'
const FoodItem = (props) => {
    const { foodItem } = props
    const { userId } = sessionStorage

    const addItem = (id) => {
        const url = `${URL}/user/${userId}/order/additem/${id}`
        axios.put(url).then((response) => {
            const result = response.data
            if (result.status === 'success') {
                toast.success("Item added to cart")
            } else {
                toast.error(result['error'])
            }
        })
    }

    // let count = 0
    // const addItem = () => {
    //     count = count + 1
    //     toast.success("Added To Cart")
    //     sessionStorage['count'] = count
    //     // window.location.reload(false);
    // }

    // console.log(foodItem.name)

    return (
        <div className="food-tab">
            <div className="food-cont">
                <div className="">
                    <img className="image" src={foodItem.image}></img>
                </div>
                <div className="txt-cont">
                    <div className="row">
                        <span className="col title">{foodItem.name}</span>
                        <span className="col price">Price: ${foodItem.price}</span>
                    </div>

                    <div className="desc">
                        {foodItem.description}
                    </div>
                </div>
            </div>
            <button className="add-cart" onClick={() => {
                addItem(foodItem.foodItemId)
            }}
            >Add to Cart</button>
        </div>
    )
}

export default FoodItem