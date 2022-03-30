import { toast } from 'react-toastify'
import './foodItem.css'
const FoodItem = (props) => {
    const { foodItem } = props

    let count = 0
    const addItem = () => {
        count = count + 1
        toast.success("Added To Cart")
        sessionStorage['count'] = count
        // window.location.reload(false);
    }

    // console.log(foodItem.name)

    return (
        <div className="food-tab">
            <div className="food-cont">
                <div className="">
                    <img className="image" src={foodItem.image}></img>
                </div>
                <div className="txt-cont">
                    <div class="row">
                        <span className="col title">{foodItem.name}</span>
                        <span className="col price">Price: ${foodItem.price}</span>
                    </div>

                    <div className="desc">
                        {foodItem.description}
                    </div>
                </div>
            </div>
            <button className="add-cart" onClick={addItem}>Add to Cart</button>
        </div>
    )
}

export default FoodItem