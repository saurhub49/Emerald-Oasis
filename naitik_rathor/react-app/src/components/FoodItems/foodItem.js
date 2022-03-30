import { useLocation } from "react-router"
import './foodItem.css'
const FoodItem = (props) => {
    const { foodItem } = props

    // console.log(foodItem.name)

    return (
        <div className="food-tab">
            {foodItem.name}
            {foodItem.price}
        </div>
    )


    // return <div className="row">
    //     <div className="col-4 food-tab">
    //         <center className="food-image">
    //             <img src={foodItem.image}></img>
    //         </center>
    //     </div>
    // </div>
}

export default FoodItem